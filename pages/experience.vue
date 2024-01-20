<template>
  <section class="experience">
    <h6 class="experience__headline--1">Explore My</h6>
    <h1 class="experience__headline--2">Experience</h1>
    <div class="experience__details-container">
      <div class="about-containers">
        <div class="details-container">
          <h2 class="experience-sub-title">Frontend Development</h2>
          <div class="experience__article-container">
            <article>
              <Icon icon="verified" />
              <div>
                <h3>Nuxt</h3>
                <p>Experienced</p>
              </div>
            </article>
            <article>
              <Icon icon="verified" />
              <div>
                <h3>React</h3>
                <p>Intermediate</p>
              </div>
            </article>
            <article>
              <Icon icon="verified" />
              <div>
                <h3>Python</h3>
                <p>Intermediate</p>
              </div>
            </article>
            <article>
              <Icon icon="verified" />
              <div>
                <h3>TransactSQL</h3>
                <p>Intermediate</p>
              </div>
            </article>
            <article>
              <Icon icon="verified" />
              <div>
                <h3>Java</h3>
                <p>Intermediate</p>
              </div>
            </article>
            <article>
              <Icon icon="verified" />
              <div>
                <h3>Swift</h3>
                <p>Intermediate</p>
              </div>
            </article>
          </div>
        </div>
        <div class="details-container">
          <h2 class="experience-sub-title">Scrum Master</h2>
          <div class="experience__article-container">
            <article>
              <Icon icon="verified" />
              <div>
                <h3>Events</h3>
                <p>Experienced</p>
              </div>
            </article>
            <article>
              <Icon icon="verified" />
              <div>
                <h3>Theory</h3>
                <p>Experienced</p>
              </div>
            </article>
            <article>
              <Icon icon="verified" />
              <div>
                <h3>Kanban</h3>
                <p>Intermediate</p>
              </div>
            </article>
            <article>
              <Icon icon="verified" />
              <div>
                <h3>Waterfall</h3>
                <p>Intermediate</p>
              </div>
            </article>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<style>
.experience {
  position: relative;

  &__headline {
    &--1 {
      text-align: center;
    }

    &--2 {
      font-size: 3rem;
      text-align: center;
    }
  }

  &__details-container {
    display: flex;
    justify-content: center;
    flex-direction: column;
  }

  &__article-container {
    display: flex;
    text-align: initial;
    flex-wrap: wrap;
    flex-direction: row;
    gap: 2.5rem;
    justify-content: space-around;
  }

  article {
    display: flex;
    width: 10rem;
    justify-content: space-around;
    gap: 0.5rem;
  }

  &__icon {
    cursor: default;
    width: 30px;
    height: 30px;
  }
}

.experience-sub-title {
  color: rgb(85, 85, 85);
  font-weight: 600;
  font-size: 1.75rem;
  margin-bottom: 2rem;
}
</style>
