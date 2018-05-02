<template>
  <section class="container">
    <img src="~assets/img/logo.png" alt="Nuxt.js Logo" class="logo" />
    <div class="container-main">
      <div class="container-main__top">
        <div class="container-main__top-left">
          <div class="container-main__top-left-name">王胜</div>
          <div class="container-main__top-left-no">EMBA1708</div>
        </div>
        <div class="container-main__top-right">
          <img src="~assets/img/me.jpeg" alt="avatar" class="avatar" />
        </div>
      </div>
      <div class="container-main__middle">
        <div class="container-main__middle-title">
          个人信息
        </div>
        <div class="container-main__middle-desc">
          <span>职务：ADI医疗健康事业部，亚太区市场总监</span>
          <span>地区：家乡吉林的北京人</span>
          <span>专业：电子工程（硕研）</span>
          <span>电话：13911052089（Wechat）</span>
          <span>邮箱：13911052089@139.com</span>
        </div>
      </div>
      <div class="container-main__bottom">
        <div class="container-main__bottom-nav">
          <title-nav>
            <span class="title-name">兴趣爱好</span>
          </title-nav>
          <div class="container-main__bottom-nav-desc">
            跑步 看电影 喝啤酒（能且仅能1瓶！）
          </div>
        </div>
        <div class="container-main__bottom-nav">
          <title-nav>
            <span class="title-name">行业及经历</span>
          </title-nav>
          <div class="container-main__bottom-nav-desc">
            <ul>
              <li>电子行业、科技创新、智能硬件</li>
              <li>此行业10余年跨国公司包括500强的战斗经历</li>
            </ul>
          </div>
        </div>
        <div class="container-main__bottom-nav">
          <title-nav>
            <span class="title-name">所在部门及介绍</span>
          </title-nav>
          <div class="container-main__bottom-nav-desc">
            <ul>
              <li>全球医疗健康事业部。</li>
              <li>
                负责整个亚太区的业务发展；<br>
                团队建设和管理；<br>
                市场策略的制定和执行；<br>
                客户支持；<br>
                市场生态及新业务模式建立；<br>
                品牌维护及媒体活动；<br>
              </li>
            </ul>
          </div>
        </div>
        <div class="container-main__bottom-nav">
          <title-nav>
            <span class="title-name">企业简介</span>
          </title-nav>
          <div class="container-main__bottom-nav-desc">
            <ul>
              <li>Analog Devices Inc.（ADI，安纳洛器件），analog.com</li>
              <li>
                全球领先的半导体芯片厂商，总部波士顿；<br>
                50多年历史，进入中国30余载；<br>
                “超越一切可能”为企业价值观，强调创新；<br>
                服务全球60000多家客户，全球员工10000余人；<br>
                35亿美金销售（2016），毛利率大约70%；<br>
                标准普尔500指数股票之一；<br>
              </li>
            </ul>
          </div>
        </div>
        <div class="container-main__bottom-nav">
          <title-nav>
            <span class="title-name">校友资源需求及个人价值贡献</span>
          </title-nav>
          <div class="container-main__bottom-nav-desc">
            “产融结合”
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
if (process.BROWSER_BUILD) {
  require('lib-flexible')
}
import AppLogo from '~/components/AppLogo.vue';
import TitleNav from '~/components/TitleNav.vue';

export default {
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
        height: 450px;
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
      padding: 10px 40px;
      .flex(flex-start, flex-start);
      min-height: 200px;
      flex-direction: column;
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
