// function topNavShow(n, id) {
//     var topNav_rightLists = document.querySelectorAll('.topNav_right li');
//     let obj = topNav_rightLists[n];
//     obj.className = "";
//     obj.className = "act";
//     var slBoxIs = document.getElementById(id);
//     slBoxIs.style.display = "block";
// }

// function topNavHide(n, id) {
//     var topNav_rightLists = document.querySelectorAll('.topNav_right li');
//     let obj = topNav_rightLists[n];
//     obj.className = "";
//     obj.className = "sanJ";
//     var slBoxIs = document.getElementById(id);
//     slBoxIs.style.display = "none";
// }
// topNavShow(5, "shopper");

// 导航栏
function show(obj) {
    var oTao = document.getElementsByClassName(obj)[0];
    oTao.style.display = "block";
    oTao.style.background = "#fff";
}

function hide(obj) {
    var oTao = document.getElementsByClassName(obj)[0];
    oTao.style.display = "none";
}


// 轮播图
var bannerIndex = 0;
var bannerBox = document.querySelector('.bannerBox');
var bannerPic = document.querySelector('#bannerPic');
var bannerliterpicBox = document.querySelector('.bannerliterpic');
var bannerPoints = document.querySelectorAll('.bannerPoint li');

var bannerTimer = setInterval(function() {
    bannerIndex++;
    if (bannerIndex == bannerData.length) {
        bannerIndex = 0;
    }
    bannerPointClick(bannerIndex);
    // bannerBox.style.background = bannerData[bannerIndex].bgColor;
    // bannerPic.src = bannerData[bannerIndex].bannerPic;

    // var literPics = bannerData[bannerIndex].litterPic;
    // bannerliterpicBox.innerHTML = "";
    // for (var i = 0; i < literPics.length; i++) {
    //     var str = `
    //     <li>
    //         <img src="${literPics[i]}" alt="">
    //     </li>
    //     `
    //     bannerliterpicBox.innerHTML += str;
    // }
}, 3000);

function bannerPointClick(n) {

    bannerBox.style.background = bannerData[n].bgColor;
    bannerPic.src = bannerData[n].bannerPic;

    var literPics = bannerData[n].litterPic;
    bannerliterpicBox.innerHTML = "";
    for (var i = 0; i < literPics.length; i++) {
        var str = `
        <li>
            <img src="${literPics[i]}" alt="">
        </li>
        `
        bannerliterpicBox.innerHTML += str;
    }
    for (var j = 0; j < bannerPoints.length; j++) {
        bannerPoints[j].className = "";
    }
    bannerPoints[n].className = "act";
}

// 侧边自动生成
var asideBox = document.querySelector('.asideBox ol');
for (var i = 0; i < goodsClass.length; i++) {
    var str = `
        <li>
            <span class="iconfont ${goodsClass[i].iconfont}"></span>
            ${goodsClass[i].title}
        </li>
    `;
    asideBox.innerHTML += str;
}

// 鼠标移上显示对应的内容
var asideLeftLis = document.querySelectorAll(".asideLeft li");
var asideLeftLisBox = document.querySelector(".asideCenter ul");
var asideRightBox = document.querySelector(".asideRight ul");
var asideCenter = document.querySelector(".asideCenter");
var asideRight = document.querySelector(".asideRight");
var asideIndex = 0;
for (let i = 0; i < asideLeftLis.length; i++) {
    asideLeftLis[i].index = i;
    // 鼠标移上
    asideLeftLis[i].onmouseover = function() {
            // // 清除选中
            // for (let x = 0; x < asideLeftLis.length; x++) {
            //     asideLeftLis[x].className = "";
            // }
            // // 设置选中
            // this.className = "act";
            let index = this.index;
            asideIndex = index;
            asideShow();
            asideLeftLisBox.innerHTML = ""; //清空数据
            asideRightBox.innerHTML = ""; //清空数据
            let details = goodsClass[index].details;
            for (let j = 0; j < details.length; j++) {
                let str = `
            <li class="asideCenter_li">
                <p class="asideCenter_title">
                    ${details[j].tips}
                    <span class="iconfont icon-31fanhui2"></span>
                </p>
                <ol class="asideCenter_list">
        `;
                let aText = details[j].tipList;
                for (let k = 0; k < aText.length; k++) {
                    let flag = aText[k].flag;
                    if (flag) {
                        str += `<li><a href="${aText[k].linkURL}" class="act">${aText[k].tit}</a></li>`
                    } else {
                        str += `<li><a href="${aText[k].linkURL}">${aText[k].tit}</a></li>`
                    }
                }

                str += `
                    </ol>
            </li>
        `;
                asideLeftLisBox.innerHTML += str;

            }
            let pics = goodsClass[index].pics;
            //右边
            for (let l = 0; l < pics.length; l++) {
                let str = "";
                if (pics.length == 1) {
                    str = `
                <li class="one">
                    <a href="#"><img src="${pics[l]}" alt=""></a>
                </li>
                `;
                } else {
                    str = `
                <li>
                    <a href="#"><img src="${pics[l]}" alt=""></a>
                </li>
                `;
                }

                asideRightBox.innerHTML += str;
            }
        }
        // 鼠标移出
    asideLeftLis[i].onmouseout = function() {
        asideHide();
    }
}

