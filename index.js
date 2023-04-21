import { cardsData, modalData } from './constants/constants.js';

const toggle = document.querySelector('.toggle');
const navlinks = document.querySelector('.navlinks');
const links = document.querySelectorAll('.link');

toggle.addEventListener('click', () => {
  toggle.classList.toggle('open');
  navlinks.classList.toggle('open');
});

links.forEach((link) => {
  link.addEventListener('click', () => {
    toggle.classList.remove('open');
    navlinks.classList.remove('open');
  });
});

const { title } = cardsData[0];

const portfolio = document.getElementById('portfolio');

function makeDiv() {
  const div = document.createElement('div');
  return div;
}

const titleDiv = makeDiv();
titleDiv.className = 'title';
titleDiv.innerHTML = `<h2>${title}</h2>`;

const hr = document.createElement('hr');
hr.className = 'line';
titleDiv.appendChild(hr);
portfolio.appendChild(titleDiv);

const cardsDiv = makeDiv();
cardsDiv.className = 'cards';
cardsDiv.classList.add('blur');

cardsDiv.innerHTML = cardsData.map((item) => {
  const { placeHolder, cards } = item;
  const {
    image, alt, title, description, button, technologies,
  } = placeHolder[0];
  const [css, html, bootstrap, ruby] = technologies;

  const { title: title2, description: description2, button: btn } = cards[0];

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
       <div class="card card_1" >

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
        <div class="card card_2" >

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
        <div class="card card_3" >

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
          <div class="card card_4" >

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
        <div class="card card_5" >

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
        <div class="card card_6" >

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
popup.className = 'modal';
popup.innerHTML = modalData.map((item) => {
  const {
    title, technologies, images, text, text2, buttons,
  } = item;
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

const btns = document.querySelectorAll('.bttn');
const modal = document.querySelector('.modal');
const clsModal = document.querySelector('.cls-modal');
const blur = document.querySelectorAll('.blur');

btns.forEach((btn) => {
  btn.addEventListener('click', () => {
    modal.classList.add('open');

    blur.forEach((blurElement) => {
      blurElement.classList.add('open');
    });
  });
});

clsModal.addEventListener('click', () => {
  modal.classList.remove('open');

  blur.forEach((blurElement) => {
    blurElement.classList.remove('open');
  });
});



const storeData = document.getElementById("form");
const fullName = document.getElementById("fullName");
const email = document.getElementById("email");
const msg = document.getElementById("msg");

storeData.addEventListener("input", () => {
  const formData = {
    fullName: fullName.value,
    email: email.value,
    msg: msg.value,
  };
  localStorage.setItem("userInfo", JSON.stringify(formData));
});

window.addEventListener("load", () => {
  let savedData = localStorage.getItem("userInfo");

  savedData = JSON.parse(savedData);

  if (savedData) {
    email.value = savedData.email;
    fullName.value = savedData.fullName;
    msg.value = savedData.msg;
  }
});

function storeValues() {
  const formData = {
    fullName: fullName.value,
    email: email.value,
    msg: msg.value,
  };
  localStorage.setItem("userInfo", JSON.stringify(formData));
}
