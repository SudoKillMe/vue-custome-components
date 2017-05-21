
<script>
    export default {
        name: 'MFCol',

        props: {
            span: {
                type: Number,
                default: 24
            }
        },

        computed: {
            gutter: function() {
                let parent = this.$parent;
               while ( parent && parent.$options.componentName !== 'MFRow' ) {
                   parent = parent.$parent;
               }

                return parent ? parent.gutter : 0;
            }
        },

        render: function(h) {
            let styles = {};
            let classList = ['mf-col'];
            classList.push( `mf-col-${this.span}` );

            if ( this.gutter ) {
                styles.paddingLeft = this.gutter / 2 + 'px';
                styles.paddingRight = styles.paddingLeft;
            }

            return h('div', {
                class: classList,
                style: styles
            }, this.$slots.default);
        }
    }
</script>