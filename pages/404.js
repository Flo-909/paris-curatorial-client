import React, { useEffect } from "react";
import {
  LoadingImage,
  LoadingContainer,
  ErrorContainer,
  ErrorButton,
} from "../styles/styles";
import Link from "next/link";

export default function Custom404() {
  useEffect(() => {
    setTimeout(() => router.push("/"), 2000);
  }, []);
  return (
    <ErrorContainer>
      <h1>This page is not available.</h1>
      <ErrorButton href="/"> Click to Continue</ErrorButton>
      <LoadingContainer>
        <LoadingImage width={200} height={80} src="/logo.png" />
      </LoadingContainer>
    </ErrorContainer>
  );
}
