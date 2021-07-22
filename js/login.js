var navs = document.querySelectorAll(".nav_top li");
var boxs = document.querySelectorAll(".mimaBox");

for (var i = 0; i < navs.length; i++) {
    navs[i].index = i;
    navs[i].onclick = function() {
        // 点击事件
        console.log("ok");
        // console.log(navs[i], i);
        for (var j = 0; j < navs.length; j++) {
            navs[j].className = "";
            boxs[j].className = "mimaBox"
        }
        this.className = "act";
        console.log(this.index); //拿到自定义属性值
        console.log(boxs[this.index]);
        boxs[this.index].className = "mimaBox act";
    }
}

// 声明函数
// function scanBoxShow() {
//     var loginBoxs = document.querySelectorAll(".loginBox");
//     // 表单盒子全部隐藏
//     for (var i = 0; i < loginBoxs.length; i++) {
//         loginBoxs[i].className = "loginBox";
//     }
//     // 扫码区域出现
//     var scanBox = document.getElementById("scanBox");
//     scanBox.className = "loginBox act"

// }

// // 声明函数
// function keyEnterShow() {
//     var loginBoxs = document.querySelectorAll(".loginBox");
//     // 表单盒子全部隐藏
//     for (var i = 0; i < loginBoxs.length; i++) {
//         loginBoxs[i].className = "loginBox";
//     }
//     // 扫码区域出现
//     var scanBox = document.getElementById("keyEnter");
//     scanBox.className = "loginBox act"

// }

// 传参函数声明
function boxShow(id) {
    var loginBoxs = document.querySelectorAll(".loginBox");
    // 表单盒子全部隐藏
    for (var i = 0; i < loginBoxs.length; i++) {
        loginBoxs[i].className = "loginBox";
    }
    // 扫码区域出现
    var scanBox = document.getElementById(id);
    scanBox.className = "loginBox act"

}

var footerList01 = ["关于天猫", "帮助中心", "开放平台",
    "诚聘英才", "联系我们", "网站合作",
    "法律声明", "隐私权政策", "知识产权", "廉正举报",
];
var a01 = document.getElementById("a01");
let str01 = "";
for (var i = 0; i < footerList01.length; i++) {
    str01 += "<a href='#'>" + footerList01[i] + "</a>";
}
a01.innerHTML = str01;

var footerList02 = [
    "阿里巴巴集团", "淘宝网", "天猫", "聚划算",
    "全球速卖通", "阿里巴巴国际交易市场", "1688", "阿里妈妈",
    "飞猪", "阿里云计算", "AliOS", "阿里通信",
    "万网", "高德", "UC", "友盟", "虾米",
    "钉钉", "支付宝", "阿里安全"
];
var a02 = document.getElementById("a02");
let str02 = "";
for (var i = 0; i < footerList02.length; i++) {
    str02 += "<a href='#'>" + footerList02[i] + "</a>";
}
a02.innerHTML = str02;