import loading from './loading.js'
import {extend, raf} from './util.js'
import {on, fire} from './event.js'
import list from './list.js'
import pullRefresh from './pull_refresh.js'

const DEFAULT = {
  rootTag: 'ul',
  list: [],
  cursor: 1,
  step: 1,
  triggerDistance: 200,
  pullRefreshable: false,
  loadingText: '正在加载',
  pullDownText: '下拉刷新',
  refreshText: '松开刷新',
  pullLimitHeight: 100,
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

const oninit = vnode => {
  extend(vnode.state, DEFAULT, vnode.attrs)
}

const oncreate = vnode => {
  const state = vnode.state
  state.onscroll = () => {
    raf(() => {
      fire('onscroll')
    })
  }
  window.addEventListener('scroll', state.onscroll)
}

const view = vnode => {
  const state = vnode.state

  return m('div', [
    m(pullRefresh, {options: state}),
    m(list, {options: state}),
    m(loading, {options: state})
  ])
}

const onremove = vnode => {
  window.removeEventListener('scroll', vnode.state.onscroll)
}

const infiniteList = {
  oninit,
  oncreate,
  view,
  onremove
}

module.exports = infiniteList
