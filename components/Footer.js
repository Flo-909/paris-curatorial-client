import { Global } from "@emotion/react";
import React, { useState, useEffect } from "react";
import {
  MenuPageLayout,
  PageMenu,
  MenuButtonComponent,
  FooterStyle,
  FooterLink,
  FooterContainer,
} from "../styles/styles";
import { Router } from "next/router";
import Link from "next/link";

const Footer = () => {
  const [contact, setContact] = useState();
  const [menu, setMenu] = useState();

  useEffect(() => {
    async function getData() {
      const resMenu = await fetch(process.env.NEXT_PUBLIC_BASE_URL + "/menus");
      const resContact = await fetch(
        process.env.NEXT_PUBLIC_BASE_URL + "/contacts"
      );
      const jsonMenu = await resMenu.json();
      const jsonContact = await resContact.json();
      setContact(jsonContact[0]);
      setMenu(jsonMenu[0].pageMenu);
    }
    getData();
  }, []);

  console.log(contact);

  return (
    <FooterStyle>
      {contact ? (
        <div>
          <FooterLink>
            <a href={`mailto:${contact.email}`}>{contact.email}</a>
          </FooterLink>
          <FooterLink>
            <a href={`tel:${contact.phoneNumber}`}>{contact.phoneNumber}</a>
          </FooterLink>
          {contact.address1 && <FooterLink>{contact.address1}</FooterLink>}
          {contact.address2 && <FooterLink>{contact.address2}</FooterLink>}
          {contact.address3 && <FooterLink>{contact.address3}</FooterLink>}
          {contact.address4 && <FooterLink>{contact.address4}</FooterLink>}
        </div>
      ) : null}

      {menu ? (
        <FooterContainer>
          {menu.map((item) => (
            <FooterLink>
              <Link href={item.url}>{item.name}</Link>
            </FooterLink>
          ))}
        </FooterContainer>
      ) : null}
    </FooterStyle>
  );
};

export default Footer;
