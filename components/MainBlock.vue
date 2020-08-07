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
  justify-content: center;
  width: 100%;
  align-items: center;
}
section {
  width: 100%;
}
.AircraftsBlock {
  display: block;
  width: 100%;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
}
.container {
  display: flex;
  overflow: hidden;
  position: relative;
  margin-top: 3vh;
  background: #f3f4f7;
  border-radius: 48px;
  width: 100%;
  min-height: 78vh;
  padding: 30px;
}

.successfully {
  justify-content: center;
  align-items: center;
}

.error_server {
  display: flex;
  flex-flow: column;
  text-align: center;
  justify-content: center;

  span {
    color: #677b8f;
    margin: 2vh 0;
  }

  button {
    z-index: 10;
    cursor: pointer;
    color: white;
    background: #4959ff;
    outline: none;
    border: 0;
    border-radius: 12px;
    max-width: 161px;
    max-height: 48px;
    position: relative;
    padding: 16px;
    left: 50%;
    transform: translate(-50%, 0);
  }
}

@media screen and (max-width: 600px) {
  .AircraftsBlock {
    max-width: 100%;
    overflow: hidden;
    justify-content: center;
    padding: 0 0 0 0;
  }

  .container {
    justify-content: center;
  }
}
</style>
