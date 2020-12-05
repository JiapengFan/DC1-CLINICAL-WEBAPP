import React from "react";

// Import components
import FootNote from "./landingBox/FootNote";
import UsageDescription from "./landingBox/UsageDescription";
import UtilityDescription from "./landingBox/UtilityDescription";
import AppName from "./landingBox/AppName";
import UploadFunction from "./landingBox/UploadFunction";

// Main frame component of upload page
const LandingBox = () => {
  return (
    <article className="landingBox">
      <AppName />
      <UtilityDescription />
      <UsageDescription />
      <UploadFunction />
      <FootNote />
    </article>
  );
};

export default LandingBox;
