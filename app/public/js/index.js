$("#save").click(function(e){
    // 阻止表单提交的默认事件
    e.preventDefault();
    // let form = $(this).closest('form');
    // let actionUrl =  form.attr('action');
    var data = $('textarea').val();
    const id = window.location.pathname.slice(1)
    $.ajax({
        type: 'get',
        url:'/select/' + id,
        success: function(data){
            if(data == 'success'){
                console.log('存在');
            }
        }
    })
    if(data){
        $.ajax({
            type: 'get',
            url:'/add/' + data,
            success: function(data){
                if(data == 'success'){
                    console.log('成功');
                }
            }
        })
    }

})