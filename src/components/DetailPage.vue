<template>
    <div>
        <div>라우터 테스트</div>
        <div>현재 prapms : {{ $route.params.id }}</div>
        <RouterLink to="/">홈화면 이동</RouterLink>
        <RouterLink to="/list">리스트 이동</RouterLink>
    </div>
</template>
  
<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'DetailPage',
})
</script>
<style>
</style>