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
    font-weight: bold;
    font-size: 40px;
    line-height: 120%;
    color: #012345;
  }
  img {
    cursor: pointer;
  }
}
.input_data {
  display: flex;
  align-items: center;
  flex-flow: column;
  width: 100%;
  input {
    width: 80%;
    background: #f3f4f7;
    border-radius: 12px;
    outline: none;
    height: 6vh;
    color: #677b8f;
    font-size: 16px;
    border: 0;
    margin: 20px 0;
    padding: 0 20px;
  }
}
button {
  background: #4959ff;
  border-radius: 12px;
  color: #fcfcfc;
  font-weight: bold;
  font-size: 16px;
  outline: none;
  border: 0;
  padding: 15px 200px;
  cursor: pointer;
  position: relative;
  left: 50%;
  transform: translate(-50%, 0);
}
.img_add {
  width: 80%;
  height: 40%;
  background: #f3f4f7;
  border-radius: 24px;
  cursor: pointer;
  display: flex;
  justify-content: center;
  position: relative;
  left: 50%;
  transform: translate(-50%, 0);
  margin-top: 50px;
  align-items: center;
}

.popup-container {
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  z-index: 1000;
  background-color: rgba(0, 0, 0, 0.4);

  display: -webkit-box;
  display: flex;
  justify-content: flex-end;
  -webkit-justify-content: flex-end;
  align-items: flex-end;
  -webkit-align-items: flex-end;
}

.popup-content {
  position: relative;
  z-index: 10001;
  background: #fcfcfc;
  border-radius: 48px 0 0 48px;
  padding: 20px;
  height: 100vh;
  width: 600px;
  box-sizing: border-box;
  font-size: 15px;

  line-height: 1.5;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.35);
}

@media screen and (max-width: 600px) {
  .popup-content {
    border-radius: 24px 24px 0px 0px;
    position: relative;
    width: 100vw;
    height: 90vh;
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
    padding: 15px 140px;
    top: 10px;
  }
}

[v-cloak] {
  display: none;
}
</style>
