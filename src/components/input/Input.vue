<template>
  <div class="mf-input-panel">
      <input 
        type="text"
        class="mf-input"
        :placeholder="placeholder"
        @focus="innerFocus"
        @blur="innerBlur"
        v-model="model">
      <div class="mf-input-autocomplete" v-if="_autocomplete" >
        <div class="mf-autocomplete-item"
           v-for="item in autocompleteList"
           @click="chooseItem" >
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
    model: {
      get() {
        return this.value;
      },
      set(val) {
        this.value = val;
      }
    },
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
    innerBlur(e) {
      console.log('blur');
      this.focus = false;
      this.$emit('blur');
    },
    chooseItem(item) {
      console.log('chooseItem');
      this.model = item.title;
      console.log(item);
    }
  }


}
</script>
