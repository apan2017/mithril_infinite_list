import {on, fire} from './event.js'
import {raf} from './util.js'

const oninit = vnode => {
  vnode.state.style = {
    height: '0px',
    overflow: 'hidden',
    textAlign: 'center'
  }

  vnode.state.isReadyRefresh = false
  vnode.state.isRefreshing = false
}

const slideUp = (vnode, n, minHeight) => {
  minHeight = minHeight || 0

  raf(() => {
    vnode.state.height -= n
    vnode.state.style.height = vnode.state.height + 'px'
    m.redraw()

    if (vnode.state.height >= minHeight) {
      slideUp(vnode, n, minHeight)
    } else {
      vnode.state.style.height = minHeight + 'px'
      m.redraw()
    }
  })
}

const oncreate = vnode => {
  const options = vnode.attrs.options
  const dom = vnode.dom
  const n = vnode.state.height / 10

  on('pull:start', () => {
    vnode.state.isReadyRefresh = false
    vnode.state.height = 0
    vnode.state.style.height = '0px'
    m.redraw()
  })

  on('pull:end', () => {
    if (vnode.attrs.options.pullLimitHeight <= vnode.state.height) {
      slideUp(vnode, n, dom.children[0].offsetHeight)
      fire('pull:refresh')
    } else {
      slideUp(vnode, n, 0)
    }
  })

  on('pull:move', height => {
    raf(() => {
      if (options.pullLimitHeight <= vnode.state.height) {
        vnode.state.isReadyRefresh = true
      }

      vnode.state.height += ((options.pullLimitHeight - vnode.state.height) / options.pullLimitHeight + 1)
      vnode.state.style.height = vnode.state.height + 'px'
      m.redraw()
    })
  })

  on('refresh:before', () => {
    vnode.state.isRefreshing = true
    m.redraw()
  })

  on('refresh:after', () => {
    vnode.state.isRefreshing = false
    m.redraw()
    slideUp(vnode, n, 0)
  })
}

const view = vnode => {
  const options = vnode.attrs.options
  const state = vnode.state

  var text
  text = state.isReadyRefresh ? options.refreshText : options.pullDownText
  text = state.isRefreshing ? options.refreshingText : text

  return(
    m('div', {style: vnode.state.style}, [
      m('span', text)
    ])
  )
}

export default {
  oninit,
  oncreate,
  view
}