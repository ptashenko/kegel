<template>
  <div class="main-pre-land">
    <div class="main-pre-wrapper">
      <h1 class="main-pre-header-title mb-1">
        Learn how to <span class="red-text">improve stamina & potency</span> without pills
      </h1>
      <div class="head-block">
        <img class="icon-new" src="@/assets/images/icons/icon_new.svg"> 
        <span class="date-text">Published on {{todayDate}}</span>
        <div class="share-like-block">
          <img class="like" @click="like" :src="like_image"> 
          <span class="like-count">2,3K</span>
          <img class="share" src="@/assets/images/icons/share.png" @click="shareViaWebShare">
        </div>
      </div>
      <p class="main-pre-text mb-2">This proven method is highly effective, safe & takes <span class="text-bold red-text">just 5 minutes a day.</span></p>
      <div class="main-pre-img mb-3">
        <video src="@/assets/img/pre/1.mp4" alt="" class="main-pre-img-block mb-1" autoplay playsinline muted type="video/mp4" loop></video>
        <p class="main-pre-img-info text-center">“The secret is in this muscle”</p>
      </div>
      <p class="main-pre-text mb-2">Many men believe that to last longer and have strong potency you need to work out, eat healthy food, stress less & sleep well.</p>
      <p class="main-pre-text mb-3">These are great things, but the majority of men doesn't know one simple fact, which outweighs all activities above.</p>
      <h3 class="main-pre-title mb-2">Male performance relies on the Pelvic Floor (PF) Muscles</h3>
      <p class="main-pre-text red-text text-center text-bold mb-2">Strong PF muscles <span class="text-bold black-text">=</span> strong potency</p>
      <div class="main-pre-img mb-2">
        <video src="@/assets/img/pre/2.mp4" alt="" class="main-pre-img-block" autoplay playsinline muted type="video/mp4" loop></video>
      </div>
      <p class="main-pre-text mb-2">The PF muscles assist arteries & penile structure to pump & trap blood in male organs. This is what allows you to get & stay up.</p>
      <p class="main-pre-text red-text text-center text-bold mb-2">Strong PF muscles <span class="text-bold black-text">=</span> more stamina</p>
      <div class="main-pre-img mb-2">
        <video src="@/assets/img/pre/3.mp4" alt="" class="main-pre-img-block" autoplay playsinline muted type="video/mp4" loop></video>
      </div>
      <p class="main-pre-text mb-3">Contracting PF muscles sends a stop signal to the nervous system. This suppresses the expulsion reflex & delays the release.</p>
      <h3 class="main-pre-title mb-2">You can do these 2 simple steps to see how your PF muscles work</h3>
      <div class="main-pre-img mb-2">
        <video src="@/assets/img/pre/4.mp4" alt="" class="main-pre-img-block" autoplay playsinline muted type="video/mp4" loop></video>
      </div>
      <div class="main-pre-list mb-2">
        <div class="main-pre-list_item mb-2">
          <div class="main-pre-list_counter">1</div>
          <span class="main-pre-text main-pre-list_text">Imagine that you’re peeing</span>
        </div>
        <div class="main-pre-list_item">
          <div class="main-pre-list_counter">2</div>
          <span class="main-pre-text main-pre-list_text">Try to stop the flow midstream for 3 seconds</span>
        </div>
      </div>
      <p class="main-pre-text mb-2" style="opacity: 0.75">
        <i>You should feel tension of the muscles at the base of your genitals & perineum area</i>
      </p>
      <p class="main-pre-text mb-3">The muscles you just felt & used are <span class="text-bold">Pelvic Floor muscles!</span></p>
      <h3 class="main-pre-title mb-2">Without training, PF muscles weaken & lose tone. This can lead to performance problems</h3>
      <div class="main-pre-img mb-2">
        <img src="@/assets/img/pre/5.png" alt="" class="main-pre-img-block">
      </div>
      <p class="main-pre-text mb-3">
        Almost<span class="text-bold"> 50% of men</span> struggle with weak potency (ED) and "quick finishes" (PE) during their lifetime. And even if everything is fine right now, the risk of having those increases with age. This also happens due to neglecting PF muscles.
      </p>
      <h3 class="main-pre-title mb-2">You can strengthen PF muscles & enhance performance with Kegel exercises</h3>
      <p class="main-pre-text mb-2">Just as you can build up biceps with workouts, it's proven that you can strengthen PF muscles with Kegel exercises.</p>
      <p class="main-pre-text mb-3">Leading universities conducted studies in which men did Kegel exercises for several weeks. Here are the results:</p>
      <div class="main-pre-img mb-2">
        <img src="@/assets/img/pre/6.png" alt="" class="main-pre-img-block">
      </div>
      <ul style="padding-left: 25px">
        <li class="mb-2">
          <span class="main-pre-text main-pre-list"><span class="text-bold">82.5% of men</span> increased their stamina up to 7 times</span>
        </li>
        <li>
          <span class="main-pre-text main-pre-list"><span class="text-bold">75.5% of men</span> significantly improved their potency or even kicked ED</span>
        </li>
      </ul>
