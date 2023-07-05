<template>
    <div class="m-0 mt-32px sm:mt-48px">
        <p class="font-sans text-14px leading-tight text-center text-body sm:text-18px sm:leading-tight">
          <span v-html="$t('ratingStars.rating', {amount, downloads})"></span>
        </p>
        <div class="flex justify-center items-center mt-10px">
            <div class="flex justify-center mr-10px">
                <img
                  v-for="(_, idx) of stars"
                  :key="idx"
                  class="block w-20px h-20px"
                  src="@/assets/images/svg/icon_star.svg"
                  :alt="idx + 'star'"
                />
            </div>
            <div>
                <img src="@/assets/images/svg/icon_rating48.svg" alt="out">
            </div>
        </div>
    </div>
</template>

<script>
export default {
    props: {
        stars: {
            type: Number,
            isRequired: true,
            default: 5
        },
        amount: {
            type: String,
            isRequired: true,
            default: '42k'
        },
        downloads: {
            type: Number,
            isRequired: true,
            default: '2M+'
        }
    }
}
</script>
