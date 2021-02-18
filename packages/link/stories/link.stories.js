import DrtLink from '../src/link.vue'

export default {
  title: 'DrtLink',
  component: DrtLink
}

export const Link = _ => ({
  components: { DrtLink },
  template: `
    <div>
      <drt-link :disabled="true" href="http://www.baidu.com">baidu</drt-link>
    </div>
  `
})