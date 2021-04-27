<template>
  <button
    class="xt-button"
    :class="[`xt-button--${type}`,
    {'is-plain': plain,
    'is-round': round,
    'is-circle': circle,
    'is-disabled': disabled
    }]"
    :disabled="disabled"
    @click="handleClick"
    :name="name"
  >
    <i :class= 'icon'></i>
    <span >
      <slot></slot>
    </span>
  </button>
</template>

<script>
export default {
  name: 'XtButton',
  props: {
    type: {
      type: String,
      default: 'default'
    },
    plain: {
      type: Boolean,
      default: false
    },
    round: {
      type: Boolean,
      default: false
    },
    circle: {
      type: Boolean,
      default: false
    },
    disabled: {
      type: Boolean,
      default: false
    },
    icon: {
      type: String,
      default: ''
    },
    name: {
      type: String,
      default: ''
    }
  },
  methods: {
    handleClick (e) {
      this.$emit('click', e)
    }
  }
}
</script>

<style scoped lang="scss">
.xt-button {
  display: inline-block;
  line-height: 1;
  white-space: normal;
  cursor: pointer;
  text-align: center;
  box-sizing: border-box;
  background-color: transparent;
  outline: none;
  margin: 0;
  transition: 0.1s;
  font-weight: 500;
  border: 1px solid #dcdfe6;
  -webkit-appearance: none;
  // 禁止元素的文字被选中
  -moz-user-select: none;
  -webkit-user-select: none;
  -ms-user-select: none;
  padding: 12px 20px;
  font-size: 14px;
  border-radius: 4px;
  &:hover,
  &:focus {
    color: #409eff;
    border-collapse: #c6e2ff;
    background-color: #ecf5ff;
  }
}
.xt-button--primary {
  background-color: rgb(37, 172, 250);
  color: #fff;
  &:hover,
  &:focus {
    color: #fff;
    border-color: #c6e2ff;
    background-color: rgb(37, 172, 250, 0.5);
  }
}
.xt-button--success {
  background-color: rgb(9, 219, 26);
  color: #fff;
  &:hover,
  &:focus {
    color: #fff;
    border-color: #c6e2ff;
    background-color: rgb(9, 219, 26, 0.5);
  }
}
.xt-button--info {
  background-color: rgb(122, 122, 122);
  color: #fff;
  &:hover,
  &:focus {
    color: #fff;
    border-color: #c6e2ff;
    background-color: rgb(122, 122, 122, 0.5);
  }
}
.xt-button--warning {
  background-color: rgb(209, 164, 15);
  color: #fff;
  &:hover,
  &:focus {
    color: #fff;
    border-color: #c6e2ff;
    background-color: rgb(209, 164, 15, 0.5);
  }
}
.xt-button--danger {
  background-color: rgb(240, 60, 60);
  color: #fff;
  &:hover,
  &:focus {
    color: #fff;
    border-collapse: #c6e2ff;
    background-color: rgb(240, 60, 60,0.5);
  }
}
.xt-button--primary.is-plain {
  color: #409eff;
  background: #ecf5ff;
  border-color:#b3d8ff;
  &:hover,
  &:focus {
    color: #fff;
    border-color: #409eff;
    background: #409eff
  }
}
.xt-button--success.is-plain {
  background: #f0f9eb;
  color: #67c23a;
  border-color: #c2e7b0;
  &:hover,
  &:focus {
    color: #fff;
    border-color: #67c23a;
    background: #67c23a;
  }
}
.xt-button--info.is-plain {
  background: #f4f4f5;
  border-color: #d3d4d6;
  color: #909399;
  &:hover,
  &:focus {
    color: #fff;
    border-color: #909399;
    background: #909399;
  }
}
.xt-button--warning.is-plain {
  background: #fdf6ec;
  border-color: #f5dab1;
  color: #e6a23c;
  &:hover,
  &:focus {
    color: #fff;
    border-color: #e6a23c;
    background: #e6a23c;
  }
}
.xt-button--danger.is-plain {
  background: #fef0f0;
  border-color: #fbc4c4;
  color: #f56c6c;
  &:hover,
  &:focus {
    color: #fff;
    border-color: #f56c6c;
    background: #f56c6c;
  }
}
.xt-button.is-round{
  border-radius: 20px;
  padding: 12px 33px;
}
.xt-button.is-circle{
  border-radius: 50%;
  padding: 12px;
}
.xt-button.is-disabled{
  &:hover,
  &:focus {
    color: #fff;
    background-color: #c8c9cc;
    border-color: #c8c9cc;
    cursor: not-allowed;
    background-image: none;
  }
}
</style>
