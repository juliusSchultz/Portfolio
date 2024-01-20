<template>
  <section id="profile">
    <div class="section__pic-container">
      <NuxtImg src="profile.png" alt="Julius Schultz profile picture" />
    </div>
    <div class="section__text">
      <p class="section__text__p1">👋 Hello, I'm</p>
      <h1 class="title">Julius Schultz</h1>
      <p class="section__text__p2">Frontend Developer</p>
      <div class="btn-container">
        <button
          class="btn btn-diva-e"
          onclick="window.open('https://www.diva-e.com/de/')"
        >
          My Company
        </button>
        <button class="btn btn-color-2" onclick="location.href='./#contact'">
          Contact Info
        </button>
      </div>
      <div id="socials-container">
        <NuxtImg
          src="linkedin.png"
          alt="My LinkedIn profile"
          class="icon"
          onclick="window.open('https://www.linkedin.com/in/julius-schultz-670b54173/')"
        />
        <NuxtImg
          src="github.png"
          alt="My Github profile"
          class="icon"
          onclick="window.open('https://github.com/juliusSchultz')"
        />
      </div>
    </div>
  </section>
</template>

<style>
#profile {
  display: flex;
  justify-content: center;
  gap: 5rem;
  height: 80vh;
}

.section__pic-container {
  display: flex;
  height: 400px;
  width: 400px;
  margin: auto 0;
}

.section__text {
  align-self: center;
  text-align: center;
}

.section__text p {
  font-weight: 600;
}

.section__text__p1 {
  text-align: center;
}

.section__text__p2 {
  font-size: 1.75rem;
  margin-bottom: 1rem;
}

.title {
  font-size: 3rem;
  text-align: center;
}

#socials-container {
  display: flex;
  justify-content: center;
  margin-top: 1rem;
  gap: 1rem;
}

/* ICONS */

.icon {
  cursor: pointer;
  height: 2rem;
}

/* BUTTONS */

.btn-container {
  display: flex;
  justify-content: center;
  gap: 1rem;
}

.btn {
  font-weight: 600;
  transition: all 300ms ease;
  padding: 1rem;
  width: 8rem;
  border-radius: 2rem;
}

.btn-color-1,
.btn-color-2 {
  border: rgb(53, 53, 53) 0.1rem solid;
}

.btn-color-1:hover,
.btn-color-2:hover,
. btn-diva-e {
  cursor: pointer;
}

.btn-color-1,
.btn-color-2:hover {
  background: rgb(53, 53, 53);
  color: white;
  box-shadow: 0 0 10px 5px rgba(0, 0, 0, 0.6);
}

.btn-color-1:hover {
  background: rgb(0, 0, 0);
}

.btn-color-2 {
  background: none;
}

.btn-color-2:hover {
  border: rgb(255, 255, 255) 0.1rem solid;
}

.btn-diva-e {
  background: rgb(5, 19, 255);
  border-color: rgb(5, 19, 255);
  color: white;
}

.btn-diva-e:hover {
  font-style: italic;
  box-shadow: 0 0 10px 5px rgba(5, 19, 255, 0.6);
}

.btn-container {
  gap: 1rem;
}
</style>
