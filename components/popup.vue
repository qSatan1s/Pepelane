<template id="popup">
  <div class="popup-container" @click="close">
    <div class="popup-content" @click.stop>
      <div class="title">
        <h1>Add new vehicle</h1>
        <img src="../assets/img/close.png" @click="close" alt="close" />
      </div>
      <div class="img_add">
        <img src="../assets/img/add_img.png" alt="add" />
      </div>
      <div class="input_data">
        <input placeholder="Name" />
        <input placeholder="Description " />
        <input placeholder="Rent price " />
      </div>

      <button>Complete</button>
    </div>
  </div>
</template>

<script>
export default {
  methods: {
    close: function () {
      this.$emit('close')
    },
  },
}
</script>

<style lang="scss" scoped>
.title {
    display: flex;

    justify-content: space-around;

    h1 {
        font-size: 40px;
        font-weight: bold;
        line-height: 120%;

        color: #012345;
    }

    img {
        cursor: pointer;
    }
}

.input_data {
    display: flex;

    width: 100%;

    align-items: center;
    flex-flow: column;

    input {
        font-size: 16px;

        width: 80%;
        height: 6vh;
        margin: 20px 0;
        padding: 0 20px;

        color: #677b8f;
        border: 0;
        border-radius: 12px;
        outline: none;
        background: #f3f4f7;
    }
}

button {
    font-size: 16px;
    font-weight: bold;

    position: relative;
    left: 50%;

    padding: 15px 200px;

    cursor: pointer;
    transform: translate(-50%, 0);

    color: #fcfcfc;
    border: 0;
    border-radius: 12px;
    outline: none;
    background: #4959ff;
}

.img_add {
    position: relative;
    left: 50%;

    display: flex;

    width: 80%;
    height: 40%;
    margin-top: 50px;

    cursor: pointer;
    transform: translate(-50%, 0);

    border-radius: 24px;
    background: #f3f4f7;

    justify-content: center;
    align-items: center;
}

.popup-container {
    position: fixed;
    z-index: 1000;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;

    display: -webkit-box;
    display: flex;

    background-color: rgba(0, 0, 0, .4);

    justify-content: flex-end;
    -webkit-justify-content: flex-end;
    align-items: flex-end;
    -webkit-align-items: flex-end;
}

.popup-content {
    font-size: 15px;
    line-height: 1.5;

    position: relative;
    z-index: 10001;

    box-sizing: border-box;
    width: 600px;
    height: 100vh;
    padding: 20px;

    border-radius: 48px 0 0 48px;
    background: #fcfcfc;
    box-shadow: 0 2px 10px rgba(0, 0, 0, .35);
}

@media screen and (max-width: 600px) {
    .popup-content {
        position: relative;

        width: 100vw;
        height: 90vh;

        border-radius: 24px 24px 0 0;
    }

    .title {
        h1 {
            font-size: 24px;
        }

        img {
            width: 32px;
            height: 32px;
        }
    }

    .img_add {
        max-width: 343px;
        max-height: 260px;
        margin: 0;
    }

    .input_data {
        input {
            max-width: 343px;
            max-height: 52px;
        }
    }

    button {
        top: 10px;

        padding: 15px 140px;
    }
}

[v-cloak] {
    display: none;
}
</style>
