<template>
  <button class="mf-button"
    @click="handleClick"
    :type="nativeType"
    :class="[
        type ? 'mf-button--' + type : '',
        size ? 'mf-button--' + size : '',
        {
            'is-disabled': disabled,
            'is-loading': loading
        }
    ]">
    <span v-if="$slots.default"><slot></slot></span>
    </button>
</template>

<script>
export default {
  name: 'MFButton',

  props: {
      type: {
          type: String,
          default: 'default'
      },
      nativeType: {
          type: String,
          default: 'button'
      },
      size: String,
      disabled: Boolean,
      loading: Boolean
  },
  methods: {
      handleClick(event) {
          this.$emit('click', event);
      }
  }
}
</script>
