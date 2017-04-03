import {raf} from './util.js'

const _queue = {}

export const on = (event, callback) => {
  _queue[event] = _queue[event] || []
  _queue[event].push(callback)
}

export const fire = (...args) => {
  const event = args[0]
  const events = _queue[event] = _queue[event] || []
  for (var i = 0; i < events.length; i++) {
    events[i].apply(this, args.slice(1))
  }
}

export const off = (event, callback) => {
  setTimeout(() => {
    _queue[event] = _queue[event] || []
    for (var i = 0; i < _queue[event].length; i++) {
      if (_queue[event][i] === callback) {
        _queue[event].splice(i, 1)
      }
    }
  }, 0)
}
