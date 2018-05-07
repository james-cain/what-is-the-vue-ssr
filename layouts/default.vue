<template>
  <div>
    <form action="" v-on:submit.prevent="submit">
      <mt-search
        class="search"
        v-model="value"
        cancel-text="取消"
        placeholder="搜索"
        @keyup.native.enter="search(value)">
      </mt-search>
    </form>
    <nuxt/>
  </div>
</template>

<script>
export default {
  data() {
    return {
      value: '',
    }
  },
  methods: {
    search(value) {
      const key = {};
      key.keyword = value;
      this.$store.dispatch('searchUser', key);
      document.activeElement.blur();
    },
    submit() {
      return false;
    }
  }
}
</script>

<style lang="less">
html {
  font-family: "Source Sans Pro", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif;
  font-size: 16px;
  word-spacing: 1px;
  -ms-text-size-adjust: 100%;
  -webkit-text-size-adjust: 100%;
  -moz-osx-font-smoothing: grayscale;
  -webkit-font-smoothing: antialiased;
  box-sizing: border-box;
}

*, *:before, *:after {
  box-sizing: border-box;
  margin: 0;
}

.button--green {
  display: inline-block;
  border-radius: 4px;
  border: 1px solid #3b8070;
  color: #3b8070;
  text-decoration: none;
  padding: 10px 30px;
}

.button--green:hover {
  color: #fff;
  background-color: #3b8070;
}

.button--grey {
  display: inline-block;
  border-radius: 4px;
  border: 1px solid #35495e;
  color: #35495e;
  text-decoration: none;
  padding: 10px 30px;
  margin-left: 15px;
}

.button--grey:hover {
  color: #fff;
  background-color: #35495e;
}

.search {
  &.mint-search {
    width: 100%;
    height: 100%;
    .mint-searchbar {
      padding: 16px 20px;
      .mint-searchbar-inner {
        height: 56px;
        padding: 8px 12px;
      }
    }
  }
}
</style>
