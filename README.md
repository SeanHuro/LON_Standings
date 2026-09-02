# LON Racing League standings

This is a static driver championship site for the LON Racing League's F1 2026 season. It runs without a database and can be deployed directly to Vercel.

## Updating after a race

1. Put the final classification screenshot in `race-results/inbox/`.
2. Ask Codex to read the screenshot and update `data/races.js`.
3. Confirm the race name, circuit country, driver names, finishing positions, points, and `DNF` or `DNS` status. Keep the championship roster in `data/races.js` up to date so a missing result can be shown as `DNS`.
4. Open `index.html` in a browser or deploy the change to check the table.

For the chat-first workflow, attach the screenshot directly and ask Codex to run `prompts/update-standings.md`. The prompt reads the attached image, applies the aliases in `data/driver-aliases.js`, updates the data, and runs the validator.

Race columns use local SVG flags from `assets/flags/`. Add a new flag file when a race is held in a country that is not already present, then set that race's `country` value to the filename without `.svg`.

Each round can contain an `SR` sprint event and an `R` race event. The app converts their points into finishing positions using the scoring tables at the top of `data/races.js`.

Future calendar events can be listed with `placeholder: true` and an empty `results` array. These cells display `—` until classifications are added; once a placeholder receives results, missing drivers follow the normal `DNS` behavior.
