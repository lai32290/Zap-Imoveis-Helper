// ==UserScript==
// @name         Zap Imoveis Helper
// @namespace    http://tampermonkey.net/
// @version      2024-06-26
// @description  try to take over the world!
// @author       You
// @match        https://www.zapimoveis.com.br/imovel/*
// @icon         https://www.google.com/s2/favicons?sz=64&domain=zapimoveis.com.br
// @require      https://cdnjs.cloudflare.com/ajax/libs/mousetrap/1.6.3/mousetrap.min.js
// @grant        none
// ==/UserScript==

(function() {
    'use strict';

    // Fechar o modal de fotos ou qualquer outro Full screen modal
    function closeFullModal() {
        const closeButton = document.querySelectorAll('.full-screen-modal__container button[aria-label="Fechar"]')

        if (closeButton.length) {
            Array.from(closeButton).at(-1).click();
        }
    }

    // Tornar o label de endereco em link, que abre diretamente o Google Maps
    function turnAddressToLink() {
        const addressInfo = document.querySelector('.address-info-value')

        if (addressInfo) {
            const parent = addressInfo.parentNode;
            const address = addressInfo.innerText.replace(/ /g, '+');
            const link = document.createElement('a');
            link.href = `https://www.google.com/maps/search/?api=1&query=${address}`;
            link.target = '_blank';
            link.appendChild(addressInfo)
            parent.appendChild(link, addressInfo);
        }
    }

    setTimeout(turnAddressToLink, 1000);
    Mousetrap.bind(['esc'], closeFullModal);
})();