function asideShow() {
    // 清除选中
    for (let x = 0; x < asideLeftLis.length; x++) {
        asideLeftLis[x].className = "";
    }
    // 设置选中
    asideLeftLis[asideIndex].className = "act";
    asideCenter.style.display = "block";
    asideRight.style.display = "block";
}

function asideHide() {
    asideCenter.style.display = "none";
    asideRight.style.display = "none";
    asideLeftLis[asideIndex].className = "";
}

// 模块3
var moder3_TopPic = document.querySelector('.moder3_TopPic img');
moder3_TopPic.src = moder3_Data.moder3_topPic;
var moder3_listBox = document.querySelector('.moder3_list');
var moder3Banners = moder3_Data.moder3_bannder;
for (let i = 0; i < moder3Banners.length; i++) {
    let str = `
        <li>
            <a href="${moder3Banners[i].linkURL}"><img src="${moder3Banners[i].picUrl}" alt=""></a>
        </li>
    `;
    moder3_listBox.innerHTML += str;
}

// 模块4
var moder4_Box = document.querySelector(".moder4");
for (let i = 0; i < moder4_Data.length; i++) {
    let str = `
    <li>
        <a href="${moder4_Data[i].linkUrl}">
            <div class="title">
                ${moder4_Data[i].title}
                <span class="iconfont icon-iconfont31yiguanzhudianpu"></span>
            </div>
            <div class="moder_pic">
                <img src="${moder4_Data[i].picUrl}" alt="">
            </div>
        </a>
    </li>
    `;
    moder4_Box.innerHTML += str;
}

// 模块5
var moder5_Box = document.querySelector(".moder5");
for (let i = 0; i <= moder5_Data.length; i++) {
    let str = "";
    if (i != moder5_Data.length) {
        str = `
            <li>
                <a href="${moder5_Data[i].linkUrl}">
                    <dic class="moder5Pic">
                        <img src="${moder5_Data[i].picUrl}" alt="">
                    </dic>
                    <div class="shadowBox">
                        <div>${moder5_Data[i].title}</div>
                        <button>点击进入</button>
                    </div>
                </a>
            </li>
        `;
    } else {
        str = `
            <li>
                <a href="#">
                    <span class="iconfont icon-shuaxin"></span><br/>
                    换一批
                </a>
            </li>
        `;
    }

    moder5_Box.innerHTML += str;
}

// 模块6
var tmMarketLeftPic = document.querySelector('.tmMarketLeft img');
tmMarketLeftPic.src = tmMarketData.tmMark_left.picUrl;
var tmModerTitle01 = document.querySelector('.tmModerTitle span:first-of-type');
tmModerTitle01.innerHTML = tmMarketData.tmMark_left.title;
var tmModerTitle02 = document.querySelector('.tmModerTitle span:last-of-type');
tmModerTitle02.innerHTML = tmMarketData.tmMark_left.tips;
var tmMarketToday_ContentPic = document.querySelector('.tmMarketToday_Content img');
tmMarketToday_ContentPic.src = tmMarketData.todayCrazy.picUrl;
var mark01 = document.querySelector('.mark p:first-of-type');
mark01.innerHTML = `<span class-"iconfont icon-gouwurili"></span>${tmMarketData.todayCrazy.title}`;
var mark02 = document.querySelector('.mark p:last-of-type');
mark02.innerHTML = `<span class-"iconfont icon-gouwurili"></span>${tmMarketData.todayCrazy.tips}`;

