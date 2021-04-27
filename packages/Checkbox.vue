<template>
  <div>
    <label
      class="xt-checkbox"
      :class="[{'is-checked': isChecked},{'is-disabled': disabled}]"
    >
      <span
        class="xt-checkbox__input"
        :class="[{'is-checked': isChecked},{'is-disabled': disabled}]"
      >
        <span class="xt-checkbox__inner" :style="{
          backgroundColor: isChecked ? activeColor : '#fff',
          borderColor: isChecked ? activeColor : '#dcdfe6'
        }"></span>
        <input
          type="checkbox"
          class="xt-checkbox__original"
          v-model="model"
          name="name"
          :disabled='disabled'
          :value='label'
        >
      </span>
      <span class="xt-checkbox__label">
        <slot></slot>
        <template v-if="$slots.default"></template>
      </span>
    </label>
  </div>
</template>

<script>
export default {
  name: 'XtCheckbox',
  props: {
    value: {
      type: Boolean,
      default: false
    },
    name: {
      type: String,
      default: ''
    },
    disabled: {
      type: Boolean,
      default: false
    },
    label: {
      type: String,
      default: ''
    },
    activeColor: {
      type: String,
      default: '#409eff'
    }
  },
  inject: {
    checkGroup: {
      default: ''
    }
  },
  computed: {
    isGroup () {
      return !!this.checkGroup
    },
    model: {
      get () {
        return this.isGroup ? this.checkGroup.value : this.value
      },
      set (value) {
        this.isGroup ? this.checkGroup.$emit('input', value) : this.$emit('input', value)
      }
    },
    isChecked () {
      return this.isGroup ? this.model.includes(this.label) : this.model
    }
  }
}
</script>

<style scoped lang='scss'>
.xt-checkbox:last-of-type {
  margin-right: 0;
}
.xt-checkbox {
  color: #606266;
  font-weight: 500;
  font-size: 14px;
  position: relative;
  cursor: pointer;
  display: inline-block;
  white-space: nowrap;
  user-select: none;
  margin-right: 30px;
  .xt-checkbox__input {
    white-space: nowrap;
    cursor: pointer;
    outline: none;
    display: inline-block;
    line-height: 1;
    position: relative;
    vertical-align: middle;
    .xt-checkbox__inner {
      display: inline-block;
      position: relative;
      border: 1px solid #dcdfe6;
      border-radius: 2px;
      box-sizing: border-box;
      width: 14px;
      height: 14px;
      background-color: #fff;
      z-index: 1;
      transition: border-color 0.25s cubic-bezier(0.71, -0.46, 0.29, 1.46),
        background-color 0.25s cubic-bezier(0.71, -0.46, 0.29, 1.46);
    }
    .xt-checkbox__inner:after {
      box-sizing: content-box;
      content: "";
      border: 1px solid #fff;
      border-left: 0;
      border-top: 0;
      height: 7px;
      left: 4px;
      position: absolute;
      top: 1px;
      transform: rotate(45deg) scaleY(0);
      width: 3px;
      transition: transform 0.15s ease-in 0.05s;
      transform-origin: center;
    }
    .xt-checkbox__original {
      opacity: 0;
      outline: none;
      position: absolute;
      margin: 0;
      width: 0;
      height: 0;
      z-index: -1;
    }
    input {
      cursor: pointer;
    }
    input[type="checkbox" i] {
      background-color: initial;
      cursor: default;
      appearance: auto;
      box-sizing: border-box;
      margin: 3px 3px 3px 4px;
      padding: initial;
      border: initial;
    }
    input {
      -webkit-writing-mode: horizontal-tb !important;
      text-rendering: auto;
      color: -internal-light-dark(black, white);
      letter-spacing: normal;
      word-spacing: normal;
      text-transform: none;
      text-indent: 0px;
      text-shadow: none;
      display: inline-block;
      text-align: start;
      appearance: auto;
      background-color: -internal-light-dark(
        rgb(255, 255, 255),
        rgb(59, 59, 59)
      );
      -webkit-rtl-ordering: logical;
      cursor: text;
      margin: 0em;
      font: 400 13.3333px Arial;
      padding: 1px 2px;
      border-width: 2px;
      border-style: inset;
      border-color: -internal-light-dark(
        rgb(118, 118, 118),
        rgb(133, 133, 133)
      );
      border-image: initial;
    }
    input[type="checkbox" i]:disabled {
      background-color: initial;
    }
    input:disabled {
      background-color: -internal-light-dark(
        rgba(239, 239, 239, 0.3),
        rgba(59, 59, 59, 0.3)
      );
      border-color: rgba(118, 118, 118, 0.3);
    }
  }
  .xt-checkbox__input.is-disabled.is-checked .xt-checkbox__inner {
    background-color: #f2f6fc;
    border-color: #dcdfe6;
  }
  .xt-checkbox__input.is-disabled .xt-checkbox__inner:after {
    cursor: not-allowed;
    border-color: #c0c4cc;
  }
  .xt-checkbox__input.is-disabled + span.xt-checkbox__label {
    color: #c0c4cc;
    cursor: not-allowed;
  }
  .xt-checkbox__input.is-checked + .xt-checkbox__label {
    color: #409eff;
  }
  .xt-checkbox__label {
    display: inline-block;
    padding-left: 10px;
    line-height: 19px;
    font-size: 14px;
  }
  .xt-checkbox__input.is-checked .xt-checkbox__inner {
    background-color: #409eff;
    border-color: #409eff;
  }
  .xt-checkbox__input.is-checked .xt-checkbox__inner:after {
    transform: rotate(45deg) scaleY(1);
  }
}
.is-disabled {
  opacity: 0.6;
  cursor: not-allowed;
}
</style>
