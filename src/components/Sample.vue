<template>
    <div>
        <div>샘플</div>
        <div>프롭으로 받은 데이터 {{products&& products[0] }}</div>
        <button v-on:click="$emit('closeModal')">부모한테 데이터 변경 요청</button>
        <input @input="numChange"/>
        <input v-model="num"/>
        <div>{{ num }}</div>
    </div>
</template>
  
<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'SampleTest',
    props:{
        products:Array
    },
    data(){
        return{
            num:0
        }
    },
    watch:{
        num(checkData,exCheckData){
            if(checkData>13){
                alert("13초과!")
                this.num = exCheckData
            }
        }
    },
    methods:{
      numChange(e:Event){
            this.num  = Number((e.target as HTMLInputElement).value)
      }
  },
})
</script>
<style>
</style>