var tmMarkGoods = tmMarketData.goodsList;
var tmMarketRight = document.querySelector('.tmMarketRight');
for (let i = 0; i < tmMarkGoods.length; i++) {
    let str = `
        <li class="goodList">
            <a href="${tmMarkGoods[i].linkUrl}">
                <img src="${tmMarkGoods[i].picUrl}" alt="">
                <p>${tmMarkGoods[i].title}</p>
                <p class="goodPrice">${tmMarkGoods[i].price}</p>
            </a>
        </li>
    `;
    tmMarketRight.innerHTML += str;
}

// 模块6 tmMarket01
var tm_headerPic = document.querySelector('.tm_header img');
tm_headerPic.src = tmMarketData1.tmMarkIndex05[0].picUrl;
var tmMarkIndex5 = tmMarketData1.tmMarkIndex05;
var tmMarketBox01 = document.querySelector('.tmMarketBox01');
for (let i = 1; i < tmMarkIndex5.length; i++) {
    let str = "";
    if (i == 1) {
        str = `
            <li>
                <a href="javascript:void(0);" class="tmModer01Title">
                    <img src="${tmMarkIndex5[i].picUrl}" alt="">
                    <span>${tmMarkIndex5[i].title}</span>
                    <span>${tmMarkIndex5[i].title1}</span>
                    <i class="iconfont icon-iconfont31yiguanzhudianpu"></i>
                </a>
            </li>
        `;
    } else if (i == 2) {
        str = `
            <li>
                <a href="javascript:void(0);">
                    <img src="${tmMarkIndex5[i].picUrl}" alt="">
                    <p>${tmMarkIndex5[i].title}</p>
                    <p>${tmMarkIndex5[i].title1}</p>
                </a>
            </li>
    `;
    } else if (i == 6) {
        str = `
        <li>
            <a href="javascript:void(0);" class="tmModer01Title">
                <img src="${tmMarkIndex5[i].picUrl}" alt="">
                <span>${tmMarkIndex5[i].title}</span>
                <span>${tmMarkIndex5[i].title1}</span>
                <i class="iconfont icon-iconfont31yiguanzhudianpu"></i>
            </a>
        </li>
        `;
    } else if (i == 11) {
        let tm_header01 = `
        <div class="banXin tm_header01">
            <img src="${tmMarkIndex5[i].picUrl}" alt="" style="display: block; width: 100%;">
        </div>
        `;
        var tmMarket01 = document.querySelector('.tmMarket01');
        tmMarket01.innerHTML += tm_header01;
    } else {
        str = `
        <li class="goodsList01">
            <a href="">
                <img src="${tmMarkIndex5[i].picUrl}" alt="">
                <p>${tmMarkIndex5[i].title}</p>
                <p class="goodPrice">${tmMarkIndex5[i].price}</p>
            </a>
        </li>
    `;
    }

    tmMarketBox01.innerHTML += str;
}

// 模块6 tmMarket02
var tmMarket02P = document.querySelector('.tmMarket02>p');
tmMarket02P.innerHTML = tmMarketData1.tmMarkIndex06[0].title;

var tmMarkIndex6 = tmMarketData1.tmMarkIndex06;
var tmMarketRight02 = document.querySelector('.tmMarketRight02');
// console.log(tmMarketRight02)
for (let i = 1; i < tmMarkIndex6.length; i++) {
    let str = "";
    if (i == 1) {
        let tm_02 = `
        <div class="tmMarketLeft tmMarketLeft02">
            <img src="${tmMarkIndex6[i].picUrl}" alt="">
            <div class="tmModerTitle">
                <span>${tmMarkIndex6[i].title}</span>
                <span>${tmMarkIndex6[i].title1}</span>
            </div>
            <span class="iconfont icon-iconfont31yiguanzhudianpu"></span>
        </div>
        `;
        var tmMarketLeft02 = document.querySelector('.tmMarketLeft02');
        tmMarketLeft02.innerHTML += tm_02;
    } else {
        str = `
        <li class="goodList">
            <a href="">
                <img src="${tmMarkIndex6[i].picUrl}" alt="">
                <p>${tmMarkIndex6[i].title}</p>
                <p class="goodPrice">${tmMarkIndex6[i].price}</p>
            </a>
        </li>
        `;
        tmMarketRight02.innerHTML += str;

    }
}
// 模块6 tmMarket03
var tmMarket03P = document.querySelector('.tmMarket03>p');
tmMarket03P.innerHTML = tmMarketData1.tmMarkIndex07[0].title;

