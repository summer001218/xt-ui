<template>
  <div class="xt-form" :class="{'is-inline': inline}" :name='name'>
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: 'XtForm',
  props: {
    model: {
      type: Object
    },
    labelWidth: {
      type: String,
      default: '80px'
    },
    inline: {
      type: Boolean,
      default: false
    },
    name: {
      type: String,
      default: ''
    }
  },
  provide () {
    return {
      Form: this
    }
  }
}
</script>

<style lang='scss'>
.xt-form {
    width: 460px;
}
.is-inline {
  width: auto;
}

</style>
