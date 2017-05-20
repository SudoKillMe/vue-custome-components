
<script>
    export default {
        name: 'MFRow',

        componentName: 'MFRow',

        props: {
            gutter: {
                type: Number,
                default: 0
            }
        },

        render: function(h) {
            let styles = {};
            let classList = ['mf-row'];

            if ( this.gutter ) {
                styles.paddingLeft = this.gutter / 2 + 'px';
                styles.paddingRight = styles.paddingLeft;
            }
            console.log(this);
            return h('div', {
                class: classList,
                style: styles
            }, this.$slots.default);

        }
    }
</script>