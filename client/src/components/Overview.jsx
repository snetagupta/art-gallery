import React from "react";
import OverviewCard from "./OverviewCard";
import overview1 from "../assets/overview/overview1.png"
import overview2 from "../assets/overview/overview2.png"
import overview3 from "../assets/overview/overview3.png"

const Overview = () => {
  const features = [
    {
      heading: "Think Dropbox combined with Pinterest, with 4TB starter space",
      text: "Find your files quicker by browsing visually, and share them in a format that’s more like a ready-made portfolio than tired old cloud storage.",
      image: overview1,
      direction: "flex-row",
    },
    {
      heading: "AI-powered file manager for creatives, by creatives",
      text: "Beautiful work deserves beautiful storage! Escape the mess of endlessly nested folders and subfolders and start AI-organizing your work in a way that actually makes sense.",
      image: overview2,
      direction: "flex-row-reverse",
    },
    {
      heading: "Professionally share your work",
      text: "Publish a beautiful gallery for your team or clients to share work, and make it easy to gather feedback and comments.",
      image: overview3,
      direction: "flex-row",
    },
  ];
  return (
    <div className="py-8 px-28">
      {features.map((feature, index) => (
        <OverviewCard
          heading={feature.heading}
          text={feature.text}
          image={feature.image}
          direction={feature.direction}
        />
      ))}
    </div>
  );
};
export default Overview;
