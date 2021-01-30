import React from "react";
import {
  PageLayout,
  PageHeadline,
  Box1,
  ProjectHeadline,
  ProjectSubheadline,
  ProjectDate,
  ProjectLocation,
  ProjectImage,
  LangButtonComponent,
} from "../styles/styles";
import Image from "next/image";

const Projects = ({ data }) => {
  const {
    pageHeadline,
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
        <h1>{pageHeadline}</h1>
      </PageHeadline>
      {projects
        ? projects.map((item) => (
            <>
              <ProjectHeadline>
                <h4>{item.projectHeadline}</h4>
              </ProjectHeadline>
              <ProjectSubheadline>
                <p>{item.projectDescription}</p>
              </ProjectSubheadline>
              <ProjectDate>{item.projectDate}</ProjectDate>
              <ProjectLocation>{item.projectLocation}</ProjectLocation>
              {item.projectImages.map((img) => (
                <>
                  <ProjectLocation>{img.imageCredit}</ProjectLocation>
                  {img.image.map((elimg) => (
                    <ProjectImage
                      src={process.env.NEXT_PUBLIC_BASE_URL + elimg.url}
                      alt={elimg.alternativeText}
                    />
                  ))}
                </>
              ))}
            </>
          ))
        : null}
    </PageLayout>
  );
};

export default Projects;
