<template>
  <section class="button">
    <div class="sort">
      <span>Rent</span>
      <select v-model="selected">
        <option
          v-for="option in options"
          v-bind:value="option.value"
          :key="option.value"
        >{{ option.text }}</option>
      </select>
    </div>
    <div class="addNew">
      <span>Add new</span>
      <button @click="alert">+</button>
    </div>
    <popup v-if="popup.show" v-on:close="popup.show = false" v-bind:text="popup.text" v-cloak></popup>
  </section>
</template>

<script>
import popup from './popup.vue'
export default {
  props: ['options'],
  data: () => ({
    popup: {
      show: false,
      text: '',
    },
    selected: 'whatever',
  }),
  methods: {
    alert: function ($text) {
      this.popup.text = $text
      this.popup.show = true
    },
    runComponent: function () {
      var _cat = new cat()
      _cat.$mount()
      this.popup.show = true
      this.popup.text = new cat().$mount().$refs.wrapper.outerHTML || ''
    },
  },
  components: { popup },
  watch: {
    async selected() {
      await this.$store.commit('sortItems', this.selected)
    },
  },
}
</script>

<style lang="scss" scoped>
.button {
  display: flex;

  width: 100%;
  max-height: 30px;
  margin-bottom: 40px;
  padding: 0 20px;

  justify-content: space-between;
  align-items: center;
}

.sort {
  display: flex;

  align-items: center;
  span {
    font-size: 2.5em;
    font-weight: bold;

    color: #012345;
  }
  select {
    font-size: 2.5em;
    font-weight: bold;

    margin-left: 1vw;

    cursor: pointer;

    color: #4959ff;
    border: 0;
    outline: none;
    background: none;
  }

  option {
    border: 0;
    background: none;
  }
}

.addNew {
  display: flex;

  align-items: center;
  span {
    font-size: 20px;
    font-weight: bold;
    line-height: 140%;

    color: #4959ff;
  }
  button {
    font-size: 25px;

    margin-left: 2vw;
    padding: 8px 15px;

    cursor: pointer;

    color: white;
    border: 0;
    border-radius: 16px;
    outline: none;
    background: #4959ff;
  }
}

@media screen and (max-width: 600px) {
  .button {
    font-size: 8px;

    position: relative;

    display: flex;
    overflow: hidden;

    padding: 0 0;

    align-items: center;
    justify-content: space-around;
  }

  .addNew {
    span {
      font-size: 16px;

      white-space: nowrap;
    }
    button {
      padding: 0.2rem 8px;
    }
  }
}
</style>
