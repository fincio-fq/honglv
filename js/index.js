var swiper = new Swiper('.swiper-container', {
    pagination: '.swiper-pagination',
    paginationClickable: true,
    loop: true,
    autoplay: 5000,

});

$.ajax({
    type: 'get',
    url: 'http://182.254.146.100:9090/api/gethometab/1',
    dataType: 'json',
    success: function (data) {
        var html = template('tpl1', {news: data})
        $('#row1').html(html)

    }
})
$.ajax({
    type: 'get',
    url: 'http://182.254.146.100:9090/api/gethometab/2',
    dataType: 'json',
    success: function (data) {
        var html = template('tpl1', {news: data})
        $('#row2').html(html)

    }
})

$.ajax({
    type: 'get',
    url: 'http://182.254.146.100:9090/api/gethometab/3',
    dataType: 'json',
    success: function (data) {
        var html = template('tpl1', {news: data})
        $('#row3').html(html)

    }
})
$.ajax({
    type: 'get',
    url: 'http://182.254.146.100:9090/api/gethometab/4',
    dataType: 'json',
    success: function (data) {
        var html = template('tpl1', {news: data})
        $('#row4').html(html)

    }
})
