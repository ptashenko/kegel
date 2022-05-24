<template lang="">
  <header-layout :fixed="true" :dark="true"/>

  <div class="dark-layout light">
    <div class="container-main is-page TimePlan">
      <div class="h2 text-center">
        Analyzing the answers...
      </div>
      
      

      <div class="loading as"
        @click="openPopup"
      >
        <div class="text__percent d-flex justify-content-beetwen" :class="{'active': percent > 0}">
          <div>
            Intimate health indicators
          </div>
          <div class="d-flex align-items-center"> 
            <div 
              class="review__animate d-flex" 
              :class="{'loadanime': isLoad}"
              v-if="percent < 100"
            >
              <img src="@/assets/images/icons/preview.svg" alt="check">
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
            <div 
              class="review__animate d-flex" 
              :class="{'loadanime': isLoad}"
              v-if="loadProsentTwo < 100 && loadProsentTwo !== 0"
            >
              <img src="@/assets/images/icons/preview.svg" alt="check">
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
            <div 
              class="review__animate d-flex" 
              :class="{'loadanime': isLoad}"
              v-if="loadProsentTree < 100 && loadProsentTree !== 0"
            >
              <img src="@/assets/images/icons/preview.svg" alt="check">
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
            <div 
              class="review__animate d-flex" 
              :class="{'loadanime': isLoad}"
              v-if="loadProsentFoo < 100 && loadProsentFoo !== 0"
            >
              <img src="@/assets/images/icons/preview.svg" alt="check">
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

      </div>
      


      <vpopup
        textTitle="Do you want to enhance the orgasms?"
        v-if="popupVisible"
      > 
        <div class="h2"></div>
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
  name: 'AnalizAnswer',
  components:{
    vpopup,
    btnComponent,
    analizProcessing
  },
  data(){
    return{
      popupVisible: false,
      isActiveYes: false,
      isActiveNo: false,
      closeActive: false,
      isLoad:true ,
      percent: 0,
      mystop: 70,
      loadProsentTwo:0,
      loadProsentTree: 0,
      loadProsentFoo:0,
      base: {},
      numreview: 0,
      track: 0
    }
  },
  watch:{
    percent(){
      if(this.percent == 100){
        this.loadTwo()
      }
    },
    loadProsentTwo(){
      if(this.loadProsentTwo == 100){
        this.loadTree()
      }
    },
    loadProsentTree(){
      if(this.loadProsentTree == 100){
        this.loadFoo()
      }
    },
  },
  computed:{
    products(){
        return this.$store.state.review.msgPE
    },
    lengthReviews(){
      var json = localStorage.getItem('track');
      var obj = JSON.parse(json);
      this.track = obj.id
      if(this.track == 3){
        this.base =  this.$store.state.review.msgOK
      }else if(this.track == 2){
        this.base = this.$store.state.review.msgPE
      }else{
        this.base = this.$store.state.review.msgED
      }
      return console.log(this.track);  ; 
    }
  },
  methods:{
    showModal(){
      this.popupVisible = true
      this.isActiveNo = this.isActiveYes = this.closeActive = false
      this.isLoad = false
      clearInterval(this.numrew);
    },
    closePopup(e){
      let x = e.target
      if(x.classList.contains('active')){
        this.popupVisible = false
        this.isLoad = true
        this.mystop = 100
        this.ased()  
        this.numrew 
        this.numReview()
      }
    },
    BtnActiveYes(){
      this.isActiveYes = this.closeActive = true 
      this.isActiveNo = false
    },
    BtnActiveNo(){
      this.isActiveYes = false
      this.isActiveNo = this.closeActive = true
    },
    ased(){
      setInterval(() => {
        if (this.percent < this.mystop) {
          this.percent += 1;
        } else {
          clearInterval();
        }
      }, 100);
    },
    loadTwo(){
      setInterval(() => {
        if (this.loadProsentTwo < 100) {
          this.loadProsentTwo += 1;
        } else {
          clearInterval();
        }
      }, 100);
    },
    loadTree(){
      setInterval(() => {
        if (this.loadProsentTree < 100) {
          this.loadProsentTree += 1;
        } else {
          clearInterval();
        }
      }, 100);
    },
    loadFoo(){
    let refreshId = setInterval(() => {
        if (this.loadProsentFoo < 100) {
          this.loadProsentFoo += 1;
        } else {
          this.$router.push({ path: '/EmailAdress'});
          clearInterval(refreshId);
        }
      }, 100);
    },
    numReview(){
      setInterval(() => {
        if (this.numreview < (this.base.length - 1)) {
          this.numreview += 1;
        } else{
          this.numreview = 0
        }
      }, 4000);
    }
  },
  mounted() {
    const numrew = setInterval(() => {
      if (this.numreview < 2) {
        this.numreview += 1;
        
      } else {
        clearInterval(numrew);
      }
    }, 4000);
    const as = setInterval(() => {
      if (this.percent < this.mystop) {
        this.percent += 1;
      } else {
        clearInterval(as);
        this.showModal()
      }
    }, 100);
  },
  
}

</script>
<style lang="scss" scoped>
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
  max-width: 400px;
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
  }
}
// review
.review {
  padding: 15px;
  border-radius: 10px;
  margin: 64px auto 0;
  max-width: 370px;
  background-color: #F1F1F1;
  
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