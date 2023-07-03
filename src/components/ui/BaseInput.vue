<template>
  <label class="relative text-center mx-auto block" for="email">
    <input
        :value="modelValue"
        :id="id"
        class="bg-[#F1F3F9] shadow-input rounded-9px border-none text-1em leading-normal p-17px text-body w-full sm:w-375px relative outline-none focus:(border-none outline-none) active:(border-none outline-none) placeholder-body/50"
        :type="type"
        :placeholder="placeholder"
        @input="$emit('update:modelValue', $event.target.value)"
    >
    <img
        v-if="icon"
        :src="require(`@/assets/images/svg/${icon}.svg`)"
        alt="img"
        class="absolute top-[50%] right-20px transform translate-y-[-50%]"
    />
  </label>
</template>

<script>
export default {
  props: {
    modelValue: {
      type: String
    },
    placeholder: {
      type: String,
    },
    type: {
      type: String
    },
    id: {
      type: [String, Number]
    },
    icon: {
      type: String
    }
  }
}
</script>
