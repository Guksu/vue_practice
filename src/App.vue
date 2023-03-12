<template>
  <div class="menu">
    <!-- 반복문 , js의 map과 유사 -->
    <a v-for="name in menu" :key="name">{{ name }}</a>
  </div>
  <div v-for="(item,i) in products" :key="i">
    <h4>{{ item }} 원룸</h4>
    <button v-on:click="btnClick">허위매물신고</button><span>신고수 : {{reportNum}}</span>
  </div>
    <div v-if="modal">true!!!</div>
    <div v-else>false!!!</div>

</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'App',
  data(){
    return{
        modal:true,
        reportNum : 0,
        products : ["양천구", "강서구"],
        menu : ["Home", "Products", "About"]
    }
  },
  methods:{
      btnClick(){
        this.reportNum++;
        this.modal = !this.modal;
      }
  },
  components: {
  }
});
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}

.menu{
  background-color: wheat;
  padding: 15px;
  border-radius: 5px;
}
.menu a{
  color : darkslateblue;
  padding: 10px;
}
</style>
