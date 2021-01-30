import { Global } from "@emotion/react";
import React, { useState, useEffect } from "react";
import {
  MenuPageLayout,
  PageMenu,
  MenuButtonComponent,
  FooterStyle,
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
          <div>
          {contact.address}
          </div>
          <div>
          <a href ={`mailto:${contact.email}`}>{contact.email}</a>
          </div>
          <div>
          <a href={`tel:${contact.phoneNumber}`}>{contact.phoneNumber}</a>
          </div>
        </div>
      ) : null}
      {menu ? (
        <div>
          {menu.map((item) => (
            <div>
              <Link href={item.url}>{item.name}</Link>
            </div>
          ))}
        </div>
      ) : null}
    </FooterStyle>
  );
};

export default Footer;
