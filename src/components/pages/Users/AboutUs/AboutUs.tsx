import * as React from "react";

import AboutUsImage from "assets/images/aboutUs.jpg";

import * as styles from "./AboutUs.scss";
import HeaderH3 from "components/common/Typografy/HeaderH3";

function AboutUs() {
  return (
    <>
      <div className={styles.wrapper}>
        <div style={{ width: "100%" }}>
          <HeaderH3 title={"About"} />
          <img style={{ width: "100%" }} src={AboutUsImage} />
        </div>
      </div>
    </>
  );
}

export default AboutUs;
