module.exports = function() {

  // begin filter-open-close

  //CLOSE FILTER
  $('.catalog-filter__close-btn').on('click', function (e) {
    e.preventDefault();
    $('.catalog-filter__open').removeClass('hidden');
    $('.catalog-filter-wrap').addClass('hidden');
    $('.catalog-list').addClass('full');
    $('.catalog-wrap').css('min-height', '');
  });

  //OPEN FILTER
  $('.catalog-filter__open').on('click', function (e) {
    e.preventDefault();

    $('.catalog-filter__open').addClass('hidden');
    $('.catalog-filter-wrap').removeClass('hidden');
    $('.catalog-list').removeClass('full');
    setCatalogHeight();
  });


  //HIDE FILTER IF WIDTH < 1150
  $(window).on('load resize orientationchange', function() {
    if ($(window).width() < 1150) {
      $('.catalog-filter__open').removeClass('hidden');
      $('.catalog-filter-wrap').addClass('hidden');
      $('.catalog-list').addClass('full');
    } else {
      $('.catalog-filter__open').addClass('hidden');
      $('.catalog-filter-wrap').removeClass('hidden');
      $('.catalog-list').removeClass('full');
      setCatalogHeight();
    }
  });

  // Set the catalog minimum height. We need this to prevent side filter cropping
  // when there are not so many catalog items.
  function setCatalogHeight() {
    var $catalogWrap = $('.catalog-wrap');
    var catalogFilterWrapHeight = $('.catalog-filter-wrap').height();
    $catalogWrap.css('min-height', catalogFilterWrapHeight);
  }

  // end filter-open-close
};
