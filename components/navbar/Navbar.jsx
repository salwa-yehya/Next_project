"use client";
import Link from "next/link";
import React from "react";
import styles from "./navbar.module.css";

const links = [
  {
    id: 1,
    title: "Home",
    url: "/",
  },
  {
    id: 2,
    title: "Portfolio",
    url: "/Portfolio",
  },
  {
    id: 3,
    title: "Blog",
    url: "/Blog",
  },
  {
    id: 4,
    title: "About",
    url: "/About",
  },
  {
    id: 5,
    title: "Contact",
    url: "/Contact",
  },
  {
    id: 6,
    title: "Dashboard",
    url: "/Dashboard",
  },
];
const Navbar = () => {
  return (
    <div className={styles.container}>
      <Link href="/" className={styles.logo}>
        LOGO
      </Link>
      <div className={styles.links}>
        {links.map((items) => (
          <Link key={items.id} href={items.url} className={styles.link}>
            {items.title}
          </Link>
        ))}
        <button
        className={styles.logout}
          onClick={() => {
            console.log("loged out");
          }}
        >
          Logout
        </button>
      </div>
    </div>
  );
};

export default Navbar;
