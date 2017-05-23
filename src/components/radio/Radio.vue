<template>
  <label class="mf-radio">
    <span class="mf-radio--input"
        :class="{
            'is-checked': model === label,
            'is-disabled': disabled
        }">
      <span class="mf-radio--inner"></span>
      <input 
        type="radio" 
        class="mf-radio--original"
        :name="name"
        :value="label"
        :disabled="disabled"
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
      label: [String, Number],
      disabled: Boolean
  },

  computed: {
      isGroup() {
          let parent = this.$parent;
          while ( parent ) {
              if ( parent.$options.componentName !== 'MFRadioGroup' ) {
                  parent = parent.$parent;
              } else {
                this._parentGroup = parent;
                return true;
              }
          }
          return false;

      },
      model: {
          get() {
              return this.isGroup ? this._parentGroup.value : this.value;
          },
          set(val) {
              if ( this.isGroup ) {
                  this._parentGroup.$emit('input', val);
              } else {
                  this.$emit('input', val);
              }
              
          }
      }
  }
}

</script>
