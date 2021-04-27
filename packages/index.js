// 入口文件
// 定义install
import Button from './Button.vue'
import Dialog from './Dialog.vue'
import Input from './Input.vue'
import Radio from './Radio.vue'
import RadioGroup from './RadioGroup.vue'
import Switch from './Switch.vue'
import Checkbox from './Checkbox.vue'
import CheckGroup from './CheckGroup.vue'
import Form from './Form.vue'
import FormItem from './FormItem.vue'
import './font/iconfont.css'

const components = [
  Button,
  Dialog,
  Input,
  Radio,
  RadioGroup,
  Switch,
  Checkbox,
  CheckGroup,
  Form,
  FormItem
]

const install = function (Vue) {
  components.forEach(item => {
    Vue.component(item.name, item)
  })
}
// 判断是否是直接引入，如果是，就不需要vue.use
if (typeof window !== 'undefined' && window.Vue) {
  install(window.Vue)
}
export default {
  install
}
