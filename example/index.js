function onclick(index) {
  alert(index)
}

m.mount(document.querySelector('main'), {
  view: vnode => m(infList, {
    rootTag: 'ol',
    item: (data, index) => m('li', {onclick: function() { onclick(index) }}, data.title),
    fetch: cursor => m.request('http://localhost:8080/example/data.json', {data: {page: cursor}})
  })
})
