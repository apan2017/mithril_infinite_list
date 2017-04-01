import placeholder from './placeholder.js'
import {extend, raf} from './util.js'
import {on, fire} from './event.js'

const DEFAULT = {
  rootTag: 'ul',
  list: [],
  cursor: 1,
  step: 1,
  triggerDistance: 200,
  loadingText: 'loading...',
  item: () => { throw new Error('You must declare `item` function.') },
  fetch: () => { throw new Error('You must declare `fetch` function.') },
  afterFetch: (promose, list) => {
    promose.then(data => {
      for (var i = 0; i < data.length; i++) {
        list.push(data[i])
      }
    })
  }
}

const fetch = state => {
  fire('fetch:before')
  const promise = state.fetch(state.cursor)
  state.afterFetch(promise, state.list)
  promise
  .then(() => {
    state.cursor += state.step
  })
  .then(() => {
    fire('fetch:after')
  })

  return promise
}

const checkBoundAndFetch = vnode => {
  const bound = vnode.dom.getBoundingClientRect()
  const winHeight = window.innerHeight
  
  if (bound.bottom - winHeight < vnode.state.triggerDistance) {
    vnode.state.isLoading = true
    fetch(vnode.state).then(() => vnode.state.isLoading = false)
  }
}

const fetchEnoughData = vnode => {
  fetch(vnode.state).
  then(() => {
    setTimeout(() => {
      if (vnode.dom.getBoundingClientRect().bottom - window.innerHeight < vnode.state.triggerDistance) {
        fetchEnoughData(vnode)
      }
    }, 0)
  })
}

const oninit = vnode => {
  const attrs = vnode.attrs
  const state = vnode.state

  extend(state, DEFAULT, attrs)
  state.isLoading = false
}

const oncreate = vnode => {
  const state = vnode.state

  state.onscroll = () => {
    raf(() => {
      if (state.isLoading) return
      checkBoundAndFetch(vnode)
    })
  }
  window.addEventListener('scroll', state.onscroll)

  fetchEnoughData(vnode)
}

const view = vnode => {
  const state = vnode.state

  return [
    m(state.rootTag,
      state.list.map((data, index) => state.item(data, index))
    ),
    m(placeholder, {
      loadingText: state.loadingText
    })
  ]
}

const onremove = vnode => {
  window.removeEventListener('scroll', vnode.state.onscroll)
}

const infList = {
  oninit,
  oncreate,
  view,
  onremove
}

window.infList = infList
