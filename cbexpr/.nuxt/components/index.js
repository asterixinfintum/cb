export { default as Brands } from '../..\\components\\Brands.vue'
export { default as Contact } from '../..\\components\\Contact.vue'
export { default as Footer } from '../..\\components\\Footer.vue'
export { default as Header } from '../..\\components\\Header.vue'
export { default as Jumbotron } from '../..\\components\\Jumbotron.vue'
export { default as LawyersGrid } from '../..\\components\\LawyersGrid.vue'
export { default as Mast } from '../..\\components\\Mast.vue'
export { default as OurExpertise } from '../..\\components\\OurExpertise.vue'
export { default as Slide } from '../..\\components\\Slide.vue'
export { default as Tutorial } from '../..\\components\\Tutorial.vue'
export { default as VideoCustom } from '../..\\components\\VideoCustom.vue'

// nuxt/nuxt.js#8607
function wrapFunctional(options) {
  if (!options || !options.functional) {
    return options
  }

  const propKeys = Array.isArray(options.props) ? options.props : Object.keys(options.props || {})

  return {
    render(h) {
      const attrs = {}
      const props = {}

      for (const key in this.$attrs) {
        if (propKeys.includes(key)) {
          props[key] = this.$attrs[key]
        } else {
          attrs[key] = this.$attrs[key]
        }
      }

      return h(options, {
        on: this.$listeners,
        attrs,
        props,
        scopedSlots: this.$scopedSlots,
      }, this.$slots.default)
    }
  }
}
