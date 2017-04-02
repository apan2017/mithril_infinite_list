import {extend, raf} from './util.js'
import {on, fire} from './event.js'

const fetch = vnode => {
  const options = vnode.attrs.options
  const promise = options.fetch(options.cursor)
  options.afterFetch(promise, options.list)
  promise.then(() => options.cursor += options.step)
  return promise
}

const checkBoundAndFetch = vnode => {
  const bound = vnode.dom.getBoundingClientRect()
  const winHeight = window.innerHeight
  
  if (bound.bottom - winHeight < vnode.attrs.options.triggerDistance) {
    vnode.state.isLoading = true
    fire('fetch:before')
    fetch(vnode)
    .then(() => vnode.state.isLoading = false)
    .then(() => fire('fetch:after'))
  }
}

const fetchEnoughData = vnode => {
  fire('fetch:before')
  fetch(vnode).
  then(() => {
    setTimeout(() => {
      if (vnode.dom.getBoundingClientRect().bottom - window.innerHeight < vnode.attrs.options.triggerDistance) {
        fetchEnoughData(vnode)
      }
    }, 0)
  })
  .then(() => fire('fetch:after'))
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
  vnode.state.isLoading = false
  if (vnode.attrs.options.pullRefreshable) {
    initMouseMove(vnode)
  }
}

const oncreate = vnode => {
  fetchEnoughData(vnode)

  on('onscroll', () => {
    if (vnode.state.isLoading) return
    checkBoundAndFetch(vnode)
  })

  on('pull:refresh', () => {
    vnode.attrs.options.cursor = 1
    vnode.attrs.options.list = []
    fetchEnoughData(vnode)
  })
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
