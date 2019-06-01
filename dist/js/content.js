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
                        var node1 = $(`
                            <div class = "main-content">
                                <div class="title-line clear">
                                    <h3>${data[i].title}</h3>
                                    <a href=""><span>${data[i].check}<i class="iconfont">&#xe726;</i></span></a>
                                </div>
                                <img class = "content-img" src="${data[i].img}" alt="">
                                <ul class = "content-ul"></ul>
                            </div>`);
                        node1.appendTo(".mainbox");
                        var oUl = $(node1).find("ul");
                        for(var j = 0 ; j < data[i].dist.length; j++){
                            var node2 = $(`<li>
                                <img class = "sp-img" src="${data[i].dist[j].url}" alt="">
                                <div class="sp">
                                    <h3 class = "title">${data[i].dist[j].pTitle}</h3>
                                    <p class="msg">${data[i].dist[j].pProduce}</p>
                                    <p class="price">${data[i].dist[j].pPrice}</p>
                                    <button>${data[i].dist[j].buy}</button>
                                </div>
                            </li>`);
                        node2.appendTo(oUl);
                        }
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