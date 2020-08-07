<template>
  <div class="container" :class="{ successfully: !answer }">
    <div v-if="loader" class="loader">
      <loader />
    </div>
    <div v-else>
      <section v-if="this.answer">
        <Buttons :options="options" />
        <div class="AircraftsBlock">
          <aircrafts
            v-for="item in getPosts"
            :key="item.id"
            :name="item.name"
            :rent="item.rent"
            :description="item.description"
            :preview="item.preview"
            :id="item.id"
            @click.native="onClick(item)"
          />
        </div>
      </section>
      <section v-else class="error_server">
        <h1>An error has occurred</h1>
        <span>Please refresh the page</span>
        <button @click="getProductsHandler">Reload page</button>
      </section>
    </div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
import { getVehicles } from '../api/request'
import aircrafts from './ItemAircraft'
import Buttons from './Buttons'
import loader from './loader'
export default {
  data: () => ({
    answer: false,
    loader: true,

    options: [
      { text: ' whatever', value: 'whatever' },
      { text: ' helicopter', value: 'helicopter' },
      { text: ' rocket', value: 'rocket' },
      { text: ' plane', value: 'plane' },
      { text: ' airship', value: 'airship' },
    ],
  }),
  created() {
    this.getProductsHandler()
  },
  components: {
    aircrafts,
    loader,
  },
  methods: {
    onClick(item) {
      this.$router.push({ name: 'details', params: { item } })
    },
    someFunction(elemnt) {
      if (elemnt.parentElement.id || elemnt.id) {
        console.log(elemnt.parentElement.id)
      }
    },
    getProductsHandler() {
      this.loader = true
      getVehicles()
        .then((data) => {
          if (data) {
            this.$store.commit('setItem', data)
            this.answer = true
            this.loader = false
          }
        })
        .catch(({ error }) => {
          console.log(error)
          this.loader = false
        })
    },
  },

  computed: {
    ...mapGetters(['getPosts']),
  },
}
</script>

<style lang="scss" scoped>
.loader {
  display: flex;

  width: 100%;

  justify-content: center;
  align-items: center;
}
section {
  width: 100%;
}
.AircraftsBlock {
  display: block;
  display: flex;
  flex-direction: row;

  width: 100%;

  flex-wrap: wrap;
}
.container {
  position: relative;

  display: flex;
  overflow: hidden;

  width: 100%;
  min-height: 78vh;
  margin-top: 3vh;
  padding: 30px;

  border-radius: 48px;
  background: #f3f4f7;
}

.successfully {
  justify-content: center;
  align-items: center;
}

.error_server {
  display: flex;

  text-align: center;

  flex-flow: column;
  justify-content: center;

  span {
    margin: 2vh 0;

    color: #677b8f;
  }

  button {
    position: relative;
    z-index: 10;
    left: 50%;

    max-width: 161px;
    max-height: 48px;
    padding: 16px;

    cursor: pointer;
    transform: translate(-50%, 0);

    color: white;
    border: 0;
    border-radius: 12px;
    outline: none;
    background: #4959ff;
  }
}

@media screen and (max-width: 600px) {
  .AircraftsBlock {
    overflow: hidden;

    max-width: 100%;
    padding: 0 0 0 0;

    justify-content: center;
  }

  .container {
    justify-content: center;
  }
}
</style>
