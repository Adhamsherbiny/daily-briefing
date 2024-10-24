import React from "react";
import Widget from "./Widget";
import "./styles/explore.scss";

export default function Explore() {
  return (
    <div id="explore" className="expolre">
      <div className="expolre-head">
        <p>Explore Now</p>
      </div>
      <div className="explore-body">
        <Widget
          name="Business"
          title="Breaking Business News
Stay updated with the latest developments in the business world. From market trends and stock movements to company earnings reports and major mergers, we bring you timely and insightful coverage. Whether you're an entrepreneur, investor, or simply interested in the global economy, our news keeps you informed about key events shaping industries worldwide. Explore expert analysis, interviews with business leaders, and data-driven insights to stay ahead of the competition.
Stay tuned to Daily Briefing for daily business updates and in-depth coverage of the stories that matter."
        />
        <Widget
          name="Technology"
          title="Latest in Technology
Explore the future of innovation with our cutting-edge technology news. From breakthroughs in artificial intelligence and quantum computing to the latest smartphones, apps, and gadgets, we cover it all. Stay informed about tech industry giants, startups, and the trends driving the digital world forward. Whether you're a tech enthusiast, developer, or industry insider, our updates and expert insights will keep you ahead of the curve.

Follow Daily Briefing for daily tech news, in-depth reviews, and exclusive interviews with thought leaders in the tech world."
        />
        <Widget
          name="Sports"
          title="Stay on top of all the action with our latest sports coverage! From thrilling match results to unforgettable moments, we've got you covered with up-to-the-minute news from the world of sports. Whether it's football, basketball, tennis, or any other major event, you won’t want to miss our expert analysis, player insights, and key highlights.
          Check out our latest articles to catch up on all the drama, scorelines, and upcoming fixtures. Be the first to know what's happening in your favorite leagues and tournaments right here!"
        />
        <Widget
          name="Health"
          title="Your Source for Health News
Stay informed on the latest developments in health and wellness. From breakthroughs in medical research and public health updates to tips on nutrition, fitness, and mental well-being, we bring you the information you need to live a healthier life. Whether you're a healthcare professional, patient, or simply health-conscious, our expert advice and news coverage keep you up-to-date on the issues that matter most."
        />
        <Widget
          name="Science"
          title="Discover the Wonders of Science
Stay ahead of the curve with the latest discoveries and breakthroughs in the world of science. From space exploration and climate science to cutting-edge research in biology, chemistry, and physics, we bring you insightful stories that unravel the mysteries of our universe. Whether you're a scientist, student, or curious mind, our in-depth analysis and expert commentary provide a deeper understanding of the world around you."
        />
      </div>
    </div>
  );
}
