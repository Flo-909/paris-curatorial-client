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
        <h1>{pageHeadline && pageHeadline}</h1>
      </PageHeadline>
      <ContactMenu>
        {address && address}
        <p></p>
        {email && email}
        <p></p>
        {phoneNumber && phoneNumber}
      </ContactMenu>
    </PageLayout>
  );
};

export default Contact;
