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
        <h1>{pageHeadline && pageHeadline}</h1>
      </PageHeadline>
      {artistContent
        ? artistContent.map((item) => (
            <>
              <ProjectHeadline>
                <h2>{item.artistName && item.artistName}</h2>
              </ProjectHeadline>
              <ProjectSubheadline>
                {item.artistDescription && item.artistDescription}
              </ProjectSubheadline>
              {item.artworks
                ? item.artworks.map((el) => (
                    <>
                      <ProjectDate>
                        {el.artworkDate && el.artworkDate}
                      </ProjectDate>
                      <ProjectDetail>
                        <ArtistTitle>
                          {el.artworkName && el.artworkName}
                        </ArtistTitle>
                        <div>
                          {el.artworkDescription && el.artworkDescription}
                        </div>
                      </ProjectDetail>
                      <ArtistImage
                        src={el.artworkImage.url && el.artworkImage.url}
                        alt={
                          el.artworkImage.alternativeText &&
                          el.artworkImage.alternativeText
                        }
                      />
                    </>
                  ))
                : null}
            </>
          ))
        : null}
    </PageLayout>
  );
};

export default Artists;
