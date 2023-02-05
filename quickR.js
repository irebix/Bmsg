// ==UserScript==
// @name         哔哩私信快捷回复
// @namespace    http://tampermonkey.net/
// @version      0.1
// @description  哔哩私信快捷回复菜单
// @author       rebix
// @license      MIT
// @match        https://message.bilibili.com/*
// @icon         https://www.google.com/s2/favicons?sz=64&domain=bilibili.com
// @grant        GM_setClipboard
// ==/UserScript==

//延时加载
setTimeout(
    function() {
        'use strict';
        //回复列表
        var rList = [
            "(°∀°)ﾉhi",
            "号左右会有一版草稿，那我先接历",
            "久等历，您看看这是草稿阶段，有问题请尽管提‍[兔年]",
            "您看看这是完成稿，有问题也请尽管提(=・ω・=)",
            "感谢关照~方便的话请赏一个评论吧嘿嘿(*°▽°*)八(*°▽°*)♪"
        ]

        //遍历所有消息框
        document.querySelectorAll('.send-box').forEach(qs => {
            console.log(qs);
            //创建按钮和备选项box
            let btn=document.createElement("button");
            btn.innerText="快捷回复";
            btn.style = "height: 40px";

            let box = document.createElement("box");
            box.style = "height: 200px; display: none; text-align: center; vertical-align: middle;";

            rList.forEach(function (text) {
                textContent(text);
            });

            // textContent("(°∀°)ﾉhi");
            // textContent("号左右会有一版草稿，那我先接历");
            // textContent("久等历，您看看这是草稿阶段，有问题请尽管提‍[兔年]");
            // textContent("您看看这是完成稿，有问题也请尽管提(=・ω・=)");
            // textContent("感谢关照~方便的话请赏一个评论吧嘿嘿(*°▽°*)八(*°▽°*)♪");

            //创建快捷回复内容
            function textContent(content){
                    
                let text = document.createElement("button");
                text.innerHTML = content;
                text.style = "height: 40px;";
                text.onclick=function(){
                    //点按
                    GM.setClipboard(content)
                    box.style.display="none";
                    boxDisplay = true;
                    let input = document.querySelector(".core-style");
                    //input.innerHTML = content;
                    input.value = content;

                };
                
                box.appendChild(text);
                //添加一个换行
                var br = document.createElement("br");
                box.appendChild(br);
            }
            

            //设定默认box不显示
            let boxDisplay = true;
            btn.onclick=function(){
                //切换显示
                if (boxDisplay) {
                    box.style.display="block";
                } else {
                    box.style.display="none";
                }
                boxDisplay = !boxDisplay;

            };
            //点击空白处隐藏box
            document.onclick=function(){
                box.style.display="none";
                boxDisplay = true;
            }
            qs.parentElement.insertBefore(box,qs);
            qs.parentElement.insertBefore(btn,qs);
        });

        //btnArea.insertBefore(btn, qs.children[0]);
    },1000)