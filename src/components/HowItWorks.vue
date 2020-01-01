<template>
  <article class="wrapper">
    <section class="text-image-patch">
      <div>
        <h1 class="uppercase">How it Works</h1>
        <p>
          When2Run accepts information you input such as your location, gender, and availability, then finds
          the best time for you to go for a run.
        </p>
        <router-link to="/faqs" class="button" title="Read Frequently Asked Questions">Read FAQs</router-link>
      </div>
      <img
        src="../assets/images/person-running-downhill.jpeg"
        alt="Image of a runner running downhill"
        loading="lazy"
        width="640"
        height="338"
      />
    </section>
    <section class="text-image-patch text-image-patch--right">
      <div>
        <h2 class="uppercase">Temperature is important</h2>
        <p>
          Running in heat can result in excessive sweat that can
          lead to dehydration, and runs in weather that is too cold
          can consume more carbohydrates which may make you feel overly tired. Not
          good on a training run.
        </p>
      </div>
      <img
        src="../assets/images/road-runners-marathon.jpeg"
        alt="Image of road runners running in a marathon"
        loading="lazy"
        width="640"
        height="338"
      />
    </section>
    <section class="text-image-patch">
      <div>
        <h3 class="uppercase">Tailored to your needs</h3>
        <p>
          When2Run can determine when to run during the next five days. It will only suggest
          times that work for you, so it asks for your available dates before it suggests anything.
        </p>
        <router-link to="/" class="button" title="Use When2Run">Try For Free</router-link>
      </div>
      <img
        src="../assets/images/runners-running-on-raceday.jpeg"
        alt="Image of a runner racing"
        loading="lazy"
        width="640"
        height="338"
      />
    </section>

    <section class="text-image-patch text-image-patch--right">
      <div>
        <h2 class="uppercase">The Perfect Finish Line</h2>
        <p>
          Finally, When2Run will soon help save runs to
          your Apple Calendar, Google Calendar, and Todoist.
          <br />Never forget to run again.
        </p>
        <router-link to="/" class="button" title="Use When2Run">Try For Free</router-link>
      </div>
      <img
        src="../assets/images/runner-in-mountains.jpeg"
        alt="Image of a runner running in the mountains"
        loading="lazy"
        width="640"
        height="338"
      />
    </section>
    <section class="centred-text-patch">
      <h4>Questions? I'd love to help</h4>
      <p>
        When2Run is a web app by Carl Evans, a Front End Developer in Northern
        Ireland. You can tweet me
        <a
          href="https://twitter.com/carlevansss"
          target="_blank"
          title="Go to Carl's Twitter"
        >@carlevansss</a>
        if you would like to chat about When2Run.
      </p>
      <router-link to="/" class="button" title="Use When2Run">Get Started</router-link>
    </section>
  </article>
</template>

<script>
export default {};
</script>

<style>
</style>