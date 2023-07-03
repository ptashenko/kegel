<template>
    <div
      class="bg-[#F9F9F9] border-2px border-red rounded-9px flex py-20px px-0 max-w-310px w-full mx-auto"
      :style="{borderColor: color}"
    >
        <div
          class="relative basis-[40%]"
        >
            <img
              :src="require(`@/assets/images/${icon}.png`)"
              class="w-[52%] absolute top-[-25px] left-[50%] transform translate-x-[-50%]"
            />
        </div>
        <div
          class="flex flex-col justify-center basis-[80%]"
        >
            <h2
              class="font-600 text-14px leading-tight tracking-normal text-body m-0 mb-5px"
            >
            {{ $t('discountFlag.onePrice', {discPrice}) }}</h2>
            <p
              class="font-400 text-14px leading-tight text-body opacity-75 m-0"
            >
            {{ $t('discountFlag.price', {fullPrice}) }}
            </p>
        </div>
    </div>
</template>

<script>
export default {
    props: {
        discPrice: {
            type: String,
            required: true,
            default: ''
        },
        fullPrice: {
            type: String,
            required: true,
            default: ''
        },
        color: {
            type: String,
            default: '#E44240'
        },
        icon: {
            type: String,
            default: 'discountFlag'
        }
    },
}
</script>
