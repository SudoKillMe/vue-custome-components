<template>
  <div class="mf-checkbox-group" v-model="model">
      <slot></slot>
  </div>
</template>

<script>
export default {
  name: 'MFCheckboxGroup',

  componentName: 'MFCheckboxGroup',

  props: {
      value: {},
      min: Number,
      max: Number
  },

  computed: {
      model: {
          get() {
              return this.value;
          },
          set(val) {
              if ( this.max < this.value.length ) return;
              this.$emit('input', val);
          }
      }
  }
}
</script>
