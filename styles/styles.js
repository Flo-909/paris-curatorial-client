import { css, Global, keyframes } from "@emotion/react";
import styled from "@emotion/styled";
import Image from "next/image";
import Link from "next/link";

export const globalStyles = (
  <Global
    styles={css`
      font-family: Raleway, sans-serif;
    `}
  />
);

const breakpoints = {
  sm: "500px",
  md: "768px",
  lg: "992px",
  xl: "1200px",
};

const slide = keyframes`
  from,  0%, to {
    -webkit-transform: translateY(1000px);
            transform: translateY(1000px);
    opacity: 0;
  }
  100% {
    -webkit-transform: translateY(0);
            transform: translateY(0);
    opacity: 1;
  }
`;

const menuAnim = keyframes`
  from,  0%, to {
    -webkit-transform: translateX(-1000px);
            transform: translateX(-1000px);
    -webkit-transform: translateY(-1000px);
            transform: translateY(-1000px);
    opacity: 0;
    position: fixed;
    left: 90%
  }
  10% {
    -webkit-transform: translateX(-1000px);
            transform:  translateX(-1000px);
    -webkit- transform: translateY(-500px);
            transform: translateY(-500px);
    opacity: 0.2;
    position: fixed;
    left: 90%
    right: 0;
    bottom: 0;
  }
  35% {
    -webkit-transform: translateX(-1000px);
          transform:  translateX(-1000px);
    -webkit- transform: translateY(0);
          transform: translateY(0);
    opacity: 0.2;
    position: fixed;
    left: 50%
    top: 0;
    right: 0;
    bottom: 0;
  }
  100% {
    -webkit-transform: translateY(0);
            transform: translateY(0);
    opacity: 1;
    position: fixed;
    left: 0;
    top: 0;
    right: 0;
    bottom: 0;
  }
`;

const menuTextAnim = keyframes`
  from,  0%, to {
    -webkit-transform: scaleX(0);
            transform: scaleX(0);
    opacity: 1;
  }
  100% {
    -webkit-transform: scaleX(1);
    transform: scaleX(1);
    opacity: 1;
  }
`;

const headlineAnim = keyframes`
  from,  0%, to {
    -webkit-transform: translateX(-50px);
    transform: translateX(-50px);
    opacity: 0;
  }
  100% {
    -webkit-transform: translateX(0);
    transform: translateX(0);
    opacity: 1;
  }
`;

const homeAnim = keyframes`
from,  0%, to {
  -webkit-transform: translateY(50px);
            transform: translateY(50px);
    opacity: 0;
}
100% {
  -webkit-transform: translateY(0);
            transform: translateY(0);
    opacity: 1;
}
`;

const homeTitleAnim = keyframes`
from,  0%, to {
  -webkit-transform: translateX(-50px);
  transform: translateX(-50px);
opacity: 0;
}
100% {
  -webkit-transform: translateX(0);
            transform: translateX(0);
    opacity: 1;
}
`;

export const PageLayout = styled.div`
  display: grid;
  padding: 10px;
  margin-bottom: 200px;
  column-gap: 5px;
  row-gap: 20px;
  text-align: justify;
  animation: ${slide} 0.6s linear;
  @media (max-width: ${breakpoints.lg}) {
    grid-template-columns: 25% 50% 20%;
  }
  @media (min-width: ${breakpoints.lg}) {
    grid-template-columns: 25% 25% 25% 24%;
  }
`;

export const MenuPageLayout = styled.div`
  min-height: 100vh;
  padding: 50px;
  position: fixed;
  left: 0;
  top: 0;
  right: 0;
  bottom: 0;
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: center;
  z-index: 2;
  background-color: black;
  opacity: 0.95;
  animation: ${menuAnim} 0.8s linear;
`;

export const PageMenu = styled.div`
  margin: 25px;
  -webkit-animation: ${menuTextAnim} 0.6s cubic-bezier(0.25, 0.46, 0.45, 0.94)
    1s both;
  animation: ${menuTextAnim} 0.6s cubic-bezier(0.25, 0.46, 0.45, 0.94) 1s both;
  @media (max-width: ${breakpoints.lg}) {
    justify-self: center;
    color: white;
    font-size: 20px;
    font-weight: semi-bold;
  }
  @media (min-width: ${breakpoints.lg}) {
    justify-self: center;
    color: white;
    font-size: 30px;
    font-weight: semi-bold;
  }
`;

