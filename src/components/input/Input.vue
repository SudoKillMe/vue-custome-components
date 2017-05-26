//TODO 根据输入的单词自动的筛选autocomplete的列表
<template>
  <div class="mf-input-panel">
      <input 
        type="text"
        class="mf-input"
        :placeholder="placeholder"
        @focus="innerFocus"
        @blur="innerBlur"
        :value="model"
        v-model="model">
      <i class="mf-input--icon"
        :class="{
          [`mf-icon-${icon}`]: icon
        }"></i>
      <div class="mf-input-autocomplete" v-if="_autocomplete" >
        <div class="mf-autocomplete-item"
           v-for="item in autocompleteList"
           @mousedown="chooseItem(item)" >
          <h4 class="mf-autocomplete-item-title">{{ item.title }}</h4>
          <p class="mf-autocomplete-item-desc">{{ item.content }}</p>
        </div>
      </div>
  </div>
</template>

<script>
import Vue from 'vue';
export default {
  name: 'MFInput',

  data() {
    return {
      focus: false,
     // currentValue: '',
//      matchList: []
    }
  },

  props: {
      value: {},
      placeholder: String,
      autocomplete: Boolean,
      autocompleteList: Array,
      icon: String
  },

  computed: {
    model: {
      get() {
        return this.value;
      },
      set(val) {
        this.$emit('input', val);
      }
    },
    _autocomplete() {
      return this.focus && this.autocomplete;
    },
//    matchList() {
//      let copy = this.autocompleteList.slice(0);
//        this.autocompleteList.forEach( function(ele, index) {
//          if ( ele.title.indexOf(this.currentValue) === -1 ) {
//            copy.splice(index, 1);
//          }
//        }, this );
//      return copy;
//    }
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
    //之所以用mousedown事件,是因为blur事件会优于click事件发生,导致click事件无法发生
    chooseItem(item) {
      this.model = item.title;
    }
  },

//  watch: {
//    currentValue(newVal, oldVal) {
//      let copy = this.autocompleteList.slice(0);
//      if ( newVal == '' ) {
//        this.matchList = copy;
//      } else {
//        this.autocompleteList.forEach( function(ele, index) {
//          if ( ele.title.indexOf(newVal) === -1 ) {
//            this.matchList.splice(index, 1);
//          }
//        }, this );
//      }
//    }
//  }


}
</script>
