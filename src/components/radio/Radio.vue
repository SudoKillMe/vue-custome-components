<template>
  <label class="mf-radio">
    <span class="mf-radio--input">
      <span class="mf-radio--inner"
        :class="{
            'is-checked': model === label
        }"></span>
      <input 
        type="radio" 
        class="mf-radio--original"
        :name="name"
        :value="label"
        v-model="model">
    </span>
    <span class="mf-radio--text">
        <slot></slot>
        <template v-if="!$slots.default">{{ label }}</template>
    </span>
  </label>
</template>

<script>
export default {
  name: 'MFRadio',

  props: {
      value: {},
      name: {
          type: String,
          default: ''
      },
      label: [String, Number]
  },

  computed: {
      model: {
          get() {
              return this.value;
          },
          set(val) {
              this.$emit('input', val);
          }
      }
  }
}

</script>
