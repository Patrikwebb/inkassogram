import * as React from "react";

import cx from "classnames";

import { infoToast } from "components/common/Toast";

import * as styles from "./Footer.scss";

function Footer() {
  return (
    <>
      <footer className={styles.footer}>
        <div className={styles.footerContent}>
          <div className={styles.footerInnerContent}>
            <div className={styles.item}>
              <p className={styles.pb30}>Om företaget</p>
              <ul className={styles.footersLists}>
                <li onClick={() => infoToast("Not implemented")}>
                  <a
                    className={cx(styles.letterSpacing15, styles.lineHeight20)}
                  >
                    Om Inkassogram
                  </a>
                </li>
                <li onClick={() => infoToast("Not implemented")}>
                  <a
                    className={cx(styles.letterSpacing15, styles.lineHeight20)}
                  >
                    {"Om Waya Finance & Technology AB"}
                  </a>
                </li>
                <li onClick={() => infoToast("Not implemented")}>
                  <a
                    className={cx(styles.letterSpacing15, styles.lineHeight20)}
                  >
                    FAQ
                  </a>
                </li>
              </ul>
            </div>
            <div className={styles.item}>
              <p className={styles.pb30}>Övriga tjänster</p>
              <ul className={styles.footersLists}>
                <li>
                  <a
                    className={cx(styles.letterSpacing15, styles.lineHeight20)}
                    href="/om-oss"
                  >
                    Om oss
                  </a>
                </li>
                <li onClick={() => infoToast("Not implemented")}>
                  <a
                    className={cx(styles.letterSpacing15, styles.lineHeight20)}
                  >
                    Inkassogram Connect
                  </a>
                </li>
                <li onClick={() => infoToast("Not implemented")}>
                  <a
                    className={cx(styles.letterSpacing15, styles.lineHeight20)}
                  >
                    Skicka många Inkassogram
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}

export default Footer;
