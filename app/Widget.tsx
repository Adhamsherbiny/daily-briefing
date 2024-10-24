import React from "react";
import "./styles/widget.scss";

export default function Widget(props: { name: string; title: string }) {
  return (
    <div className="widget">
      <div className="widget-name">{props.name}</div>
      <div className="widget-title">{props.title}</div>
    </div>
  );
}
