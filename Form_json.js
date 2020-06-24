window.addEventListener('DOMContentLoaded', function() {

	'use strict';
//sometimes servers, for example, written in node.js, require us to send json files, or just a situation arises when you need to transfer the json format

    let message = {
        loading: 'Загрузка...',
        success: 'Спасибо! Скоро мы с вами свяжемся!',
        failure: 'Что-то пошло не так...'
    };

    let form = document.querySelector('.main-form'),
        input = form.getElementsByTagName('input'),
        statusMessage = document.createElement('div');

        statusMessage.classList.add('status');//это класс прописан в css для того, чтобы добавить стилистики тому сообщению которе будет выводиться

    //we hang the event handler not on the button, but on the form as a whole
    form.addEventListener('submit',function(event) {
        event.preventDefault();//откл автообновление
        form.appendChild(statusMessage);
        
        //create request
        let request = new XMLHttpRequest();
        request.open('POST', 'server.php');
        request.setRequestHeader('Content-Type', 'application/json; charset=utf-8');

        //receiving user input
        let formData = new FormData(form);

        //convert data to JSON format
        let obj = {};
        formData.forEach(function(value, key) {
            obj[key] = value;
        });
        let json = JSON.stringify(obj);

        request.send(json);

        request.addEventListener('readystatechange', function() {
            if (request.readyState < 4) {
                statusMessage.innerHTML = message.loading;
            } else if (request.readyState === 4 && request.status == 200) {
                statusMessage.innerHTML = message.success;
            } else {
                statusMessage.innerHTML = message.failure;
            }
        });
        //clear input
        for (let i = 0; i < input.length; i++) {
            input[i].value = '';
        }
    });
});