m.mount(document.querySelector('main'), {
  view: vnode => m(infiniteList, {
    rootTag: 'ol',
    maxCursor: 3,
    pullRefreshable: true,
    item: (data, index) => m('li', data.title),
    fetch: cursor => m.request('/example/data.json', {data: {page: cursor}})
  })
})
