import React, { useEffect, useState } from "react";
import Header from "components/shared/Header";
import Layout from "components/shared/Layout";
import Footer from "components/shared/Footer";
import Nav from "components/shared/Nav";
import { getURLParameter } from "src/utils/functions";
import { Link } from "gatsby";
import Meta from "components/shared/Meta";

export default ({ location }) => {
  let [data, setData] = useState(null);
  let [query, setQuery] = useState("");
  let [results, setResults] = useState([]);

  useEffect(() => {
    let q = getURLParameter("q");
    setQuery(q);
    fetch("/content.json")
      .then((response) => response.text())
      .then((data) => {
        console.log(data);
        try {
          console.log("SEARCHING", location);
          let json = JSON.parse(`[${data?.slice(0, data.length - 1)}]`);
          setData(json);
          let allResults = [];
          json?.forEach((it) => {
            if (it.title.includes(q) || it.text.includes(q)) {
              allResults.push(it);
            }
          });
          setResults(allResults);
        } catch (e) {
          console.log("ERROR", e);
        }
      });
  }, [location.search]);

  return (
    <>
      <Nav />
      <Meta url="/search/" />
      <Header>
        <h1>Search Results</h1>
      </Header>
      <Layout>
        <h2>Search results for "{query}"</h2>
        {results?.slice(0, 10).map((it) => (
          <div>
            <p>
              <br />
            </p>
            <h3>{it.title}</h3>
            <p>{it.text.slice(0, 150)} ...</p>
            <Link to={it.url}>READ MORE</Link>
          </div>
        ))}
        {!!data && !results?.length ? (
          <p>No results found for the specified search term</p>
        ) : null}
      </Layout>
      <Footer />
    </>
  );
};
