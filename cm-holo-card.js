//This file will be the web component
//It only needs to run, not be imported by main.js
const template = document.createElement("template");

template.innerHTML = `

<style>

:root {
  --background-rgb: 29 30 34;
  
  --blue-rgb: 33 150 243;
  --primary-rgb: var(--blue-rgb);
  
  --blob-color-1: rgb(var(--blue-rgb));
  --blob-color-2: dodgerblue;
}

* {
  box-sizing: border-box;
}

body {
  height: 100vh;
  display: grid;
  place-items: center;
  background-color: rgb(var(--background-rgb));
  margin: 0rem;
  overflow: hidden;
}

.screen {
  width: 500px;
  display: flex;
  border: 3px solid rgb(var(--primary-rgb) / 80%);
  aspect-ratio: 10 / 16;
  border-radius: 1rem;
  background-color: rgb(var(--primary-rgb) / 15%);
  overflow: hidden;
  position: relative;
  z-index: 10;
}

.screen:after,
.screen:before {
  content: "";
  height: 5px;
  position: absolute;
  z-index: 4;
  left: 50%;
  translate: -50% 0%;
  background-color: white;
}

.screen:before {
  width: 15%;
  top: 0rem;
  border-bottom-left-radius: 1rem;
  border-bottom-right-radius: 1rem;
}

.screen:after {
  width: 25%;
  bottom: 0rem;
  border-top-left-radius: 1rem;
  border-top-right-radius: 1rem;
}

@keyframes pan-overlay {
  from {
    background-position: 0% 0%;
  }
  
  to {
    background-position: 0% -100%;
  }
}

.screen-overlay {    
  background: linear-gradient(
    rgb(var(--primary-rgb) / 0.15),
    rgb(var(--primary-rgb) / 0.15) 3px,
    transparent 3px,
    transparent 9px
  );
  background-size: 100% 9px;
  height: 100%;
  width: 100%;
  animation: pan-overlay 22s infinite linear;
  position: absolute;
  z-index: 2;
  left: 0px;
  top: 0px;
}

@keyframes pan-image {  
  0% {
    background-position: 36% 42%;
    background-size: 200%;
  }
  
  20% {
    background-position: 30% 35%;
    background-size: 200%;
  }
  
  20.0001% { /* -- View 2 -- */
    background-position: 60% 85%;
    background-size: 500%;
  }
  
  40% {
    background-position: 49% 81%;
    background-size: 500%;
  }
  
  40.0001% { /* -- View 3 -- */
    background-position: 80% 42%;
    background-size: 300%;
  }
  
  60% {
    background-position: 84% 33%;
    background-size: 300%;
  }
  
  60.0001% { /* -- View 4 -- */
    background-position: 0% 0%;
    background-size: 300%;
  }
  
  80% {
    background-position: 15% 4%;
    background-size: 300%;
  }
  
  80.0001% { /* -- View 5 -- */
    background-position: 80% 10%;
    background-size: 300%;
  }
  
  100% {
    background-position: 72% 14%;
    background-size: 300%;
  }
}

.screen > .screen-image {
  background-image: url("https://images.unsplash.com/photo-1515266591878-f93e32bc5937?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2574&q=80");
  height: 100%;
  width: 100%;
  position: absolute;
  z-index: 1;
  left: 0px;
  top: 0px;
  background-size: 300%;
  background-position: 0% 0%;
  filter: sepia(100%) hue-rotate(160deg);
  opacity: 0.6;
  animation: pan-image 15s linear infinite;
}

.screen > .screen-content {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-end;
  flex-grow: 1;
  gap: 4rem;
  position: relative;
  z-index: 3;
  margin: 1rem;
  padding-bottom: 6rem;
  border: 1px solid rgb(var(--primary-rgb) / 50%);
  border-radius: 0.6rem;
}

.screen > .screen-content > .screen-icon {
  color: white;
  font-size: 4rem;
  text-shadow: 0px 0px 0.5rem white;
}

.screen > .screen-content > .screen-user{
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1rem;
  position: relative;
}

.screen > .screen-content > .screen-user:before,
.screen > .screen-content > .screen-user:after {
  content: "";
  position: absolute;
  top: 0px;
  background-color: rgb(var(--primary-rgb));
  border-radius: 1rem;
  box-shadow: 0px 0px 8px 3px rgb(var(--primary-rgb) / 60%);
}

.screen > .screen-content > .screen-user:before {
  height: 2px;
  width: 50px;
  translate: -20px -1rem;
  opacity: 0.75;
}

.screen > .screen-content > .screen-user:after {
  height: 3px;
  width: 30px;
  translate: 26px calc(-1rem - 0.5px);
}

.screen > .screen-content > .screen-user > :is(.name, .link) {
  font-family: "Source Code Pro", monospace;
  color: white; 
  text-align: center;
  text-transform: uppercase; 
}

.screen > .screen-content > .screen-user > .name {
  position: relative;
  font-size: 4.25rem;
  font-weight: 400;
}

.screen > .screen-content > .screen-user > .name:before,
.screen > .screen-content > .screen-user > .name:after {
  content: "";
  height: 4px;
  width: 4px;
  position: absolute;
  border: 2px solid white;
  border-radius: 2px;
}

.screen > .screen-content > .screen-user > .name:before {
  top: 55%;
  right: -1.5rem;
}

.screen > .screen-content > .screen-user > .name:after {
  top: 45%;
  left: -1.5rem;  
}

.screen > .screen-content > .screen-user > .link {  
  opacity: 0.8;
  font-size: 1.5rem;
  text-shadow: 0px 0px 0.5rem white;
  font-weight: 400;
  letter-spacing: 0.3rem;
  text-decoration: none;
}

.screen > .screen-content > .screen-user > .link:is(:hover, :focus) {  
  text-decoration: underline; 
}

@media(max-width: 700px) {
  .screen {
    scale: 0.6;
    margin-bottom: 0rem;
  }
}

/* -- Blob effect -- */

@keyframes rotate {
  from {
    rotate: 0deg;
  }
  
  50% {
    scale: 1 1.5;
  }
  
  to {
    rotate: 360deg;
  }
}

#blob {
  background-color: white;
  height: 34vmax;
  aspect-ratio: 1;
  position: absolute;
  left: 50%;
  top: 50%;
  translate: -50% -50%;
  border-radius: 50%;
  background: linear-gradient(to right, var(--blob-color-1), var(--blob-color-2));
  animation: rotate 20s infinite;
  opacity: 0.5;
}

#blur {
  height: 100%;
  width: 100%;
  position: absolute;
  z-index: 2;
  backdrop-filter: blur(12vmax);
}

/* -- Links -- */

#links {
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
  position: absolute;
  top: 0px;
  left: 0px;
  z-index: 10;
  padding: 1rem;
}

.meta-link {
  display: flex;
  align-items: center;
  gap: 0.5rem;
}

.meta-link > :is(span, a) {
  font-family: "Rubik", sans-serif;
  font-size: 0.9rem;
  color: white;
}

.meta-link > .label {
  width: 160px; 
  text-align: right;
}

.meta-link > a {
  text-decoration: none;
  outline: none;
}

.meta-link > a.source {
  color: rgb(94, 106, 210);
}

.meta-link > a:is(:hover, :focus) > i {
  color: white;  
}

.meta-link > a.youtube {
  color: rgb(239, 83, 80);
}

.meta-link > a.youtube > i {
  padding-top: 0.2rem; 
}

.meta-link > a > i {
  height: 1rem;
  line-height: 1rem;
}
</style>


<div class="screen">  
  <div class="screen-image"></div>  
  <div class="screen-overlay"></div>  
  <div class="screen-content">
    <i class="screen-icon fa-brands fa-codepen"></i>
    <div class="screen-user">
      <span class="name" data-value="CODEPEN">CODEPEN</span>
      <a class="link" href="https://youtube.com/@Hyperplexed" target="_blank">@Hyperplexed</a>
    </div>
  </div>
</div>

<div id="blob"></div>
<div id="blur"></div>

<div id="links">
  <div class="meta-link">  
    <span class="label">Futuristic Card Effect</span>
    <span class="dot">·</span>
    <a class="source" href="https://www.sprite.com/zerolimits" target="_blank">
      <i class="fa-solid fa-link"></i>
    </a>
    <span class="dot">·</span>
    <a class="youtube" href="https://youtu.be/jMVhxBB3l0w" target="_blank">
      <i class="fa-brands fa-youtube"></i>
    </a>
  </div>
  
  <div class="meta-link">  
    <span class="label">Glowy Blob Effect</span>
    <span class="dot">·</span>
    <a class="source" href="https://www.poppr.be" target="_blank">
      <i class="fa-solid fa-link"></i>
    </a>
    <span class="dot">·</span>
    <a class="youtube" href="https://youtu.be/kySGqoU7X-s" target="_blank">
      <i class="fa-brands fa-youtube"></i>
    </a>
  </div>

  <div class="meta-link">  
    <span class="label">Text Effect</span>
    <span class="dot">·</span>
    <a class="source" href="https://kprverse.com" target="_blank">
      <i class="fa-solid fa-link"></i>
    </a>
    <span class="dot">·</span>
    <a class="youtube" href="https://youtu.be/W5oawMJaXbU" target="_blank">
      <i class="fa-brands fa-youtube"></i>
    </a>
  </div>
</div>

`;

