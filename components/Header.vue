<template>
  <header>
    <nuxt-link to="/" class="header_left">
      <img class="logo" src="../assets/img/logo.png" alt="Pepelane" />
      <span>World's first affordable airsharing</span>
    </nuxt-link>
    <section class="header_right">
      <theme />
      <div class="notifications item_header">
        <nuxt-link to="#">
          <img src="../assets/img/Vector.png" alt="message" />
        </nuxt-link>
        <nuxt-link to="#">
          <img src="../assets/img/Frame.png" alt="notifications" />
        </nuxt-link>
      </div>
      <nuxt-link to="#" class="profle item_header">
        <span>Bessie Cooper</span>
        <div class="profile_avatar">
          <img src="../assets/img/user.png" alt="Bessie Cooper" />
        </div>
      </nuxt-link>
    </section>
  </header>
</template>

<script>
import theme from './theme'
export default {
  props: ['body'],

  components: {
    theme,
  },
}
</script>

<style lang="scss" scoped>
header {
  display: flex;

  justify-content: space-between;
}

span {
  margin-left: 1vw;

  color: #677b8f;
}

.header_left {
  display: flex;

  align-items: center;
}

.header_right {
  display: flex;

  width: 35vw;

  justify-content: space-between;
}

.theme_mode {
  width: 120px;

  cursor: pointer;

  div {
    display: flex;

    align-items: center;
  }
}

.item_header {
  display: flex;

  align-items: center;
}

.notifications {
  a {
    margin-right: 0.5vw;
  }
}

.profle {
  span {
    font-weight: bold;

    margin-right: 1vw;

    color: #012345;
  }

  .profile_avatar {
    overflow: hidden;

    border-radius: 100%;
  }
}

@media screen and (max-width: 600px) {
  header {
    width: 100vw;
    margin-top: 1vh;
  }

  span {
    display: none;
  }

  .logo {
    width: 113px;
  }

  img {
    margin: 0 8px 0 0;
  }

  .header_right {
    width: 41vw;
  }

  .profile_avatar {
    img {
      width: 32px;
      height: 32px;
    }
  }
}
</style>
