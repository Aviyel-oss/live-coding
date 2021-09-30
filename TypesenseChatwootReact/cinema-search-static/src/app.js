import TypesenseInstantSearchAdapter from "typesense-instantsearch-adapter";

const typesenseInstantsearchAdapter = new TypesenseInstantSearchAdapter({
  server: {
    apiKey: "uQfoY6p3ZcaN8lOJTSoFa6A6xvv03HoM",
    nodes: [
      {
        host: "lfaxiq8kewgp9uzyp-1.a1.typesense.net",
        port: "443",
        protocol: "https",
      },
    ],
  },

  additionalSearchParameters: {
    queryBy: "title,genres",
  },
});
const searchClient = typesenseInstantsearchAdapter.searchClient;

const search = instantsearch({
  searchClient,
  indexName: "movies",
});

search.addWidgets([
  instantsearch.widgets.searchBox({
    container: ".searchbox",
  }),
  instantsearch.widgets.configure({
    hitsPerPage: 12,
  }),
  instantsearch.widgets.hits({
    container: "#hits",
    templates: {
      item(hit) {
        return `
        <div>
        <div class="movie-title">
            ${hit._highlightResult.title.value}
          </div>
          <img class="poster" src="${hit.poster}" alt="${
          hit.title
        }" height="100" />
          <div class="movie-genres">
          ${hit._highlightResult.genres.map((a) => a.value).join(", ")}
          </div>
          <div class="movie-description">${hit.overview}</div>
        </div>
      `;
      },
    },
  }),

  instantsearch.widgets.pagination({
    container: "#pagination",
  }),
  instantsearch.widgets.refinementList({
    container: "#movie-filter",
    attribute: "genres",
  }),
  instantsearch.widgets.sortBy({
    container: "#sort-by",
    items: [
      { label: "Movie Release Date", value: "movies" },
      { label: "old (asc)", value: "movies/sort/release_date:asc" },
      { label: "new (desc)", value: "movies/sort/release_date:desc" },
    ],
  }),
]);

search.start();
