<template>
  <div class="mf-input-panel">
      <input 
        type="text"
        class="mf-input"
        :placeholder="placeholder">
  </div>
</template>

<script>
export default {
  name: 'MFInput',

  props: {
      placeholder: String
  }
}
</script>