class HoloCard extends HTMLElement {
  constructor() {
    super();
    const shadowRoot = this.attachShadow({ mode: "closed" });
    // let div = document.createElement('div');
    // div.textContent = 'Futuristic Card';
    // shadowRoot.append(div);
    let clone = template.content.cloneNode(true);
    shadowRoot.append(clone);
  }
}

customElements.define("holo-card", HoloCard);
// <holo-card>

/**
 * Animations
 */

/* -- Glow effect -- */

const blob = document.getElementById("blob");

window.onpointermove = (event) => {
  const { clientX, clientY } = event;

  blob.animate(
    {
      left: `${clientX}px`,
      top: `${clientY}px`,
    },
    { duration: 3000, fill: "forwards" }
  );
};

/* -- Text effect -- */

const letters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";

let interval = null;

const screen = document.querySelector(".screen"),
  name = document.querySelector(".name");

screen.onmouseenter = (event) => {
  let iteration = 0;

  clearInterval(interval);

  interval = setInterval(() => {
    name.innerText = name.innerText
      .split("")
      .map((letter, index) => {
        if (index < iteration) {
          return name.dataset.value[index];
        }

        return letters[Math.floor(Math.random() * 26)];
      })
      .join("");

    if (iteration >= name.dataset.value.length) {
      clearInterval(interval);
    }

    iteration += 1 / 3;
  }, 30);
};
