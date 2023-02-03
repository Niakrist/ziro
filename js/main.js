const headerSearchForm = document.querySelector('.header__search-form');
const headerSearchFormText = document.querySelector('.header__search-form-text');

headerSearchFormText.addEventListener('focus', function() {
  headerSearchForm.classList.add('borferFF5C00')
})


headerSearchFormText.addEventListener('blur', function() {
  headerSearchForm.classList.remove('borferFF5C00')
})

