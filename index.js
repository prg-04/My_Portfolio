import { cardsData, modalData } from "./constants/constants.js";
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
  var typed_strings = $(".text-slider-items").html();

  typed_strings = typed_strings.replace(/,\s/g, "<br />");

  var typed = new Typed(".text-slider", {
    strings: typed_strings.split("<br />"),
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
cardsDiv.classList.add("blur");

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

  return `<div class="placeholder wow fadeInDown">
          <div class="plchdr_img">
            <img src=${image} alt=${alt} />
          </div>
          <div class="plchdr_text fadeInDown">
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
            <button type="button" class="bttn">${button}</button>
          </div>
        </div>
       <div class="card card_1" data-scrollmagic="fade-right" data-scrollmagic-offset="300" data-scrollmagic-easing="ease-in-sine" data-scrollmagic-id="card_1">

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
          <button class="card_btn bttn" type="button">${btn}</button>
        </div>
        <div class="card card_2" data-scrollmagic="fade-right" data-scrollmagic-offset="400" data-scrollmagic-easing="ease-in-sine" data-scrollmagic-id="card_2">

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
          <button class="card_btn bttn" type="button">${btn}</button>
        </div>
        <div class="card card_3" data-scrollmagic="fade-right" data-scrollmagic-offset="500" data-scrollmagic-easing="ease-in-sine" data-scrollmagic-id="card_3">

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
          <button class="card_btn bttn" type="button">${btn}</button>
          </div>
          <div class="card card_4" data-scrollmagic="fade-right" data-scrollmagic-offset="300" data-scrollmagic-easing="ease-in-sine" data-scrollmagic-id="card_4">

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
          <button class="card_btn bttn" type="button">${btn}</button>
        </div>
        <div class="card card_5" data-scrollmagic="fade-right" data-scrollmagic-offset="400" data-scrollmagic-easing="ease-in-sine" data-scrollmagic-id="card_5">

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
          <button class="card_btn bttn" type="button">${btn}</button>
        </div>
        <div class="card card_6" data-scrollmagic="fade-right" data-scrollmagic-offset="500" data-scrollmagic-easing="ease-in-sine" data-scrollmagic-id="card_6">

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
          <button class="card_btn bttn" type="button">${btn}</button>
          </div>
          `;
});

portfolio.appendChild(cardsDiv);

const popup = makeDiv();
popup.className = "modal";
popup.innerHTML = modalData.map((item) => {
  const { title, technologies, images, text, text2, buttons } = item;
  const [title1, title2] = title;
  const [html, bootstrap, ruby] = technologies;
  const [img1, img2, icon] = images;
  const [btn1, btn2] = buttons;
  return ` <div class="heading">
          <div class="pop-title">
            <h3 class="modal_ttl title1">
              ${title2}
            </h3>
            <h3 class="modal_ttl title2">${title1}</h3>
            <i class="fa-regular fa-x cls-modal"></i>
          </div>
          <ul class="modal_tech">
            <li class="md_tech">${html}</li>
            <li class="md_tech">${bootstrap}</li>
            <li class="md_tech">${ruby}</li>
          </ul>
        </div>
        <div class="content">
          <div class="image">
            <img
              class="pop_desk"
              src=${img1}
              alt="portfolio"
            />
            <img class="pop_mob" src=${img2} alt="portfolio" />
          </div>
          <div class="description">
            <p class="modal_text">
              ${text}
            </p>
            <p class="modal_text md-txt">
              ${text2} 
            </p>
            <div class="modal_buttons">
              <button class="btn" type="button">
               ${btn1}<span><img src=${icon} alt="icon" /></span>
              </button>
              <button class="btn" type="button">
               ${btn2}<span><i class="fa-brands fa-github"></i></span>
              </button>
            </div>
          </div>
        </div>`;
});

portfolio.appendChild(popup);

const controller = new ScrollMagic.Controller();
document.querySelectorAll(".card").forEach((card) => {
  const animation = card.getAttribute("data-scrollmagic");
  const offset = parseInt(card.getAttribute("data-scrollmagic-offset"));
  const easing = card.getAttribute("data-scrollmagic-easing");
  new ScrollMagic.Scene({
    triggerElement: card,
    triggerHook: 0.8,
    offset: offset,
    reverse: true,
  })
    .setClassToggle(card, animation)
    .addTo(controller)
    .on("enter", (event) => {
      card.classList.add(animation);
    })
    .on("leave", (event) => {
      card.classList.remove(animation);
    })
    .setTween(
      TweenMax.fromTo(
        card,
        1,
        {
          opacity: 0,
          y: 20,
        },
        {
          opacity: 1,
          y: 0,
          ease: easing,
        }
      )
    );
});

const aboutMe = document.querySelector(".about_me");
new ScrollMagic.Scene({
  triggerElement: aboutMe,
  triggerHook: 0.8,
})
  .setTween(
    TweenMax.fromTo(
      aboutMe,
      1,
      {
        opacity: 0,
        y: 20,
      },
      {
        opacity: 1,
        y: 0,
        ease: "ease-in",
      }
    )
  )
  .addTo(controller);

const skillStack1 = document.querySelector(".stack-one");
new ScrollMagic.Scene({
  triggerElement: skillStack1,
  triggerHook: 0.8,
  offset: 300,
})
  .setTween(
    TweenMax.fromTo(
      skillStack1,
      1,
      {
        opacity: 0,
        x: -20,
      },
      {
        opacity: 1,
        x: 0,
        ease: "ease-in",
      }
    )
  )
  .addTo(controller);

const skillStack2 = document.querySelector(".skill_stack:nth-child(2)");
new ScrollMagic.Scene({
  triggerElement: skillStack2,
  triggerHook: 0.8,
  offset: 400,
})
  .setTween(
    TweenMax.fromTo(
      skillStack2,
      1,
      {
        opacity: 0,
        x: -20,
      },
      {
        opacity: 1,
        x: 0,
        ease: "ease-in",
      }
    )
  )
  .addTo(controller);

const skillStack3 = document.querySelector(".skill_stack:nth-child(3)");
new ScrollMagic.Scene({
  triggerElement: skillStack3,
  triggerHook: 0.8,
  offset: 500,
})
  .setTween(
    TweenMax.fromTo(
      skillStack3,
      1,
      {
        opacity: 0,
        x: -20,
      },
      {
        opacity: 1,
        x: -15,
        ease: "ease-in",
      }
    )
  )
  .addTo(controller);

const btns = document.querySelectorAll(".bttn");
const modal = document.querySelector(".modal");
const clsModal = document.querySelector(".cls-modal");
const blur = document.querySelectorAll(".blur");

btns.forEach((btn) => {
  btn.addEventListener("click", () => {
    modal.classList.add("open");

    blur.forEach((blurElement) => {
      blurElement.classList.add("open");
    });
  });
});

clsModal.addEventListener("click", () => {
  modal.classList.remove("open");

  blur.forEach((blurElement) => {
    blurElement.classList.remove("open");
  });
});
