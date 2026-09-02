(function () {
  const data = window.leagueData;
  const aliases = window.driverAliases || {};
  const races = [...data.races].sort((a, b) => a.round - b.round);
  const columns = races.flatMap((race) => (race.events || []).map((event) => ({ race, event, key: `${race.round}-${event.type}` })));
  const allDrivers = new Map();

  (data.drivers || []).forEach((driver) => {
    const name = canonicalName(driver.driver);
    allDrivers.set(name, { driver: name, team: driver.team, results: [] });
  });

  columns.forEach((column) => {
    column.event.results.forEach((result) => {
      const name = canonicalName(result.driver);
      if (!allDrivers.has(name)) allDrivers.set(name, { driver: name, team: result.team || "", results: [] });
      const driver = allDrivers.get(name);
      driver.team = result.team || driver.team;
      driver.results.push({ ...result, points: numericPoints(result.points), position: inferPosition(result, column.event.type), race: column.race, type: column.event.type, key: column.key });
    });
  });

  const drivers = [...allDrivers.values()].map((driver) => {
    const points = driver.results.reduce((sum, result) => sum + result.points, 0);
    const finishes = driver.results.filter((result) => result.status === "finished" && result.position);
    const raceFinishes = finishes.filter((result) => result.type === "R");
    const wins = raceFinishes.filter((result) => result.position === 1).length;
    const podiums = raceFinishes.filter((result) => result.position <= 3).length;
    const bestFinish = raceFinishes.length ? Math.min(...raceFinishes.map((result) => result.position)) : null;
    const averageFinish = raceFinishes.length ? raceFinishes.reduce((sum, result) => sum + result.position, 0) / raceFinishes.length : null;
    return { ...driver, points, wins, podiums, dnfs: driver.results.filter((result) => result.status === "DNF").length, starts: raceFinishes.length, bestFinish, averageFinish };
  }).sort((a, b) => b.points - a.points || b.wins - a.wins || (a.bestFinish || 99) - (b.bestFinish || 99) || a.driver.localeCompare(b.driver));

  const rankByDriver = new Map(drivers.map((driver, index) => [driver.driver, index + 1]));
  const head = document.querySelector("#standings-head");
  const body = document.querySelector("#standings-body");
  const modal = document.querySelector("#driver-modal");

  head.innerHTML = `<tr>
    <th scope="col" rowspan="2">Pos</th><th scope="col" rowspan="2" class="driver-head">Driver</th><th scope="col" rowspan="2" class="points-head">Points</th><th class="standings-spacer" rowspan="2" aria-hidden="true"></th>
    ${races.map((race) => `<th scope="col" colspan="${race.events.length}" class="race-group" title="${escapeHtml(race.name)} · ${escapeHtml(race.circuit)}"><img class="flag" src="assets/flags/${race.country}.svg" alt="${escapeHtml(race.countryName)}" /></th>`).join("")}
  </tr><tr>${columns.map((column) => `<th scope="col" class="event-head" title="${escapeHtml(column.race.name)} ${column.event.type}">${column.event.type}</th>`).join("")}</tr>`;

  body.innerHTML = drivers.map((driver) => `<tr>
    <td class="rank">${rankByDriver.get(driver.driver)}</td>
    <td class="driver-cell"><button class="driver-button" type="button" data-driver="${escapeHtml(driver.driver)}"><span class="driver-name">${escapeHtml(driver.driver)}</span><span class="driver-team">${escapeHtml(driver.team)}</span></button></td>
    <td class="points">${driver.points}</td><td class="standings-spacer" aria-hidden="true"></td>
    ${columns.map((column) => renderResultCell(driver, column)).join("")}
  </tr>`).join("");

  document.querySelector("#leader-name").textContent = drivers[0]?.driver || "—";
  document.querySelector("#leader-points").textContent = drivers[0] ? `${drivers[0].points} points` : "— points";
  document.querySelector("#round-count").textContent = races.length;
  document.querySelector("#driver-count").textContent = drivers.length;
  document.querySelector("#updated-note").textContent = data.lastUpdated ? `Last updated · ${data.lastUpdated}` : "";

  document.querySelectorAll("[data-driver]").forEach((button) => button.addEventListener("click", () => openModal(button.dataset.driver)));
  document.querySelector("#modal-close").addEventListener("click", closeModal);
  modal.addEventListener("click", (event) => { if (event.target === modal) closeModal(); });
  document.addEventListener("keydown", (event) => { if (event.key === "Escape" && !modal.hidden) closeModal(); });

  function numericPoints(value) {
    const points = Number(value);
    return Number.isFinite(points) ? points : 0;
  }

  function canonicalName(name) {
    return aliases[name] || name;
  }

  function inferPosition(result, type) {
    if (result.status && result.status !== "finished") return null;
    if (Number.isInteger(result.position)) return result.position;
    const place = (data.scoring[type] || []).indexOf(numericPoints(result.points));
    return place >= 0 ? place + 1 : null;
  }

  function findResult(driver, column) {
    return driver.results.find((result) => result.key === column.key);
  }

  function renderResultCell(driver, column) {
    const result = findResult(driver, column);
    if (!result) return `<td class="race-cell status" title="Did not start">DNS</td>`;
    if (result.status !== "finished") return `<td class="race-cell status" title="Did not finish">${result.status}</td>`;
    const medal = result.position && result.position <= 3 ? ["gold", "silver", "bronze"][result.position - 1] : "";
    const label = result.position ? result.position : "—";
    return `<td class="race-cell ${medal}" title="${escapeHtml(column.race.name)} ${column.event.type}: P${label}">${label}</td>`;
  }

  function openModal(name) {
    const driver = allDrivers.get(name);
    if (!driver) return;
    const computed = drivers.find((item) => item.driver === name);
    document.querySelector("#modal-driver-name").textContent = driver.driver;
    document.querySelector("#modal-driver-team").textContent = driver.team;
    document.querySelector("#modal-stats").innerHTML = [
      ["Points", computed.points], ["Wins", computed.wins], ["Podiums", computed.podiums], ["Best finish", computed.bestFinish ? `P${computed.bestFinish}` : "—"],
      ["Starts", computed.starts], ["DNFs", computed.dnfs], ["Avg race finish", computed.averageFinish ? computed.averageFinish.toFixed(1) : "—"], ["Championship", `P${rankByDriver.get(driver.driver)}`]
    ].map(([label, value]) => `<div class="driver-stat"><span class="driver-stat-label">${label}</span><strong class="driver-stat-value">${value}</strong></div>`).join("");
    document.querySelector("#modal-results").innerHTML = columns.map((column) => {
      const result = findResult(driver, column);
      const medal = result?.position && result.position <= 3 ? ["gold", "silver", "bronze"][result.position - 1] : "";
      const label = !result ? "DNS" : result.status !== "finished" ? result.status : result.position ? `P${result.position}` : "—";
      return `<span class="result-chip ${medal}"><img class="chip-flag" src="assets/flags/${column.race.country}.svg" alt="${escapeHtml(column.race.countryName)}" /><strong>R${column.race.round} ${column.event.type}</strong> ${label}</span>`;
    }).join("");
    drawChart(driver);
    modal.hidden = false;
    document.body.style.overflow = "hidden";
    document.querySelector("#modal-close").focus();
  }

  function closeModal() { modal.hidden = true; document.body.style.overflow = ""; }

  function drawChart(driver) {
    const raceColumns = columns;
    const width = 600, height = 178, pad = { top: 20, right: 24, bottom: 29, left: 30 };
    const raceResults = raceColumns.map((column) => ({ column, result: findResult(driver, column) })).filter((item) => item.result?.position);
    const maxPosition = Math.max(10, ...raceResults.map((item) => item.result.position));
    const xFor = (index) => pad.left + (raceColumns.length === 1 ? (width - pad.left - pad.right) / 2 : index * (width - pad.left - pad.right) / (raceColumns.length - 1));
    const yFor = (position) => pad.top + (position - 1) * (height - pad.top - pad.bottom) / (maxPosition - 1);
    const yTicks = [1, Math.ceil(maxPosition / 2), maxPosition].filter((value, index, array) => array.indexOf(value) === index);
    const grid = yTicks.map((value) => `<line x1="${pad.left}" x2="${width - pad.right}" y1="${yFor(value)}" y2="${yFor(value)}" stroke="#2b3544"/><text x="4" y="${yFor(value) + 4}" fill="#778196" font-size="10">P${value}</text>`).join("");
    const labels = raceColumns.map((column, index) => `<text x="${xFor(index)}" y="${height - 7}" text-anchor="middle" fill="#778196" font-size="10">${column.event.type}${column.race.round}</text>`).join("");
    const path = raceResults.map((item, index) => `${index ? "L" : "M"}${xFor(raceColumns.indexOf(item.column))},${yFor(item.result.position)}`).join(" ");
    const dots = raceResults.map((item) => `<circle cx="${xFor(raceColumns.indexOf(item.column))}" cy="${yFor(item.result.position)}" r="5" fill="#ef4b55" stroke="#171d28" stroke-width="3"><title>${escapeHtml(item.column.race.name)}: P${item.result.position}</title></circle>`).join("");
    document.querySelector("#position-chart").innerHTML = `<svg viewBox="0 0 ${width} ${height}" role="img" aria-label="${escapeHtml(driver.driver)} race finishing positions">${grid}${path ? `<path d="${path}" fill="none" stroke="#ef4b55" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"/>` : ""}${dots}${labels}</svg>`;
  }

  function escapeHtml(value) { return String(value).replace(/[&<>'"]/g, (character) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", "'": "&#39;", '"': "&quot;" }[character])); }
})();
