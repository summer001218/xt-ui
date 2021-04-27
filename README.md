# xiat-ui

## 简介

一个支持拟态风格的 Vue UI 组件

## 使用

1. 安装

```
npm i xtian-ui
```

2. 全局注册

```js
import XtUI from 'xtian-ui'
Vue.use(XtUI)
```

3. 按需导入

```js
import XtUI, { Button, Form } from 'xtian-ui'
Vue.use(XtUI, {
  components: [Button, Form]
})
```

3. 导入样式

```js
import 'xtian-ui/dist/xtian-ui.css'
```

4. 导入 font字体图标

```js
import './assets/font/iconfont.css'

<xiat-button icon='xt-icon-edit1'>按钮</xiat-button>

```

![](D:\OneDrive\桌面\学习\icon图片\QQ截图20210427124914.png)

![QQ截图20210427124946](D:\OneDrive\桌面\学习\icon图片\QQ截图20210427124946.png)

![QQ截图20210427125025](D:\OneDrive\桌面\学习\icon图片\QQ截图20210427125025.png)

![QQ截图20210427125040](D:\OneDrive\桌面\学习\icon图片\QQ截图20210427125040.png)

![QQ截图20210427125049](D:\OneDrive\桌面\学习\icon图片\QQ截图20210427125049.png)

![QQ截图20210427125100](D:\OneDrive\桌面\学习\icon图片\QQ截图20210427125100.png)

![QQ截图20210427125114](D:\OneDrive\桌面\学习\icon图片\QQ截图20210427125114.png)

![QQ截图20210427125129](D:\OneDrive\桌面\学习\icon图片\QQ截图20210427125129.png)

![QQ截图20210427125138](D:\OneDrive\桌面\学习\icon图片\QQ截图20210427125138.png)

![QQ截图20210427125151](D:\OneDrive\桌面\学习\icon图片\QQ截图20210427125151.png)

![QQ截图20210427125202](D:\OneDrive\桌面\学习\icon图片\QQ截图20210427125202.png)

![QQ截图20210427125219](D:\OneDrive\桌面\学习\icon图片\QQ截图20210427125219.png)

![QQ截图20210427125229](D:\OneDrive\桌面\学习\icon图片\QQ截图20210427125229.png)

![QQ截图20210427125259](D:\OneDrive\桌面\学习\icon图片\QQ截图20210427125259.png)

![QQ截图20210427125310](D:\OneDrive\桌面\学习\icon图片\QQ截图20210427125310.png)

![QQ截图20210427125331](D:\OneDrive\桌面\学习\icon图片\QQ截图20210427125331.png)

![QQ截图20210427125344](D:\OneDrive\桌面\学习\icon图片\QQ截图20210427125344.png)

![QQ截图20210427125355](D:\OneDrive\桌面\学习\icon图片\QQ截图20210427125355.png)

![QQ截图20210427125410](D:\OneDrive\桌面\学习\icon图片\QQ截图20210427125410.png)

![QQ截图20210427125421](D:\OneDrive\桌面\学习\icon图片\QQ截图20210427125421.png)

![QQ截图20210427125433](D:\OneDrive\桌面\学习\icon图片\QQ截图20210427125433.png)

![QQ截图20210427125446](D:\OneDrive\桌面\学习\icon图片\QQ截图20210427125446.png)

![QQ截图20210427125534](D:\OneDrive\桌面\学习\icon图片\QQ截图20210427125534.png)

![QQ截图20210427125545](D:\OneDrive\桌面\学习\icon图片\QQ截图20210427125545.png)

![QQ截图20210427125556](D:\OneDrive\桌面\学习\icon图片\QQ截图20210427125556.png)

![QQ截图20210427125607](D:\OneDrive\桌面\学习\icon图片\QQ截图20210427125607.png)

![QQ截图20210427125626](D:\OneDrive\桌面\学习\icon图片\QQ截图20210427125626.png)

![QQ截图20210427125637](D:\OneDrive\桌面\学习\icon图片\QQ截图20210427125637.png)

![QQ截图20210427125646](D:\OneDrive\桌面\学习\icon图片\QQ截图20210427125646.png)

![QQ截图20210427125657](D:\OneDrive\桌面\学习\icon图片\QQ截图20210427125657.png)

![QQ截图20210427125707](D:\OneDrive\桌面\学习\icon图片\QQ截图20210427125707.png)

<br>

---

<br>

## 组件

### 按钮(Button)

<br>

```
 <xt-button></xt-button>
```



| 属性     | 值               | 描述                                          |
| -------- | ---------------- | --------------------------------------------- |
| type     | String           | 按钮类型：primary,info,success,warning,danger |
| plain    | Boolean          | 是否为朴素按钮，默认为 false                  |
| name     | String           | name名称， 默认为空                           |
| disabled | Boolean          | 是否禁用按钮，默认为 false                    |
| round    | Boolean          | 是否为圆角按钮，默认为 false                  |
| circle   | Boolean          | 是否为圆形按钮，默认为 false                  |
| icon     | Array 或 Boolean | font-awesome 字体数组，默认为 false           |

