<template>
  <div>
    <Header></Header>
    <Loading :show="loadingShow"></Loading>
    <router-view></router-view>
  </div>
</template>

<script>
  /**`
   * 子组件
   * */
  import Menu from './components/menu/menu.vue';
  import Header from './components/header/header.vue';
  import Loading from './components/loading/loading.vue';

  //vuex
  import {mapState} from 'vuex';

  export default //
  {
    name: 'app', //组件名
    data()  //数据
    {
      return {
        firstShow: true,
        show: false
      };
    },
    components://支持的子组件
      {
        Menu,
        Header,
        Loading
      },
    computed: //计算后的属性
      {
        ...mapState([
          'loadingShow'
        ])
      },
    methods://方法区
      {
        isShow()
        {
          this.show = !this.show;
        },
        hideDetail()
        {
          this.detailShow = false;
        }
      }
  };
</script>

<style>
  #app {
    font-family: 'Avenir', Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    color: #2c3e50;
    width: 100%;
    padding-top: 50px;
  }

  #app .show {
    transform: translateX(250px);
  }

  #app .page-cover {
    position: fixed;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    background: rgba(0, 0, 0, 0.4);
    z-index: 7;
  }

  #app .first {
    position: fixed;
    top: 0px;
    z-index: 20;
    width: 100%;
    height: 100%;
    background: red;
  }
</style>
