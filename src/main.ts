import { Component, Emit, Inject, Model, Prop, Provide, Vue, Watch } from 'vue-property-decorator'
import MyApp from './App.vue'

Vue.config.productionTip = false
// MyApp.mpType = 'app'

const app = new Vue(MyApp)
app.$mount()

export default {
  // 这个字段走 app.json
  config: {
    pages: ['^pages/index/main'], // 页面前带有 ^ 符号的，会被编译成首页，其他页面可以选填，我们会自动把 webpack entry 里面的入口页面加进去
    window: {
      backgroundTextStyle: 'light',
      navigationBarBackgroundColor: '#fff',
      navigationBarTitleText: 'WeChat',
      navigationBarTextStyle: 'black'
    }
  }
}
