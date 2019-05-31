define(["jquery"],function($){
    function content(){
        $(function(){
            // 加载main-header中的数据
            $.ajax({
                url:"../data/main-header.json",
                success:function(data){
                    for(var i = 0; i < data.length; i++){
                        $(`<img src="${data[i].url}" alt="">
                        `).appendTo(".main-header");
                    }
                },
                error:function(msg){
                    alert(msg);
                }
            })
            // 加载main-content中的数据
            $.ajax({
                url:"../data/main-content.json",
                success:function(data){
                    for(var i = 0; i < data.length; i++){
                        $(`<div class="title-line clear">
                        <h3>${data[i].title}</h3>
                    <a href=""><span>${data[i].check}<i class="iconfont">&#xe726;</i></span></a>
                    </div>
                    <img class = "content-img" src="${data[i].img}" alt="">
                    <ul class = "content-ul"></ul>`).appendTo(".main-content")
                    }
                },
                error:function(msg){
                    alert(msg);
                }
            })
        })
    }
    return {
        content:content
    }
})