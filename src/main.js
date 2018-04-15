import Vue from 'vue';
import store from './vuex/store'; //
import VueRouter from 'vue-router';
import routes from './routers'; // 引入路由配置
import vueResource from 'vue-resource';
import infiniteScroll from 'vue-infinite-scroll'; // 引入滑动模块
import VueLazyload from 'vue-lazyload'; // 引入图片懒加载模块
import {loadFromlLocal} from './common/js/store'; // 公共方法：本地缓存
import 'common/css/index.styl'; // 引入公共样式

var AppRoot;
(function init()
{
  //使用插件
  useMids();
  //初始化并挂载应用根组件
  const {router, routerApp} = initAppRoot();
  //初始化welcome页面的数据集
  loadWelcomePage(router);
  AppRoot = routerApp;
})()

/**
 * 使用插件
 * */
function useMids()
{

  Vue.use(infiniteScroll); //无限滚动插件
  Vue.use(VueRouter); //路由插件
  Vue.use(vueResource); //http插件

  //使用懒加载插件，图片未加载完成的时候占位
  const lazyOpts =//
    {
      error: require('./assets/404.png'),
      loading: require('./assets/loading.gif'),
      attempt: 1
    }
  Vue.use(VueLazyload, lazyOpts);
}

/**
 * 初始化并挂载应用根组件
 *
 * */
function initAppRoot()
{
  //实例化路由
  const router = new VueRouter({
    'linkActiveClass': 'active',
    routes
  });

  //挂载app，帮绑定store和路由
  const routerApp = new Vue({
    store,  //store
    router //路由
  }).$mount('#app');

  return {router, routerApp};
}


/**
 * 初始化welcome页面的数据集
 * */
function loadWelcomePage(router)
{
  if (!loadFromlLocal('gank', 'wecome', false))
  {
    router.push('/wecome');
  }
}

export default AppRoot;
