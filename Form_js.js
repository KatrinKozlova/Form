window.addEventListener('DOMContentLoaded', function() {

    'use strict';
    
//in this option, the data was sent as normal JavaScript

    let message = {
        loading: 'Загрузка...',
        success: 'Спасибо! Скоро мы с вами свяжемся!',
        failure: 'Что-то пошло не так...'
    };

    let form = document.querySelector('.main-form'),
        input = form.getElementsByTagName('input'),
        statusMessage = document.createElement('div');

        statusMessage.classList.add('status');//this class in css

    //we hang the event handler not on the button, but on the form as a whole
    form.addEventListener('submit',function(event) {
        event.preventDefault();//откл автообновление
        form.appendChild(statusMessage);
        
        //create request
        let request = new XMLHttpRequest();
        request.open('POST', 'server.php');
        request.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded');

        //receiving user input
        let formData = new FormData(form);
        request.send(formData);

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