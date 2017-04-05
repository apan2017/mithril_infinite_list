import {on, fire} from './event.js'

const oninit = vnode => {
  const state = vnode.state
  const attrs = vnode.attrs

  state.style = {
    height: 0,
    visibility: 'hidden',
    textAlign: 'center'
  }
}

const oncreate = vnode => {
  const state = vnode.state
  const style = state.style

  on('fetch:before', () => {
    style.visibility = 'visible'
    style.height = 'inherit'
    m.redraw()
  })

  on('fetch:after', () => {
    style.visibility = 'hidden'
    style.height = 0
    m.redraw()
  })
}

const view = vnode => {
  return m('div', {style: vnode.state.style}, [
    m('span', vnode.attrs.options.loadingText)
  ])
}

export default {
  oninit,
  oncreate,
  view
}