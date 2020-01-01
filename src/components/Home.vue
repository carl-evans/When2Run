<template>
  <section>
    <!-- location -->
    <form class="location" v-if="step == 1" @submit.prevent="nextStep">
      <fieldset>
        <label for="location">Where will you run?</label>
        <div class="location-flex">
          <input
            v-model="location"
            @input="filterLocations"
            type="search"
            name="location"
            id="location"
            placeholder="Belfast, UK"
            autocomplete="off"
            required
          />
          <button type="button" @click.prevent="nextStep">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="#666"
              width="24"
              height="24"
              viewBox="0 0 24 24"
            >
              <path
                d="M23.809 21.646l-6.205-6.205c1.167-1.605 1.857-3.579 1.857-5.711 0-5.365-4.365-9.73-9.731-9.73-5.365 0-9.73 4.365-9.73 9.73 0 5.366 4.365 9.73 9.73 9.73 2.034 0 3.923-.627 5.487-1.698l6.238 6.238 2.354-2.354zm-20.955-11.916c0-3.792 3.085-6.877 6.877-6.877s6.877 3.085 6.877 6.877-3.085 6.877-6.877 6.877c-3.793 0-6.877-3.085-6.877-6.877z"
              />
            </svg>
          </button>
        </div>
        <ul v-if="filteredLocations.length" class="locations-list">
          <li
            v-for="filteredLocation in filteredLocations"
            @click="setLocation(filteredLocation.city, filteredLocation.lng, filteredLocation.lat)"
            :key="filteredLocation.id"
            :title="'Choose ' + filteredLocation.city"
          >{{ filteredLocation.city }}</li>
        </ul>
      </fieldset>
    </form>

    <!-- dates -->
    <form class="main-form" v-if="step == 2" @submit.prevent="nextStep">
      <fieldset>
        <legend>When are you free?</legend>
        <ul>
          <li v-for="item in inputs" :key="item.id">
            <input
              type="checkbox"
              name="date"
              :value="item.dateISO"
              :id="item.dateISO"
              v-model="availableDates"
            />
            <label :for="item.dateISO">{{ item.day }}</label>
          </li>
        </ul>
        <button class="button" type="button" @click.prevent="nextStep">Next</button>
      </fieldset>
    </form>

    <!-- gender -->
    <form class="main-form gender-picker" v-if="step == 3">
      <fieldset>
        <legend>What is your gender?</legend>
        <ul>
          <li v-for="item in genders" :key="item.id">
            <label :for="item.name.toLowerCase()">{{ item.name }}</label>
            <input
              type="radio"
              name="gender"
              v-model="gender"
              :value="item.name.toLowerCase()"
              :id="item.name.toLowerCase()"
              required
            />
          </li>
        </ul>
        <button type="button" class="button" @click.prevent=" request(); nextStep()">Find Runs</button>
      </fieldset>
    </form>
    <!-- end of form -->

    <!-- results -->
    <article v-if="step == 4" class="results">
      <section class="centred-text-patch">
        <h1>Your results are here!</h1>
        <p class="commas">
          Here's when to run in {{ location }}
          on your chosen dates.
        </p>
        <ul>
          <li>{{ result.date }} at {{ result.time }}</li>
        </ul>
        <!-- COMING SOON
        <router-link
          to="/"
          class="button button--small button--silver"
          title="Use When2Run"
        >Add to Apple Calendar</router-link>
        <router-link
          to="/"
          class="button button--small button--blue lg-mx-1"
          title="Use When2Run"
        >Add to Google Calendar</router-link>
        <router-link
          to="/"
          class="button button--small button--red"
          title="Use When2Run"
        >Add to Todoist</router-link>
        -->

        <router-link
          to="/how-it-works"
          class="button button--small button--blue lg-mx-1"
          title="Learn how When2Run works"
        >Interested? Find out how When2Run works</router-link>
      </section>
    </article>
  </section>
