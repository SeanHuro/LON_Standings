# LON Racing League standings

## Project overview

This repository contains a static driver championship site for the LON Racing League's F1 2026 season. It uses plain HTML, CSS, and JavaScript. There is no database and no admin panel. Vercel serves the files as a static site.

The visible site is built from `data/races.js`. The page calculates championship points, positions, `DNF`, and `DNS` from that data. The driver-name map lives in `data/driver-aliases.js`.

## Updating from a screenshot in chat

When the user attaches a final-classification screenshot and invokes the standings update prompt:

1. Inspect the attached image directly. Do not require the user to save it in the repository.
2. Identify the next round, circuit, country, and session columns. A round may have `R`, `SR`, or both.
3. Read the values in the `R` and `SR` columns as points. Do not treat those values as finishing positions.
4. Infer a position from the scoring table in `data/races.js`. If a points value is not uniquely covered by the table, stop and ask the user instead of guessing.
5. Convert every screenshot driver name through `data/driver-aliases.js` before writing data. Use the mapped name in new results.
6. Preserve all earlier rounds. Never overwrite an existing round unless the user explicitly says it is a correction.
7. Add a result for every roster driver. A driver missing from an event is `DNS`. A driver shown as retired or not classified is `DNF`.
8. Use a local SVG flag from `assets/flags/`. Add a local flag asset when the country is new. Never use a remote image URL.
9. Run `node scripts/validate-data.mjs`, `node --check app.js`, and `node --check data/races.js` after editing.
10. Report the round, event types, name mappings used, any assumptions, and any values that still need confirmation.

## Data rules

- `R` is the normal race and `SR` is the sprint.
- The current example scoring is `R: [25, 18, 15, 12, 10, 8, 6, 4, 2, 0]` and `SR: [8, 7, 6, 5, 4, 3, 2, 1]`.
- `0` points maps to 10th place in a normal race because that is how the supplied league screenshot is scored. Check with the user before changing it.
- A missing result is `DNS`, not `DNF`.
- A result with `status: "DNF"` has no finishing position. A finished result gets its position from the points table unless the user supplies a confirmed position.
- Race columns are chronological. The top table header groups event columns under the race country flag.

## Style and safety

Keep the implementation simple and static. Do not introduce a database, framework, login flow, or external API for a standings update. Do not invent a circuit country, driver result, penalty, or point value. Ask one focused question when the screenshot is genuinely ambiguous.
