
const openSidebar = () => {
    document.getElementById("mySidebar").style.width = "30vh";
    document.getElementById("main").style.marginLeft = "30vh";
};

const closeSidebar = () => {
    document.getElementById("mySidebar").style.width = "0";
    document.getElementById("main").style.marginLeft = "0";
};

/*Ha på det här sättet fast med ammo och armor, sedan lägg upp html strukturen i en js fil med css klasser så man kan positionera allt.
poitionea allt genom att sätta varje item i en lång div över hela skrämen, denna div ska sedan ha en div i sig för varje sak(flesh damage) osv*/
const products = [
    {
      id: 0,
      name: "videogame 1",
      price: 59.99,
      instock: 7,
      description:
        "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Asperiores, error.",
      imgSrc: "./img/videgameImage.png",
    },
    {
      id: 1,
      name: "videogame 2",
      price: 24.99,
      instock: 10,
      description:
        "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Asperiores, error.",
      imgSrc: "./img/videgameImage.png",
    },
    {
      id: 2,
      name: "videogame 3",
      price: 19.99,
      instock: 10,
      description:
        "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Asperiores, error.",
      imgSrc: "./img/videgameImage.png",
    },
    {
      id: 3,
      name: "videogamet 4",
      price: 25.99,
      instock: 5,
      description:
        "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Asperiores, error.",
      imgSrc: "./img/videgameImage.png",
    },
    {
      id: 4,
      name: "videogame 5",
      price: 29.99,
      instock: 4,
      description:
        "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Asperiores, error.",
      imgSrc: "./img/videgameImage.png",
    },
    {
      id: 5,
      name: "videogame 6",
      price: 39.99,
      instock: 40,
      description:
        "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Asperiores, error.",
      imgSrc: "./img/videgameImage.png",
    },
  ];
  






