import {raf} from './util.js'

var lastScrollTop = 0
var loading = false

const scrollDirection = e => {
  if (lastScrollTop < document.body.scrollTop) {
    return 'down'
  } else {
    return 'up'
  }
}

const display = vnode => {
  loading = true

  const style = vnode.state.style
  style.height = 'inherit'
  style.visibility = 'visible'
  m.redraw()
}

const hide = vnode => {
  loading = false

  const style = vnode.state.style
  style.height = 0
  style.visibility = 'hidden'
  m.redraw()
}

const callOnReach = (vnode, direction) => {
  if (!vnode.attrs.onreach) return

  const onreach = vnode.attrs.onreach
  const windowH = window.innerHeight
  const bound = vnode.dom.getBoundingClientRect()

  if (direction == 'down' && bound.bottom - windowH < 200) {
    display(vnode)
    onreach(vnode).then(() => hide(vnode))

    return true
  }

  return false
}

const tick = (vnode, direction) => {
  if (loading) return

  callOnReach(vnode, direction)
  lastScrollTop = document.body.scrollTop
}

const oninit = vnode => {
  const state = vnode.state
  const attrs = vnode.attrs

  state.style = {
    height: 0,
    visibility: 'hidden',
    textAlign: 'center'
  }

  state.onscroll = e => {
    raf(() => tick(vnode, scrollDirection(e)))
  }
}

const oncreate = vnode => {
  const state = vnode.state
  const dom = vnode.dom
  
  window.addEventListener('scroll', state.onscroll)
}

const view = vnode => {
  return m('div', {style: vnode.state.style}, 'loading')
}

const onremove = vnode => {
  window.removeEventListener('scroll', state.onscroll)
}

export default {
  oninit,
  oncreate,
  view,
  onremove
}