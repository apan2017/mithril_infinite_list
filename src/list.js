import {extend, raf} from './util.js'
import {on, fire} from './event.js'

const fetch = vnode => {
  const options = vnode.attrs.options
  fire('fetch:before')
  const promise = options.fetch(options.cursor)
  options.afterFetch(promise, options.list)
  promise
  .then(() => {
    options.cursor += options.step
  })
  .then(() => {
    fire('fetch:after')
  })

  return promise
}

const checkBoundAndFetch = vnode => {
  const bound = vnode.dom.getBoundingClientRect()
  const winHeight = window.innerHeight
  
  if (bound.bottom - winHeight < vnode.attrs.options.triggerDistance) {
    vnode.state.isLoading = true
    fetch(vnode).then(() => vnode.state.isLoading = false)
  }
}

const fetchEnoughData = vnode => {
  fetch(vnode).
  then(() => {
    setTimeout(() => {
      if (vnode.dom.getBoundingClientRect().bottom - window.innerHeight < vnode.attrs.options.triggerDistance) {
        fetchEnoughData(vnode)
      }
    }, 0)
  })
}

const onmousedown = (e, vnode) => {
  vnode.state.mouseStatus = 'down'
}

const onmouseup = (e, vnode) => {
  vnode.state.mouseStatus = 'up'
  vnode.state.mouseY = 0
}

const onmousemove = (e, vnode) => {
  raf(() => {
    if (vnode.state.mouseStatus === 'up') return
    if (e.pageY <= vnode.state.mouseY) return


    vnode.state.mouseY = e.pageY
  })
}

const initMouseMove = vnode => {
  vnode.state.mouseStatus = 'up'
  vnode.state.mouseY = 0
  vnode.state.mouseEvents = {
    onmousedown: e => onmousedown(e, vnode),
    onmouseup: e => onmouseup(e, vnode),
    onmousemove: e => onmousemove(e, vnode)
  }
}

const oninit = vnode => {
  vnode.state.isLoading = false
  initMouseMove(vnode)
}

const oncreate = vnode => {
  fetchEnoughData(vnode)

  on('onscroll', () => {
    if (vnode.state.isLoading) return
    checkBoundAndFetch(vnode)
  })
}

const view = vnode => {
  const state = vnode.state
  const options = vnode.attrs.options

  return(
    m(options.rootTag,
      state.mouseEvents,
      options.list.map((data, index) => options.item(data, index))
    )
  )
}

export default {
  oninit,
  oncreate,
  view
}
