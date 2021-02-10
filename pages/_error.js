import React, { useEffect } from "react";
import { LoadingImage, LoadingContainer } from "../styles/styles";

function Error({ statusCode }) {
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
        {statusCode
          ? `An error ${statusCode} occurred on server`
          : "An error occurred on client"}
      </p>
      <LoadingContainer>
        <LoadingImage width={200} height={80} src="/logo.png" />
      </LoadingContainer>
    </div>
  );
}

Error.getInitialProps = ({ res, err }) => {
  const statusCode = res ? res.statusCode : err ? err.statusCode : 404;
  return { statusCode };
};

export default Error;
