<template>
  <div class="title-nav">
      <div class="title-nav__circle"></div>
      <div class="line"></div>
      <slot></slot>
  </div>
</template>

<style lang="less" scoped>
@import "~assets/css/mixins.less";
    .title-nav {
        .flex(flex-start, center);
        &__circle {
            border-radius: 50%;
            height: 75px;
            width: 75px;
            border: 4px solid #fff;
        }
        .line {
            border: 2px solid #fff;
            width: 20px;
            height: 4px;
        }
    }
</style>

