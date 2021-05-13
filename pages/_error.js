import React, { useEffect } from "react";
import {
  LoadingImage,
  LoadingContainer,
  ErrorContainer,
  ErrorButton,
} from "../styles/styles";
import Link from "next/link";

function Error({ statusCode }) {
  useEffect(() => {
    setTimeout(() => router.push("/"), 2000);
  }, []);

  return (
    <ErrorContainer>
      <h1>
        This page is not available. You will be redirected automatically to
        home.
      </h1>
      <p>
        {statusCode
          ? `An error ${statusCode} occurred on server`
          : "An error occurred on client"}
      </p>
      <ErrorButton href="/"> Click to Continue</ErrorButton>
      <LoadingContainer>
        <LoadingImage width={200} height={80} src="/pc-logo-trans.png" />
      </LoadingContainer>
    </ErrorContainer>
  );
}

Error.getInitialProps = ({ res, err }) => {
  const statusCode = res ? res.statusCode : err ? err.statusCode : 404;
  return { statusCode };
};

export default Error;