var tmMarkIndex7 = tmMarketData1.tmMarkIndex07;
var tmMarketRight03 = document.querySelector('.tmMarketRight03');
// console.log(tmMarketRight03)
for (let i = 1; i < tmMarkIndex7.length; i++) {
    let str = "";
    if (i == 1) {
        let tm_03 = `
            <img src="${tmMarkIndex7[i].picUrl}" alt="">
            <div class="tmModerTitle">
                <span>${tmMarkIndex7[i].title}</span>
                <span>${tmMarkIndex7[i].title1}</span>
            </div>
            <span class="iconfont icon-iconfont31yiguanzhudianpu"></span>
        `;
        var tmMarketLeft03 = document.querySelector('.tmMarketLeft03');
        tmMarketLeft03.innerHTML += tm_03;
    } else if (i == 10) {
        let tm_header03 = `
        <div class="banXin tm_header01">
            <img src="${tmMarkIndex7[i].picUrl}" alt="" style="display: block; width: 100%;">
        </div>
        `;
        var tmMarket03 = document.querySelector('.tmMarket03');
        tmMarket03.innerHTML += tm_header03;
    } else {
        str = `
        <li class="goodList">
            <a href="">
                <img src="${tmMarkIndex7[i].picUrl}" alt="">
                <p>${tmMarkIndex7[i].title}</p>
                <p class="goodPrice">${tmMarkIndex7[i].price}</p>
            </a>
        </li>
        `;
        tmMarketRight03.innerHTML += str;
    }
}

// 模块6 tmMarket04
var tmMarket04P = document.querySelector('.tmMarket04>p');
tmMarket04P.innerHTML = tmMarketData1.tmMarkIndex08[0].title;

var tmMarkIndex8 = tmMarketData1.tmMarkIndex08;
var tmMarketRight04 = document.querySelector('.tmMarketRight04');
for (let i = 1; i < tmMarkIndex8.length; i++) {
    let str = "";
    if (i == 1) {
        let tm_04 = `
            <img src="${tmMarkIndex8[i].picUrl}" alt="">
            <div class="tmModerTitle">
                <span>${tmMarkIndex8[i].title}</span>
                <span>${tmMarkIndex8[i].title1}</span>
            </div>
            <span class="iconfont icon-iconfont31yiguanzhudianpu"></span>
        `;
        var tmMarketLeft04 = document.querySelector('.tmMarketLeft04');
        tmMarketLeft04.innerHTML += tm_04;
    } else if (i == 10) {
        let tm_header04 = `
        <div class="banXin tm_header01">
            <img src="${tmMarkIndex8[i].picUrl}" alt="" style="display: block; width: 100%;">
        </div>
        `;
        var tmMarket04 = document.querySelector('.tmMarket04');
        tmMarket04.innerHTML += tm_header04;
    } else {
        str = `
        <li class="goodList">
            <a href="">
                <img src="${tmMarkIndex8[i].picUrl}" alt="">
                <p>${tmMarkIndex8[i].title}</p>
                <p class="goodPrice">${tmMarkIndex8[i].price}</p>
            </a>
        </li>
        `;
        tmMarketRight04.innerHTML += str;
    }
}
// 模块6 tmMarket05
var tmMarket05P = document.querySelector('.tmMarket05>p');
tmMarket05P.innerHTML = tmMarketData1.tmMarkIndex09[0].title;

var tmMarkIndex9 = tmMarketData1.tmMarkIndex09;
var tmMarketRight05 = document.querySelector('.tmMarketRight05');
for (let i = 1; i < tmMarkIndex9.length; i++) {
    let str = "";
    if (i == 1) {
        let tm_05 = `
            <img src="${tmMarkIndex9[i].picUrl}" alt="">
            <div class="tmModerTitle">
                <span>${tmMarkIndex9[i].title}</span>
                <span>${tmMarkIndex9[i].title1}</span>
            </div>
            <span class="iconfont icon-iconfont31yiguanzhudianpu"></span>
        `;
        var tmMarketLeft05 = document.querySelector('.tmMarketLeft05');
        tmMarketLeft05.innerHTML += tm_05;
    } else if (i == 10) {
        let tm_header05 = `
        <div class="banXin tm_header01">
            <img src="${tmMarkIndex9[i].picUrl}" alt="" style="display: block; width: 100%;">
        </div>
        `;
        var tmMarket05 = document.querySelector('.tmMarket05');
        tmMarket05.innerHTML += tm_header05;
    } else {
        str = `
        <li class="goodList">
            <a href="">
                <img src="${tmMarkIndex9[i].picUrl}" alt="">
                <p>${tmMarkIndex9[i].title}</p>
                <p class="goodPrice">${tmMarkIndex9[i].price}</p>
            </a>
        </li>
        `;
        tmMarketRight05.innerHTML += str;
    }
}
// 模块6 tmMarket06
var tmMarket06P = document.querySelector('.tmMarket06>p');
tmMarket06P.innerHTML = tmMarketData1.tmMarkIndex10[0].title;

