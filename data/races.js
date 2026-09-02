/*
 * This is the only file that needs changing after each race.
 * Add a round to `races`, then add an event for R or SR.
 * The screenshots provide points, so app.js infers finishing position from these tables.
 * Change the tables here if your league uses different scoring.
 */
window.leagueData = {
  season: "F1 2026",
  leagueName: "LON Racing League",
  lastUpdated: "Two race classifications loaded",
  scoring: {
    // This league's example uses zero points for 10th place.
    R: [25, 18, 15, 12, 10, 8, 6, 4, 2, 0],
    SR: [8, 7, 6, 5, 4, 3, 2, 1]
  },
  drivers: [
    { driver: "Senne.the.great", team: "Aston Martin Aramco" },
    { driver: "The_Acehole", team: "Alpine" },
    { driver: "great_elmo", team: "Audi Revolut F1 Team" },
    { driver: "toethem", team: "Oracle Red Bull Racing" },
    { driver: "sunlit-length67", team: "Cadillac Formula 1 Team" },
    { driver: "Glennos007", team: "Audi Revolut F1 Team" },
    { driver: "XIDrippyIX", team: "Visa Cash App Racing Bulls" },
    { driver: "seantrucura", team: "Aston Martin Aramco" },
    { driver: "Cagerman86", team: "Scuderia Ferrari HP" },
    { driver: "nikid1979", team: "Oracle Red Bull Racing" },
    { driver: "BrutusBonyap", team: "McLaren" },
    { driver: "I_Ieeman", team: "McLaren" }
  ],
  races: [
    {
      round: 1,
      name: "Australian Grand Prix",
      circuit: "Albert Park Circuit",
      country: "au",
      countryName: "Australia",
      events: [
        {
          type: "R",
          results: [
            { driver: "Senne.the.great", team: "Aston Martin Aramco", grid: 1, points: 25, status: "finished" },
            { driver: "The_Acehole", team: "Alpine", grid: 2, points: 18, status: "finished" },
            { driver: "great_elmo", team: "Audi Revolut F1 Team", grid: 11, points: 15, status: "finished" },
            { driver: "toethem", team: "Oracle Red Bull Racing", grid: 7, points: 12, status: "finished" },
            { driver: "sunlit-length67", team: "Cadillac Formula 1 Team", grid: 10, points: 10, status: "finished" },
            { driver: "Glennos007", team: "Audi Revolut F1 Team", grid: 9, points: 8, status: "finished" },
            { driver: "XIDrippyIX", team: "Visa Cash App Racing Bulls", grid: 6, points: 6, status: "finished" },
            { driver: "seantrucura", team: "Aston Martin Aramco", grid: 5, points: 4, status: "finished" },
            { driver: "Cagerman86", team: "Scuderia Ferrari HP", grid: 8, points: 2, status: "finished" },
            { driver: "nikid1979", team: "Oracle Red Bull Racing", grid: 3, points: 0, status: "finished" },
            { driver: "BrutusBonyap", team: "McLaren", grid: 4, points: 0, status: "DNF" }
          ]
        }
      ]
    },
    {
      round: 2,
      name: "Chinese Grand Prix",
      circuit: "Shanghai International Circuit",
      country: "cn",
      countryName: "China",
      events: [
        {
          type: "SR",
          results: [
            { driver: "nikid1979", points: 8, status: "finished" },
            { driver: "Senne.the.great", points: 5, status: "finished" },
            { driver: "The_Acehole", points: 6, status: "finished" },
            { driver: "XIDrippyIX", points: 1, status: "finished" },
            { driver: "toethem", points: 4, status: "finished" },
            { driver: "sunlit-length67", points: 3, status: "finished" },
            { driver: "I_Ieeman", points: 7, status: "finished" },
            { driver: "Glennos007", points: 2, status: "finished" }
          ]
        },
        {
          type: "R",
          results: [
            { driver: "nikid1979", points: 25, status: "finished" },
            { driver: "Senne.the.great", points: 18, status: "finished" },
            { driver: "The_Acehole", points: 12, status: "finished" },
            { driver: "XIDrippyIX", points: 15, status: "finished" },
            { driver: "toethem", points: 10, status: "finished" },
            { driver: "sunlit-length67", points: 8, status: "finished" },
            { driver: "I_Ieeman", points: 2, status: "finished" },
            { driver: "Glennos007", points: 4, status: "finished" },
            { driver: "Cagerman86", points: 6, status: "finished" }
          ]
        }
      ]
    }
  ]
};
