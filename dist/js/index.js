
define(["jquery"],function($){
    function nav(){
        $(function(){
            // 二维码显示
            $("#header-a,#header-img").hover(function(){
                $("#header-img").css("display","block");
            },function(){
                $("#header-img").css("display","none");
            })
            // 上面导航栏
            $("#nav-a1,.nav-div1").hover(function(){
                $(".nav-div1").css("display","block");
            },function(){
                $(".nav-div1").css("display","none")
            })
            $("#nav-a2,.nav-div2").hover(function(){
                $(".nav-div2").css("display","block");
            },function(){
                $(".nav-div2").css("display","none")
            })
            $("#nav-a3,.nav-div3").hover(function(){
                $(".nav-div3").css("display","block");
            },function(){
                $(".nav-div3").css("display","none")
            })
            $("#nav-a4,.nav-div4").hover(function(){
                $(".nav-div4").css("display","block");
            },function(){
                $(".nav-div4").css("display","none")
            })
            // banner图.tab选项卡在slider.js中
            // 内容部分在content.js中

        })

    }

    return {
        nav:nav
    }
})
