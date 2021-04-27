<template>
  <div>
    <label class="xt-radio" :class="[{'is-checked': label == model}, {'is-disabled': disabled}]">
      <span class="xt-radio__input">
        <span class="xt-radio__inner" :style="{background: color,'border-color': color}"></span>
        <input
          type="radio"
          class="xt-radio__original"
          :value="label"
          v-model="model"
          :disabled='disabled'
          name="name"
        >
      </span>
      <span class="xt-radio__label">
        <slot></slot>
        <template v-if='!$slots.default'>
          {{label}}
        </template>
      </span>
    </label>
  </div>
</template>

<script>
export default {
  name: 'XtRadio',
  props: {
    name: {
      type: String,
      default: ''
    },
    label: {
      type: [String, Boolean, Number],
      default: 0
    },
    value: null,
    disabled: {
      type: Boolean,
      default: false
    },
    color: {
      type: String,
      default: '#409eff'
    }
  },
  inject: {
    radioGroup: {
      default: ''
    }
  },
  computed: {
    model: {
      get () {
        return this.groupModel ? this.radioGroup.value : this.value
      },
      set (value) {
        this.groupModel ? this.radioGroup.$emit('input', value) : this.$emit('input', value)
      }
    },
    groupModel () {
      return !!this.radioGroup
    }
  }
}
</script>

<style lang='scss'>
.xt-radio {
  color: #606266;
  font-weight: 500;
  line-height: 1;
  position: relative;
  cursor: pointer;
  display: inline-block;
  white-space: nowrap;
  outline: none;
  font-size: 14px;
  margin-right: 30px;
  -moz-user-select: none;
  -webkit-user-select: none;
  -ms-user-select: none;
  .xt-radio__input {
    white-space: nowrap;
    cursor: pointer;
    outline: none;
    display: inline-block;
    line-height: 1;
    position: relative;
    vertical-align: middle;
    input {
      cursor: pointer;
    }
    input[type="radio" i] {
      background-color: initial;
      cursor: default;
      appearance: auto;
      box-sizing: border-box;
      margin: 3px 3px 0px 5px;
      padding: initial;
      border: initial;
    }
    .xt-radio__inner {
      border: 1px solid #dcdfe6;
      border-radius: 100%;
      width: 14px;
      height: 14px;
      background-color: #fff;
      position: relative;
      cursor: pointer;
      display: inline-block;
      box-sizing: border-box;
    }
    .xt-radio__inner:after {
      width: 4px;
      height: 4px;
      border-radius: 100%;
      background-color: #fff;
      content: "";
      position: absolute;
      left: 50%;
      top: 50%;
      transform: translate(-50%, -50%) scale(0);
      transition: transform 0.15s ease-in;
    }
    .xt-radio__original {
      opacity: 0;
      outline: none;
      position: absolute;
      z-index: -1;
      top: 0;
      left: 0;
      right: 0;
      bottom: 0;
      margin: 0;
    }
  }
  .xt-radio__label {
    font-size: 14px;
    padding-left: 10px;
  }
}
.xt-radio.is-checked {
  .xt-radio__input {
    .xt-radio__inner {
      border-color: #409eff;
      background: #409eff;
      &:after {
        transform: translate(-50%, -50%) scale(1);
      }
    }
  }
}
.xt-radio.is-disabled {
  .xt-radio__input {
    .xt-radio__inner {
      border-color: rgba(118, 118, 118, 0.3);
      background: rgba(118, 118, 118, 0.3);
      cursor: not-allowed;
    }
  }
}
</style>
