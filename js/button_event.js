/**
 * Created by ania on 8/10/16.
 */

$(document).ready(function() {

    var button = document.getElementById("button1");
    var input = document.getElementById("pass");

    $(button).on('click', function (event){
        event.preventDefault();
        var password = $(input).val();      //pobieramy wartość inputa
        sendAjax(password);             //przekazujemy argument do funkcji sendAjax
    });

    function sendAjax (pass) {
        if (pass.length > 0) {

            $.ajax({
                type: "post",
                data: {
                    login: "efi",
                    password: pass    //takie hasło ma być wysyłane do api, jakie użytkownik wpisze, ale w API jest hasło "camp" i tylko takie będzie dobre
                },
                url: "https://efigence-camp.herokuapp.com/api/login",
                error: function (response) {
                    console.log(response.responseText);
                },
                success: function (response) {
                    console.log(response);
                }
            });
        }

        else { //ma się pojawić pod inputem element html, czerwone tło, biały napis "proszę wpisać hasło"
            $(button).click(function(){
                $(".no_pass").toggleClass("pass_in");
            });


        };
    };



})