<!--      <div class="main-pre-list mb-2">-->
<!--        <div class="main-pre-list_item mb-2">-->
<!--          <div class="main-pre-list_counter">1</div>-->
<!--          <span class="main-pre-text main-pre-list_text"><span class="text-bold">82.5% of men</span> increased their stamina up to 7 times</span>-->
<!--        </div>-->
<!--        <div class="main-pre-list_item">-->
<!--          <div class="main-pre-list_counter">2</div>-->
<!--          <span class="main-pre-text main-pre-list_text"><span class="text-bold">75.5% of men</span> significantly improved their potency or even kicked ED</span>-->
<!--        </div>-->
<!--      </div>-->
      <p class="main-pre-text mb-3">Scientists also compared the results of men from Kegel group with men who took enhancement pills. It turned out that Kegel exercises had similar effectiveness!</p>
      <h3 class="main-pre-title mb-2">3 main pros of Kegel exercises compared to the Pills</h3>
      <div class="main-pre-list mb-2">
        <div class="main-pre-list_item mb-2">
          <div class="main-pre-list_counter">1</div>
          <span class="main-pre-text main-pre-list_text">Kegel exercises can make you <span class="text-bold">always be ready for action.</span> While pills need to be taken beforehand</span>
        </div>
        <div class="main-pre-list_item mb-2">
          <div class="main-pre-list_counter">2</div>
          <span class="main-pre-text main-pre-list_text">Kegel exercises have a <span class="text-bold">long-lasting effect.</span> Meanwhile, pills work only for a few hours</span>
        </div>
        <div class="main-pre-list_item">
          <div class="main-pre-list_counter">3</div>
          <span class="main-pre-text main-pre-list_text"><span class="text-bold">Kegel exercises are safe.</span> As for the pills, they can cause serious side-effects</span>
        </div>
      </div>
      <p class="main-pre-text mb-3" style="opacity: 0.75"><i>After proving such efficacy, scientists concluded that Kegel exercises should be considered as the first-line approach to improve performance</i></p>
      <h3 class="main-pre-title mb-2">The easiest way to start doing Kegel exercises is to follow the Dr. Kegel plan</h3>
      <p class="main-pre-text mb-2">The problem with Kegel exercises is that for most guys, it’s hard to train pelvic floor muscles on their own.</p>
      <p class="main-pre-text mb-2">That's why Dr. Kegel created a special plan to help train PF muscles correctly & achieve results effectively.</p>
      <div class="main-pre-list mb-4">
        <div class="main-pre-list_item mb-2">
          <img class="check" src="@/assets/images/icons/check_red.svg" alt="check">
          <span class="main-pre-text main-pre-list_text">Workouts take no more than <span class="text-bold">5 minutes a day.</span> It is perfect even for the busiest men</span>
        </div>
        <div class="main-pre-list_item mb-2">
          <img class="check" src="@/assets/images/icons/check_red.svg" alt="check">
          <span class="main-pre-text main-pre-list_text">You can <span class="text-bold">exercise in any place & situation</span>: lying on the couch, sitting at work, or standing in the bus. No one will notice that you’re exercising</span>
        </div>
        <div class="main-pre-list_item">
          <img class="check" src="@/assets/images/icons/check_red.svg" alt="check">
          <span class="main-pre-text main-pre-list_text">You can see noticeable <span class="text-bold">results in just a few weeks</span></span>
        </div>
      </div>
      <router-link class="link text-bold" to="/fpl_land">Tap here to check out the Dr. Kegel plan to last longer & improve potency</router-link>
    </div>
    <div class="main-pre-footer">
      <div class="main-pre-footer_info mb-2">
        <p class="mb-1">Appercut sp z o o</p>
        <p>Warsaw, Twarda 18, 00-105</p>
      </div>
      <div class="main-pre-footer_links">
        <a href="/privacy-policy.html" target="_blank">Privacy Policy</a>
        <a href="/terms.html" target="_blank">Terms & Conditions</a>
      </div>
    </div>
  </div>
  {{bgBody}}
