import stream from 'mithril/stream'
import {on, fire} from './event.js'
import {raf} from './util.js'

const oninit = vnode => {
  const state = vnode.state
  const options = vnode.attrs.options

  state.style = {
    height: '0px',
    overflow: 'hidden',
    textAlign: 'center'
  }

  state.render = stream.combine((readyRefresh, refreshing) => {
    if (readyRefresh()) return options.refreshText
    if (refreshing()) return options.refreshingText
    return options.pullDownText
  }, [state.readyRefresh, state.refreshing])
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

  const readyRefresh = vnode.state.readyRefresh
  const refreshing = vnode.state.refreshing

  on('pull:start', () => {
    readyRefresh(false)
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

  on('pull:move', () => {
    raf(() => {
      if (options.pullLimitHeight <= vnode.state.height) {
        readyRefresh(true)
      }

      vnode.state.height += ((options.pullLimitHeight - vnode.state.height) / options.pullLimitHeight + 1)
      vnode.state.style.height = vnode.state.height + 'px'
      m.redraw()
    })
  })

  // todo: 此处不会触发重绘
  on('refresh:before', () => {
    refreshing(true)
    m.redraw()
  })

  on('refresh:after', () => {
    refreshing(false)
    m.redraw()
    slideUp(vnode, n, 0)
  })
}

const view = vnode => {
  return(
    m('div', {style: vnode.state.style}, [
      m('span', vnode.state.render())
    ])
  )
}

export default {
  readyRefresh: stream(false),
  refreshing: stream(false),
  oninit,
  oncreate,
  view
}