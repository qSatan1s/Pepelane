<template>
  <div>
    <div class="loader" v-if="loader">
      <loader />
    </div>
    <div class="details" v-else>
      <div class="details_img">
        <img :src="item.image" />
      </div>
      <section class="one">
        <div class="Specifications">
          <h1>{{item.name}}</h1>
          <nav>
            <span
              v-for="link in links"
              :key="link.value"
              :class="{ active: link.check  }"
              @click="onClick(link)"
            >{{ link.text }}</span>
          </nav>
        </div>
        <div class="Specifications" v-if="links[0].check">
          <p>
            Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet
            sint. Velit officia consequat duis enim velit mollit. Exercitation
            veniam consequat sunt nostrud amet.
          </p>
          <h2>Features:</h2>
          <div class="Features">
            <div class="item img_first">
              <img src="../assets/img/Group4.png" alt />
              <div class="item_text">
                <h3>A challenge for a true champion</h3>
                <p>
                  Amet minim mollit non deserunt ullamco est sit aliqua dolor do
                  amet sint. Velit officia consequat duis enim velit mollit.
                </p>
              </div>
            </div>
            <div class="item img_first">
              <img src="../assets/img/Group5.png" alt />
              <div class="item_text">
                <h3>Pilot's sweaty hands</h3>
                <p>
                  Amet minim mollit non deserunt ullamco est sit aliqua dolor do
                  amet sint. Velit officia consequat duis enim velit mollit.
                </p>
              </div>
            </div>
          </div>
        </div>

        <div class="Specifications Team" v-if="links[1].check">
          <p>Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint.</p>
          <h2>Qualified specialists</h2>
          <div class="Features">
            <div class="item">
              <img src="../assets/img/1.png" alt />
              <div class="item_text">
                <h3>Marvin McKinney</h3>
                <p>Pilot assistant</p>
              </div>
            </div>
            <div class="item">
              <img src="../assets/img/2.png" alt />
              <div class="item_text">
                <h3>Savannah Nguyen</h3>
                <p>Mechanic</p>
              </div>
            </div>
            <div class="item">
              <img src="../assets/img/3.png" alt />
              <div class="item_text">
                <h3>Courtney Henry</h3>
                <p>Stewardess</p>
              </div>
            </div>
          </div>
          <p
            class="description"
          >Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.</p>
        </div>

        <div class="Specifications terms" v-if="links[2].check === 1">
          <p>Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint</p>
          <p>Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet</p>
          <h3>Additional conditions:</h3>
          <ul>
            <li>
              <span>Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.</span>
            </li>
            <li>
              <span>Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint.</span>
            </li>
            <li>
              <span>Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit.</span>
            </li>
          </ul>
        </div>

        <div class="button_price">
          <span>
            Rent for
            <span class="price">{{ item.rent }} $/h</span>
          </span>
          <button>Rent now</button>
        </div>
      </section>
    </div>
  </div>
</template>

<script>
import loader from '../components/loader'
export default {
  data: () => ({
    loader: true,
    links: [
      { text: 'Specifications', check: false },
      { text: 'Team', check: false },
      { text: 'Rent terms', check: 1 },
    ],
  }),
  components: {
    loader,
  },
  mounted() {
    if (!this.item) {
      this.$router.push({ name: 'Home' })
    }
    setTimeout(() => {
      this.loader = false
    }, 2000)
  },
  props: ['item'],
  methods: {
    onClick(link) {
      this.links.forEach((c) => (c.check = false))
      this.links.forEach((c) =>
        link.text == 'Rent terms' ? (link.check = 1) : (link.check = true)
      )
    },
  },
}
</script>

<style lang="scss" scoped>
.active {
  color: #4959ff;
}

