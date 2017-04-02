import {raf} from './util.js'

const _queue = {}

export const on = (event, callback) => {
  _queue[event] = _queue[event] || []
  _queue[event].push(callback)
}

export const fire = (...args) => {
  raf(() => {
    const event = args[0]
    const events = _queue[event] = _queue[event] || []
    for (var i = 0; i < events.length; i++) {
      events[i].apply(this, args.slice(1))
    }
  })
}
