import { Vue, Component } from 'vue-property-decorator';
import { AppUrls } from '@/utils/consts.ts'
import Card from '@/components/card.vue' // mpvue目前只支持的单文件组件

// 必须使用装饰器的方式来指定components2
@Component({
  components: {
    Card,
  }
})
class Index extends Vue {
  AppUrls = AppUrls
  ver: number = 123
}

export default Index
