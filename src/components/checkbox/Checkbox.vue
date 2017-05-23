<template>
  <label class="mf-checkbox">
      <span class="mf-checkbox--input"
        :class="{
            'is-checked': isChecked ,
            'is-disabled': isDisabled
        }">
          <span class="mf-checkbox--inner"></span>
          <input 
            type="checkbox" 
            class="mf-checkbox--original"
            :name="name"
            :value="label"
            :disabled="isDisabled"
            v-model="model">
      </span>
      <span class="mf-checkbox--text">
          <slot></slot>
          <template v-if="!$slots.default">{{ label }}</template>
      </span>
  </label>
</template>

<script>
export default {
  name: 'MFCheckbox',

  props: {
      value: {},
      name: String,
      label: [String, Number],
      disabled: Boolean
  },

  computed: {
      isChecked() {
          return this.isGroup ? this._parentGroup.value.includes(this.label) : this.value;
      },
      isDisabled() {
          return this.isGroup 
                    ? (this._parentGroup.value.length == this.max) && !this.isChecked
                    : this.disabled;
      },
      isGroup() {
          let parent = this.$parent;
          while ( parent ) {
              if ( parent.$options.componentName !== 'MFCheckboxGroup' ) {
                  parent = parent.$parent;
              } else {
                  this._parentGroup = parent;
                  return true;
              }
          }
          return false;
      },
      max() {
          return this._parentGroup.max;
      },
      min() {
          return this._parentGroup.min;
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
