import React, { useState, useEffect } from "react";
import {
  MenuPageLayout,
  PageMenu,
  MenuButtonComponent,
  LangButtonComponent,
  LogoImage,
  LangButton,
  MenuContainer,
} from "../styles/styles";
import { useRouter } from "next/router";
import Link from "next/link";

const Menu = ({ menu }) => {
  console.log("menu", menu);
  const router = useRouter();
  const [menuOpen, setMenuOpen] = useState(false);

  const menuRender = () => {
    if (menu) {
      return (
        <MenuPageLayout>
          {menu
            ? menu.map((item) => (
                <PageMenu key={item.name && item.name}>
                  <Link href={item.url && item.url}>
                    {item.name && item.name}
                  </Link>
                </PageMenu>
              ))
            : null}
          {/* <LangButtonComponent>
            <LangButton>
              <Link href={router.asPath && router.asPath} locale="en">
                EN
              </Link>
            </LangButton>
            <LangButton> | </LangButton>
            <LangButton>
              <Link href={router.asPath && router.asPath} locale="fr">
                FR
              </Link>
            </LangButton>
          </LangButtonComponent> */}
        </MenuPageLayout>
      );
    }
  };

  return (
    <MenuContainer>
      <Link href="/">
        <LogoImage src="/logo.png" alt="logo" />
      </Link>

      <MenuButtonComponent
        style={{ color: menuOpen ? "white" : "black" }}
        onClick={() => setMenuOpen(!menuOpen)}
      >
        {menuOpen ? "close." : "menu."}
      </MenuButtonComponent>
      {menuOpen && menu ? menuRender() : null}
    </MenuContainer>
  );
};

export default Menu;