var tmMarkIndex10 = tmMarketData1.tmMarkIndex10;
var tmMarketRight06 = document.querySelector('.tmMarketRight06');
for (let i = 1; i < tmMarkIndex10.length; i++) {
    let str = "";
    if (i == 1) {
        let tm_06 = `
            <img src="${tmMarkIndex10[i].picUrl}" alt="">
            <div class="tmModerTitle">
                <span>${tmMarkIndex10[i].title}</span>
                <span>${tmMarkIndex10[i].title1}</span>
            </div>
            <span class="iconfont icon-iconfont31yiguanzhudianpu"></span>
        `;
        var tmMarketLeft06 = document.querySelector('.tmMarketLeft06');
        tmMarketLeft06.innerHTML += tm_06;
    } else if (i == 10) {
        let tm_header06 = `
        <div class="banXin tm_header01">
            <img src="${tmMarkIndex10[i].picUrl}" alt="" style="display: block; width: 100%;">
        </div>
        `;
        var tmMarket06 = document.querySelector('.tmMarket06');
        tmMarket06.innerHTML += tm_header06;
    } else {
        str = `
        <li class="goodList">
            <a href="">
                <img src="${tmMarkIndex10[i].picUrl}" alt="">
                <p>${tmMarkIndex10[i].title}</p>
                <p class="goodPrice">${tmMarkIndex10[i].price}</p>
            </a>
        </li>
        `;
        tmMarketRight06.innerHTML += str;
    }
}

// 模块7 like1
var like1 = document.querySelector('.like1');
var tmMarkIndex11 = tmMarketData1.tmMarkIndex11;
for (let i = 1; i < tmMarkIndex11.length; i++) {
    let tm_07 = `
        <li>
            <a href="">
                <img src="${tmMarkIndex11[i].picUrl}" alt="">
                <p>${tmMarkIndex11[i].title}</p>
                <p class="goodPrice">${tmMarkIndex11[i].price}</p>
            </a>
        </li>
        `;
    like1.innerHTML += tm_07;
}

window.addEventListener('scroll', function() {
    // 顶部
    var side = document.querySelector('#side');
    var headerFix = document.querySelector('.headerFix');
    // console.log(moder3Top, tmMarket01, tmMarket02, tmMarket03, tmMarket04);
    console.log(window.pageYOffset);

    if (window.pageYOffset > 124) {
        headerFix.style.display = 'block';
    } else {
        headerFix.style.display = 'none';
    }

    if (window.pageYOffset > 712) {
        side.style.display = 'block';
        side.children[1].id = "";
        side.children[0].id = "red";
    } else {
        side.style.display = 'none';
    }
    if (window.pageYOffset > 1785) {
        for (let i = 0; i < 10; i++) {
            side.children[i].id = "";
        }
        side.children[0].id = "";
        side.children[1].id = "red";
    }
    if (window.pageYOffset > 2472) {
        for (let i = 0; i < 10; i++) {
            side.children[i].id = "";
        }
        side.children[2].id = "red";
    }
    if (window.pageYOffset > 3218) {
        // console.log(side.children);
        for (let i = 0; i < 10; i++) {
            side.children[i].id = "";
        }
        side.children[3].id = "red";
    }
    if (window.pageYOffset > 3907) {
        // console.log(side.children);
        for (let i = 0; i < 10; i++) {
            side.children[i].id = "";
        }
        side.children[4].id = "red";
    }
    if (window.pageYOffset > 4659) {
        for (let i = 0; i < 10; i++) {
            side.children[i].id = "";
        }
        side.children[5].id = "red";
    }
    if (window.pageYOffset > 5346) {
        for (let i = 0; i < 10; i++) {
            side.children[i].id = "";
        }
        side.children[6].id = "red";
    }
    if (window.pageYOffset > 6029) {
        // console.log(side.children);
        for (let i = 0; i < 10; i++) {
            side.children[i].id = "";
        }
        side.children[7].id = "red";
    }
    if (window.pageYOffset > 6725) {
        // console.log(side.children);
        for (let i = 0; i < 10; i++) {
            side.children[i].id = "";
        }
        side.children[8].id = "red";
    }
});