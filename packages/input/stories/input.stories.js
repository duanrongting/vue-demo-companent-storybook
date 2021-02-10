import DrtInput from '../'

export default {
  title: 'DrtInput',
  component: DrtInput
}

export const Text = () => ({
  components: { DrtInput },
  template: '<drt-input v-model="value"></drt-input>',
  data () {
    return {
      value: 'admin'
    }
  }
})

export const Password = () => ({
  components: { DrtInput },
  template: '<drt-input type="password" v-model="value"></drt-input>',
  data () {
    return {
      value: 'admin'
    }
  }
})
