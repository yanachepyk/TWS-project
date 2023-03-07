import Pagination from 'tui-pagination';

const container = document.querySelector('.paginator');

const instance = new Pagination(container, {
  totalItems: 9,
  itemsPerPage: 1,
  visiblePages: 5,
  page: 1,
  centerAlign: false,
  firstItemClassName: 'tui-first-child',
  lastItemClassName: 'tui-last-child',
  template: {
    page: '<a href="#" class="tui-page-btn paginator__btn">{{page}}</a>',
    currentPage:
      '<strong class="tui-page-btn current-page paginator__btn tui-is-selected">{{page}}</strong>',
    moveButton:
      '<a href="#" class="tui-page-btn pagination-move-btn paginator__btn tui-{{type}}">' +
      '<span class="tui-ico-{{type}}">{{type}}</span>' +
      '</a>',
    disabledMoveButton:
      '<span class="tui-page-btn pagination-move-btn paginator__btn tui-is-disabled tui-{{type}}">' +
      '<span class="tui-ico-{{type}}">{{type}}</span>' +
      '</span>',
    moreButton:
      '<a href="#" class="tui-page-btn paginator__btn tui-{{type}}-is-ellip">' +
      '<span class="tui-ico-ellip">...</span>' +
      '</a>',
  },
});

instance.on('beforeMove', evt => {
  console.log('befo', evt);
});

instance.on('afterMove', evt => {
  console.log('aftter', evt);
});
