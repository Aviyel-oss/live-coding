const Typesense = require("typesense");

module.exports = (async () => {
  const typesense = new Typesense.Client({
    nodes: [
      {
        host: "lfaxiq8kewgp9uzyp-1.a1.typesense.net",
        port: "443",
        protocol: "https",
      },
    ],
    apiKey: "uQfoY6p3ZcaN8lOJTSoFa6A6xvv03HoM",
  });

  const movieSchema = {
    name: "movies",
    fields: [
      { name: "title", type: "string" },
      { name: "overview", type: "string", facet: true },
      { name: "release_date", type: "int32", facet: true },
      { name: "genres", type: "string[]", facet: true },
    ],
  };

  try {
    await typesense.collections("movies").delete();
  } catch (err) {
    console.log("No existing collection", err);
  }

  await typesense.collections().create(movieSchema);

  const movies = require("./moviesDataSet/movies.json");
  try {
    const parseData = await typesense
      .collections("movies")
      .documents()
      .import(movies);
    return parseData;
  } catch (err) {
    console.log(err);
  }
})();
