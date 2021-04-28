import React from "react";
import {
  PageLayout,
  PageHeadline,
  ProjectHeadline,
  ProjectSubheadline,
  ProjectDate,
  ProjectDetail,
  ArtistImageContainer,
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
                {item.artistDescription &&
                  item.artistDescription
                    .split("*")
                    .map((item) => <p key={item}>{item}</p>)}

                {item.pdfDocument && (
                  <div>
                    <a
                      href={item.pdfDocument.url}
                      name={item.pdfDocument.name}
                      target="_blank"
                      download
                    >
                      {item.pdfButton ? item.pdfButton : "Télécharger"}
                    </a>
                  </div>
                )}
              </ProjectHeadline>

              {item.artworks
                ? item.artworks.map((el) => (
                    <ArtistImageContainer>
                      <ArtistImage
                        src={el.artworkImage.url && el.artworkImage.url}
                        alt={
                          el.artworkImage.alternativeText &&
                          el.artworkImage.alternativeText
                        }
                      />
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
                    </ArtistImageContainer>
                  ))
                : null}
            </>
          ))
        : null}
    </PageLayout>
  );
};

export default Artists;
