<template>
  <div class="mf-radio-group" v-model="model">
      <slot></slot>
  </div>
</template>
<script>
export default {
  name: 'MFRadioGroup',

  componentName: 'MFRadioGroup',

  props: {
      value: {}
  },

  computed: {
    model: {
      get() {
        return this.value;
      },
      set(val) {
        this.$emit('change', val);
      }
    }
  }
}
</script>
