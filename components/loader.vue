<template>
  <div class="lds-dual-ring"></div>
</template>

<style lang="scss" scoped>
.lds-dual-ring {
  display: inline-block;

  width: 110px;
  height: 110px;
}
.lds-dual-ring:after {
  display: block;

  width: 94px;
  height: 94px;
  margin: 8px;

  content: ' ';
  animation: lds-dual-ring 1.2s linear infinite;

  border: 6px solid #fcf;
  border-color: #fcf transparent #fcf transparent;
  border-radius: 50%;
}
@keyframes lds-dual-ring {
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
}
</style>
