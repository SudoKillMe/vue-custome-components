
<script>
    export default {
        name: 'MFRow',

        componentName: 'MFRow',

        props: {
            gutter: {
                type: Number,
                default: 0
            },
            type: {
                type: String,
                default: 'default'
            },
            justify: {
                type: String,
                default: 'start'
            }
        },

        render: function(h) {
            let styles = {};
            let classList = ['mf-row'];

            if ( this.type === 'flex' ) {
                classList.push('mf-row--flex', `justify--${this.justify}` );
            }

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