<template>
  <div class="review" >
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
</template>

<script>

export default {
  name: 'analiz-review',
  computed: {
  },
  props: {
    id: {
      required: true,
      type: Boolean,
    },
    light: {
      default: false,
      type: Boolean,
    },
  },
};
</script>

<style lang="scss" scoped>
.review {
  padding: 15px;
  border-radius: 10px;
  margin: 0 auto;
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

.star-dark {
  fill: white;
}
.h2{
  font-family: "SF-Pro-Display-Bold";
}

</style>
