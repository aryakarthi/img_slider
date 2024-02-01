// # Carousel item data

const carouselItemData = [
  {
    imgSrc: "img/sun.jpg",
    prefix: "Star",
    title: "The Sun",
    desc: "The Sun is the star at the heart of our solar system. Its gravity holds the solar system together, keeping everything – from the biggest planets to the smallest bits of debris - in its orbit.",
    exploreLink: "https://science.nasa.gov/sun/",
  },
  {
    imgSrc: "img/mercury.jpg",
    prefix: "Planet",
    title: "Mercury",
    desc: "Mercury is the closest planet to the Sun, and the smallest planet in our solar system - only slightly larger than Earth's Moon.",
    exploreLink: "https://science.nasa.gov/mercury/",
  },
  {
    imgSrc: "img/venus.jpg",
    prefix: "Planet",
    title: "Venus",
    desc: "Venus is the second planet from the Sun, and the sixth largest planet. It's the hottest planet in our solar system.",
    exploreLink: "https://science.nasa.gov/venus/",
  },
  {
    imgSrc: "img/earth.jpg",
    prefix: "Planet",
    title: "Earth",
    desc: "Earth - our home planet - is the third planet from the Sun, and the fifth largest planet. It's the only place we know of inhabited by living things.",
    exploreLink: "https://science.nasa.gov/earth/facts/",
  },
  {
    imgSrc: "img/moon.jpg",
    prefix: "Moon",
    title: "The Moon",
    desc: "Our Moon is the only place beyond Earth where humans have set foot, so far.",
    exploreLink: "https://science.nasa.gov/moon/",
  },
  {
    imgSrc: "img/mars.jpg",
    prefix: "Planet",
    title: "Mars",
    desc: "Mars is the fourth planet from the Sun, and the seventh largest. It’s the only planet we know of inhabited entirely by robots.",
    exploreLink: "https://science.nasa.gov/mars/",
  },
  {
    imgSrc: "img/jupiter.jpg",
    prefix: "Planet",
    title: "Jupiter",
    desc: "Jupiter is the fifth planet from the Sun, and the largest in the solar system – more than twice as massive as the other planets combined.",
    exploreLink: "https://science.nasa.gov/jupiter/",
  },
  {
    imgSrc: "img/saturn.jpg",
    prefix: "Planet",
    title: "Saturn",
    desc: "Saturn is the sixth planet from the Sun, and the second largest in the solar system. It’s surrounded by beautiful rings.",
    exploreLink: "https://science.nasa.gov/saturn/",
  },
  {
    imgSrc: "img/uranus.jpg",
    prefix: "Planet",
    title: "Uranus",
    desc: "Uranus is the seventh planet from the Sun, and the third largest planet in our solar system. It appears to spin sideways.",
    exploreLink: "https://science.nasa.gov/uranus/",
  },
  {
    imgSrc: "img/neptune.jpg",
    prefix: "Planet",
    title: "Neptune",
    desc: "Neptune is the eighth, and most distant planet from the Sun. It’s the fourth-largest, and the first planet discovered with math.",
    exploreLink: "https://science.nasa.gov/neptune/",
  },
  {
    imgSrc: "img/pluto.jpg",
    prefix: "Planet",
    title: "Pluto",
    desc: "Our solar system has five dwarf planets. In order of distance from the Sun they are: Pluto, Ceres, Haumea, Makemake, and Eris.",
    exploreLink: "https://science.nasa.gov/dwarf-planets/",
  },
];

{
  /* <div class="item">
  <img src="./img/sun.jpg" alt="" />
  <div class="content">
    <h4 class="prefix">Star</h4>
    <h2 class="title">Sun</h2>S
    <p class="desc">
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit
      exercitationem repudiandae quod sed! Quas cumque alias doloremque est
      assumenda inventore enim incidunt. Tenetur vel aliquam, libero placeat
      reprehenderit eligendi ex.
    </p>
    <div class="btn">
      <a href="#">Explore</a>
    </div>
  </div>
</div>; */
}

