<template>
  <section class="container">
    <img src="~assets/img/logo.png" alt="Nuxt.js Logo" class="logo" />
    <div class="container-main" v-if="!noUserRecord">
      <div class="container-main__top">
        <div class="container-main__top-left">
          <div class="container-main__top-left-name">{{user.UserName}}</div>
          <div class="container-main__top-left-no">{{user.UserId}}</div>
        </div>
        <div class="container-main__top-right">
          <!-- <img src="~static/user1.png" alt="avatar" class="avatar" /> -->
          <img :src="'/assets/avatar/' + user.UserAvatar" alt="头像" class="avatar" />
          <!-- <img :src="'static/' + user.UserAvatar" alt="avatar" class="avatar" /> -->
        </div>
      </div>
      <div class="container-main__middle">
        <div class="container-main__middle-title">
          个人信息
        </div>
        <div class="container-main__middle-desc">
          <img :src="'/assets/qrcode/' + user.UserQrcode" alt="二维码" class="qrcode" v-if="user.UserQrcode" />
          <!-- <img src="~static/userqrcode1.png" alt="qrcode" class="qrcode" /> -->
          <div class="container-main__middle-desc-content" :style="{'marginLeft': user.UserQrcode ? '' : '50px'}">
            <div>公司：{{user.UserCompany}}</div>
            <div>职务：{{user.UserDuty}}</div>
            <div>常驻：{{user.UserLive}}</div>
          </div>
        </div>
      </div>
      <div class="container-main__bottom">
        <div class="container-main__bottom-nav">
          <title-nav>
            <span class="title-name">兴趣爱好</span>
          </title-nav>
          <div class="container-main__bottom-nav-desc">
            {{user.UserHobby}}
          </div>
        </div>
        <div class="container-main__bottom-nav">
          <title-nav>
            <span class="title-name">从事行业</span>
          </title-nav>
          <div class="container-main__bottom-nav-desc">
            <ul>
              <li v-html="user.UserExperience"></li>
            </ul>
          </div>
        </div>
        <div class="container-main__bottom-nav">
          <title-nav>
            <span class="title-name">本人所在部门及介绍</span>
          </title-nav>
          <div class="container-main__bottom-nav-desc">
            <ul>
              <li>{{user.UserDepartment}}</li>
            </ul>
          </div>
        </div>
        <div class="container-main__bottom-nav">
          <title-nav>
            <span class="title-name">企业简介</span>
          </title-nav>
          <div class="container-main__bottom-nav-desc">
            <ul>
              <li v-html="user.UserEnterprise"></li>
            </ul>
          </div>
        </div>
        <div class="container-main__bottom-nav">
          <title-nav>
            <span class="title-name">校友资源需求</span>
          </title-nav>
          <div class="container-main__bottom-nav-desc" v-html="user.UserContribute">
          </div>
        </div>
      </div>
    </div>
    <div class="container-main" v-else>
      没有对应的搜索结果~
    </div>
  </section>
</template>

<script>
import axios from '~/plugins/axios';
if (process.BROWSER_BUILD) {
  require('lib-flexible')
}
import AppLogo from '~/components/AppLogo.vue';
import TitleNav from '~/components/TitleNav.vue';

export default {
  fetch({ store }) {
    return store.dispatch('loadUsers');
  },
  // async asyncData() {
  //   let { data } = await axios.get('/api/user/json');
  //   console.log(data.data);
  //   if (data.code !== 0) {
  //     return { user: {} };
  //   }
  //   return { user: data.data };
  // },
  computed: {
    user() {
      return this.$store.state.currentUser;
    },
    noUserRecord() {
      return !this.$store.state.currentUser.UserName;
    }
  },
  components: {
    AppLogo,
    TitleNav
  }
}
</script>

<style lang="less">
@import "~assets/css/mixins.less";
.container {
  min-height: 100vh;
  // display: flex;
  // justify-content: center;
  flex-direction: column;
  // align-items: flex-start;
  text-align: center;
  background: #ae0d15;
  .flex(center, flex-start);
  .logo {
    height: 100px;
    padding: 10px;
  }
}

.container-main {
  flex: 1;
  width: 100%;
  font-size: @font-size-large;
  &__top {
    width: 100%;
    height: 520px;
    padding: 24px 60px;
    .flex(center, center);
    &-left {
      height: inherit;
      width: 50%;
      flex-direction: column;
      .flex(center, center);
      &-name {
        font-size: @font-size-large;
        font-weight: bold;
      }
      &-no {
        font-size: @font-size-common;
      }
    }
    &-right {
      height: inherit;
      width: 50%;
      .flex(flex-start, center);
      .avatar {
        height: auto;
        width: 300px;
        box-shadow: 6px 6px 40px #888;
      }
    }
  }
  &__middle {
    margin: 0px 40px;
    border: 4px solid #fff;
    border-radius: 60px;
    text-align: center;
    font-size: @font-size-small;
    &-title {
      height: 56px;
      line-height: 56px;
      border-bottom: 1px solid #fff;
    }
    &-desc {
      padding: 10px 0px;
      .flex;
      min-height: 200px;
      
      .qrcode {
        margin: 0 20px;
        height: 150px;
        width: 150px;
      }
      &-content {
        flex: 1;
        text-align: left;
        // float: left;
        // flex-direction: column;
        // .flex(flex-start, flex-start);
      }
      span {
        line-height: 32px;
      }
    }
  }
  &__bottom {
    margin: 20px 40px;
    text-align: left;
    &-nav {
      font-size: @font-size-small;
    }
    &-nav-desc {
      padding: 20px 0 0 100px;
    }
    .title-name {
      flex: 1;
      margin-top: 36px;
      font-weight: bold;
      font-size: @font-size-common;
      border-left: 4px solid #fff;
      border-bottom: 4px solid #fff;
      padding: 0 20px;
    }
  }
}

.title {
  font-family: "Quicksand", "Source Sans Pro", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif; /* 1 */
  display: block;
  font-weight: 300;
  font-size: 100px;
  color: #35495e;
  letter-spacing: 1px;
}

.subtitle {
  font-weight: 300;
  font-size: 42px;
  color: #526488;
  word-spacing: 5px;
  padding-bottom: 15px;
}

.links {
  padding-top: 15px;
}
</style>