</template>

<script>
import Locations from "../locations.json";

const today = new Date();
const year = today.getFullYear();
const month = today.getMonth();
const day = today.getDate();
const weekdays = new Array(7);

weekdays[1] = "Monday";
weekdays[2] = "Tuesday";
weekdays[3] = "Wednesday";
weekdays[4] = "Thursday";
weekdays[5] = "Friday";
weekdays[6] = "Saturday";
weekdays[7] = "Sunday";

export default {
  data() {
    return {
      step: 1,

      /* location */
      location: "",
      locationId: "",
      locations: Locations,
      filteredLocations: [],
      req: {},

      /* dates */
      availableDates: [],
      inputs: [
        {
          id: 1,
          date: today.toISOString(),
          dateISO: today.toISOString().substring(0, 10),
          day: "Today"
        },
        {
          id: 2,
          date: new Date(year, month, day + 1),
          dateISO: new Date(year, month, day + 1)
            .toISOString()
            .substring(0, 10),
          day: /* weekdays[today.getDay() + 1],*/ "Tomorrow"
        },
        {
          id: 3,
          date: new Date(year, month, day + 2),
          dateISO: new Date(year, month, day + 2)
            .toISOString()
            .substring(0, 10),
          day: weekdays[today.getDay() + 2]
        },
        {
          id: 4,
          date: new Date(year, month, day + 3),
          dateISO: new Date(year, month, day + 3)
            .toISOString()
            .substring(0, 10),
          day: weekdays[today.getDay() + 3]
        },
        {
          id: 5,
          date: new Date(year, month, day + 4),
          dateISO: new Date(year, month, day + 4)
            .toISOString()
            .substring(0, 10),
          day: weekdays[today.getDay() + 4]
        }
      ],

      /* gender */
      gender: "",
      genders: [
        {
          id: 0,
          name: "Female"
        },
        {
          id: 1,
          name: "Male"
        }
      ],

      /* result object */
      result: {
        date: "",
        time: ""
      }
    };
  },
  methods: {
    nextStep() {
      this.step++;
    },
    filterLocations() {
      this.filteredLocations = this.locations.filter(location => {
        return location.city
          .toLowerCase()
          .startsWith(this.location.toLowerCase());
      });
    },
    setLocation(location, lng, lat) {
      this.location = location;
      this.req.city = location;
      this.req.lng = lng;
      this.req.lat = lat;
      this.filteredLocations = [];
    },
    request() {
      const key = "168bcd0d4d91455a13d1938e1150240f";
      const url = `http://api.openweathermap.org/data/2.5/forecast?lat=${this.req.lat}&lon=${this.req.lng}&APPID=${key}`;
      const vm = this;

      fetch(url)
        .then(function(res) {
          // const data = res.json();
          const data = res.json();
          return data;
        })
        .then(function(data) {
          let filteredData = [];

          vm.availableDates.forEach(date => {
            filteredData = data.list.filter(item => {
              return item.dt_txt.startsWith(date);
            });
          });

          let optimumTemperature;

          if (vm.gender === "male") {
            optimumTemperature = 282.8167;
          } else {
            optimumTemperature = 284.15;
          }

          let diffs = [];
          filteredData.forEach(item => {
            if (item.main.temp > optimumTemperature) {
              diffs.push(item.main.temp - optimumTemperature);
            } else {
              diffs.push(optimumTemperature - item.main.temp);
            }
          });

          const lowestDifference = Math.min(...diffs);
          const lowestDifferenceIndex = diffs.indexOf(lowestDifference);
          const result = filteredData[lowestDifferenceIndex];
          const resultString = new Date(result.dt * 1000)
            .toGMTString()
            .slice(0, 25);
          vm.result.date = resultString.slice(0, 16);
          vm.result.time = resultString.slice(17, 25);
        })

        .catch(function(error) {
          alert(error);
        });
    }
  }
};
</script>

<style>
</style>