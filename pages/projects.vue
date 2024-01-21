<template>
  <section id="projects">
    <p class="section__text__p1">Browse My Recent</p>
    <h1 class="title">Projects</h1>
    <div class="experience-details-container">
      <div class="about-containers">
        <div
          class="details-container color-container"
          onclick="location.href='https://webportal.pfeiffer-vacuum.com/global/de'"
        >
          <div class="article-container">
            <NuxtImg
              src="pfeiffer-logo.jpeg"
              alt="Project 1"
              class="project-img"
            />
          </div>
          <h2 class="experience-sub-title project-title">Pfeiffer Vacuum</h2>
          <p>
            Development of an online shop at diva-e on behalf of Pfeiffer Vacuum
          </p>
          <br />
          <div class="btn-container">
            <button
              class="btn btn-color-2 project-btn"
              onclick="location.href='https://webportal.pfeiffer-vacuum.com/global/de'"
            >
              Website
            </button>
          </div>
        </div>
        <div class="details-container color-container">
          <div class="article-container">
            <NuxtImg
              src="bloomreach.jpeg"
              alt="Project 2"
              class="project-img"
            />
          </div>
          <h2 class="experience-sub-title project-title">
            Bloomreach Connector
          </h2>
          <p>Creation of a Connector to Bloomreach for Nuxt.js projects</p>
          <br />
          <div class="btn-container">
            <button
              class="btn btn-color-2 project-btn"
              onclick="location.href='https://www.npmjs.com/package/bloomreach-with-nuxt'"
            >
              npm package
            </button>
          </div>
        </div>
        <div class="details-container-placeholder"></div>
      </div>
    </div>
  </section>
</template>
<script setup lang="ts"></script>
