<template>
  <article class="wrapper">
    <h1>FAQS</h1>
    <ul class="accordion">
      <li v-for="item in faqs" :key="item.id">
        <button
          @click="toggleVisibility(item.id)"
          :aria-controls="item.id"
          :aria-expanded="item.isActive ? 'true' : 'false'"
        >
          {{ item.question }}
          <svg
            :class="{ 'is-active': item.isActive }"
            xmlns="http://www.w3.org/2000/svg"
            width="15"
            height="15"
            viewBox="0 0 24 24"
          >
            <path d="M24 10h-10v-10h-4v10h-10v4h10v10h4v-10h10z" loading="lazy" role="img" />
          </svg>
        </button>
        <p
          :aria-label="item.id"
          :aria-hidden="item.isActive ? 'false' : 'true'"
          :class="{ 'is-active': item.isActive }"
        >{{ item.answer }}</p>
      </li>
    </ul>
  </article>
</template>

<script>
export default {
  data: function() {
    return {
      selectedItem: null,
      faqs: [
        {
          id: 0,
          question: "How much does When2Run cost?",
          answer:
            "Good news! When2Run is a free web app that I built to help runners find the best time to run. It is a free service, and always will be.",
          isActive: true
        },
        {
          id: 1,
          question: "Does When2Run sell my data?",
          answer:
            "Absolutely not. We accept input data such as your location, gender, and availability, but When2Run does not store this information on a server.",
          isActive: false
        },
        {
          id: 2,
          question: "What is your stack?",
          answer:
            "When2Run is an accessible and mobile-first Single Page Application powered by HTML, CSS, JavaScript, Vue.js, and Vue Router. There is no CSS framework.",
          isActive: false
        }
      ]
    };
  },
  methods: {
    toggleVisibility(el) {
      this.selectedItem = el;
      this.faqs[this.selectedItem].isActive = !this.faqs[this.selectedItem]
        .isActive;
    }
  }
};
</script>

<style>
</style>