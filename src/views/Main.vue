
<template>
    <div class="common-layout">
      <el-container>
        <common-aside />
        <el-container class="is-vertical">
          <common-header />
          <common-tab />
          <el-main>
            <router-view />
          </el-main>
        </el-container>
      </el-container>
    </div>
  </template>

  <script>
    import {defineComponent} from 'vue'
    import CommonHeader from '../components/CommonHeader.vue'
    import CommonAside from '../components/CommonAside.vue';
    import CommonTab from '../components/CommonTab.vue';
    import Axios from 'axios'

// vue.prototype.$axios = axios
    export default defineComponent({
       components:{
        CommonHeader,
        CommonAside,
        CommonTab,
       },

    });
  </script>

  <style lang="less" scoped>
    
    .r-container{
      flex-wrap: wrap;
    }
    .common.layout {
      height: 100%;
      & > .el-container {
        height: 100%;
        align-items: flex-start;
        &>.el-aside{
          height: 100%;
          background-color: #545c64;
        }
      }
    }

  </style>
  