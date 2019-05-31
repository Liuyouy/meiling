define(["jquery"],function($){
    function banner(){
        $(function(){
            $.get("../data/banner.json",function(data){
                for(var i = 0; i < data.length; i++){
                    $(`<li><a href=""><img src="${data[i].url}" alt=""></a></li>
                    `).appendTo("#banner-ul");
                }
            })
            var aBtns = $(".banner").find("ol").find("li");
            var oUl = $(".banner").find("ul");
            var iNow = 0;
            aBtns.click(function(){
                iNow = $(this).index();
                tab();
            })
            $(".right-i").click(function(){
                iNow++;
                tab();
            })
            // 切换图片
            function tab(){
                aBtns.attr("class","").eq(iNow).attr("class","active");
                if(iNow == aBtns.size()){
                    aBtns.eq(0).attr("class","active");
                }
                oUl.stop().animate({
                    left:-iNow * 1200
                },function(){
                    if(iNow == aBtns.size()){
                        oUl.css("left","0");
                        iNow = 0;
                    }
                })
            }
            var timer = setInterval(function(){
                iNow++;
                tab();
            },2000);
            $(".banner").mouseenter(function(){ 
                clearInterval(timer);
            });
            $(".banner").mouseleave(function(){
                timer = setInterval(function(){
                    iNow++;
                    tab();
                },2000);
            })
        })
    }
    function tab(){
        // 加载一级导航
        $.ajax({
            url:"../data/tab.json",
            success:function(arr){
                for(var i = 0; i < arr.length; i++){
                    $(`<li>
                        <a href="">
                            <img src="${arr[i].url}" alt="">
                            <span>${arr[i].tittle}</span>
                            <i class = "iconfont">&#xe642;</i>
                        </a>
                    </li>`).appendTo(".tab-leftul");
                }
            },
            error:function(msg){
                alert(msg);
            }
        })
        $(".tab-leftul").on("mouseenter","li",function(){
            var index = $(this).index();
            $(".tab-rightul").empty();
            $.ajax({
                url:"../data/tab.json",
                success:function(arr){
                    $(".tab-rightul").show();
                    for(var i = 0; i < arr[index].dist.length; i++){
                        $(`<li>
                            <img src="${arr[index].dist[i].images}" alt="">
                            <p>${arr[index].dist[i].data}</p>
                        </li>`).appendTo(".tab-rightul");
                    }
                },
                error:function(msg){
                    alert("msg");
                }
            })
            $(".tab-leftul,.tab-rightul").mouseleave(function(){
                $(".tab-rightul").hide();
            })
            $(".tab-rightul").mouseenter(function(){
                $(".tab-rightul").show();
            })
        })

    }
return {
        banner:banner,
        tab:tab
    }
})