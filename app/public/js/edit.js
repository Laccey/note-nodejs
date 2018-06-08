$("#save").click(function (e) {
    // 阻止表单提交的默认事件
    e.preventDefault();
    let form = $(this).closest('form');
    console.log(form);
    let config = form.serialize();
    console.log(config);
    let actionUrl = form.attr('action');
    $.ajax({
        type: 'POST',
        url: actionUrl,
        data: form.serialize(),
        dataType: 'json',
        success: function (data) {
            if (data == 'success') {
                console.log('成功');
            }
        }
    })


})