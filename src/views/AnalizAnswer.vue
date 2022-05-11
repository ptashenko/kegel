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
        <div class="loading__title"></div>
        <div class="text__percent d-flex justify-content-beetwen">
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
            <div style="width: 45px; text-align: center;">
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
        <div class="text__percent d-flex justify-content-beetwen">
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
            <div style="width: 45px; text-align: center;">
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
        <div class="text__percent d-flex justify-content-beetwen">
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
            <div style="width: 45px; text-align: center;">
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
        <div class="text__percent d-flex justify-content-beetwen">
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
            <div style="width: 45px; text-align: center;">
              {{ loadProsentFoo }}%
            </div>
          </div>
        </div>
        <div class="loading__bar">
          <span></span>
          <span class="loading__percent" :style="`width: ${loadProsentFoo}%`"></span>
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
  methods:{
    showModal(){
      this.popupVisible = true
      this.isActiveNo = this.isActiveYes = this.closeActive = false
      this.isLoad = false
    },
    closePopup(e){
      let x = e.target
      if(x.classList.contains('active')){
        this.popupVisible = false
        this.isLoad = true
        this.mystop = 100
        this.ased()      
      }
    },
    // clousePopupLoad(){
    //   let x = e.target
    //   if(x.classList.contains('active')){
    //     this.popupVisible = false
    //     this.isLoad = false
    //     this.mystop = 100
    //     this.ased()
    //   }
    // },
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
      setInterval(() => {
        if (this.loadProsentFoo < 100) {
          this.loadProsentFoo += 1;
        } else {
          clearInterval();
        }
      }, 100);
    },
  },
  mounted() {
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
  font-size: 14px;
  line-height: 150%;
  font-family: "SF Pro Text Semibold";
  color: #111113;
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
</style>