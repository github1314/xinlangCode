/**
 * (●'◡'●)Created by QinJiawei on 2017/7/22.
 */
/* 搜索框  */
$(".logoWarp .scarchBox .searchTxt").click(function() {
    $(".logoWarp .scarchBox .list").css("z-index", "2").slideDown();
});
$(".logoWarp .scarchBox .list li").click(function() {

    $(".logoWarp .scarchBox .searchTxt").html($(this).html());
    $(".logoWarp .scarchBox .list").hide();
});


/* 全选  全不选   反选 */
var aCheck = $(".listNav .list_item_box ul li label>input");
$("#btn_1").click(function() {
    for (var i = 0; i < aCheck.length; i++) {
        aCheck[i].checked = true;
    }
});
$("#btn_2").click(function() {
    for (var i = 0; i < aCheck.length; i++) {
        aCheck[i].checked = !aCheck[i].checked;
    }
});
$("#btn_3").click(function() {
    for (var i = 0; i < aCheck.length; i++) {
        aCheck[i].checked = false;
    }
});


/*  选项卡 */



/* 点击元素给子直接加active*/
tabEvevt1($(".tab_4 .tab_title li"), $(".tab_4 .smList .item"), "click");

function tabEvevt1(tabElement, toggleElement, event) {
    tabElement.bind(event, function() {
        tabElement.children().removeClass("active");
        toggleElement.hide();
        var index = $(this).index();
        $(this).children().addClass("active");
        toggleElement.eq(index).show();
    });
};
/*综艺视频   点击元素直接加active*/
tabEvevt2($("#videozongyi li"), $(".videoTabLeft"), "click");
tabEvevt2($("#comTitle_tabsTab li"), $("#tabsTab>div"), "click");
tabEvevt2($("#dayTab a"), $("#tabsToggle>div"), "click");
tabEvevt2($("#comTitle_tabsTabNba li"), $("#comTitle_tabsToggleTab>.tabs"), "click");
tabEvevt2($("#comTitle_tabs_car_tab li"), $("#comTitle_tabs_car_toggle>.tabs_item"), "click");
tabEvevt2($("#taobao_nbTab a"), $("#taobaoImgToggle>li"), "mouseenter");
tabEvevt2($("#comTitle_tabs_yele_tab li"), $("#comTitle_tabs_yele_toggle>.tabs_item"), "click");
tabEvevt2($("#comTitle_tabs_caijing_tab li"), $("#comTitle_tabs_caijing_toggle>.tabs_item"), "click");
tabEvevt2($("#comTitle_tabs_kantu_tab li"), $("#comTitle_tabs_kantu_toggle>.tabs_item"), "click");
tabEvevt2($("#dushu_tab li"), $("#dushu_toggle>.tabs_item"), "click");
tabEvevt2($("#keji_tab li"), $("#keji_toggle>.tabs_item"), "click");
tabEvevt2($("#game_tab span"), $("#game_toggle>.tabs_item"), "click");
tabEvevt2($("#shouji_tab li"), $("#shouji_toggle>.tabs_item"), "click");
tabEvevt2($("#yingyong_tab span"), $("#yingyong_toggle>.tabs_item"), "click");

function tabEvevt2(tabElement, toggleElement, event) {
    tabElement.bind(event, function() {
        tabElement.removeClass("active");
        toggleElement.hide();
        var index = $(this).index();
        $(this).addClass("active");
        toggleElement.eq(index).show();
    });
};


/* 小轮播 */
var count = 0;
var timer;
timer = setInterval(timeBottom, 1000);
$("#taobao_nbTab a").mouseenter(function() {
    clearInterval(timer);
});
$("#taobao_nbTab a").mouseleave(function() {
    clearInterval(timer);
    // count = count-1;
    $(this).removeClass("active");
    $("#taobaoImgToggle>li").eq($(this).index()).hide();
    timer = setInterval(timeBottom, 1000);

});

function timeBottom() {
    count++;
    if (count >= 10) {
        count = 0;
    }
    $("#taobao_nbTab a").eq(count - 1).removeClass("active");
    $("#taobao_nbTab a").eq(count).addClass("active");
    $("#taobaoImgToggle>li").eq(count - 1).hide();
    $("#taobaoImgToggle>li").eq(count).show();



}



/* 猜你喜欢 */
var index = 0;

$("#cainixihuanTabLeft").click(function() {
    $(".c_list_scroll .comList").hide();
    $("#cainixihuanTabBtn").children().eq(index).removeClass("active");
    index--;
    if (index <= 0) {
        index = 0;
    }
    $("#cainixihuanTabBtn").children().eq(index).addClass("active");
    $(".c_list_scroll .comList").eq(index).show();
});
$("#cainixihuanTabRight").click(function() {
    $(".c_list_scroll .comList").hide();
    $("#cainixihuanTabBtn").children().eq(index).removeClass("active");
    index++;
    if (index >= 4) {
        index = 4;
    }
    $("#cainixihuanTabBtn").children().eq(index).addClass("active");
    $(".c_list_scroll .comList").eq(index).show();
});

/* 我的菜单 */
swiper($("#myMeau"), "click");
swiper($("#yidong"), "click");
swiper($("#wode"), "click");
swiper($("#bokebo"), "click");

/*下滑事件*/
function swiper(element, event) {
    var flag = true;
    element.bind(event, function() {
        if (flag == true) {
            $(this).next().slideDown();
            flag = !flag;
        } else {
            $(this).next().slideUp();
            flag = !flag;
        }
    });
};