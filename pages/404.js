import React, { useEffect } from "react";
import { LoadingImage, LoadingContainer } from "../styles/styles";
import Link from "next/link";

export default function Custom404() {
  useEffect(() => {
    setTimeout(() => router.push("/"), 2000);
  }, []);
  return (
    <div>
      <h1>
        This page is not available. You will be redirected automatically to
        home.
      </h1>
      <Link href="/"> Continue</Link>
      <LoadingContainer>
        <LoadingImage width={200} height={80} src="/logo.png" />
      </LoadingContainer>
    </div>
  );
}
