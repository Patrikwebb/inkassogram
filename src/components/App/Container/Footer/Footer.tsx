import * as React from "react";

import { infoToast } from "components/common/Toast";

import * as styles from "./Footer.scss";

function Footer() {
  return (
    <>
      <footer className={styles.footer}>
        <div className={styles.footerContent}>
          <div className={styles.footerInnerContent}>
            <div className={styles.item}>
              <p>Footer</p>
              <ul className={styles.footersLists}>
                <li onClick={() => infoToast("Not implemented")}>
                  <a>Legal</a>
                </li>
                <li onClick={() => infoToast("Not implemented")}>
                  <a>Policy</a>
                </li>
                <li onClick={() => infoToast("Not implemented")}>
                  <a>Cookies</a>
                </li>
              </ul>
            </div>
            <div className={styles.item}>
              <p>Contact</p>
              <ul className={styles.footersLists}>
                <li onClick={() => infoToast("Not implemented")}>
                  <a href="/about">About</a>
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
