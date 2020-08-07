<template>
  <div class="AircraftsItem" :id="id">
    <div class="preview">
      <img :src="preview" :alt="name" />
    </div>
    <div class="Aircraft_info">
      <h2>{{ name }}</h2>
      <span>{{ description }}</span>
      <p>{{ rent }} $/h</p>
    </div>
  </div>
</template>

<script>
export default {
  props: ['name', 'rent', 'description', 'preview', 'id'],
}
</script>

<style lang="scss" scoped>
.AircraftsItem {
  display: flex;

  width: 30%;
  min-width: 343px;
  height: 164px;
  margin: 7px;
  padding: 12px;

  cursor: pointer;

  border-radius: 32px;
  background: #fcfcfc;

  align-items: center;
}
.preview {
  overflow: hidden;

  max-width: 88px;
  max-height: 88px;
  margin-left: 2vw;

  border-radius: 24px;
  img {
    max-width: 100%;
    max-height: 100%;
  }
}

.Aircraft_info {
  margin-left: 2vw;
  h2 {
    font-size: 16px;
    font-weight: bold;
    font-style: normal;
    line-height: 14px;

    color: #012345;
  }
  span {
    font-family: Codec Pro;
    font-size: 12px;
    font-weight: 300;
    font-style: normal;
    line-height: 148%;

    display: block;

    margin: 1vh 0;

    color: #677b8f;
  }
  p {
    font-family: Codec Pro;
    font-size: 14px;
    font-weight: bold;
    font-style: normal;
    line-height: 148%;

    color: #f84ab3;
  }
}

@media screen and (max-width: 600px) {
  .AircraftsItem {
    overflow: hidden;

    max-width: 343px;
    max-height: 151px;

    justify-content: center;
  }

  span {
    width: 210px;
  }
}
</style>
