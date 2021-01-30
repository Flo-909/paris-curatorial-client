import { css, Global, keyframes } from "@emotion/react";
import styled from "@emotion/styled";
import Image from "next/image";

export const globalStyles = (
  <Global
    styles={css`
      font-family Helvetica Neue;
    `}
  />
);

const breakpoints = {
  sm: "500px",
  md: "768px",
  lg: "992px",
  xl: "1200px",
};

export const PageLayout = styled.div`
  display: grid;
  padding: 10px;
  margin-bottom: 200px;
  @media (max-width: ${breakpoints.lg}) {
    grid-template-columns: 25% 50% 25%;
  }
  @media (min-width: ${breakpoints.lg}) {
    grid-template-columns: 25% 25% 25% 25%;
  }
`;

export const MenuPageLayout = styled.div`
  min-height: 100vh;
  display: grid;
  padding: 50px;
  position: fixed;
  left: 0;
  top: 0;
  right: 0;
  bottom: 0;
  justify-content: center;
  z-index: 2;
  @media (max-width: ${breakpoints.lg}) {
    grid-template-columns: 100%;
    background-color: black;
    opacity: 0.95;
  }
  @media (min-width: ${breakpoints.lg}) {
    grid-template-columns: 100%;
    background-color: black;
    opacity: 0.95;
  }
`;

export const PageMenu = styled.div`
  font-size: 30px;
  @media (max-width: ${breakpoints.lg}) {
    justify-self: center;
    color: white;
    font-weight: semi-bold;
  }
  @media (min-width: ${breakpoints.lg}) {
    justify-self: center;
    color: white;
    font-weight: semi-bold;
  }
`;

export const LangButtonComponent = styled.div`
  display: flex;
  justify-content: center;
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
  @media (max-width: ${breakpoints.lg}) {
    grid-column: 1/5;
    font-size: 2em;
    width: 50%;
  }
  @media (min-width: ${breakpoints.lg}) {
    grid-column: 1/5;
    font-size: 3em;
    width: 50%;
  }
`;

export const AboutBox2 = styled.div`
  @media (max-width: ${breakpoints.lg}) {
    line-height: 1.5em;
    grid-column: 2/5;
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
  }
  @media (min-width: ${breakpoints.lg}) {
    line-height: 1.5em;
    grid-column: 1/2;
    justify-self: end;
  }
`;
export const ProjectLocation = styled.div`
  @media (max-width: ${breakpoints.lg}) {
    grid-column: 4/5;
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
    line-height: 3em;
    grid-column: 2/3;
    justify-self: center;
    font-weight: 600;
  }
  @media (min-width: ${breakpoints.lg}) {
    line-height: 3em;
    grid-column: 2/3;
    justify-self: center;
    font-weight: 600;
  }
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
    line-height: 1.5em;
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
  z-index: 3;
  cursor: pointer;
  font-weight: 700;
`;
export const FooterStyle = styled.div`
  background: white;
  color: black;
  display: flex;
  justify-content: space-evenly;
  padding: 20px 10px;
  background-color: #f2f2f2;
  opacity: 0.95;
`;
export const HomeLogo = styled.img`
  @media (max-width: ${breakpoints.lg}) {
    grid-column: 1/5;
    width: 100%;
    height: 50vh;
    object-fit: cover;
  }
  @media (min-width: ${breakpoints.lg}) {
    line-height: 1.5em;
    grid-column: 1/5;
    width: 100%;
    height: 50vh;
    object-fit: cover;
  }
`;

export const LogoImage = styled(Image)`
  position: fixed:
  left: 10px;
  top: 10px;
  cursor: pointer;
`;
