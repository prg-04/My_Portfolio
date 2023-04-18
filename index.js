import { cardsData } from "./constants/constants.js";
const toggle = document.querySelector(".toggle");
const navlinks = document.querySelector(".navlinks");
const links = document.querySelectorAll(".link");

toggle.addEventListener("click", () => {
  toggle.classList.toggle("open");
  navlinks.classList.toggle("open");
});

links.forEach((link) => {
  link.addEventListener("click", () => {
    toggle.classList.remove("open");
    navlinks.classList.remove("open");
  });
});

if ($(".text-slider").length == 1) {
  var typed_strings = $(".text-slider-items").text();

  var typed = new Typed(".text-slider", {
    strings: typed_strings.split(", "),
    typeSpeed: 50,
    loop: false,
    backDelay: 100,
    backSpeed: 30,
  });
}

$(window).scroll(function () {
  $(".animate-on-scroll").each(function () {
    var position = $(this).offset().top;
    var scrollPosition = $(window).scrollTop();
    if (position < scrollPosition + $(window).height()) {
      $(this).addClass("animated");
    }
  });
});

const { title, placeHolder, cards } = cardsData[0];

const portfolio = document.getElementById("portfolio");

function makeDiv() {
  const div = document.createElement("div");
  return div;
}

const titleDiv = makeDiv();
titleDiv.className = "title";
titleDiv.innerHTML = `<h2>${title}</h2>`;

const hr = document.createElement("hr");
hr.className = "line";
titleDiv.appendChild(hr);
portfolio.appendChild(titleDiv);

const cardsDiv = makeDiv();
cardsDiv.className = "cards";

cardsDiv.innerHTML = cardsData.map((item) => {
  const { placeHolder, cards } = item;
  const { image, alt, title, description, button, technologies } =
    placeHolder[0];
  const [css, html, bootstrap, ruby] = technologies;

  const {
    title: title2,
    description: description2,
    technologies: tech,
    button: btn,
  } = cards[0];

  return `<div class="placeholder">
          <div class="plchdr_img" data-aos="fade-down-right">
            <img src=${image} alt=${alt} />
          </div>
          <div class="plchdr_text" data-aos="fade-down-left">
            <h3>${title}</h3>
            <p class="description">
              ${description}
            </p>
            <ul>
              <li>${css}</li>
              <li>${html}</li>
              <li>${bootstrap}</li>
              <li>${ruby}</li>
            </ul>
            <button type="button">${button}</button>
          </div>
        </div>
        <div class="card card_1" data-aos="fade-right" data-aos-offset="300" data-aos-easing="ease-in-sine">
          <h3 class="card_title">
            ${title2[0]}<br />
            ${title2[1]}
          </h3>
          <p class="card_description">
            ${description2}
          </p>
          <ul class="tech_stack">
            <li class="tech">${html}</li>
            <li class="tech">${bootstrap}</li>
            <li class="tech">${ruby}</li>
          </ul>
          <button class="card_btn" type="button">${btn}</button>
        </div>
        <div class="card card_2" data-aos="fade-right" data-aos-offset="400" data-aos-easing="ease-in-sine">
          <h3 class="card_title">
            ${title2[0]}<br />
            ${title2[1]}
          </h3>
          <p class="card_description">
            ${description2}
          </p>
          <ul class="tech_stack">
            <li class="tech">${html}</li>
            <li class="tech">${bootstrap}</li>
            <li class="tech">${ruby}</li>
          </ul>
          <button class="card_btn" type="button">${btn}</button>
        </div>
        <div class="card card_3" data-aos="fade-right" data-aos-offset="500" data-aos-easing="ease-in-sine">
          <h3 class="card_title">
            ${title2[0]}<br />
            ${title2[1]}
          </h3>
          <p class="card_description">
            ${description2}
          </p>
          <ul class="tech_stack">
            <li class="tech">${html}</li>
            <li class="tech">${bootstrap}</li>
            <li class="tech">${ruby}</li>
          </ul>
          <button class="card_btn" type="button">${btn}</button>
        </div>
        <div class="card card_4" data-aos="fade-right" data-aos-offset="300" data-aos-easing="ease-in-sine">
          <h3 class="card_title">
            ${title2[0]}<br />
            ${title2[1]}
          </h3>
          <p class="card_description">
            ${description2}
          </p>
          <ul class="tech_stack">
            <li class="tech">${html}</li>
            <li class="tech">${bootstrap}</li>
            <li class="tech">${ruby}</li>
          </ul>
          <button class="card_btn" type="button">${btn}</button>
        </div>
        <div class="card card_5" data-aos="fade-right" data-aos-offset="400" data-aos-easing="ease-in-sine">
          <h3 class="card_title">
            ${title2[0]}<br />
            ${title2[1]}
          </h3>
          <p class="card_description">
            ${description2}
          </p>
          <ul class="tech_stack">
            <li class="tech">${html}</li>
            <li class="tech">${bootstrap}</li>
            <li class="tech">${ruby}</li>
          </ul>
          <button class="card_btn" type="button">${btn}</button>
        </div>
        <div class="card card_6" data-aos="fade-right" data-aos-offset="500" data-aos-easing="ease-in-sine">
         <h3 class="card_title">
            ${title2[0]}<br />
            ${title2[1]}
          </h3>
          <p class="card_description">
            ${description2}
          </p>
          <ul class="tech_stack">
            <li class="tech">${html}</li>
            <li class="tech">${bootstrap}</li>
            <li class="tech">${ruby}</li>
          </ul>
          <button class="card_btn" type="button">${btn}</button>
        </div>`;
});

portfolio.appendChild(cardsDiv);

AOS.init();
