<template>
  <div class="mf-input-panel">
      <input 
        type="text"
        class="mf-input"
        :placeholder="placeholder"
        @focus="innerFocus"
        @blur="innerBlur"
        v-model="value">
      <div class="mf-input-autocomplete" v-if="_autocomplete" >
        <div class="mf-autocomplete-item"
           v-for="item in autocompleteList"
           @click.stop.prevent="chooseItem(item)" >
          <h4 class="mf-autocomplete-item-title">{{ item.title }}</h4>
          <p class="mf-autocomplete-item-desc">{{ item.content }}</p>
        </div>
      </div>
  </div>
</template>

<script>
export default {
  name: 'MFInput',

  data() {
    return {
      focus: false,

    }
  },

  props: {
      value: {},
      placeholder: String,
      autocomplete: Boolean,
      autocompleteList: Array
  },

  computed: {
    _autocomplete() {
      return this.focus && this.autocomplete;
    }
  },

  methods: {
    innerFocus() {
      console.log('focus');
      this.focus = true;
      this.$emit('focus');
    },
    innerBlur() {
      console.log('blur');
      this.focus = false;
      this.$emit('blur');
    },
    chooseItem(item) {
      this.value = item.title;
      console.log(item);
    }
  }


}
</script>
