m.mount(document.querySelector('main'), {
  view: vnode => m(infiniteList, {
    rootTag: 'ol',
    pullRefreshable: true,
    item: (data, index) => m('li', data.title),
    fetch: cursor => m.request('/example/data.json', {data: {page: cursor}})
  })
})