export const LangButtonComponent = styled.div`
  display: flex;
  justify-content: center;
  -webkit-animation: ${menuTextAnim} 0.5s cubic-bezier(0.25, 0.46, 0.45, 0.94)
    1s both;
  animation: ${menuTextAnim} 0.5s cubic-bezier(0.25, 0.46, 0.45, 0.94) 1s both;
`;

export const LangButton = styled.div`
  @media (max-width: ${breakpoints.lg}) {
    justify-self: center;
    color: white;
  }
  @media (min-width: ${breakpoints.lg}) {
    justify-self: center;
    color: white;
  }
`;

export const PageHeadline = styled.div`
  animation: ${headlineAnim} 0.6s cubic-bezier(0.39, 0.575, 0.565, 1) 1s both;
  @media (max-width: ${breakpoints.lg}) {
    grid-column: 1/5;
    font-size: 2em;
    width: 50%;
    text-align: left;
  }
  @media (min-width: ${breakpoints.lg}) {
    grid-column: 1/5;
    font-size: 3em;
    width: 50%;
    text-align: left;
  }
`;

export const AboutBox2 = styled.div`
  @media (max-width: ${breakpoints.lg}) {
    line-height: 1.5em;
    grid-column: 2/4;
  }
  @media (min-width: ${breakpoints.lg}) {
    line-height: 1.5em;
    grid-column: 2/5;
  }
`;

export const BoxContainer = styled.div`
  display: grid;
  column-gap: 10px;
  width: 100%;
  height: max-content;
  @media (max-width: ${breakpoints.lg}) {
    grid-template-columns: 100%;
  }
  @media (min-width: ${breakpoints.lg}) {
    grid-template-columns: 80% 20%;
    max-width: 1200px;
  }
`;

export const AboutBox3 = styled.div`
  @media (max-width: ${breakpoints.lg}) {
    line-height: 1.5em;
    grid-column: 1/2;
    justify-self: end;
    font-weight: normal;
  }
  @media (min-width: ${breakpoints.lg}) {
    line-height: 1.5em;
    grid-column: 1/2;
    justify-self: end;
    font-weight: normal;
  }
`;

export const AboutBox4 = styled.div`
  @media (max-width: ${breakpoints.lg}) {
    grid-column: 2/5;
    line-height: 1.5em;
    justify-self: center;
    font-weight: 600;
  }
  @media (min-width: ${breakpoints.lg}) {
    grid-column: 2/3;
    line-height: 1.5em;
    justify-self: center;
    font-weight: 600;
  }
`;

export const AboutBox5 = styled.div`
  @media (max-width: ${breakpoints.lg}) {
    line-height: 1.5em;
    grid-column:2/5;
  }
  @media (min-width: ${breakpoints.lg}) {
    line-height: 1.5em;
    grid-column::3/4;
  }
`;
export const ProjectHeadline = styled.div`
  @media (max-width: ${breakpoints.lg}) {
    grid-column: 2/3;
    justify-self: center;
    font-weight: 600;
  }
  @media (min-width: ${breakpoints.lg}) {
    line-height: 1.5em;
    grid-column: 1/3;
    justify-self: center;
    font-weight: 600;
  }
`;
export const ProjectSubheadline = styled.div`
  @media (max-width: ${breakpoints.lg}) {
    grid-column: 2/4;
  }
  @media (min-width: ${breakpoints.lg}) {
    line-height: 1.5em;
    grid-column: 2/4;
  }
`;
export const ProjectDate = styled.div`
  @media (max-width: ${breakpoints.lg}) {
    grid-column: 1/2;
    justify-self: end;
    justify-self: end;
    align-items: center;
  }
  @media (min-width: ${breakpoints.lg}) {
    line-height: 1.5em;
    grid-column: 1/2;
    justify-self: end;
    align-items: center;
  }
`;
export const ProjectLocation = styled.div`
  @media (max-width: ${breakpoints.lg}) {
    grid-column: 3/4;
  }
  @media (min-width: ${breakpoints.lg}) {
    line-height: 1.5em;
    grid-column: 4/5;
  }
`;
export const ProjectImage = styled.img`
  @media (max-width: ${breakpoints.lg}) {
    grid-column: 1/5;
    line-height: 1.5em;
    width: 100%;
    height: 50vh;
    object-fit: cover;
    grid-column: 1/5;
  }
  @media (min-width: ${breakpoints.lg}) {
    line-height: 1.5em;
    width: 100%;
    height: 50vh;
    object-fit: cover;
    grid-column: 1/5;
  }
`;
export const ProjectDetail = styled.div`
  @media (max-width: ${breakpoints.lg}) {
    grid-column: 2/3;
    justify-self: center;
  }

  @media (min-width: ${breakpoints.lg}) {
    grid-column: 2/3;
    justify-self: center;
  }
`;

