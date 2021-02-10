import React, { useEffect } from "react";
import { LoadingImage, LoadingContainer } from "../styles/styles";

function ErrorPage({ statusCode, title }) {
  useEffect(() => {
    setTimeout(() => router.push("/"), 3000);
  }, []);

  return (
    <div>
      <h1>
        This page is not available. You will be redirected automatically to
        home.
      </h1>
      <p>
        {statusCode ? statusCode : ""} {title ? title : ""}
      </p>
      <LoadingContainer>
        <LoadingImage width={200} height={80} src="/logo.png" />
      </LoadingContainer>
    </div>
  );
}

export default ErrorPage;
