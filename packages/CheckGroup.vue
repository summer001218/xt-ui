<template>
  <div class="CheckGroup">
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: 'XtCheckboxGroup',
  props: {
    value: {
      type: Array
    }
  },
  provide () {
    return {
      checkGroup: this
    }
  }
}
</script>

<style scoped>
</style>
