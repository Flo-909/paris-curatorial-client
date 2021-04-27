import React from "react";
import {
  PageLayout,
  PageHeadline,
  Box1,
  ProjectHeadline,
  ProjectSubheadline,
  ProjectDate,
  ProjectLocation,
  ProjectImageContainer,
  ProjectImage,
  LangButtonComponent,
  AboutBox2,
} from "../styles/styles";
import Image from "next/image";

const Projects = ({ data }) => {
  const {
    pageHeadline,
    pageSubheadline,
    projects,
    projectHeadline,
    projectDescription,
    projectDate,
    projectLocation,
    projectsImages,
    image,
    imageCredit,
    language,
  } = data;
  console.log("data", data);
  return (
    <PageLayout>
      <PageHeadline>
        <h1>{pageHeadline && pageHeadline}</h1>
      </PageHeadline>
      <AboutBox2>
        <p>{pageSubheadline && pageSubheadline}</p>
      </AboutBox2>
      {projects
        ? projects.map((item) => (
            <>
              <ProjectHeadline>
                <h4>{item.projectHeadline && item.projectHeadline}</h4>
                <p>
                  {item.projectDescription &&
                    item.projectDescription
                      .split("*")
                      .map((item) => <p key={item}>{item}</p>)}
                </p>
              </ProjectHeadline>

              {item.projectImages
                ? item.projectImages.map((img) => (
                    <ProjectImageContainer>
                      <ProjectImage
                        src={img.image.url && img.image.url}
                        alt={
                          img.image.alternativeText && img.image.alternativeTex
                        }
                      />
                      <ProjectLocation>
                        {img.imageCredit && img.imageCredit}
                      </ProjectLocation>
                      <ProjectDate>
                        {item.projectDate && item.projectDate}
                      </ProjectDate>
                      <ProjectLocation>
                        {item.projectLocation && item.projectLocation}
                      </ProjectLocation>
                    </ProjectImageContainer>
                  ))
                : null}
            </>
          ))
        : null}
    </PageLayout>
  );
};

export default Projects;
