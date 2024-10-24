import React from "react";
import "./styles/welcomeSection.scss";

export default function WelcomeSection() {
  return (
    <div className="welcome-section">
      <div className="welcome-message">
        <div className="title">
          Welcome to <span>Daily Briefing</span>
        </div>
        <p>
          Stay informed with the latest news and insights from around the world.
          Our dedicated team brings you up-to-date coverage on current events,
          in-depth analysis, and diverse perspectives on the issues that matter
          most. Whether you’re looking for breaking news, feature stories, or
          opinion pieces, we’ve got you covered. Join our community of readers
          and explore a wealth of information tailored to your interests. Thank
          you for visiting, and we hope you find our content engaging and
          informative!
        </p>
      </div>
    </div>
  );
}
