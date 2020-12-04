import React from "react";

// Import components
import UploadButton from "./landingBox/UploadButton";
import FootNote from "./landingBox/FootNote";
import UsageDescription from "./landingBox/UsageDescription";
import UtilityDescription from "./landingBox/UtilityDescription";
import AppName from "./landingBox/AppName";

// Main frame component of upload page
const LandingBox = () => {
  return (
    <article className="landingBox">
      <AppName />
      <UtilityDescription />
      <UsageDescription />
      <UploadButton />
      <FootNote />
    </article>
  );
};

export default LandingBox;
