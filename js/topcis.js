/**
 * Created by fincio on 2017/1/26.
 */
$.ajax({
    type: 'get',
    url: 'http://182.254.146.100:9090/api/gettopics',
    dataType: 'json',
    success: function (data) {
        var html = template('tpl1', {news: data})
        $('#row').html(html)

    }
})