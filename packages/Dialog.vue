<template>
  <transition name="animation">
    <div
      class="xt-dialog__wrapper"
      style="z-index: 2003"
      v-show="visible"
      @click.self="handleClose"
    >
      <div class="xt-dialog" :style="{width, marginTop: top}">
        <div class="xt-dialog__header">
          <slot name="title">
            <span class="xt-dialog__title">{{ title }}</span>
          </slot>
          <button class="xt-dialog__headerbtn" @click="handleClose">
            <i class="xt-dialog__close xt-icon xt-icon-close"></i>
          </button>
        </div>
        <div class="xt-dialog__body">
          <slot></slot>
        </div>
        <div class="xt-dialog__footer" v-if="$slots.footer">
          <slot name= 'footer' >
          </slot>
        </div>
      </div>
    </div>
  </transition>
</template>

<script>
export default {
  name: 'XtDialog',
  props: {
    visible: {
      type: Boolean,
      default: false
    },
    title: {
      type: String,
      default: '提示'
    },
    width: {
      type: String,
      default: '30%'
    },
    top: {
      type: String,
      default: '15vh'
    }
  },
  methods: {
    handleClose () {
      this.$emit('update:visible', false)
    }
  }
}
</script>

<style lang="scss" scoped>
button {
  appearance: auto;
  -webkit-writing-mode: horizontal-tb !important;
  text-rendering: auto;
  color: -internal-light-dark(black, white);
  letter-spacing: normal;
  word-spacing: normal;
  text-transform: none;
  text-indent: 0px;
  text-shadow: none;
  display: inline-block;
  text-align: center;
  align-items: flex-start;
  cursor: default;
  background-color: -internal-light-dark(rgb(239, 239, 239), rgb(59, 59, 59));
  box-sizing: border-box;
  margin: 0em;
  font: 400 13.3333px Arial;
  padding: 1px 6px;
  border-width: 2px;
  border-style: outset;
  border-color: -internal-light-dark(rgb(118, 118, 118), rgb(133, 133, 133));
  border-image: initial;
  font-family: inherit;
  font-size: inherit;
  line-height: inherit;
  color: inherit;
}
.xt-dialog__wrapper {
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  overflow: auto;
  margin: 0;
  background: rgb(10, 10, 10, 0.5);
  .xt-dialog {
    position: relative;
    margin: 0 auto 50px;
    background: #fff;
    border-radius: 2px;
    box-shadow: 0 1px 3px rgb(0 0 0 / 30%);
    box-sizing: border-box;
    margin-top: 15vh;
    width: 30%;
    .xt-dialog__header {
      padding: 20px 20px 10px;
      .xt-dialog__title {
        line-height: 24px;
        font-size: 18px;
        color: #303133;
      }
      .xt-dialog__headerbtn {
        position: absolute;
        top: 20px;
        right: 20px;
        padding: 0;
        background: transparent;
        border: none;
        outline: none;
        cursor: pointer;
        font-size: 16px;
        .xt-dialog__close {
          color: #909399;
        }
        [class*="el-icon-"],
        [class^="el-icon-"] {
          font-family: element-icons !important;
          speak: none;
          font-style: normal;
          font-weight: 400;
          font-variant: normal;
          text-transform: none;
          line-height: 1;
          vertical-align: baseline;
          display: inline-block;
          -webkit-font-smoothing: antialiased;
          -moz-osx-font-smoothing: grayscale;
        }
      }
    }
    .xt-dialog__body {
      padding: 30px 20px;
      color: #606266;
      font-size: 14px;
      word-break: break-all;
    }
    .xt-dialog__footer {
      padding: 10px 20px 20px;
      text-align: right;
      box-sizing: border-box;
        ::v-deep button:first-child {
          margin-right: 10px;
        }
        .xt-button {
          display: inline-block;
          line-height: 1;
          white-space: nowrap;
          cursor: pointer;
          background: #fff;
          border: 1px solid #dcdfe6;
          color: #606266;
          -webkit-appearance: none;
          text-align: center;
          box-sizing: border-box;
          outline: none;
          margin: 0;
          transition: 0.1s;
          font-weight: 500;
          -moz-user-select: none;
          -webkit-user-select: none;
          -ms-user-select: none;
          padding: 12px 20px;
          font-size: 14px;
          border-radius: 4px;
        }
        .xt-button--primary {
          color: #fff;
          background-color: #409eff;
          border-color: #409eff;
        }
    }
  }
}

.animation-enter-active {
  animation: animation .3s;
}
.animation-leave-active {
  animation: animation .3s reverse;
}

@keyframes animation {
  0%{
    opacity: 0;
    transform: translateY(-20px);
  }
  100%{
    opacity: 1;
    transform: translateY(0px);
  }
}
</style>
