<template>
  <div class="wrap">
      <mf-button native-type="submit" type="info">button</mf-button>
      <mf-row :gutter="20" justify="center" align="center">
          <mf-col class="my-col" :span="6" :xs="8" :md="2">
              <div class="text">我是第一列</div>
          </mf-col>
          <mf-col class="my-col" :span="6" :xs="8" :md="10">
              <div class="text">我是第一列</div>
          </mf-col>
          <mf-col class="my-col" :span="6" :xs="8" :md="10">
              <div class="text">我是第一列</div>
          </mf-col>
          <mf-col class="my-col" :span="6" :xs="8" :md="2">
              <div class="text">我是第一列</div>
          </mf-col>
      </mf-row>

      <hr>
      <mf-radio name="test" :label="11" v-model="radio" @input='input'>我是选择1</mf-radio>
      <mf-radio name="test" :label="22" v-model="radio" @input='input'>我是选择2</mf-radio>
  </div>
</template>

<script>
import MFButton from './components/button/Button';
import MFCol from './components/col/Col';
import MFRow from './components/row/Row';
import MFRadio from './components/radio/Radio';
export default {
  name: 'App',

  data() {
      return {
          radio: 11
      }
  },

  components: {
    'mf-button': MFButton,
    'mf-col': MFCol,
    'mf-row': MFRow,
    'mf-radio': MFRadio
  },
  methods: {
      input(e) {
        console.log(e);
      }
  }
}
</script>

<style>
    body { padding: 20px 30px; }
    .text { background: gray }
</style>


