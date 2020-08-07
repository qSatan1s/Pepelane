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
  width: 100%;
  max-height: 30px;
  padding: 0 20px;
  display: flex;
  justify-content: space-between;
  margin-bottom: 40px;
  align-items: center;
}

.sort {
  display: flex;
  align-items: center;
  span {
    font-weight: bold;
    font-size: 2.5em;
    color: #012345;
  }
  select {
    cursor: pointer;
    border: 0px;
    outline: none;
    background: none;
    font-weight: bold;
    font-size: 2.5em;
    color: #4959ff;
    margin-left: 1vw;
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
    font-weight: bold;
    font-size: 20px;
    line-height: 140%;
    color: #4959ff;
  }
  button {
    cursor: pointer;
    margin-left: 2vw;
    background: #4959ff;
    border-radius: 16px;
    border: 0;
    font-size: 25px;
    color: white;
    outline: none;
    padding: 8px 15px;
  }
}

@media screen and (max-width: 600px) {
  .button {
    display: flex;
    overflow: hidden;
    align-items: center;
    justify-content: space-around;
    position: relative;
    padding: 0 0;
    font-size: 8px;
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
