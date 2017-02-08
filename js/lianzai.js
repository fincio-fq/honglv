/**
 * Created by fincio on 2017/1/26.
 */
$.ajax({
    type: 'get',
    url: 'http://182.254.146.100:9090/api/getlianzai',
    dataType: 'json',
    success: function (data) {
        var html = template('tpl1', {news: data})
        $('#demo').html(html)

    }
})