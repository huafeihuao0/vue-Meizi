/**
 * 【页面路由器】
 */
const routers =//
  [
    {
      ...urlToView('/', 'index', './App.vue'),
      children://
        [
          urlToView('/welfare', 'welfare', './pages/welfare.vue'), //
          urlToView('/day', 'day', './pages/recommend.vue'), //
          {
            ...urlToView('/ios', 'ios', './pages/ios.vue'),
            meta: {requiresAuth: true}
          },
          urlToView('/android', 'android', './pages/android.vue'),
          urlToView('/web', 'web', './pages/web.vue'),
        ]
    },
    urlToView('/wecome', 'wecome', './pages/wecome.vue')
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