<br>

| 事件  | 值       | 描述     |
| ----- | -------- | -------- |
| click | Function | 点击事件 |

<br>

---

<br>

### 对话框(Dialog <xt-dialog></xt-dialog>)

<br>

```
<xt-dialog
        :visible.sync='visible'
        width='30%'
        top="20vh"
      >
        <template v-slot:footer>
          <xt-button @click="visible = false">取消</xt-button>
          <xt-button
            type='primary'
            @click="visible = false"
          >确认</xt-button>
        </template>
      </xt-dialog>
```



| 属性    | 值      | 描述                            |
| ------- | ------- | ------------------------------- |
| title   | String  | 对话框头部提示，默认为"提示"    |
| visible | Boolean | 对话框可见状态，默认为 false    |
| top     | String  | 对话框距离顶部位置，默认为 15vh |
| width   | String  | 对话框宽度，默认为 60%          |

<br>

| 插槽   | 描述                    |
| ------ | ----------------------- |
| title  | Dialog 标题区的内容     |
| footer | Dialog 按钮操作区的内容 |

<br>

---

<br>

### 输入框(Input )

<br>

```
<xt-input></xt-input>
```



| 属性         | 值      | 描述                           |
| ------------ | ------- | ------------------------------ |
| placeholder  | String  | 占位符，默认为空字符串         |
| type         | String  | 表单类型，默认为'texiat'         |
| disabled     | Boolean | 是否禁用，默认为 false         |
| name         | String  | 表单命名，默认为空             |
| value        | String  | 表单值，默认为空字符串         |
| showPassword | Boolean | 是否显示密码可见，默认为 false |
| clearable    | Boolean | 是否可清空，默认为 false       |

<br>

### 切换(Switch )

<br>

```
<xt-switch></xt-switch>
```



| 属性          | 值      | 描述                          |
| ------------- | ------- | ----------------------------- |
| name          | String  | 表单命名，默认为空            |
| value         | String  | 表单值，默认为空字符串        |
| disabled      | Boolean | 是否禁用，默认为 false        |
| activeColor   | String  | 激活状态颜色，默认为#dcdfe6   |
| inactiveColor | String  | 未激化状态颜色，默认为#dcdfe6 |
| activeTexiat    | String  | 激活状态文字， 默认为 ''      |
| inactiveTexiat  | String  | 未激活状态文字， 默认为 ''    |

<br>

| 事件   | 值       | 描述                               |
| ------ | -------- | ---------------------------------- |
| change | Function | 状态修改触发事件，返回修改后的状态 |

<br>

---

<br>

### 单选框(Radio )

<br>

```
<xt-radio></xt-radio>
```



| 属性  | 值                        | 描述                              |
| ----- | ------------------------- | --------------------------------- |
| label | [String, Number, Boolean] | 单选框 label 值，默认为空字符串   |
| name  | String                    | 表单命名，默认为空                |
| value | String                    | 表单值，默认为空字符串            |
| color | String                    | 单选框选择时的颜色，默认为#409eff |

<br>

### 单选框组(RadioGroup )

<br>

用于包裹 radio，通过 v-model 指定组内所有的 radio 的 v-model

```
<xt-radio-group></xt-radio-group>
```

<br>

---

<br>

### 复选框(Checkbox )

<br>

```
<xt-checkbox></xt-checkbox>
```



| 属性     | 值                        | 描述                              |
| -------- | ------------------------- | --------------------------------- |
| label    | [String, Number, Boolean] | 单选框 label 值，默认为空字符串   |
| disabled | Boolean                   | 禁用，默认值false                 |
| name     | String                    | 表单命名，默认为空                |
| value    | String                    | 表单值，默认为空字符串            |
| color    | String                    | 单选框选择时的颜色，默认为#409eff |

<br>

### 复选框组(CheckboxGroup )

<br>

用于包裹多个 checkbox，通过 v-model 指定组内所有的 checkout 的 v-model

```
<xt-checkbox-group></xt-checkbox-group>
```

<br>

---

<br>

### 表单项(Form-item )

```
<xt-form-item></xt-form-item>
```

<br>

| 属性  | 值     | 描述                            |
| ----- | ------ | ------------------------------- |
| label | String | 单选框 label 值，默认为空字符串 |

<br>

### 表单(Form )

```
<xt-form></xt-form>
```

<br>

| 属性        | 值        | 描述                        |
| ----------- | --------- | --------------------------- |
| model       | Object    | 表单对象，必填              |
| label-width | String    | 标签宽度，默认"80px"        |
| name        | String    | 名称                        |
| inline      | *Boolean* | 是否再一行显示，默认值false |

<br>

---

<br>