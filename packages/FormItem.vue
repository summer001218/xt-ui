<template>
  <div class="xt-form-item">
    <label class="xt-form-item__label" :style="{width: this.Form.labelWidth}">{{label}}</label>
    <div class="xt-form-item__content">
      <slot></slot>
    </div>
  </div>
</template>

<script>
export default {
  name: 'xtFormItem',
  props: {
    label: {
      type: String,
      default: ''
    }
  },
  inject: ['Form']
}
</script>

<style lang='scss'>
.xt-form-item {
  margin-bottom: 22px;
  label {
    cursor: default;
  }
  .xt-form-item__label {
    text-align: right;
    vertical-align: middle;
    float: left;
    font-size: 14px;
    color: #606266;
    line-height: 40px;
    padding: 0 12px 0 0;
    box-sizing: border-box;
  }
  .xt-form-item__content {
    line-height: 40px;
    position: relative;
    font-size: 14px;
  }
  .xt-form-item__content:after {
    clear: both;
  }
  .xt-form-item__content:after,
  .xt-form-item__content:before {
    display: table;
    content: "";
  }
}
.xt-form-item:after {
  clear: both;
}
.xt-form-item:before {
  display: table;
  content: "";
}
.is-inline .xt-form-item {
    display: inline-block;
    margin-right: 10px;
    vertical-align: top;
}
.is-inline .xt-form-item__label {
    float: none;
    display: inline-block;
}
.is-inline  .xt-form-item__content {
    display: inline-block;
    vertical-align: top;
}
</style>
