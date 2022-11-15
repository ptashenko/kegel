<template>
  <div class="faq">
    <div class="faq-wrapper">
      <h4 class="faq-title">
        People often ask
      </h4>
      <div class="faq-item" v-for="(item, id) in items" :key="id">
        <div class="faq-item_title" @click="selectId(id)">
          {{ item.title }}
          <img
              v-if="id === selectedId"
              src="@/assets/img/land_v3/minus.svg"
              alt="">
          <img
              v-else
              src="@/assets/img/land_v3/plus.svg"
              alt="">
        </div>
        <div class="faq-item-content" v-if="selectedId === id">
          <div class="faq-item-content_item" v-for="(child, idx) in item.children" :key="idx">
            <span>{{ child }}</span>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "FaqBlock",
  props: {
    items: Array
  },
  data() {
    return {
      selectedId: 0
    }
  },
  methods: {
    selectId(id) {
      if (this.selectedId === id) {
        this.selectedId = null
        return
      }
      this.selectedId = id
    }
  }
}
</script>

<style scoped lang="scss">

.faq {

  &-title {
    font-weight: 600;
    font-size: 20px;
    line-height: 135%;
    margin-top: 0;
    margin-bottom: 16px;
    text-align: center;
    color: #111113;
    font-family: "SF-Pro-Display-Bold";
    outline: none;
  }
  &-item {
    &_title {
      display: flex;
      justify-content: space-between;
      padding: 16px 24px;
      background: #F9F9F9;
      border-radius: 9px;
      font-weight: 600;
      font-size: 16px;
      line-height: 150%;
      color: #111113;
      font-family: "SF-Pro-Display-Bold";
      margin-bottom: 16px;
      img {
        margin-left: 16px;
      }
    }
    &-content {
      padding-left: 20px;
      padding-right: 20px;
      span {
        display: block;
        font-weight: 400;
        font-size: 16px;
        line-height: 150%;
        color: #111113;
        margin-bottom: 24px;
        &:last-child {
          margin-bottom: 16px;
        }
      }
    }
  }
}
</style>
