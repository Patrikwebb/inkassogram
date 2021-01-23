import logoSvg from "assets/svg/logo.svg";

export type SvgType = React.ReactNode;

interface IconI {
  [key: string]: SvgType;

  logo: SvgType;
}

const ICONS: IconI = {
  logo: logoSvg,
};

export default ICONS;