let itemListContainer = document.getElementById("itemList");

carouselItemData.forEach((item) => {
  let itemContainer = document.createElement("div");
  itemContainer.className = "item";

  let imgElement = document.createElement("img");
  imgElement.src = item.imgSrc;
  imgElement.alt = "";

  let contentDiv = document.createElement("div");
  contentDiv.className = "content";

  contentDiv.innerHTML = `
    <h4 class="prefix">${item.prefix}</h4>
    <h2 class="title">${item.title}</h2>
    <p class="desc">${item.desc}</p>
    <div class="btn">
      <a href="${item.exploreLink}" target="blank">Explore</a>
    </div>
  `;

  itemContainer.appendChild(imgElement);
  itemContainer.appendChild(contentDiv);

  itemListContainer.appendChild(itemContainer);
});

// # Thumbnail item data

const thumbnailItemData = [
  {
    imgSrc: "img/mercury.jpg",
    title: "Mercury",
  },
  {
    imgSrc: "img/venus.jpg",
    title: "Venus",
  },
  {
    imgSrc: "img/earth.jpg",
    title: "Earth",
  },
  {
    imgSrc: "img/moon.jpg",
    title: "Moon",
  },
  {
    imgSrc: "img/mars.jpg",
    title: "Mars",
  },
  {
    imgSrc: "img/jupiter.jpg",
    title: "Jupiter",
  },
  {
    imgSrc: "img/saturn.jpg",
    title: "Saturn",
  },
  {
    imgSrc: "img/uranus.jpg",
    title: "Uranus",
  },
  {
    imgSrc: "img/neptune.jpg",
    title: "Neptune",
  },
  {
    imgSrc: "img/pluto.jpg",
    title: "Pluto",
  },
  {
    imgSrc: "img/sun.jpg",
    title: "Sun",
  },
];

{
  /* <div class="item">
  <img src="./img/mercury.jpg" alt="" />
  <h5 class="title">Mercury</h5>
</div>; */
}

let thumbListContainer = document.getElementById("thumbnailList");

thumbnailItemData.forEach((item) => {
  let itemDiv = document.createElement("div");
  itemDiv.className = "item";

  let imgElement = document.createElement("img");
  imgElement.src = item.imgSrc;
  imgElement.alt = "";

  itemDiv.innerHTML = `
    <h5 class="title">${item.title}</h5>
  `;

  itemDiv.appendChild(imgElement);
  thumbListContainer.appendChild(itemDiv);
});

// # Slider functionalities

let nextBtn = document.getElementById("next");
let prevBtn = document.getElementById("prev");

let carousel = document.querySelector(".carousel");
let itemList = document.querySelector(".carousel .list");
let thumbnail = document.querySelector(".carousel .thumbnail");

prevBtn.onclick = function () {
  showSlider("prev");
};

nextBtn.onclick = function () {
  showSlider("next");
};

let timeRunning = 500;
let runTimeout;

let timeAutoSlide = 6000;
let runAutoSlide = setTimeout(() => {
  nextBtn.click();
}, timeAutoSlide);

function showSlider(type) {
  let itemSlider = document.querySelectorAll(".carousel .list .item");
  let itemThumbnail = document.querySelectorAll(".carousel .thumbnail .item");

  if (type === "next") {
    itemList.appendChild(itemSlider[0]);
    thumbnail.appendChild(itemThumbnail[0]);
    carousel.classList.add("next");
  } else {
    let lastItemPosition = itemSlider.length - 1;
    itemList.prepend(itemSlider[lastItemPosition]);
    thumbnail.prepend(itemThumbnail[lastItemPosition]);
    carousel.classList.add("prev");
  }

  clearTimeout(runTimeout);
  runTimeout = setTimeout(() => {
    carousel.classList.remove("prev");
    carousel.classList.remove("next");
  }, timeRunning);

  clearTimeout(runAutoSlide);
  runAutoSlide = setTimeout(() => {
    nextBtn.click();
  }, timeAutoSlide);
}
