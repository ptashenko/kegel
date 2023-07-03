<template>
    <div class="container-mob">
      <h2 class="font-displayBold text-center text-20px leading-normal sm:(text-30px leading-normal)">
        {{ $t('analizAnswer.title') }}
      </h2>

      <div class="max-w-450px mx-auto mt-48px mb-0 w-full sm:(mt-64px)">
        <div class="text-14px leading-normal font-sansSemiBold text-body opacity-75 mb-8px flex justify-between sm:(text-18px leading-normal mb-4px)" :class="{'opacity-100': percent > 0}">
          <div>
            {{ $t('analizAnswer.indicators') }}
          </div>
          <div class="flex items-center">
            <div class="flex">
              <lottie-animation
                v-show="isActiveCheck_1"
                class="w-16px h-16px sm:(w-20px h-20px)"
                ref="animed"
                :animationData="require(`@/assets/images/json/f5_loader.json`)"
                :loop="true"
                :autoPlay="true"
                :speed="1"
              />
            </div>
            <div class="w-45px text-right">
              {{ percent }}%
            </div>
          </div>
        </div>
        <div class="h-10px bg-[#F1F3F9] rounded-9px font-700 text-18px leading-normal flex items-center justify-center relative overflow-hidden text-[#fff]">
          <span class="relative z-4"></span>
          <span class="bg-body absolute left-0 top-0 bottom-0 w-[20%] rounded-5px" :style="`width: ${percent}%`"></span>
        </div>
      </div>
      <div class="max-w-450px mx-auto mt-24px mb-0 w-full">
        <div class="text-14px leading-normal font-sansSemiBold text-body opacity-75 mb-8px flex justify-between sm:(text-18px leading-normal mb-4px)" :class="{'opacity-100': loadProsentTwo > 0}">
          <div>
            {{ $t('analizAnswer.behaviours') }}
          </div>
          <div class="flex items-center">
            <div class="flex">
              <lottie-animation
                v-show="isActiveCheck_2"
                class="w-16px h-16px sm:(w-20px h-20px)"
                ref="animed"
                :animationData="require(`@/assets/images/json/f5_loader.json`)"
                :loop="true"
                :autoPlay="true"
                :speed="1"
              />
            </div>
            <div  class="w-45px text-right">
              {{ loadProsentTwo }}%
            </div>
          </div>
        </div>
        <div class="h-10px bg-[#F1F3F9] rounded-9px font-700 text-18px leading-normal flex items-center justify-center relative overflow-hidden text-[#fff]">
          <span class="relative z-4"></span>
          <span class="bg-body absolute left-0 top-0 bottom-0 w-[20%] rounded-5px" :style="`width: ${loadProsentTwo}%`"></span>
        </div>
      </div>
      <div class="max-w-450px mx-auto mt-24px mb-0 w-full">
        <div class="text-14px leading-normal font-sansSemiBold text-body opacity-75 mb-8px flex justify-between sm:(text-18px leading-normal mb-4px)" :class="{'opacity-100': loadProsentTree > 0}">
          <div>
            {{ $t('analizAnswer.lifestyle') }}
          </div>
          <div class="flex items-center">
            <div class="flex">
              <lottie-animation
                v-show="isActiveCheck_3"
                class="w-16px h-16px sm:(w-20px h-20px)"
                ref="animed"
                :animationData="require(`@/assets/images/json/f5_loader.json`)"
                :loop="true"
                :autoPlay="true"
                :speed="1"
              />
            </div>
            <div  class="w-45px text-right">
              {{ loadProsentTree }}%
            </div>
          </div>
        </div>
        <div class="h-10px bg-[#F1F3F9] rounded-9px font-700 text-18px leading-normal flex items-center justify-center relative overflow-hidden text-[#fff]">
          <span class="relative z-4"></span>
          <span class="bg-body absolute left-0 top-0 bottom-0 w-[20%] rounded-5px" :style="`width: ${loadProsentTree}%`"></span>
        </div>
      </div>
      <div class="max-w-450px mx-auto mt-24px mb-0 w-full">
        <div class="text-14px leading-normal font-sansSemiBold text-body opacity-75 mb-8px flex justify-between sm:(text-18px leading-normal mb-4px)" :class="{'active': loadProsentFoo > 0}">
          <div>
            {{ $t('analizAnswer.plan') }}
          </div>
          <div class="flex items-center">
            <div class="flex">
              <lottie-animation
                v-show="isActiveCheck_4"
                class="w-16px h-16px sm:(w-20px h-20px)"
                :animationData="require(`@/assets/images/json/f5_loader.json`)"
                :loop="true"
                :autoPlay="true"
                :speed="1"
              />
            </div>
            <div  class="w-45px text-right">
              {{ loadProsentFoo }}%
            </div>
          </div>
        </div>
        <div class="h-10px bg-[#F1F3F9] rounded-9px font-700 text-18px leading-normal flex items-center justify-center relative overflow-hidden text-[#fff]">
          <span class="relative z-4"></span>
          <span class="bg-body absolute left-0 top-0 bottom-0 w-[20%] rounded-5px" :style="`width: ${loadProsentFoo}%`"></span>
        </div>
      </div>

      <div v-for="(reviewItem, key) in base" :key="key" >
        <div v-show="key == this.numreview" class="p-15px rounded-10px mt-64px mx-auto mb-0 max-w-370px bg-[#F1F1F1] sm:(max-w-full)">
          <div class="flex justify-between mb-15px">
            <div>
              <div class="font-700 text-14px leading-normal sm:(text-18px leading-normal)">{{ $t(`review.${reviewItem.title}`)}}
              </div>
              <div class="flex mt-5px">
                <div v-for="i in reviewItem.rating" :key="i" class="w-14px h-14px">
                  <img src="@/assets/images/svg/icon_star.svg" alt="star-yellow" class="max-w-14px h-auto">
                </div>
                <div v-for="i in Number(5 - reviewItem.rating)" :key="i" class="w-14px h-14px">
                  <img src="@/assets/images/svg/icon_star.svg" alt="star-yellow" class="max-w-14px h-auto">
                </div>
              </div>
            </div>

            <div class="font-500 text-12px leading-normal opacity-50 sm:(text-16px leading-normal)">
              {{ reviewItem.name }}
            </div>
          </div>

          <div class="font-400 text-12px leading-normal sm:(text-16px leading-normal)">
            {{ $t(`review.${reviewItem.text}`)}}
          </div>
        </div>
      </div>
  </div>
</template>
<script>

export default {
  inject: ['mixpanel'],
  name: 'AnalizAnswer',

  data(){
    return{
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

  mounted() {
    this.lengthReviews()
    this.numrew = setInterval(() => {
      if (this.numreview < 2) {
        this.numreview += 1;
      } else {
        this.numreview = 0
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
    lengthReviews(){
      const json = localStorage.getItem('track');
      const obj = JSON.parse(json);
      this.track = obj.id
      if (this.track == 3) {
        this.base = this.$store.state.review.msgOK
      } else if(this.track == 2) {
        this.base = this.$store.state.review.msgPE
      } else {
        this.base = this.$store.state.review.msgED
      }
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
