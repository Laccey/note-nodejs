$("#add").click(function (e) {
    // 阻止表单提交的默认事件
    e.preventDefault();
    let form = $(this).closest('form');
    console.log(form);
    let config = form.serialize();
    console.log(config);
    let actionUrl = form.attr('action');
    // var data = $('#text').val();
    // const noteId = window.location.pathname.slice(1)
    // $.ajax({
    //     type: 'get',
    //     url:'/select/' + id,
    //     success: function(data){
    //         if(data == 'success'){
    //             console.log('存在');
    //         }
    //     }
    // })
    $.ajax({
        type: 'POST',
        url: actionUrl,
        data: form.serialize(),
        dataType: 'json',
        success: function (data) {
            if (data.success == 1) {
                console.log(data.msg);
            }
        }
    })


})