import loading from './loading.js'
import {extend, raf} from './util.js'
import {on, fire} from './event.js'
import list from './list.js'
import pullRefresh from './pull_refresh.js'

const DEFAULT = {
  rootTag: 'ul',
  cursor: 1,
  step: 1,
  maxCursor: 0,
  hasMore: true,
  triggerDistance: 200,
  pullRefreshable: false,
  loadingText: '正在加载',
  pullDownText: '下拉刷新',
  refreshText: '松开刷新',
  refreshingText: '正在加载',
  noMoreText: '没有更多数据',
  pullLimitHeight: 60,
  item: {},
  fetch: () => { throw new Error('You must declare `fetch` function.') },
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
    m(loading, {options: state}),
    m('div', {style: {textAlign: 'center'}}, state.hasMore ? null : state.noMoreText)
  ])
}

const onremove = vnode => {
  window.removeEventListener('scroll', vnode.state.onscroll)
}

const infiniteList = {
  oninit,
  oncreate,
  view,
  onremove,
  on,
  fire
}

module.exports = infiniteList
