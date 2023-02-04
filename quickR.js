// ==UserScript==
// @name         哔哩私信快捷回复
// @namespace    http://tampermonkey.net/
// @version      0.1
// @description  哔哩私信快捷回复菜单
// @author       rebix
// @license      MIT
// @match        https://message.bilibili.com/*
// @icon         https://www.google.com/s2/favicons?sz=64&domain=bilibili.com
// ==/UserScript==

//延时加载
setTimeout(
    function() {
        'use strict';
        //遍历所有消息框，
        document.querySelectorAll('.send-box').forEach(qs => {
            console.log(qs);
            //创建按钮和备选项box
            let btn=document.createElement("button");
            btn.innerText="快捷回复";
            btn.style = "height: 30px";



            let box = document.createElement("box");
            box.style = "height: 200px; display: none; text-align: center; line-height: 50px";
            box.innerText = "text"

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