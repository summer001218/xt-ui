<template>
  <div
    class="xt-switch"
    :class="[value?'is-checked': '', disabled? 'is-disabled': '']"
    @click="handleClick"
  >
    <input
      type="checkbox"
      class="xt-switch__input"
      :class="disabled? 'is-disabled': ''"
      :name="name"
      :disabled='disabled'
    >
    <span
      class="xt-switch__label xt-switch__label--left"
      :class="value?'':'is-active'"
      v-if="activeText"
    >
      <span>{{activeText}}</span>
    </span>
    <span
      class="xt-switch__core"
      ref="tabColorRef"
    ></span>
    <span
      class="xt-switch__label xt-switch__label--right"
      :class="value?'is-active':''"
      v-if="inactiveText"
    >
      <span>{{inactiveText}}</span>
    </span>
  </div>
</template>

<script>
export default {
  name: 'XtSwitch',
  props: {
    value: {
      type: Boolean,
      default: false
    },
    name: {
      type: String,
      default: ''
    },
    activeText: {
      type: String,
      default: ''
    },
    inactiveText: {
      type: String,
      default: ''
    },
    activeColor: {
      type: String,
      default: ''
    },
    inactiveColor: {
      type: String,
      default: ''
    },
    disabled: {
      type: Boolean,
      default: false
    }
  },

  mounted () {
    this.setColor()
  },
  methods: {
    setColor () {
      if (this.inactiveColor || this.activeColor) {
        const color = this.value ? this.activeColor : this.inactiveColor
        this.$refs.tabColorRef.style.backgroundColor = color
        this.$refs.tabColorRef.style.borderColor = color
      }
    },
    async handleClick () {
      this.$emit('input', !this.value)
      await this.$nextTick()
      this.setColor()
    }
  }
}
</script>

<style lang="scss">
.xt-switch {
  margin: 20px 20px 20px 0;
  display: inline-flex;
  align-items: center;
  position: relative;
  font-size: 14px;
  line-height: 20px;
  height: 20px;
  vertical-align: middle;
  input[type="checkbox" i] {
    background-color: initial;
    cursor: default;
    appearance: auto;
    box-sizing: border-box;
    margin: 3px 3px 3px 4px;
    padding: initial;
    border: initial;
  }
  input[type="checkbox" i]:disabled {
    background-color: initial;

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
    background-color: -internal-light-dark(rgb(255, 255, 255), rgb(59, 59, 59));
    -webkit-rtl-ordering: logical;
    cursor: text;
    margin: 0em;
    font: 400 13.3333px Arial;
    padding: 1px 2px;
    border-width: 2px;
    border-style: inset;
    border-color: -internal-light-dark(rgb(118, 118, 118), rgb(133, 133, 133));
    border-image: initial;
  }
  &.is-disabled {
    pointer-events: none;
    cursor: not-allowed;
  }
  .xt-switch__input {
    position: absolute;
    width: 0;
    height: 0;
    opacity: 0;
    margin: 0;
  }
  .xt-switch__label {
    transition: 0.2s;
    height: 20px;
    display: inline-block;
    font-size: 14px;
    font-weight: 500;
    cursor: pointer;
    vertical-align: middle;
    color: #303133;
  }
  .xt-switch__label--left {
    margin-right: 10px;
  }
  .xt-switch__core {
    margin: 0;
    display: inline-block;
    position: relative;
    width: 40px;
    height: 20px;
    border: 1px solid #dcdfe6;
    outline: none;
    border-radius: 10px;
    box-sizing: border-box;
    border-color: rgb(255, 73, 73);
    background-color: rgb(255, 73, 73);
    cursor: pointer;
    transition: border-color 0.3s, background-color 0.3s;
    vertical-align: middle;
  }
  .xt-switch__label.is-active {
    color: #409eff;
  }
  .xt-switch__label--right {
    margin-left: 10px;
  }
  .xt-switch__core:after {
    content: "";
    position: absolute;
    top: 1px;
    left: 1px;
    border-radius: 100%;
    transition: all 0.3s;
    width: 16px;
    height: 16px;
    background-color: #fff;
  }
}
.is-checked {
  .xt-switch__core {
    border-color: rgb(19, 206, 102);
    background-color: rgb(19, 206, 102);
  }
}
.is-disabled {
  opacity: 0.6;
  cursor: not-allowed;
}
.xt-switch.is-checked .xt-switch__core:after {
  left: 100%;
  margin-left: -17px;
}
</style>
