/*
 * This is the only file that needs changing after each race.
 * Add a round to `races`, then add an event for R or SR. Future events may use
 * `placeholder: true` with an empty results array until classifications arrive.
 * The screenshots provide points, so app.js infers finishing position from these tables.
 * Change the tables here if your league uses different scoring.
 */
window.leagueData = {
  season: "F1 2026",
  leagueName: "LON Racing League",
  lastUpdated: "Calendar loaded · results through Round 7",
  scoring: {
    R: [25, 18, 15, 12, 10, 8, 6, 4, 2, 1],
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
    { driver: "I_Ieeman", team: "McLaren" },
    { driver: "Hoover", team: "Mercedes-AMG F1 Team" },
    { driver: "Hocus", team: "Mercedes-AMG F1 Team" },
    { driver: "Psycho", team: "Audi Revolut F1 Team" }
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
            { driver: "nikid1979", team: "Oracle Red Bull Racing", grid: 3, points: 1, position: 10, status: "finished" },
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
    },
    {
      round: 3,
      name: "Japanese Grand Prix",
      circuit: "Suzuka Circuit",
      country: "jp",
      countryName: "Japan",
      events: [{
        type: "R",
        results: [
          { driver: "Senne", team: "Aston Martin Aramco", grid: 2, points: 25, position: 1, status: "finished" },
          { driver: "Niki", team: "Oracle Red Bull Racing", grid: 1, points: 18, position: 2, status: "finished" },
          { driver: "Ace", team: "Alpine", grid: 9, points: 15, position: 3, status: "finished" },
          { driver: "Sunlit", team: "Cadillac Formula 1 Team", grid: 10, points: 12, position: 4, status: "finished" },
          { driver: "Brutus", team: "McLaren", grid: 4, points: 10, position: 5, status: "finished" },
          { driver: "Seán", team: "Aston Martin Aramco", grid: 3, points: 8, position: 6, status: "finished" },
          { driver: "Toethem", team: "Oracle Red Bull Racing", grid: 8, points: 6, position: 7, status: "finished" },
          { driver: "Elmo", team: "Audi Revolut F1 Team", grid: 11, points: 4, position: 8, status: "finished" },
          { driver: "Cageman", team: "Scuderia Ferrari HP", grid: 5, points: 2, position: 9, status: "finished" },
          { driver: "Glennos", team: "Audi Revolut F1 Team", grid: 13, points: 1, position: 10, status: "finished" },
          { driver: "Hoover", team: "Mercedes-AMG F1 Team", grid: 12, points: 0, position: 11, status: "finished" },
          { driver: "Leeman", team: "McLaren", grid: 6, points: 0, status: "DNF" },
          { driver: "Hocus", team: "Mercedes-AMG F1 Team", grid: 14, points: 0, status: "DNF" },
          { driver: "Drippy", team: "Visa Cash App Racing Bulls", grid: 7, points: 0, status: "DNF" }
        ]
      }]
    },
    {
      round: 6,
      name: "Miami Grand Prix",
      circuit: "Miami International Autodrome",
      country: "us",
      countryName: "United States",
      events: [
        {
          type: "SR",
          results: [
            { driver: "Drippy", points: 8, position: 1, status: "finished" },
            { driver: "Senne", points: 7, position: 2, status: "finished" },
            { driver: "Niki", points: 6, position: 3, status: "finished" },
            { driver: "Ace", points: 5, position: 4, status: "finished" },
            { driver: "Toethem", points: 4, position: 5, status: "finished" },
            { driver: "Elmo", points: 3, position: 6, status: "finished" },
            { driver: "Leeman", points: 2, position: 7, status: "finished" },
            { driver: "Glennos", points: 1, position: 8, status: "finished" },
            { driver: "Cageman", points: 0, position: 9, status: "finished" },
            { driver: "Hoover", points: 0, position: 10, status: "finished" },
            { driver: "Psycho", points: 0, position: 11, status: "finished" },
            { driver: "Brutus", points: 0, position: 12, status: "finished" },
            { driver: "Seán", points: 0, position: 13, status: "finished" },
            { driver: "Hocus", points: 0, position: 14, status: "finished" },
            { driver: "Sunlit", points: 0, status: "DNS" }
          ]
        },
        {
          type: "R",
          results: [
            { driver: "Drippy", points: 25, position: 1, status: "finished" },
            { driver: "Niki", points: 18, position: 2, status: "finished" },
            { driver: "Psycho", points: 15, position: 3, status: "finished" },
            { driver: "Senne", points: 12, position: 4, status: "finished" },
            { driver: "Seán", points: 10, position: 5, status: "finished" },
            { driver: "Ace", points: 8, position: 6, status: "finished" },
            { driver: "Leeman", points: 6, position: 7, status: "finished" },
            { driver: "Toethem", points: 4, position: 8, status: "finished" },
            { driver: "Glennos", points: 2, position: 9, status: "finished" },
            { driver: "Elmo", points: 1, position: 10, status: "finished" },
            { driver: "Brutus", points: 0, position: 11, status: "finished" },
            { driver: "Cageman", points: 0, position: 12, status: "finished" },
            { driver: "Hocus", points: 0, position: 13, status: "finished" },
            { driver: "Sunlit", points: 0, position: 14, status: "finished" },
            { driver: "Hoover", points: 0, status: "DNF" }
          ]
        }
      ]
    },
    {
      round: 7,
      name: "Canadian Grand Prix",
      circuit: "Circuit Gilles-Villeneuve",
      country: "ca",
      countryName: "Canada",
      events: [
        {
          type: "SR",
          results: [
            { driver: "Senne", points: 8, position: 1, status: "finished" },
            { driver: "Niki", points: 7, position: 2, status: "finished" },
            { driver: "Brutus", points: 6, position: 3, status: "finished" },
            { driver: "Ace", points: 5, position: 4, status: "finished" },
            { driver: "Glennos", points: 4, position: 5, status: "finished" },
            { driver: "Elmo", points: 3, position: 6, status: "finished" },
            { driver: "Drippy", points: 2, position: 7, status: "finished" },
            { driver: "Cageman", points: 1, position: 8, status: "finished" },
            { driver: "Hocus", points: 0, position: 9, status: "finished" },
            { driver: "Leeman", points: 0, status: "DNF" },
            { driver: "Toethem", points: 0, status: "DNS" },
            { driver: "Sunlit", points: 0, status: "DNS" },
            { driver: "Seán", points: 0, status: "DNS" },
            { driver: "Hoover", points: 0, status: "DNS" },
            { driver: "Psycho", points: 0, status: "DNS" }
          ]
        },
        {
          type: "R",
          results: [
            { driver: "Senne", points: 25, position: 1, status: "finished" },
            { driver: "Brutus", points: 18, position: 2, status: "finished" },
            { driver: "Drippy", points: 15, position: 3, status: "finished" },
            { driver: "Ace", points: 12, position: 4, status: "finished" },
            { driver: "Elmo", points: 10, position: 5, status: "finished" },
            { driver: "Leeman", points: 8, position: 6, status: "finished" },
            { driver: "Cageman", points: 6, position: 7, status: "finished" },
            { driver: "Hocus", points: 4, position: 8, status: "finished" },
            { driver: "Niki", points: 2, position: 9, status: "finished" },
            { driver: "Glennos", points: 0, status: "DSQ" },
            { driver: "Toethem", points: 0, status: "DNS" },
            { driver: "Sunlit", points: 0, status: "DNS" },
            { driver: "Seán", points: 0, status: "DNS" },
            { driver: "Hoover", points: 0, status: "DNS" },
            { driver: "Psycho", points: 0, status: "DNS" }
          ]
        }
      ]
    },
    {
      round: 8,
      name: "Monaco Grand Prix",
      circuit: "Circuit de Monaco",
      country: "mc",
      countryName: "Monaco",
      events: [{ type: "R", placeholder: true, results: [] }]
    },
    {
      round: 9,
      name: "Spanish Grand Prix",
      circuit: "Circuit de Barcelona-Catalunya",
      country: "es",
      countryName: "Spain",
      events: [{ type: "R", placeholder: true, results: [] }]
    },
    {
      round: 10,
      name: "Austrian Grand Prix",
      circuit: "Red Bull Ring",
      country: "at",
      countryName: "Austria",
      events: [{ type: "R", placeholder: true, results: [] }]
    },
    {
      round: 11,
      name: "British Grand Prix",
      circuit: "Silverstone Circuit",
      country: "gb",
      countryName: "Great Britain",
      events: [
        { type: "SR", placeholder: true, results: [] },
        { type: "R", placeholder: true, results: [] }
      ]
    },
    {
      round: 12,
      name: "Belgian Grand Prix",
      circuit: "Circuit de Spa-Francorchamps",
      country: "be",
      countryName: "Belgium",
      events: [{ type: "R", placeholder: true, results: [] }]
    },
    {
      round: 13,
      name: "Hungarian Grand Prix",
      circuit: "Hungaroring",
      country: "hu",
      countryName: "Hungary",
      events: [{ type: "R", placeholder: true, results: [] }]
    },
    {
      round: 14,
      name: "Dutch Grand Prix",
      circuit: "Circuit Zandvoort",
      country: "nl",
      countryName: "Netherlands",
      events: [
        { type: "SR", placeholder: true, results: [] },
        { type: "R", placeholder: true, results: [] }
      ]
    },
    {
      round: 15,
      name: "Italian Grand Prix",
      circuit: "Autodromo Nazionale Monza",
      country: "it",
      countryName: "Italy",
      events: [{ type: "R", placeholder: true, results: [] }]
    },
    {
      round: 16,
      name: "Spanish Grand Prix",
      circuit: "Madring",
      country: "es",
      countryName: "Spain",
      events: [{ type: "R", placeholder: true, results: [] }]
    },
    {
      round: 17,
      name: "Azerbaijan Grand Prix",
      circuit: "Baku City Circuit",
      country: "az",
      countryName: "Azerbaijan",
      events: [{ type: "R", placeholder: true, results: [] }]
    },
    {
      round: 18,
      name: "Singapore Grand Prix",
      circuit: "Marina Bay Street Circuit",
      country: "sg",
      countryName: "Singapore",
      events: [
        { type: "SR", placeholder: true, results: [] },
        { type: "R", placeholder: true, results: [] }
      ]
    },
    {
      round: 19,
      name: "United States Grand Prix",
      circuit: "Circuit of the Americas",
      country: "us",
      countryName: "United States",
      events: [{ type: "R", placeholder: true, results: [] }]
    },
    {
      round: 20,
      name: "Mexico City Grand Prix",
      circuit: "Autódromo Hermanos Rodríguez",
      country: "mx",
      countryName: "Mexico",
      events: [{ type: "R", placeholder: true, results: [] }]
    },
    {
      round: 21,
      name: "São Paulo Grand Prix",
      circuit: "Interlagos",
      country: "br",
      countryName: "Brazil",
      events: [{ type: "R", placeholder: true, results: [] }]
    },
    {
      round: 22,
      name: "Las Vegas Grand Prix",
      circuit: "Las Vegas Strip Circuit",
      country: "us",
      countryName: "United States",
      events: [{ type: "R", placeholder: true, results: [] }]
    },
    {
      round: 23,
      name: "Qatar Grand Prix",
      circuit: "Lusail International Circuit",
      country: "qa",
      countryName: "Qatar",
      events: [{ type: "R", placeholder: true, results: [] }]
    },
    {
      round: 24,
      name: "Abu Dhabi Grand Prix",
      circuit: "Yas Marina Circuit",
      country: "ae",
      countryName: "United Arab Emirates",
      events: [{ type: "R", placeholder: true, results: [] }]
    }
  ]
};
