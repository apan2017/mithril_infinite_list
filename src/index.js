import placeholder from './placeholder.js'
import * as util from './util.js'

const DEFAULT = {
  rootTag: 'ul',
  list: [],
  cursor: 1,
  step: 1,
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
  const promise = state.fetch(state.cursor)
  state.afterFetch(promise, state.list)
  promise.then(() => { state.cursor += state.step })

  return promise
}

const oninit = vnode => {
  const attrs = vnode.attrs
  const state = vnode.state

  util.extend(state, DEFAULT, attrs)
  fetch(state)
}

const view = vnode => {
  const state = vnode.state

  return [
    m(state.rootTag,
      state.list.map((data, index) => state.item(data, index))
    ),
    m(placeholder, {onreach: _vnode => onreach(state, _vnode)})
  ]
}

const onreach = (state, vnode) => {
  return fetch(state)
}

const infList = {
  oninit,
  view
}

window.infList = infList
