import React from "react";
import style from "./Navlist.module.css";

const NavList = ({ scrollToSection, toggle }) => {
  const List = [
    {
      id: 1,
      navitem: "Home",
      section: "home", // Add a section name that matches the Element name
    },
    {
      id: 2,
      navitem: "About",
      section: "about", // Adjust this accordingly for other items
    },
    {
      id: 3,
      navitem: "Work",
      section: "work",
    },
    {
      id: 4,
      navitem: "Port",
      section: "port",
    },
    {
      id: 5,
      navitem: "Contact",
      section: "contact",
    },
  ];

  const text = (event) => {
    let iteration = 0;
    const letters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    let interval = null;

    clearInterval(interval);

    interval = setInterval(() => {
      event.target.innerText = event.target.innerText
        .split("")
        .map((letter, index) => {
          if (index < iteration) {
            return event.target.dataset.value[index];
          }

          return letters[Math.floor(Math.random() * 26)];
        })
        .join("");

      if (iteration >= event.target.dataset.value.length) {
        clearInterval(interval);
      }

      iteration += 1 / 3;
    }, 30);
  };

  const handleItemClick = (section) => {
    // Call the scrollToSection function to scroll to the section
    scrollToSection(section);

    // Call the toggle function to hide the navigation bar
    toggle();
  };

  return (
    <ul className={style.list}>
      {List.map((item) => (
        <li key={item.id}>
          <h1
            onMouseOver={text}
            data-value={item.navitem}
            onClick={() => handleItemClick(item.section)}
          >
            {item.navitem}
          </h1>
        </li>
      ))}
    </ul>
  );
};

export default NavList;
