
<script>
    export default {
        name: 'MFCol',

        props: {
            span: {
                type: Number,
                default: 0
            },
            xs: {
                type: Number,
                default: 0,
            },
            sm: {
                type: Number,
                default: 0
            },
            md: {
                type: Number,
                default: 0
            },
            lg: {
                type: Number,
                default: 0
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

            ['span', 'xs', 'sm', 'md', 'lg'].forEach(function(element) {
                if ( this[element] ) 
                    classList.push(
                        element === 'span' ? `mf-col-${this.span}` : `mf-col-${element}-${this[element]}`
                    );
            },this);

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