</template>

<script>
import { addItem } from "@/common/localStorage";
import moment from 'moment';

export default {
  name: "PreLand",
  inject: ['mixpanel'],
  data() {
    return {
      like_image: require('@/assets/images/icons/like.png'),
      liked: false,
      todayDate: ""
    }
  },
  methods:{
    like() {
      if (!this.liked) {
        this.like_image = require('@/assets/images/icons/like_red.png')
        this.liked = true
      } else {
        this.like_image = require('@/assets/images/icons/like.png')
        this.liked = false
      }
    },
    shareViaWebShare() {
      navigator.share({
        url: 'https://quiz.kegel.men/fpl_1'
      })
    }
  },
  mounted() {
    !function(f,b,e,v,n,t,s)
    {if(f.fbq)return;n=f.fbq=function(){n.callMethod?
    n.callMethod.apply(n,arguments):n.queue.push(arguments)};
    if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
    n.queue=[];t=b.createElement(e);t.async=!0;
    t.src=v;s=b.getElementsByTagName(e)[0];
    s.parentNode.insertBefore(t,s)}(window, document,'script',
    'https://connect.facebook.net/en_US/fbevents.js');
    fbq('init', '450334773666656');
    fbq('track', 'PageView');
    this.todayDate = moment().format('MMM. DD');
    addItem("ver", 4);
    this.mixpanel.track('Prelanding Shown',{
        version: 2,
      })
      addItem("price", 1);
      addItem("LandingItem", "kegel_1-USD-Every-3-months");
  },
  computed:{
    bgBody(){
      let mediaQuery = window.matchMedia('(max-width: 480px)');
      if (mediaQuery.matches) {
          document.body.style.backgroundColor = '#fff';
      }
    }
  }
}
</script>

<style scoped lang="scss">
p, h1, h3 {
  margin-top: -0px;
  margin-bottom: 0;
}
* {
  box-sizing: border-box;
}
.head-block {
  padding-top: 30px;
  padding-bottom: 30px;
  .icon-new {
    height: 18px;
    width: 40px;
  }
  .date-text {
    font-family: 'SF Pro Text Light';
    font-style: normal;
    font-weight: 300;
    font-size: 12px;
    line-height: 150%;
    opacity: 0.5;
    vertical-align: top;
    padding-left: 8px;
  }
  .share-like-block {
    float: right;
    .like-count {
      vertical-align: top;
      padding-left: 8px;
      font-family: 'SF Pro Text Regular';
      font-style: normal;
      font-weight: 400;
      font-size: 12px;
      line-height: 150%;
    }
    .like {
      width: 18px;
      height: 16px;
    }
    .share {
      margin-left: 16px;
      height: 17px;
      width: 16px;
    }
  }
}

