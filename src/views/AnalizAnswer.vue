<template lang="">
    <div class="container-main">
      <div class="h2 text-center">
        {{title}}
      </div>
      
      <div class="loading as"
        @click="openPopup"
      >
        <div class="text__percent d-flex justify-content-beetwen" :class="{'active': percent > 0}">
          <div>
            Intimate health indicators
          </div>
          <div class="d-flex align-items-center"> 
            <div class="d-flex">
              <lottie-animation 
                class="check"
                :class="{ active: isActiveCheck_1 }"
                ref="animed"
                :animationData="require(`@/assets/images/json/f5_loader.json`)"
                :loop="true"
                :autoPlay="true"
                :speed="1"

              />
            </div>
            <div class="number__procent">
              {{ percent }}%
            </div>
          </div>
        </div>
        <div class="loading__bar">
          <span></span>
          <span class="loading__percent" :style="`width: ${percent}%`"></span>
        </div>
      </div>
      <div class="loading as">
        <div class="loading__title"></div>
        <div class="text__percent d-flex justify-content-beetwen" :class="{'active': loadProsentTwo > 0}">
          <div>
            Sexual behaviours
          </div>
          <div class="d-flex align-items-center"> 
            <div class="d-flex">
              <lottie-animation 
                class="check"
                :class="{ active: isActiveCheck_2 }"
                :animationData="require(`@/assets/images/json/f5_loader.json`)"
                :loop="true"
                :autoPlay="true"
                :speed="1"

              />
            </div>
            <div  class="number__procent">
              {{ loadProsentTwo }}%
            </div>
          </div>
        </div>
        <div class="loading__bar">
          <span></span>
          <span class="loading__percent" :style="`width: ${loadProsentTwo}%`"></span>
        </div>
      </div>
      <div class="loading as">
        <div class="loading__title"></div>
        <div class="text__percent d-flex justify-content-beetwen" :class="{'active': loadProsentTree > 0}">
          <div>
            Lifestyle
          </div>
          <div class="d-flex align-items-center"> 
            <div class="d-flex">
              <lottie-animation 
                class="check"
                :class="{ active: isActiveCheck_3 }"
                :animationData="require(`@/assets/images/json/f5_loader.json`)"
                :loop="true"
                :autoPlay="true"
                :speed="1"

              />
            </div>
            <div  class="number__procent">
              {{ loadProsentTree }}%
            </div>
          </div>
        </div>
        <div class="loading__bar">
          <span></span>
          <span class="loading__percent" :style="`width: ${loadProsentTree}%`"></span>
        </div>
      </div>
      <div class="loading as">
        <div class="loading__title"></div>
        <div class="text__percent d-flex justify-content-beetwen" :class="{'active': loadProsentFoo > 0}">
          <div>
            Creating your plan
          </div>
          <div class="d-flex align-items-center"> 
            <div class="d-flex">
              <lottie-animation 
                class="check"
                :class="{ active: isActiveCheck_4 }"
                :animationData="require(`@/assets/images/json/f5_loader.json`)"
                :loop="true"
                :autoPlay="true"
                :speed="1"
     
              />
            </div>
            <div  class="number__procent">
              {{ loadProsentFoo }}%
            </div>
          </div>
        </div>
        <div class="loading__bar">
          <span></span>
          <span class="loading__percent" :style="`width: ${loadProsentFoo}%`"></span>
        </div>
      </div>

      <div v-for="(reviewItem, key)  in base" :key="key" >
        <div class="review light" :class="{'active': key == this.numreview}">
        <div class="review__top">
          <div>
            <div class="review__title">{{ reviewItem.title }}</div>
            <div class="review__rating">
              <div v-for="i in reviewItem.rating" :key="i">
                <img src="@/assets/images/star.png" alt="star-yellow" class="star-yellow">
              </div>
              <div v-for="i in Number(5 - reviewItem.rating)" :key="i">
                <img src="@/assets/images/star.png" alt="star-yellow" class="star-yellow">
              </div>
            </div>
          </div>

          <div class="review__name">
            {{ reviewItem.name }}
          </div>
        </div>

        <div class="review__text">
          {{ reviewItem.text }}
        </div>
      </div>
      


      <vpopup
        class="popup_wraper analize "
        :textTitle = textTitle
        v-if="popupVisible"
      >   
        <btnComponent
          :class="{ active: isActiveYes }"
          @clickBtn="BtnActiveYes"
          answer="Yes, I do"
        >
        </btnComponent>
        <btnComponent
          :class="{ active: isActiveNo }"
          @clickBtn="BtnActiveNo"
          answer="No, I don't"
        >
        </btnComponent>
        <button 
          class="v-popup__submit_btn"
          :class="{active: closeActive}"
          @click="closePopup"
        >
        Ok 
        </button>
      </vpopup>
    </div>
  </div>
  <div>{{lengthReviews}}</div>
