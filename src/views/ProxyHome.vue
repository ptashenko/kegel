<template>
  <HomeView v-if="version === 1" />
  <HomeView_v2 v-if="version === 4" />
</template>

<script>
import HomeView from '@/views/HomeView.vue';
import HomeView_v2 from '@/views/HomeView_v2.vue';
import { getItem } from '@/common/localStorage';
export default {
    data() {
        return {
            version: getItem('ver'),
        }
    },
    components: { HomeView, HomeView_v2 },
}
</script>

<style>

</style>