export const isFn = obj => Object.prototype.toString.call(obj) === '[object Function]'

export const hasOwnProperty = (obj, key) => Object.prototype.hasOwnProperty.call(obj, key)

export const extend = (...args) => {
  const target = args[0]
  const sources = args.slice(1)

  for (var i = 0; i < sources.length; i++) {
    var source = sources[i]

    for (var k in source) {
      target[k] = source[k]
    }
  }

  return target
}


export const raf =
  window.requestAnimationFrame ||
  window.webkitRequestAnimationFrame ||
  window.mozRequestAnimationFrame ||
  window.msRequestAnimationFrame ||
  window.oRequestAnimationFrame
