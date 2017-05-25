<template>
    <div class="mf-input-number">
        <mf-input></mf-input>
        <div class="mf-input-number--operator">
            <span class="mf-input-number--increase">
                <i class="mf-icon-plus"></i>
            </span>
            <span class="mf-input-number--decrease">
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
    }
}
</script>