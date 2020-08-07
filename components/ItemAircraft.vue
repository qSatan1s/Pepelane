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
  cursor: pointer;
  background: #fcfcfc;
  border-radius: 32px;
  padding: 12px;
  width: 30%;
  margin: 7px;
  height: 164px;
  min-width: 343px;
  display: flex;
  align-items: center;
}
.preview {
  border-radius: 24px;
  overflow: hidden;
  margin-left: 2vw;
  max-width: 88px;
  max-height: 88px;
  img {
    max-width: 100%;
    max-height: 100%;
  }
}

.Aircraft_info {
  margin-left: 2vw;
  h2 {
    font-style: normal;
    font-weight: bold;
    font-size: 16px;
    line-height: 14px;
    color: #012345;
  }
  span {
    display: block;
    font-family: Codec Pro;
    font-style: normal;
    font-weight: 300;
    font-size: 12px;
    line-height: 148%;

    color: #677b8f;
    margin: 1vh 0;
  }
  p {
    font-family: Codec Pro;
    font-style: normal;
    font-weight: bold;
    font-size: 14px;
    line-height: 148%;
    color: #f84ab3;
  }
}

@media screen and (max-width: 600px) {
  .AircraftsItem {
    max-width: 343px;
    max-height: 151px;
    overflow: hidden;
    justify-content: center;
  }

  span {
    width: 210px;
  }
}
</style>
