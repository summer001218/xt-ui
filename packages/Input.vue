<template>
  <div class="xt-input" :class="{'xt-input--suffix':showSuffix}">
    <input
      ref="inputRef"
      :placeholder='placeholder'
      :type="showPassword?(passwordVisible?'text':'password'):'type'"
      class="xt-input__inner"
      :class="{'is-disabled': disabled}"
      :disabled="disabled"
      :name='name'
      @input="handleInput"
      :value="value"
    >
    <span class="xt-input__suffix" v-if="showSuffix">
      <i
        class="xt-input__icon xt-icon-close"
        v-if="clearable&&value"
        @click="handleClear"
      ></i>
      <i
        class="xt-input__icon xt-icon-browse"
        v-if="showPassword&&value"
        @click="handleShow"
      ></i>
    </span>
  </div>
</template>

<script>
export default {
  name: 'XtInput',
  data () {
    return {
      passwordVisible: false
    }
  },
  props: {
    type: {
      type: String,
      default: 'text'
    },
    placeholder: {
      type: String,
      default: '请输入内容'
    },
    disabled: {
      type: Boolean,
      default: false
    },
    name: {
      type: String,
      default: ''
    },
    value: {
      type: String,
      default: ''
    },
    clearable: {
      type: Boolean,
      default: false
    },
    showPassword: {
      type: Boolean,
      default: false
    }
  },
  computed: {
    showSuffix () {
      return this.clearable || this.showPassword
    }
  },
  methods: {
    handleInput (e) {
      this.$emit('input', e.target.value)
    },
    handleClear () {
      this.$emit('input', '')
    },
    handleShow () {
      this.passwordVisible = !this.passwordVisible
    }
  }
}
</script>

<style lang='scss'>
.xt-input {
  width: 160px;
  position: relative;
  font-size: 14px;
  display: inline-block;
  input {
    cursor: pointer;
  }

  .xt-input__inner {
    -webkit-appearance: none;
    background-color: #fff;
    background-image: none;
    border-radius: 4px;
    border: 1px solid #dcdfe6;
    box-sizing: border-box;
    color: #606266;
    display: inline-block;
    font-size: inherit;
    height: 40px;
    line-height: 40px;
    outline: none;
    padding: 0 15px;
    transition: border-color 0.2s cubic-bezier(0.645, 0.045, 0.355, 1);
    width: 100%;
    &:focus {
      outline: none;
      border-color: #409eff;
    }
    &.is-disabled {
      background-color: #f5f7fa;
      border-color: #e4e7ed;
      color: #c0c4cc;
      cursor: not-allowed;
    }
  }
}
.xt-input--suffix{
  position: relative;
  .xt-input__inner{
    padding-right: 30px;
  }
  .xt-input__suffix {
    position: absolute;
    height: 100%;
    right: 5px;
    top: 0;
    text-align: center;
    color: #c0c4cc;
    transition: all 0.3s;
    line-height: 40px;
    i {
      color: #c0c4cc;
      font-size: 14px;
      margin-right: 5px;
      cursor: pointer;
      transition: color 0.2s cubic-bezier(0.645, 0.045, 0.355, 1);
    }
  }
}
</style>
