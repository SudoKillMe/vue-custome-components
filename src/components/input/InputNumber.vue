<template>
    <div class="mf-input-number">
        <mf-input
            :value="model"
            v-model="model"
            ></mf-input>
        <div class="mf-input-number--operator">
            <span class="mf-input-number--increase mf-icon-parent"
                @mousedown="handlePlus"
                :class="{
                    'is-disabled': plusDisabled
                }">
                <i class="mf-icon-plus"></i>
            </span>
            <span class="mf-input-number--decrease mf-icon-parent"
                @mousedown="handleMinus"
                :class="{
                    'is-disabled': minusDisabled
                }">
                <i class="mf-icon-minus"></i>
            </span>
        </div>

    </div>
</template>

<script>
import MFInput from './Input';
export default {
    name: 'MFInputNumber',

    components: {
        'mf-input': MFInput
    },

    props: {
        value: Number,
        min: Number,
        max: Number
    },

    computed: {
        model: {
            get() {
                return this.value;
            },
            set(val) {
                //TODO 判断输入是否为有效数字的方法不够优雅
                val = this._validateNumber(val);
                this.$emit('input', parseInt(val));
            }
        },
        plusDisabled() {
            return this.max && this.model >= this.max;
        },
        minusDisabled() {
            return this.min && this.model <= this.min;
        }
    },

    methods: {
        handlePlus() {
            if ( this.plusDisabled ) return;
            this.model++;
        },

        handleMinus() {
            if ( this.minusDisabled ) return;
            this.model--;
        },
        _validateNumber(val) {
            let old = this.model;
            if ( !val ) {    // 空值
                return this.min ? this.min : 0;
            }
            if ( !parseInt(val) ) {  // 含有字符串
                return old;
            }
            if ( val > this.max ) {
                return this.max;
            }
            if ( val < this.min ) {
                return this.min;
            }
            return val;
        }
    },


}
</script>