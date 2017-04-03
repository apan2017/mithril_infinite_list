import {extend, raf} from './util.js'
import {on, off, fire} from './event.js'

const fetch = (vnode, action) => {
  const options = vnode.attrs.options
  if (!options.hasMore) return

  action = action ? action : 'fetch'

  fire(action + ':before')
  options.fetch(options.cursor)
    .then(data => fire(action + ':after', data))
}

const checkBoundAndFetch = vnode => {
  const bound = vnode.dom.getBoundingClientRect()
  const winHeight = window.innerHeight
  if (bound.bottom - winHeight < vnode.attrs.options.triggerDistance) {
    fetch(vnode)
  }
}

const fetchEnoughData = (vnode, action) => {
  action = action ? action : 'fetch'

  fetch(vnode, action)

  const fn = () => {
    setTimeout(() => {
      if (vnode.dom.getBoundingClientRect().bottom - window.innerHeight < vnode.attrs.options.triggerDistance) {
        fetchEnoughData(vnode, action)
      }
      off(action + ':after', fn)
    }, 0)
  }

  on(action + ':after', fn)
}

const ontouchstart = (e, vnode) => {
  if (document.body.scrollTop > 0) return
  vnode.state.touchStatus = 'start'
  vnode.state.mouseY = e.pageY
  fire('pull:start')
}

const ontouchend = (e, vnode) => {
  if (vnode.state.touchStatus === 'end') return
  vnode.state.touchStatus = 'end'
  fire('pull:end')
}

const ontouchmove = (e, vnode) => {
  raf(() => {
    if (vnode.state.touchStatus === 'end') return
    if (e.pageY <= vnode.state.mouseY) return
    fire('pull:move', e.pageY - vnode.state.mouseY)
  })
}

const initMouseMove = vnode => {
  vnode.state.touchStatus = 'end'
  vnode.state.touchEvents = {
    ontouchstart: e => ontouchstart(e, vnode),
    ontouchend: e => ontouchend(e, vnode),
    ontouchmove: e => ontouchmove(e, vnode)
  }
}

const oninit = vnode => {
  const options = vnode.attrs.options
  vnode.state.isLoading = false

  if (vnode.attrs.options.pullRefreshable) {
    initMouseMove(vnode)
  }

  on('onscroll', () => {
    if (vnode.state.isLoading) return
    checkBoundAndFetch(vnode)
  })

  on('pull:refresh', () => {
    options.cursor = 1
    options.list = []
    fetchEnoughData(vnode, 'refresh')
  })

  on('refresh:after', data => {
    options.list = options.list.concat(data)
    options.cursor += options.step
  })

  on('fetch:before', () => {
    vnode.state.isLoading = true
  })

  on('fetch:after', data => {
    options.list = options.list.concat(data)
    vnode.state.isLoading = false
    options.cursor += options.step

    if ((options.maxCursor > 0 && options.cursor > options.maxCursor) || !data.length) {
      options.hasMore = false
    }
  })
}

const oncreate = vnode => {
  fetchEnoughData(vnode, 'fetch')
}

const view = vnode => {
  const state = vnode.state
  const options = vnode.attrs.options

  return(
    m(options.rootTag,
      state.touchEvents,
      options.list.map((data, index) => options.item(data, index))
    )
  )
}

export default {
  oninit,
  oncreate,
  view
}
