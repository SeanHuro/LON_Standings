# Update the LON Racing League standings

Use this prompt after attaching a final-classification screenshot to the chat.

Read `AGENTS.md` first. Then inspect the image attached to the current chat. The image is the source for one new race round. Do not wait for an image in `race-results/inbox/` and do not search the web for missing results.

Update `data/races.js` while keeping all previous rounds intact.

Follow this sequence:

1. Determine the next round number unless the user supplied a different one. If the
   calendar already contains a round with `placeholder: true` and an empty
   `results` array for the session shown, populate that placeholder rather than
   adding a duplicate round.
2. Identify the circuit, country, and race name. If the venue or country cannot be read or inferred safely, ask the user before editing.
3. Identify whether the image contains a normal race (`R`), sprint (`SR`), or both. Store each as a separate event under the round.
4. Treat the numbers in the `R` and `SR` columns as points. Use the scoring tables in `data/races.js` to infer finishing positions. Do not copy a screenshot's `POS.` value as the finishing position when the user has said the session values are points.
5. Read `data/driver-aliases.js` and convert every in-game driver name to the mapped display name. If a driver is not in the mapping, stop and ask for the preferred name before writing that result.
6. Add all roster drivers to each event. Use `DNS` for a roster driver missing from that event. Use `DNF` when the screenshot shows a retirement or did-not-finish result.
7. Add or select the local flag at `assets/flags/<country>.svg`. Do not use a remote flag URL.
8. Check whether the round and event type already exist. An event marked
   `placeholder: true` with no results is ready to be populated; otherwise ask
   whether this is a correction instead of silently replacing data.
9. Run:

   ```sh
   node scripts/validate-data.mjs
   node --check app.js
   node --check data/races.js
   ```

10. In your response, list the round and sessions added, the name mappings applied, the inferred positions, and any uncertainty that needs the user's confirmation.

Do not edit the visual layout unless the user separately asks for a design change.