.check{
  margin-right: 18px;
  width: 24px;
}
.check svg{
  color: #ffffff;
  stroke: red;
  fill: red;
}

.main-pre-land {
  box-sizing: border-box;
  width: 100%;
  background: #fff;
  display: flex;
  justify-content: center;
  color: #111113;
  flex-direction: column;
  align-items: center;
  .mb-1 {
    margin-bottom: 8px;
  }
  .mb-2 {
    margin-bottom: 16px;
  }
  .mb-3 {
    margin-bottom: 24px;
  }
  .mb-4 {
    margin-bottom: 32px;
  }
  .text-center {
    text-align: center;
  }
  .red-text {
    color: #E44240;
  }
  .black-text {
    color: #111113;
  }
  .semibold {
    font-family: "SF Pro Text Semibold" !important;
  }
  .text-bold {
    font-weight: 600;
    font-family: "SF Pro Text Bold" !important;
  }
  .main-pre-wrapper {
    padding: 32px 32px 0 32px;
    max-width: 768px;
    .main-pre-header-title {
      font-style: normal;
      font-weight: 800;
      font-size: 38px;
      line-height: 135%;
      font-family: "SF-Pro-Display-Heavy";
    }
    .main-pre-text {
      font-style: normal;
      font-weight: 400;
      font-size: 16px;
      line-height: 150%;
    }
    .main-pre-title {
      font-family: "SF-Pro-Display-Bold";
      font-style: normal;
      font-weight: 600;
      font-size: 26px;
      line-height: 135%;
    }
    .main-pre-img {
      .main-pre-img-block {
        border-radius: 9px;
        display: block;
        width: 100%;
        margin-left: auto;
        margin-right: auto;
      }
      .main-pre-img-info {
        font-style: italic;
        font-weight: 400;
        font-size: 14px;
        line-height: 150%;
        text-align: center;
      }
    }
    .main-pre-list {
      &_item {
        display: flex;
        align-items: center;
        justify-content: flex-start;
      }
      &_counter {
        width: 24px;
        height: 23px;
        display: flex;
        align-items: center;
        justify-content: center;
        color: #fff;
        margin-right: 16px;
        background: #FA2724;
        border-radius: 50%;
        font-size: 14px;
        font-family: "SF Pro Text Semibold";
      }
      &_text {
        display: block;
        width: calc(100% - 25px);
      }
    }
    .link {
      display: block;
      font-style: normal;
      font-weight: 600;
      font-size: 26px;
      line-height: 135%;
      text-align: center;
      text-decoration-line: underline;
      color: #E44240;
      margin-bottom: 64px;
      font-family: "SF-Pro-Display-Bold" !important;
    }
  }
  .main-pre-footer {
    height: 156px;
    width: 100%;
    padding: 32px 32px 48px 32px;
    background: #111113;
    &_info {
      display: flex;
      flex-direction: column;
      align-items: center;
      font-style: normal;
      font-weight: 400;
      font-size: 14px;
      line-height: 150%;
      text-align: center;
      color: #FFFFFF;
      opacity: 0.5;
    }
    &_links {
      display: flex;
      align-items: center;
      justify-content: center;
      a {
        font-weight: 400;
        font-size: 15px;
        line-height: 18px;
        text-align: center;
        text-decoration-line: underline;
        color: #FFFFFF;
        opacity: 0.75;
        &:first-child {
          margin-right: 15px;
          position: relative;
          &:before {
            content: '';
            width: 1px;
            position: absolute;
            height: 100%;
            background: #fff;
            opacity: 0.75;
            right: -15px;
            top: 50%;
            transform: translateY(-50%);
          }
        }
        &:last-child {
          margin-left: 15px;
        }
      }
    }
  }
}
</style>
