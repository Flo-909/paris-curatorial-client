import { Global } from "@emotion/react";
import React, { useState, useEffect } from "react";
import {
  MenuPageLayout,
  PageMenu,
  MenuButtonComponent,
  LangButtonComponent,
  LogoImage,
  LangButton,
} from "../styles/styles";
import { useRouter } from "next/router";
import Link from "next/link";

const Menu = () => {
  const router = useRouter();
  const [menu, setMenu] = useState();
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    async function getData() {
      const response = await fetch(process.env.NEXT_PUBLIC_BASE_URL + "/menus");
      const json = await response.json();
      const data = json.find((item) => item.language === router.locale);
      const { pageMenu } = data;
      const filterMenu = pageMenu.filter(
        (item) =>
          item.url !== "/privacy-policies" &&
          item.url !== "/terms-and-conditions"
      );
      console.log(filterMenu);
      setMenu(filterMenu);
    }
    getData();
  }, []);

  const menuRender = () => {
    if (menu) {
      return (
        <MenuPageLayout>
          {menu.map((item) => (
            <PageMenu key={item.name}>
              <Link href={item.url}>{item.name}</Link>
            </PageMenu>
          ))}
          <LangButtonComponent>
            <LangButton>
              <Link href={router.asPath} locale="en">
                EN
              </Link>
            </LangButton>
            <LangButton> | </LangButton>
            <LangButton>
              <Link href={router.asPath} locale="fr">
                FR
              </Link>
            </LangButton>
          </LangButtonComponent>
        </MenuPageLayout>
      );
    }
  };

  return (
    <div>
      <Link href="/">
        <LogoImage width={150} height={70} src="/logo.png" alt="logo" />
      </Link>
      <MenuButtonComponent
        style={{ color: menuOpen ? "white" : "black" }}
        onClick={() => setMenuOpen(!menuOpen)}
      >
        {menuOpen ? "close." : "menu."}
      </MenuButtonComponent>
      {menuOpen && menu ? menuRender() : null}
    </div>
  );
};

export default Menu;
