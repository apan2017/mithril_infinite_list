import {on, fire} from './event.js'
import {raf} from './util.js'

const oninit = vnode => {
  vnode.state.style = {
    height: '0px',
    overflow: 'hidden',
    textAlign: 'center'
  }


  vnode.state.isReadyRefresh = false
}

const oncreate = vnode => {
  const options = vnode.attrs.options
  const dom = vnode.dom

  on('pull:start', () => {
    vnode.state.isReadyRefresh = false
    vnode.state.height = 0
    vnode.state.style.height = '0px'
    m.redraw()
  })

  on('pull:end', () => {
    const step = vnode.state.height / 10
    var height = vnode.state.height

    const a = () => {
      raf(() => {
        height -= step
        vnode.state.style.height = height + 'px'
        m.redraw()

        if (height > 0) {
          a()
        } else {
          vnode.state.style.height = '0px'
          if (options.pullLimitHeight < vnode.state.height) {
            fire('pull:refresh')
          }
        }
      })
    }
    a()
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
}

const view = vnode => {
  const options = vnode.attrs.options
  const state = vnode.state

  return(
    m('div', {style: vnode.state.style}, state.isReadyRefresh ? options.refreshText : options.pullDownText)
  )
}

export default {
  oninit,
  oncreate,
  view
}