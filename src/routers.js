// require.ensure 是 Webpack 的特殊语法，用来设置 组件到底路径
/**
 * 【页面路由器】
 * 1.定义路由，每个路由应该映射一个组件
 * path : 浏览器的显示的路径
 * name ： 路由的名字
 * component : 路由的组件路径
 */
const routers =//
  [
    {
      ...urlToView('/', 'index', './App.vue'),
      children://
        [
          urlToView('/welfare', 'welfare', './components/welfare/welfare.vue'), //
          urlToView('/day', 'day', './components/recommend/recommend.vue'), //
          {
            ...urlToView('/ios', 'ios', './components/lists/ios.vue'),
            meta: {requiresAuth: true}
          },
          urlToView('/android', 'android', './components/lists/android.vue'),
          urlToView('/web', 'web', './components/lists/web.vue'),
        ]
    },
    urlToView('/wecome', 'wecome', './components/wecome/wecome.vue')
  ];

/**
 * 将路由映射到组件
 * */
function urlToView(path, name, vuePath)
{
  return {
    path: path,  //根组件
    name: name,
    component(resolve)
    {
      // require.ensure([vuePath], () =>
      // {
        resolve(require(vuePath));
      // });
    }
  }
}

export default routers;
