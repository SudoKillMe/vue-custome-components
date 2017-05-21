<template>
  <div class="wrap">
      <mf-button native-type="submit" type="info">button</mf-button>
      <mf-row :gutter="20" type="flex" justify="center">
          <mf-col :span="12" class="my-col">
              <div class="text">我是第一列</div>
          </mf-col>
          <mf-col :span="12" class="my-col">
              <div class="text">我是第一列</div>
          </mf-col>
      </mf-row>
  </div>
</template>

<script>
import MFButton from './components/button/Button';
import MFCol from './components/col/Col';
import MFRow from './components/row/Row';

export default {
  name: 'App',

  components: {
    'mf-button': MFButton,
    'mf-col': MFCol,
    'mf-row': MFRow
  }
}
</script>

<style>
    .text { background: gray }
</style>


