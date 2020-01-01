<template>
  <article class="wrapper">
    <section class="text-image-patch">
      <div>
        <h1 class="uppercase">Story so Far</h1>
        <p>
          This is the app I had always wanted for my marathon training. It's accessible, fast, and finds the best times to run based on your location and availability.
          <!-- Oh, and it syncs with Google Calendar, Apple Calendar, and Todoist! -->
          I hope to find time to integrate its result with popular apps.
        </p>
        <router-link
          to="/"
          class="button"
          title="Find the best times to run in your location"
        >Find Runs</router-link>
      </div>
      <img
        src="../assets/images/lady-running-rain.jpeg"
        alt="Image of a female runner training in the rain and the city"
        loading="lazy"
        width="640"
        height="338"
      />
    </section>
  </article>
</template>

<script>
export default {};
</script>

<style>
</style>