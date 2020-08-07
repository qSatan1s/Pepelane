<template>
  <div>
    <HeaderBlock />
    <Nuxt />
  </div>
</template>

<script>
import HeaderBlock from '../components/Header'
export default {
  components: {
    HeaderBlock,
  },
}
</script>

<style>
@font-face {
  font-family: Codec Pro;
  src: url('../assets/fonts/codec-pro.regular.ttf');
}

html {
  font-family: Codec Pro;
  font-size: 16px;
  word-spacing: 1px;
  -ms-text-size-adjust: 100%;
  -webkit-text-size-adjust: 100%;
  -moz-osx-font-smoothing: grayscale;
  -webkit-font-smoothing: antialiased;
  box-sizing: border-box;
  margin: 64px;
}

@media screen and (max-width: 600px) {
  html {
    margin: 0;
  }
}

*,
*::before,
*::after {
  box-sizing: border-box;
  margin: 0;
}

a {
  text-decoration: none;
}
</style>
