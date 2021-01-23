import * as React from "react";

import cx from "classnames";

import Button from "components/common/Button";

import * as styles from "./AboutUs.scss";

function AboutUs() {
  return (
    <>
      <div
        className={cx(
          styles.wrapper,
          styles.pt20,
          styles.pl30,
          styles.pr30,
          styles.pb30
        )}
      >
        <h1
          className={cx(
            styles.primary,
            styles.text30,
            styles.mt10,
            styles.pb30
          )}
        >
          Kundtjänst
        </h1>

        <p className={cx(styles.text20, styles.lineHeight20, styles.pb40)}>
          På Mina sidor hittar du information om status för ditt ärende och hur
          vi kan hjälpa dig. Har du fått ett Inkassogram kan du bland annat
          ladda ner dokument och se status på din inbetalning.
        </p>

        <Button type={Button.types.PRIMARY}>Mina sidor</Button>
      </div>
    </>
  );
}

export default AboutUs;
