<template>
    <div>
        <div>라우터 테스트</div>
        <RouterLink to="/">홈화면 이동</RouterLink>
        <RouterLink to="/detail/1">디테일1 이동</RouterLink>
    </div>
</template>
  
<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'ListTest',
})
</script>
<style>
</style>