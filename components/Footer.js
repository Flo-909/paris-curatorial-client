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

const Footer = ({ menu, footer, locale }) => {
  return (
    <FooterStyle>
      {footer ? (
        <div>
          <FooterLink>
            <a href={`mailto:${footer.email}`}>
              {footer.email && footer.email}
            </a>
          </FooterLink>
          <FooterLink>
            <a href={`tel:${footer.phoneNumber}`}>
              {footer.phoneNumber && footer.phoneNumber}
            </a>
          </FooterLink>
          {footer.address1 && <FooterLink>{footer.address1}</FooterLink>}
          {footer.address2 && <FooterLink>{footer.address2}</FooterLink>}
          {footer.address3 && <FooterLink>{footer.address3}</FooterLink>}
          {footer.address4 && <FooterLink>{footer.address4}</FooterLink>}
          <Link href="/mentions-legales">
            <a>{locale === "fr" ? "Mentions Légales" : "Privacy Policies"}</a>
          </Link>
        </div>
      ) : null}

      {menu ? (
        <FooterContainer>
          {menu.map((item) => (
            <FooterLink>
              <Link href={item.url && item.url}>{item.name && item.name}</Link>
            </FooterLink>
          ))}
        </FooterContainer>
      ) : null}
    </FooterStyle>
  );
};

export default Footer;
