<template>
  <div @click="Theme = !Theme" class="theme_mode item_header">
    <div v-if="!this.Theme">
      <img src="../assets/img/Vector-1.png" alt="Night mod" />
      <span>Night mod</span>
    </div>

    <div v-if="this.Theme">
      <img src="../assets/img/day.png" alt="Day mod" />
      <span>Day mod</span>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.theme_mode {
  cursor: pointer;
  width: 100px;

  div {
    display: flex;
    align-items: center;

    span {
      margin-left: 1vw;
    }
  }
  @media screen and (max-width: 600px) {
    div {
      margin-left: 5px;
    }
    span {
      display: none;
    }
  }
}
</style>

<script>
import { mapGetters } from 'vuex'
export default {
  data: () => ({
    Theme: false,
  }),
  watch: {
    async Theme(Theme) {
      await this.$store.commit('setTheme', Theme)
      this.submitHandler()
    },
  },
  methods: {
    async submitHandler(theme) {
      const body = document.querySelector('body')
      body.style.background = this.theme.body
      body.style.color = this.theme.color
    },
  },
  computed: {
    ...mapGetters(['theme']),
  },
}
</script>



