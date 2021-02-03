import React from "react";
import {
  PageHeadline,
  PageLayout,
  ContactMenu,
  ContactMenuCenter,
} from "../styles/styles";

const Contact = ({ data }) => {
  const { pageHeadline, address, email, phoneNumber } = data;

  return (
    <PageLayout>
      <PageHeadline>
        <h1>{pageHeadline}</h1>
      </PageHeadline>
      <ContactMenu>
        {address}
        <p></p>
        {email}
        <p></p>
        {phoneNumber}
      </ContactMenu>
    </PageLayout>
  );
};

export default Contact;
