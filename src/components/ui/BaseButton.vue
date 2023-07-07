<template>
  <component
      :is="element[tag].name"
      :[navigateAttr]="url"
      :class="[baseClasses, roundedStyle[rounded], shadowClass]"
      :disabled="loader"
      :type="buttonType"
  >
    <img
        v-if="loader"
        class="max-w-30px max-h-30px absolute top-[50%] left-[50%] transform translate-x-[-50%] translate-y-[-50%]"
        src="data:image/svg+xml;base64,PHN2ZyBjbGFzcz0ic3ZnLWxvYWRlciIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB3aWR0aD0iNTUiIGhlaWdodD0iNTUiIHZpZXdCb3g9IjAgMCA4MCA4MCI+PHBhdGggZmlsbD0iI2ZmZiIgZD0iTTQwIDcyQzIyLjQgNzIgOCA1Ny42IDggNDBTMjIuNCA4IDQwIDhzMzIgMTQuNCAzMiAzMmMwIDEuMS0uOSAyLTIgMnMtMi0uOS0yLTJjMC0xNS40LTEyLjYtMjgtMjgtMjhTMTIgMjQuNiAxMiA0MHMxMi42IDI4IDI4IDI4YzEuMSAwIDIgLjkgMiAycy0uOSAyLTIgMnoiPjxhbmltYXRlVHJhbnNmb3JtIGF0dHJpYnV0ZVR5cGU9InhtbCIgYXR0cmlidXRlTmFtZT0idHJhbnNmb3JtIiB0eXBlPSJyb3RhdGUiIGZyb209IjAgNDAgNDAiIHRvPSIzNjAgNDAgNDAiIGR1cj0iMC42cyIgcmVwZWF0Q291bnQ9ImluZGVmaW5pdGUiLz48L3BhdGg+PC9zdmc+" />
    <span v-else v-html="label" class="font-700" />
  </component>
</template>

<script>
import { RouterLink } from "vue-router";

export default {
  props: {
    tag: {
      type: String,
      default: 'button'
    },
    url: {
      type: String,
    },
    label: {
      type: String,
      required: true
    },
    theme: {
      type: String,
      default: 'red'
    },
    textOnly: {
      type: Boolean,
      default: false
    },
    rounded: {
      type: String,
      default: 'full'
    },
    buttonType: {
      type: String,
      default: 'button'
    },
    shadow: {
      type: Boolean,
      default: true,
    },
    loader: {
      type: Boolean,
      default: false
    }
  },
  computed: {
    navigateAttr() {
      return this.element[this.tag].link
    },
    baseClasses() {
      return [
        this.textOnly
            ? 'text-center text-14px leading-normal text-blue bg-none cursor-pointer w-full sm:text-18px sm:leading-normal'
            : 'relative min-h-63px py-20px px-0 w-full mx-auto mt-0 text-18px leading-tight text-center text-[#fff] border-none block cursor-pointer'
      ]
    },
    roundedStyle() {
      return {
        full: {'rounded-100px': !this.textOnly},
        half: {'rounded-9px': !this.textOnly}
      }
    },
    shadowClass() {
      return this.shadow ? this.themeClasses[this.theme] : `bg-${this.theme}`
    },
    themeClasses() {
      return {
        blue: {'bg-blue shadow-button-blue': !this.textOnly},
        red: {'bg-red shadow-button-red': !this.textOnly},
      }
    },
    element() {
      return {
        button: {
          name: 'button',
          link: null,
        },
        a: {
          name: 'a',
          link: 'href'
        },
        routerLink: {
          name: RouterLink,
          link: 'to'
        }
      }
    },
  },
}
</script>
