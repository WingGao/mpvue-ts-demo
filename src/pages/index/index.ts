import { Vue, Component } from 'vue-property-decorator';
import { AppUrls } from '@/utils/consts.ts'

@Component
export default class Index extends Vue {
  AppUrls = AppUrls
  counter = 2


}