export const ArtistTitle = styled.div`
  font-weight: 600;
`;

export const ProjectDescription = styled.div`
  @media (max-width: ${breakpoints.lg}) {
    grid-column: 2/3;
    justify-self: center;
    padding-bottom: 50px;
  }
  @media (min-width: ${breakpoints.lg}) {
    line-height: 1.5em;
    grid-column: 2/3;
    justify-self: center;
    padding-bottom: 50px;
  }
`;

export const ArtistImage = styled.img`
  @media (max-width: ${breakpoints.lg}) {
    width: 100%;
    grid-column: 1/4;
  }
  @media (min-width: ${breakpoints.lg}) {
    width: 100%;
    grid-column: 3/5;
  }
`;

export const PrivacyParagraph = styled.div`
  @media (max-width: ${breakpoints.lg}) {
    grid-column: 1/5;
  }
  @media (min-width: ${breakpoints.lg}) {
    line-height: 1.5em;
    grid-column: 1/5;
  }
`;
export const PrivacyHeadline = styled.div`
  @media (max-width: ${breakpoints.lg}) {
    grid-column: 1/1;
  }
  @media (min-width: ${breakpoints.lg}) {
    line-height: 1.5em;
    grid-column: 1/1;
  }
`;
export const ContactMenu = styled.div`
  height: 100vh;
  @media (max-width: ${breakpoints.lg}) {
    grid-column: 2/4;
    justify-self: center;
  }
  @media (min-width: ${breakpoints.lg}) {
    grid-column: 2/4;
    justify-self: center;
  }
`;
export const ContactMenuCenter = styled.div`
  @media (max-width: ${breakpoints.lg}) {
    grid-column: 2/4;
    justify-content: center;
    align-content: center;
  }
  @media (min-width: ${breakpoints.lg}) {
    line-height: 1.5em;
    grid-column: 2/4;
    justify-content: center;
    align-content: center;
  }
`;

export const Grid = styled.div`
  display: flex;
`;

export const MenuButtonComponent = styled.div`
  position: fixed;
  right: 10px;
  top: 10px;
  z-index: 4;
  cursor: pointer;
  font-weight: 700;
`;

export const FooterStyle = styled.div`
  background: white;
  color: black;
  padding: 30px 10px;
  background-color: #f2f2f2;
  opacity: 0.95;
  line-height: 1.5em;

  @media (max-width: ${breakpoints.lg}) {
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
    font-size: 13px;
  }
  @media (min-width: ${breakpoints.lg}) {
    display: flex;
    justify-content: space-evenly;
    font-size: 14px;
  }
`;

export const FooterContainer = styled.div`
  @media (max-width: ${breakpoints.lg}) {
    padding: 40px 0;
  }
`;

export const FooterLink = styled.div`
  line-height: 2em;
  display: inline flex;
`;

export const HomeLogo = styled.img`
  width: 100%;
`;

export const LogoContainer = styled.div`
  height: 100vh;
  @media (max-width: ${breakpoints.lg}) {
    grid-column: 1/3;
    height: 50vh;
    object-fit: cover;
    place-self: center;
    align-self: center;
  }
  @media (min-width: ${breakpoints.lg}) {
    line-height: 1.5em;
    grid-column: 2/4;
    object-fit: cover;
    place-self: center;
    align-self: center;
  }
`;

