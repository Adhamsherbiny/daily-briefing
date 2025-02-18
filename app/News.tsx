"use client";
import NewsWidget from "./NewsWidget";
import axios from "axios";
import { useQuery } from "react-query";
import "./styles/news.scss";

// ? NewsApi
// ? api key => 203b419c3c484293835f919f943ff0cc
// ? https://newsapi.org/v2/top-headlines?sources=bbc-news&apiKey=203b419c3c484293835f919f943ff0cc
// ? GET https://newsapi.org/v2/everything?q=apple&from=2024-10-15&to=2024-10-15&sortBy=popularity&apiKey=203b419c3c484293835f919f943ff0cc
// ? https://newsapi.org/v2/top-headlines?country=us&apiKey=203b419c3c484293835f919f943ff0cc
// ! New York Times Api Key
// ! hx5y3viP9blbRE9knf5Wy4BgYwNDda18
// ! https://api.nytimes.com/svc/topstories/v2/arts.json?api-key=hx5y3viP9blbRE9knf5Wy4BgYwNDda18
// ?https://content.guardianapis.com/search?api-key=test
export default function News() {
  const { data, isLoading } = useQuery("articales", async () => {
    const resultOne = await axios.get(
      "https://newsapi.org/v2/everything?q=apple&from=2024-10-15&to=2024-10-15&sortBy=popularity&apiKey=203b419c3c484293835f919f943ff0cc"
    );
    const resultTwo = await axios.get(
      "https://api.nytimes.com/svc/topstories/v2/arts.json?api-key=hx5y3viP9blbRE9knf5Wy4BgYwNDda18"
    );

    const allData = [...resultOne.data.articles, ...resultTwo.data.results];
    console.log(allData);
    return allData;
  });

  if (isLoading) {
    return (
      <div style={{ width: "250px", margin: "30px auto" }}>
        <p
          style={{
            color: "royalblue",
            fontSize: "25px",
            textAlign: "center",
            fontWeight: "bold",
          }}
        >
          Loading News
        </p>
        <p style={{ fontSize: "14px", textAlign: "center" }}>
          Please Wait a few seconds
        </p>
      </div>
    );
  }

  return (
    <div className="news-section">
      <div className="sectionOfSearch" id="searchInput">
        <input className="search" type="search" placeholder="Search" />
      </div>
      <div className="news">
        {data
          ?.sort(
            (a, b) =>
              new Date(b.publishedAt).getTime() -
              new Date(a.publishedAt).getTime()
          )
          ?.filter((articales) => articales)
          .map((articales, k) => (
            <NewsWidget
              key={k}
              urlToImage={articales.urlToImage}
              title={
                articales.title == "[Removed]"
                  ? ""
                  : articales.title ||
                    articales.description ||
                    articales.section
              }
              author={articales.author}
              publishedAt={
                new Date(articales.publishedAt).toLocaleDateString() ==
                "Invalid Date"
                  ? ""
                  : new Date(articales.publishedAt || articales.published_date)
                      .toLocaleDateString()
                      .replaceAll("/", "-")
              }
              content={
                articales.content == "[Removed]"
                  ? ""
                  : articales.abstract || articales.description
              }
              url={articales.url}
            />
          ))}
      </div>
    </div>
  );
}