.loader {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 60vh;
}
.button_price {
  background: #f3f4f7;
  border-radius: 16px;
  padding: 40px;
  position: relative;
  left: 55%;
  max-height: 80px;
  transform: translate(-50%, 0);
  max-width: 536px;
  margin-top: 2vh;
  display: flex;
  justify-content: space-between;
  align-items: center;

  span {
    font-weight: bold;
    font-size: 20px;
    color: #012345;

    .price {
      color: #f84ab3;
    }
  }
  button {
    background: #4959ff;
    border-radius: 12px;
    color: white;
    border: 0;
    outline: none;
    padding: 14px 20px;
  }
}

.details {
  display: flex;
  justify-content: center;
  position: relative;
  width: 100%;
  margin-top: 7vh;
  padding: 0 10px;
}
.details_img {
  border-radius: 24px;
  overflow: hidden;

  max-width: 712px;
  max-height: 700px;
  img {
    width: 100%;
    height: 100%;
    object-fit: contain;
  }
}

.Specifications {
  display: flex;
  flex-flow: column;
  margin-top: 2vh;
  margin-left: 5vw;

  width: 500px;

  nav {
    margin: 32px 0px;
    font-weight: bold;
    color: #677b8f;
    span {
      margin: 0 5px;
      cursor: pointer;
    }
  }

  h1 {
    white-space: nowrap;
    font-weight: bold;
    font-size: 40px;
  }

  p {
    font-weight: 300;
    font-size: 14px;
    width: 100%;
    color: #677b8f;
  }
  h2 {
    margin-top: 3vh;
  }
}
.Features {
  display: flex;
  flex-flow: column;
}
.item {
  margin-top: 3vh;
  display: flex;

  .item_text {
    margin-left: 1vw;
    margin-top: 1vh;
    p {
      margin-top: 1vh;
    }
  }
}

.Team {
  .Features {
    display: flex;
    flex-flow: initial;
    margin-top: 1vh;
    .item {
      margin: 0 10px;
      flex-flow: column;
    }
    h3 {
      font-family: Codec Pro;
      font-style: normal;
      font-weight: bold;
      font-size: 16px;
      line-height: 14px;
    }
  }
}
.description {
  font-family: Codec Pro;
  font-style: normal;
  font-weight: 300;
  font-size: 14px;
  line-height: 146%;
  display: block;
  margin-top: 3vh;
  margin-left: 2vw;
  color: #677b8f;
}

.terms {
  p {
    margin-bottom: 3vh;
  }
  ul {
    padding: 0 10px;
  }
  li {
    color: red; /* Цвет маркеров */
  }
  li span {
    display: block;
    margin-top: 15px;
    font-style: normal;
    font-weight: 300;
    font-size: 14px;
    line-height: 146%;
    color: #677b8f;
  }
}

@media screen and (max-width: 600px) {
  .details {
    align-items: center;
    flex-flow: column;
    overflow: hidden;
  }

  .Specifications {
    width: 100%;
    position: relative;
    height: 100%;
    h1 {
      font-family: Codec Pro;
      font-style: normal;
      font-weight: bold;
      font-size: 24px;
      line-height: 120%;
      color: #012345;
    }
    nav {
      font-size: 16px;
      line-height: 14px;
      margin: 20px 0;
    }
    h3 {
      font-weight: bold;
      font-size: 20px;
      line-height: 140%;

      color: #012345;
    }

    .img_first {
      h3 {
        font-size: 16px;
      }
      img {
        max-width: 64px;
        max-height: 80px;
      }
    }
  }
  .details_img {
    border-radius: 24px;
    max-width: 343px;
    max-height: 332px;
  }

  .button_price {
    max-height: 60px;
    transform: translate(-55%, 0);
    margin: 30px 0;

    span {
      font-size: 16px;
    }
  }
  .Team {
    .Features {
      display: flex;
      flex-wrap: wrap;

      .item {
        margin-top: 30px;

        flex-flow: inherit;

        img {
          max-height: 80px;
          max-width: 132px;
        }
      }
    }
  }
}
</style>
