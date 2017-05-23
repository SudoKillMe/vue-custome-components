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
      <mf-radio-group>
        <mf-radio name="test" :label="11" disabled @input='input'>我是选择1</mf-radio>
        <mf-radio name="test" :label="22"  @input='input'>我是选择2</mf-radio>
      </mf-radio-group>

      <mf-checkbox name="checkbox1" :label="1111" disabled >我是checkbox</mf-checkbox>
      <mf-checkbox name="checkbox1" :label="2222">我是checkbox</mf-checkbox>
      <mf-checkbox name="checkbox1" :label="3333" v-model="checkList">我是checkbox</mf-checkbox>
      <hr>
      <mf-checkbox-group v-model="groupList" :max="2">
          <mf-checkbox name="checkbox-group1" :label="11111">我是checkbox1</mf-checkbox>   
          <mf-checkbox name="checkbox-group1" :label="22222">我是checkbox1</mf-checkbox>
          <mf-checkbox name="checkbox-group1" :label="33333">我是checkbox1</mf-checkbox>
      </mf-checkbox-group>



  </div>
</template>

<script>
import MFButton from './components/button/Button';
import MFCol from './components/col/Col';
import MFRow from './components/row/Row';
import MFRadio from './components/radio/Radio';
import MFRadioGroup from './components/radio/RadioGroup';
import MFCheckbox from './components/checkbox/Checkbox';
import MFCheckboxGroup from './components/checkbox/CheckboxGroup';
export default {
  name: 'App',

  data() {
      return {
          checkList: true,
          groupList: []
      }
  },

  components: {
    'mf-button': MFButton,
    'mf-col': MFCol,
    'mf-row': MFRow,
    'mf-radio': MFRadio,
    'mf-radio-group': MFRadioGroup,
    'mf-checkbox': MFCheckbox,
    'mf-checkbox-group': MFCheckboxGroup
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


