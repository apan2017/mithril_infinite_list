m.mount(document.querySelector('main'), {
  view: vnode => m(infList, {
    rootTag: 'ol',
    item: (data, index) => m('li', data.title),
    fetch: cursor => m.request('http://localhost:8080/example/data.json', {data: {page: cursor}})
  })
})
