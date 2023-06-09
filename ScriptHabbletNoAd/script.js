// ==UserScript==
// @name         Habblet Ads Remover
// @namespace    http://tampermonkey.net/
// @version      1.1.1.1
// @description  Removedor de anúncios pro habblet
// @author       Relapso
// @match        https://www.habblet.city/hotelv2
// @icon         https://www.google.com/s2/favicons?sz=64&domain=habblet.city
// @grant        none
// ==/UserScript==

(function() {
    'use strict';
    document.querySelector('.player').remove();
    document.querySelector("#ad1").remove();
    document.querySelector("#ad2").remove();
    setInterval(() => {
        const elements = document.querySelectorAll(".adsbygoogle.adsbygoogle-noablate");
        for(const elem of elements) elem.remove();

    }, 100);
})();

//use com a extensao TamperMonkey
