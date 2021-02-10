import React from "react";
import {
  PageLayout,
  PageHeadline,
  ProjectHeadline,
  ProjectSubheadline,
  ProjectDate,
  ProjectDetail,
  ArtistImage,
  LangButtonComponent,
  ProjectDescription,
  ArtistTitle,
} from "../styles/styles";

const Artists = ({ data }) => {
  const {
    pageHeadline,
    artistContent,
    artistDescription,
    artworkDate,
    artworkName,
    artworkDescription,
    language,
  } = data;
  console.log("artist", data);
  return (
    <PageLayout>
      <PageHeadline>
        <h1>{pageHeadline}</h1>
      </PageHeadline>
      {artistContent
        ? artistContent.map((item) => (
            <>
              <ProjectHeadline>
                <h2>{item.artistName}</h2>
              </ProjectHeadline>
              <ProjectSubheadline>{item.artistDescription}</ProjectSubheadline>
              {item.artworks.map((el) => (
                <>
                  <ProjectDate>{el.artworkDate}</ProjectDate>
                  <ProjectDetail>
                    <ArtistTitle>{el.artworkName}</ArtistTitle>
                    <div>{el.artworkDescription}</div>
                  </ProjectDetail>
                  <ArtistImage
                    src={el.artworkImage.url}
                    alt={el.artworkImage.alternativeText}
                  />
                </>
              ))}
            </>
          ))
        : null}
    </PageLayout>
  );
};

export default Artists;
