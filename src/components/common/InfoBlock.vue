<template>
  <div class="info-block">
    <div class="info-block_wrapper">
      <div class="info-block_title">
        <img src="@/assets/img/land_v3/icon_check.svg" alt="">
        {{ title }}
      </div>
      <div class="info-block_description">
        {{ description }}
      </div>
      <div class="info-block_content">
        <img v-if="!isVideo" :src="content" class="info-block_image" alt="">
        <video v-else preload :id="'video'+ id" :ref="`video${id}`" :src="content" ref="video" autoplay playsinline muted loop class="info-block_image" ></video>
      </div>
      <div class="info-block_items">
        <div class="info-block_item" v-for="(item, id) in items" :key="id">
          <img v-if="arrowColor === 'blue'" src="@/assets/img/land_v3/blue_icon.svg" alt="" class="info-block_item-image">
          <img v-else-if="arrowColor === 'red'" src="@/assets/img/land_v3/red_icon.svg" alt="" class="info-block_item-image">
          <span class="info-block_item-text">{{ item }}</span>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "InfoBlock",
  props: {
    title: String,
    description: String,
    items: Array,
    content: String,
    isVideo: Boolean,
    arrowColor: String,
    id: Number
  },
}
</script>

<style scoped lang="scss">
.info-block {
  &_wrapper {

  }
  &_title {
    font-family: "SF Pro Text Bold";
    display: flex;
    justify-content: center;
    margin-bottom: 16px;
    font-style: normal;
    font-weight: 600;
    font-size: 20px;
    line-height: 135%;
    color: #111113;
    img {
      width: 24px;
      height: 24px;
      margin-right: 12px;
    }
  }
  &_description {
    font-family: "SF Pro Text Bold";
    font-style: normal;
    font-weight: 600;
    font-size: 16px;
    line-height: 150%;
    color: #111113;
    margin-bottom: 16px;
  }
  &_content {

  }
  &_image {
    display: block;
    width: 100%;
    margin-bottom: 16px;
  }
  &_items {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: center;
  }
  &_item {
    display: flex;
    margin-bottom: 16px;
    &:last-child {
      margin-bottom: 0;
    }
     &-image {
       display: block;
       margin-right: 19px;
       width: 20px;
     }
     &-text {
       font-weight: 400;
       font-size: 16px;
       line-height: 150%;
       color: #111113;
     }
  }
}
</style>
