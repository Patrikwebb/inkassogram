import * as React from "react";

import HeroLanding from "assets/images/heroLanding.jpg";
import HeaderH3 from "components/common/Typografy/HeaderH3";

import * as styles from "./Home.scss";

function Home() {
  return (
    <>
      <div className={styles.wrapper}>
        <div style={{ width: "100%" }}>
          <HeaderH3 title={"Home"} />
          <img style={{ width: "100%" }} src={HeroLanding} />
        </div>
      </div>
    </>
  );
}

export default Home;
