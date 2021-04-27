<template>
  <div class="xt-radio-group">
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: 'XtRadioGroup',
  provide () {
    return {
      radioGroup: this
    }
  },
  props: {
    value: null
  }
}
</script>

<style scoped>
.xt-radio-group {
    display: inline-block;
    line-height: 1;
    vertical-align: middle;
    font-size: 0;
}
</style>
