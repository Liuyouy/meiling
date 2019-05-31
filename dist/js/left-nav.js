define(["jquery"] ,function($){
    function topnav(){
        $(function(){
            $.get("../data/left-nav.json",function(data){
                for(var i = 0 ; i < data.length; i++){
                    $(`<li id = "ul-li"><a href="">${data[i].title}</a></li>
                    `).appendTo("");
                };
                $("#nav-ul").on("mouseenter","#ul-li",function(){
                    var index = $(this).index;
                })
            })
        })
    }
    return {
        topnav:topnav
    }
})