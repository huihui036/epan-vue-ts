<!--
 * @Description: 
 * @Version: 2.0
 * @Autor: qinghui
 * @Date: 2022-02-02 12:33:43
 * @LastEditors: qinghui
 * @LastEditTime: 2022-02-02 12:42:01
-->
<template>
  <div class="home">
    <HelloWorld msg="Welcome to Your Vue.js + TypeScript App" />
  </div>
</template>

<script lang="ts">
import { Options, Vue } from "vue-class-component";
import HelloWorld from "@/components/HelloWorld.vue"; // @ is an alias to /src

@Options({
  components: {
    HelloWorld,
  },
})
export default class Home extends Vue {}
</script>