</template>
<script>

import vpopup from '@/components/modal/v-popup.vue';
import btnComponent from '@/components/questions/btnPopup.vue';
import analizProcessing from '@/components/ui/analizProcessing.vue';

export default {
  inject: ['mixpanel'],
  name: 'AnalizAnswer',
  components:{
    vpopup,
    btnComponent,
    analizProcessing
  },

  data(){
    return{
      title:'Analyzing the answers...',
      textTitle:"Do you want to enhance your orgasms?",
      isActiveCheck_1: true,
      isActiveCheck_2: false,
      isActiveCheck_3: false,
      isActiveCheck_4: false,
      popupVisible: false,
      isActiveYes: false,
      isActiveNo: false,
      closeActive: false,
      isLoad:true ,
      percent: 0,
      mystop: 100,
      loadProsentTwo:0,
      loadProsentTree: 0,
      loadProsentFoo:0,
      base: {},
      numreview: 0,
      track: 0,
      mytrue: true,
      numrew: null,
      as: null,
      asedPooling: null,
      loadTwoPooling: null,
      loadTreePooling: null,
      refreshId: null,
      numReviewPooling: null,
      userAnswer:"", 
    }
  },

  computed:{
    products(){
        return this.$store.state.review.msgPE
    },

    lengthReviews(){
      const json = localStorage.getItem('track');
      const obj = JSON.parse(json);
      this.track = obj.id
      if (this.track == 3) {
        this.base =  this.$store.state.review.msgOK
      } else if(this.track == 2) {
        this.base = this.$store.state.review.msgPE
      } else {
        this.base = this.$store.state.review.msgED
      }
      return console.log(this.track);  
    }
  },
  
  mounted() {
    this.numrew = setInterval(() => {
      if (this.numreview < 2) {
        this.numreview += 1;
      } else {
        this.numreview = 0
        // clearInterval(this.numrew);
      }
    }, 4000);
  
    this.as = setInterval(() => {
      if (this.percent < this.mystop) {
        this.percent += 1;
      } else {
        this.isActiveCheck_1 = true
        this.ased()
        clearInterval(this.as);
      }
    }, 60);
  },
  
  

  methods:{
    showModal(){
      const body = document.querySelector('body')
      body.classList.add('fixed');
      this.popupVisible = true
      this.isActiveNo = this.isActiveYes = this.closeActive = false
      this.isLoad = false
      clearInterval(this.numrew);
    },
  
    closePopup(e){
      const x = e.target
      const body = document.querySelector('body')
      if(x.classList.contains('active')) {
        body.classList.remove('fixed');
        this.isActiveCheck_1 = true
        this.$refs.animed.play()
        this.popupVisible = false
        this.isLoad = true
        this.mystop = 100
        this.ased()  
        this.numReview()
        this.mixpanel.track('Quiz Answer', {
          question: this.textTitle,
          answer: this.userAnswer,
        })
      }
    },

    BtnActiveYes(){
      this.userAnswer = "Yes, I do"
      this.isActiveYes = this.closeActive = true 
      this.isActiveNo = false
    },

    BtnActiveNo(){
      this.userAnswer = "No, I don't"
      this.isActiveYes = false
      this.isActiveNo = this.closeActive = true
    },

    ased(){
      this.asedPooling = setInterval(() => {
        if (this.percent < this.mystop) {
          this.percent += 1;
        } else {
          this.isActiveCheck_1 = false
          clearInterval(this.asedPooling);
        }
      },60);
    },

    loadTwo(){
      this.isActiveCheck_2 = true
      this.loadTwoPooling = setInterval(() => {
        if (this.loadProsentTwo < 100) {
          this.loadProsentTwo += 1;
        } else {
          this.isActiveCheck_2 = false
          clearInterval(this.loadTwoPooling);
        }
      }, 60);
    },

    loadTree(){
      this.isActiveCheck_3 = true
      this.loadTreePooling = setInterval(() => {
        if (this.loadProsentTree < 100) {
          this.loadProsentTree += 1;
        } else {
          this.isActiveCheck_3 = false
          clearInterval(this.loadTreePooling);
        }
      }, 60);
    },

    loadFoo(){
      this.isActiveCheck_4 = true
      this.refreshId = setInterval(() => {
        if (this.loadProsentFoo < 100) {
          this.loadProsentFoo += 1;
        } else {
          this.isActiveCheck_2 = false
          this.$router.push({ name: 'EmailAdress'});
          clearInterval(this.refreshId);
        }
      }, 60);
    },

  numReview(){
      this.numReviewPooling = setInterval(() => {
        if (this.numreview < (this.base.length - 1)) {
          this.numreview += 1;
        } else{
          this.numreview = 0
        }
      }, 4500);
    }
  },
  beforeUnmount(){
    clearInterval(this.numrew);
    clearInterval(this.as);
    clearInterval(this.asedPooling);
    clearInterval(this.loadTwoPooling);
    clearInterval(this.loadTreePooling);
    clearInterval(this.refreshId);
    clearInterval(this.numReviewPooling);
  },
  watch: {
    percent() {
      if (this.percent == 100){
        this.loadTwo()
      }
    },

    loadProsentTwo() {
      if (this.loadProsentTwo == 100){
        this.loadTree()
      }
    },

    loadProsentTree() {
      if (this.loadProsentTree == 100){
        this.loadFoo()
      }
    },
  },
}

