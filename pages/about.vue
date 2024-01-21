<template>
  <section class="about">
    <p class="">Get To Know More</p>
    <h1 class="title">About Me</h1>
    <div class="section-container">
      <div class="section__pic-container">
        <NuxtImg src="side.jpeg" alt="Profile picture" class="about-pic" />
      </div>
      <div class="about-details-container">
        <div class="about-containers">
          <div class="details-container">
            <NuxtImg
              src="experience.png"
              alt="Experience icon"
              class="about__icon"
            />
            <h3>Experience</h3>
            <p>2+ years <br />Frontend Development</p>
          </div>
          <div class="details-container">
            <NuxtImg
              src="education.png"
              alt="Education icon"
              class="about__icon"
            />
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
  </section>
</template>

<style>
.about {
  position: relative;

  &__icon {
    width: 30px;
    height: 30px;
  }
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
</style>
