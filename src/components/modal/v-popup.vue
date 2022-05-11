<template>
  <div class="popup_wraper">
    <div class="v-popup">
      <div class="v-popup__header h2">
        {{textTitle}}
      </div>
      <div class="v-popup__content">
          <slot></slot>
      </div>
      <div class="v-popup__footer">
       
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name:'v-popup',
  props:{
    textTitle:{
      type:String,
      default: ''
    }
  },
  data(){
    return{
      
    }
  },
  methods:{
    closePopup(){
      this.$emit('closePopup')
    }
  }
  
}
</script>
<style lang="scss" scoped>
  .popup_wraper{
    display: flex;
    justify-content: center;
    align-items: center;
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background-color: rgba(17, 17, 19, 0.75);
  }
  .v-popup{
    position: fixed;
    top: 227px;
    width: 100%;
    max-width: 452px;
    padding: 32px 24px 24px;
    background: #ffffff;
    margin: 0 auto;
    border-radius: 9px;
    @media (max-width:480px) {
      max-width: 310px;
    }
    &__content, &__footer{
      display: flex;
      align-items: center;
      justify-content: center;
      flex-direction: column;
      margin-top: 32px;
    }
    
  }
  
</style>