<template>
    <div class="bg-guarantee rounded-15px">
      <img
          src="@/assets/images/content/baseline_v2/img_moneyback.png"
      />
      <div class="p-31px">
        <h2
            class="text-26px font-display font-600 leading-snug font-600 text-center"
        >
          {{$t('guarantee_v2.title')}}
        </h2>
        <h3
            class="text-16px font-display font-600 leading-snug font-500 text-center"
        >
          {{$t('guarantee_v2.subtitle')}}
        </h3>
        <p
            v-html="$t('guarantee_v2.text', {email: 'contact@kegel-plan.com'})"
            class="text-14px leading-normal font-400 mt-24px opacity-80"
        />
      </div>
    </div>
</template>

<script>
export default {

}
</script>

<style scoped>
.bg-guarantee {
  background: linear-gradient(180deg, rgba(241, 243, 249, 0.00) 0%, #F1F3F9 23.44%);;
}
</style>
