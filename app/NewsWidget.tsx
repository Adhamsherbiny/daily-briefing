/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @next/next/no-img-element */
import React from "react";
import Link from "next/link";
import "./styles/newsWidget.scss";
interface NewsWidgetTypes {
  author?: string;
  title?: string;
  description?: string;
  url?: string | any;
  urlToImage?: string;
  publishedAt?: string;
  content?: string;
}

export default function NewsWidget(props: NewsWidgetTypes) {
  if (props.url == "https://removed.com") {
    return " ";
  } else {
    return (
      <div id="news" className="news-widget">
        <img
          className="pic"
          src={props.urlToImage ? props.urlToImage : " "}
          alt=""
        />
        <div className="title">
          <div>
            {props.title != " " || "Removed" || undefined || null
              ? props.title
              : ""}
          </div>
        </div>
        <div>
          <div className="content">
            {props.content != "" || undefined || null ? props.content : " "}
            <p>{props.author == "" || null || undefined ? "" : props.author}</p>
          </div>
        </div>

        <div className="read-more-div">
          {props.url == "https://removed.com" ? (
            " "
          ) : (
            <Link
              target="_blank"
              className="read-more"
              href={props.url == "" || undefined || null ? " " : props.url}
            >
              Read More
            </Link>
          )}
          <div className="date">
            {props.url == "https://removed.com"
              ? " "
              : props.publishedAt != " " ||
                `Invalid Date` ||
                "[Removed]" ||
                undefined ||
                null
              ? props.publishedAt
              : " "}
          </div>
        </div>
      </div>
    );
  }
}
