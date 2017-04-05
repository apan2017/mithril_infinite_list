import j2c from 'j2c'
import stream from 'mithril/stream'
import {style as bounceStyle} from './themes/bounce'

export const bounce = {
  j2c: j2c(),
  oninit: vnode => {
    vnode.state.sheet = vnode.state.j2c.sheet(bounceStyle)
  },
  view: vnode => {
    const state = vnode.state
    const _j2c = state.j2c

    return [
      m('style', state.sheet),
      m('div', {className: _j2c.names.spinner}, [
        m('div', {className: [_j2c.names.bounce, _j2c.names.bounce1].join(' ')}),
        m('div', {className: [_j2c.names.bounce, _j2c.names.bounce2].join(' ')}),
        m('div', {className: _j2c.names.bounce}),
      ])
    ]
  }
}