export const LogoImage = styled(Image)`
  animation: ${headlineAnim} 0.6s cubic-bezier(0.39, 0.575, 0.565, 1) 1s both;
  position: fixed:
  left: 10px;
  top: 10px;
  cursor: pointer;
  z-index: 1;
`;

export const HomeContainer = styled.div`
  scroll-snap-type: mandatory;
  scroll-snap-points-y: repeat(100vh);
  scroll-snap-type: y mandatory;
  overflow: scroll;
  height: 100vh;
`;

export const HomeItem = styled.section`
  height: 100vh;
  width: 100vw;
  scroll-snap-align: start;
  background: white;
  display: grid;
  padding: 10px;
  grid-gap: 10px;
  padding-top: 100px;
  -webkit-animation: ${homeAnim} 0.7s cubic-bezier(0.25, 0.46, 0.45, 0.94) both;
  animation: ${homeAnim} 0.7s cubic-bezier(0.25, 0.46, 0.45, 0.94) both;
  @media (max-width: ${breakpoints.lg}) {
    grid-template-columns: 25% 50% 25%;
  }
  @media (min-width: ${breakpoints.lg}) {
    grid-template-columns: 25% 25% 25% 25%;
    margin-bottom: 200px;
  }
`;

export const HomePlacerholder = styled.div`
  grid-column: 2/4;
`;

export const HomeBox1 = styled.div`
  -webkit-animation: ${homeTitleAnim} 0.6s cubic-bezier(0.39, 0.575, 0.565, 1)
    0.2s both;
  animation: ${homeTitleAnim} 0.6s cubic-bezier(0.39, 0.575, 0.565, 1) 0.2s both;
  @media (max-width: ${breakpoints.lg}) {
    line-height: 1.5em;
    grid-column: 1/2;
    justify-self: end;
    font-weight: normal;
    font-size: 1em;
  }
  @media (min-width: ${breakpoints.lg}) {
    line-height: 1.5em;
    grid-column: 1/2;
    justify-self: end;
    font-weight: normal;
    font-size: 2em;
  }
`;

export const HomeBox2 = styled.div`
  @media (max-width: ${breakpoints.lg}) {
    line-height: 0.9em;
    grid-column: 1/6;
    justify-self: center;
    font-weight: bold;
    width: 100%;
    font-size: 20vw;
    opacity: 0.1;
    position: absolute;
    bottom: 20px;
    left: 1px;
  }
  @media (min-width: ${breakpoints.lg}) {
    line-height: 0.9em;
    grid-column: 1/4;
    justify-self: start;
    font-weight: bold;
    font-size: 20vw;
    opacity: 0.1;
    position: absolute;
    bottom: 50px;
    left: 1px;
  }
`;

export const HomeBox3 = styled.div`
  -webkit-animation: ${homeTitleAnim} 0.6s cubic-bezier(0.39, 0.575, 0.565, 1)
    0.4s both;
  animation: ${homeTitleAnim} 0.6s cubic-bezier(0.39, 0.575, 0.565, 1) 0.4s both;
  @media (max-width: ${breakpoints.lg}) {
    grid-column: 2/3;
    line-height: 1.5em;
    justify-self: center;
    font-weight: 600;
    margin-top: 100px;
  }
  @media (min-width: ${breakpoints.lg}) {
    grid-column: 2/4;
    line-height: 1.5em;
    justify-self: center;
    font-weight: 600;
    margin-top: 100px;
  }
`;

export const MenuContainer = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  background: white;
  width: 100%;
  opacity: 0.9;
  z-index: 4;
`;

export const More = styled.div`
  padding-top: 20px;
  &:hover {
    font-style: italic;
  }
`;

export const CircleContainer = styled.div`
  position: fixed;
  top: 30%;
  right: 10px;
  z-index: 20;
`;

export const Circles = styled.div`
  width: 5px;
  height: 30px;
  margin-bottom: 5px;
  background: #c5c5c5;
  z-index: 22;
`;
