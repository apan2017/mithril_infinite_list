## Infinite list for Mithril

### Dependencies

1. mithril (> 1.0)

### import

```html
<script src="path/infinite_list.js"></script>
```

or 

```javascript
import infiniteList from 'mithril-infinite_list'
```

### usage

```javascript
m.mount(document.querySelector('main'), {
  view: vnode => m(infiniteList, {
    rootTag: 'ol',
    maxCursor: 3,
    pullRefreshable: true,
    item: (data, index) => m('li', data.title),
    fetch: cursor => m.request('/example/data.json', {data: {page: cursor}})
  })
})
```

### options

```
  rootTag: 'ul',
  list: [],
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
  item: () => { },
  fetch: () => { },
```
