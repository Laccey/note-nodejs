$("#save").click(function(e){
    // 阻止表单提交的默认事件
    e.preventDefault();
    // let form = $(this).closest('form');
    // let actionUrl =  form.attr('action');
    var data = $('textarea').val();
    console.log(data);
    if(data){
        $.ajax({
            type: 'get',
            url:'/add' + data,
            success: function(data){
                if(data == 'success'){
                    console.log('成功');
                }
            }
        })
    }
    // $.ajax({
    //     url: actionUrl,
    //     type: "POST",
    //     data: form.serialize(),
    //     dataType: 'json'
    //   })
    //   .done((results)=>{
    //     if(results.success===1){
    //       // 这里写请求成功后的代码
    //       console.log('success');
    //     } else {
    //       // 这里写请求失败后的代码
    //       console.log('fall');
    //     }
    //   })
})