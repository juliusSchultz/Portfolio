<template>
  <section id="about">
    <p class="section__text__p1">Get To Know More</p>
    <h1 class="title">About Me</h1>
    <div class="section-container">
      <div class="section__pic-container">
        <NuxtImg src="side.jpeg" alt="Profile picture" class="about-pic" />
      </div>
      <div class="about-details-container">
        <div class="about-containers">
          <div class="details-container">
            <NuxtImg src="experience.png" alt="Experience icon" class="icon" />
            <h3>Experience</h3>
            <p>2+ years <br />Frontend Development</p>
          </div>
          <div class="details-container">
            <NuxtImg src="education.png" alt="Education icon" class="icon" />
            <h3>Education</h3>
            <p>
              B.Sc. Bachelors Degree<br />University of Applied Sciences Berlin
            </p>
          </div>
        </div>
        <div class="text-container">
          <p>
            “Use your own understanding and don’t fail because of laziness or
            cowardice,” this guiding principle of the Age of Enlightenment has
            shaped me and drives me to constantly expand my horizons of
            knowledge.
          </p>
          <br />
          <p>
            In order to dive deeper into new technologies and especially
            software develop, I decided to study international media computing.
            Currently, topics that interest me quite a lot are artificial
            intelligence and web development.
          </p>
        </div>
      </div>
    </div>
    <a href="#experience">
      <NuxtImg src="arrow.png" alt="Arrow icon" class="icon arrow" />
    </a>
  </section>
</template>

<style>
#about {
  position: relative;
}

.about-containers {
  gap: 2rem;
  margin-bottom: 2rem;
  margin-top: 2rem;
}

.about-details-container {
  justify-content: center;
  flex-direction: column;
}

.about-containers,
.about-details-container {
  display: flex;
}

.about-pic {
  border-radius: 2rem;
}

.arrow {
  position: absolute;
  right: -5rem;
  bottom: 2.5rem;
}

.details-container {
  padding: 1.5rem;
  flex: 1;
  background: white;
  border-radius: 2rem;
  border: rgb(53, 53, 53) 0.1rem solid;
  border-color: rgb(163, 163, 163);
  text-align: center;
  cursor: pointer;
}

.details-container-placeholder {
  @media only screen and (max-width: 600px) {
    display: none;
  }

  padding: 1.5rem;
  flex: 1;
  background: white;
  border-radius: 2rem;
  border: rgb(250, 250, 250) 0.1rem solid;
  border-color: rgb(250, 250, 250);
  text-align: center;
  cursor: pointer;
}

.section-container {
  gap: 4rem;
  height: 80%;
}

.section__pic-container {
  height: 400px;
  width: 400px;
  margin: auto 0;
}
</style>
