import React from "react";
import TypesenseInstantSearchAdapter from "typesense-instantsearch-adapter";
import {
  InstantSearch,
  SearchBox,
  Hits,
  Pagination,
  ClearRefinements,
  RefinementList,
  SortBy,
} from "react-instantsearch-dom";
import Hit from "../Hit";
import { Link } from "react-router-dom";

import "./Search.css";

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

const Search = () => {
  return (
    <>
      <div className="Instantsearch">
        <h1>Cinema Search</h1>
        <InstantSearch indexName="movies" searchClient={searchClient}>
          <div className="left-pannel">
            <ClearRefinements />
            <h2>Genres</h2>
            <RefinementList attribute="genres" />

            <SortBy
              defaultRefinement="movies/sort/release_date:asc"
              items={[
                { label: "Movie Release Date", value: "movies" },
                { label: "old", value: "movies/sort/release_date:asc" },
                { label: "new (desc)", value: "movies/sort/release_date:desc" },
              ]}
            />
          </div>
          <div className="right-pannel">
            <Link to="/" className="gobackcinema">
              Go Back
            </Link>
            <SearchBox />
            <Hits hitComponent={Hit} />
            <Pagination />
          </div>
        </InstantSearch>
      </div>
    </>
  );
};

export default Search;
