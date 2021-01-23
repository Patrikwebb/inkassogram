import * as React from "react";

import cx from "classnames";

import BankIdImage from "assets/images/bankid.png";
import InkassoImage from "assets/images/inkasso.png";

import Button from "components/common/Button";

import * as styles from "./Home.scss";

function Home() {
  return (
    <>
      <div className={styles.wrapper}>
        <div className={cx(styles.inkassogramImage)}>
          {/* Section - Try or Create account */}
          <div
            className={cx(styles.pt20, styles.pl30, styles.pr30, styles.pb30)}
          >
            <h1
              className={cx(
                styles.primary,
                styles.text30,
                styles.mt10,
                styles.pb30
              )}
            >
              Schysstare påminnelse och inkasso
            </h1>
            <p
              className={cx(
                styles.primary,
                styles.text20,
                styles.lineHeight20,
                styles.pb40
              )}
            >
              Registrera dina obetalda kundfakturor eller avier och skicka ut
              betalningspåminnelser och inkassokrav snabbt och enkelt. Vi
              hjälper idag över 40 00 stora som små kunder med schysstare
              kravhantering. Vi har i snitt 97 % i kundnöjdhet.
            </p>

            <Button className={styles.mb20} type={Button.types.SECONDARY}>
              Skapa gratiskonto
            </Button>
            <Button type={Button.types.PRIMARY}>Skicka Inkassogram</Button>
          </div>
        </div>

        {/* Section - Inkasso info */}
        <div
          className={cx(
            styles.info,
            styles.pt20,
            styles.pl30,
            styles.pr30,
            styles.pb30
          )}
        >
          <h1 className={cx(styles.tertiary, styles.text40, styles.pt64)}>
            Enklare
          </h1>
          <p
            className={cx(
              styles.text17,
              styles.grey,
              styles.pt10,
              styles.lineHeight20
            )}
          >
            Vi på Inkassogram brinner för att förenkla inkassobranschen. Oavsett
            om det handlar om små eller stora volymer, kan du snabbt och enkelt
            skicka betalningspåminnelser och inkassokrav. Representerar du ett
            större företag kan du genom vår digitala verktygslåda Inkassogram
            Connect välja en automatiserad uppkoppling för en strukturerad
            kravhantering. Har du små volymer kan du registrera dina ärenden på
            mindre än 2 minuter via webben eller i vår app.
          </p>

          <h1 className={cx(styles.tertiary, styles.text40, styles.pt64)}>
            Schysstare
          </h1>
          <p
            className={cx(
              styles.text17,
              styles.grey,
              styles.pt10,
              styles.lineHeight20
            )}
          >
            Inkassograms ambition är att dina kunder ska kunna betala sin skuld
            så snabbt som möjligt och slippa hamna hos Kronofogden. Därför
            skickar vi våra krav alltid med A- post, bifogar originalfakturan på
            baksidan av våra kravbrev och skickar ut ett final notice-brev innan
            du erbjuds att ta ärendet vidare till kronofogden. Genom vår
            inkassoprocess skickas färre ärenden till Kronofogdemyndigheten, ett
            förhållningssätt som alla parter vinner på. Du får betalt för dina
            fordringar och stärker samtidigt relationen till din kund.
          </p>

          <h1 className={cx(styles.tertiary, styles.text40, styles.pt64)}>
            Gratiskonto
          </h1>
          <p
            className={cx(
              styles.text17,
              styles.grey,
              styles.pt10,
              styles.lineHeight20
            )}
          >
            Du skapar ett gratiskonto utan årsavgifter och bindningstider. I
            tjänsten ingår utskick av betalningspåminnelse, inkassokrav samt ett
            final notice brev. Den summariska processen hos Kronofogden
            innefattas inte i tjänsten. Vid slutbetalning erhåller du alltid
            kapitalbeloppet och vår intäkt blir lagstadgade avgifter och
            dröjsmålsränta som läggs på kravet mot din kund. Notera att våra
            tjänster är momspliktiga, varför vi i samband med utbetalning gör
            avdrag för moms på våra arvoden. Vid återkallelse av tvistiga
            ärenden debiteras du som kund obetalda avgifter och ev. utlägg.
          </p>
        </div>

        {/* Section - Bank Id & Youtube */}
        <div
          className={cx(
            styles.bankId,
            styles.pt20,
            styles.pl30,
            styles.pr30,
            styles.pb30
          )}
        >
          <p className={cx(styles.text20, styles.white, styles.mt10)}>
            Snabbt, enkelt och säkert med
          </p>
          <img className={styles.mt10} src={BankIdImage} />
          <p className={cx(styles.text20, styles.white, styles.pt20)}>
            {"> Läs mer om hur Inkassogram fungerar"}
          </p>

          <img className={styles.mt10} src={InkassoImage} />
        </div>

        {/* Section - Customer feedback */}
        <div
          className={cx(
            styles.backgroundSecoundary,
            styles.pt20,
            styles.pl30,
            styles.pr30,
            styles.pb30,
            styles.textAlignCenter
          )}
        >
          <h1 className={cx(styles.text30, styles.white, styles.pt20)}>
            {'"Snabb och personlig hjälp, snygg hemsida"'}
          </h1>
          <p className={cx(styles.white, styles.text17, styles.pt20)}>
            {"– A.B.S Global Factoring AB"}
          </p>

          <h1 className={cx(styles.text30, styles.white, styles.pt40)}>
            {
              '"Det går så extremt smidigt och det som skickas ut till kund ser väldigt professionellt ut. Vi fick snabbt betalt för fordringar som legat extremt länge hos oss."'
            }
          </h1>
          <p className={cx(styles.white, styles.text17, styles.pt20)}>
            {"– Svea Simplicity Improved AB"}
          </p>

          <h1 className={cx(styles.text30, styles.white, styles.pt40)}>
            {
              '"Det är smidigt och enkelt att använda tjänsten samt att det är gratis!"'
            }
          </h1>
          <p className={cx(styles.white, styles.text17, styles.pt20)}>
            {"– MNP Fastigheter AB"}
          </p>
        </div>
      </div>
    </>
  );
}

export default Home;
