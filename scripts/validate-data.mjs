import fs from "node:fs";
import path from "node:path";
import vm from "node:vm";

const root = process.cwd();
const context = { window: {} };
vm.createContext(context);
vm.runInContext(fs.readFileSync(path.join(root, "data/driver-aliases.js"), "utf8"), context);
vm.runInContext(fs.readFileSync(path.join(root, "data/races.js"), "utf8"), context);
const data = context.window.leagueData;
const aliases = context.window.driverAliases || {};
const canonicalName = (name) => aliases[name] || name;
const errors = [];
const roster = new Set((data.drivers || []).map((driver) => canonicalName(driver.driver)));
const rounds = new Set();

if (!data || !Array.isArray(data.races)) errors.push("data.races must be an array");
if (!data.scoring?.R?.length || !data.scoring?.SR?.length) errors.push("R and SR scoring tables are required");

for (const race of data.races || []) {
  if (rounds.has(race.round)) errors.push(`duplicate round ${race.round}`);
  rounds.add(race.round);
  if (!fs.existsSync(path.join(root, "assets", "flags", `${race.country}.svg`))) errors.push(`missing flag for ${race.country}`);
  const events = race.events || [];
  const eventTypes = new Set();
  for (const event of events) {
    if (!["R", "SR"].includes(event.type)) errors.push(`round ${race.round} has invalid event type ${event.type}`);
    if (eventTypes.has(event.type)) errors.push(`round ${race.round} repeats event ${event.type}`);
    eventTypes.add(event.type);
    const seenDrivers = new Set();
    for (const result of event.results || []) {
      const name = canonicalName(result.driver);
      if (seenDrivers.has(name)) errors.push(`round ${race.round} ${event.type} repeats ${name}`);
      seenDrivers.add(name);
      if (!roster.has(name)) errors.push(`${name} is not in the driver roster`);
      if (!["finished", "DNF", "DNS", "DSQ"].includes(result.status)) errors.push(`${name} has invalid status ${result.status}`);
      if (result.status === "finished" && !Number.isFinite(Number(result.points))) errors.push(`${name} has invalid points`);
    }
  }
}

if (errors.length) {
  console.error(errors.map((error) => `✗ ${error}`).join("\n"));
  process.exit(1);
}

console.log(`✓ standings data valid (${data.races.length} rounds, ${data.drivers.length} drivers)`);