</script>
<style lang="scss" scoped>
.check{
  display: none;
  width: 20px;
  height: 20px;
  @media (max-width:480px) {
    width: 16px;
    height: 16px;
  }
}
.check.active{
  display: block;
}
.review{
  display: none;
}
.review.active{
  display: block;
}
.review__animate{
  width: 17px;
  height: 17px;
  
}
.review__animate.loadanime{
  animation: preloader-rotate 1s infinite ease-in-out;
}
@keyframes preloader-rotate {
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(350deg);
  }
}

.h2 {
  font-family: "SF-Pro-Display-Bold";
  font-size: 24px;
  text-align: center;
  @media (max-width:480px) {
    font-size: 20px;
  }
  @media (min-width: 600px) {
    font-size: 30px;
    margin-bottom: 64px;
  }
}

.v-popup__submit_btn{
      background-color: #CACACA;
      border:none;
      border-radius: 9px;
      padding: 16px 64px;
      font-family: "SF Pro Text Medium";
      font-size: 18px;
      line-height: 135%;
      color: #ffffff;
      margin-top: 32px;
    }
.v-popup__submit_btn.active{
  background-color: #111113;
}
.text__percent{
  font-size: 18px;
  line-height: 150%;
  font-family: "SF Pro Text Semibold";
  color: #111113;
  opacity: 0.75;
  margin-bottom: 4px;
  @media (max-width: 480px) {
    font-size: 14px;
    margin-bottom: 8px;
  }
}
.number__procent{
  width: 45px; 
  text-align: right;
}
.text__percent.active{
  opacity: 1;
}
.loading {
  max-width: 450px;
  margin: 25px auto 0;
  width: 100%;

  &__title {
    font-weight: 400;
    font-size: 14px;
    line-height: 150%;
    margin-bottom: 8px;
    text-align: center;
    color: #FFFFFF;
  }

  &__bar {
    height: 10px;
    background: #F1F3F9;
    border-radius: 9px;
    font-weight: 700;
    font-size: 18px;
    line-height: 150%;
    display: flex;
    align-items: center;
    justify-content: center;
    position: relative;
    overflow: hidden;
    color: #FFFFFF;

    span {
      &:first-child {
        position: relative;
        z-index: 4;
      }
    }
  }

  &__percent {
    background-color: #111113;
    position: absolute;
    left: 0;
    top: 0;
    bottom: 0;
    width: 20%;
    border-radius: 5px;
  }
}
// review
.review {
  padding: 15px;
  border-radius: 10px;
  margin: 64px auto 0;
  max-width: 370px;
  background-color: #F1F1F1;
  @media (min-width: 600px) {
      max-width: 100%;
    }
  
  &:not(.light) {
    background-color: #1D1D1F;
  }

  &:not(:last-child) {
    margin-bottom: 15px;
  }

  &__top {
    display: flex;
    justify-content: space-between;
    margin-bottom: 15px;
  }

  &__title {
    font-weight: 700;
    font-size: 18px;
    line-height: 150%;

    @media (max-width: 480px) {
      font-size: 14px;
    }
  }

  &__text {
    font-weight: 400;
    font-size: 16px;
    line-height: 150%;

    @media (max-width: 480px) {
      font-size: 12px;
    }
  }

  &__name {
    font-weight: 500;
    font-size: 16px;
    line-height: 150%;
    opacity: .5;

    @media (max-width: 480px) {
      font-size: 12px;
    }
  }

  &__rating {
    display: flex;
    margin-top: 5px;

    div {
      width: 14px;
      height: 14px;

      @media (max-width: 480px) {
        width: 14px;
        height: 14px;

        svg {
          width: 14px;
          height: 14px;
        }
      }
    }
  }
}

.star-yellow {
  max-width: 14px;;
  height: auto;
}
</style>