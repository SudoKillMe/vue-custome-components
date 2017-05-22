<template>
  <div class="mf-radio-group">
      <slot></slot>
  </div>
</template>
<script>
export default {
  name: 'MFRadioGroup',

  componentName: 'MFRadioGroup',

  props: {
      value: {}
  }
}
</script>
