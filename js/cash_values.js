/**
 * Created by ania on 8/24/16.
 */
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

// https://hithub.com/efigence/Efi-Camp-2016-API
// https://efigence-camp.herokuapp.com/api/data/summary

// w consoli: curl -X get adress-http.... lub curl --data "login=efi&password"
// lub plugin insomnia, webowo: hurl.it

// endpoint - do nich wysyłamy zapytanie, na które otrzymujemy odpowiedź  zawartą na githubie w obiekcie

//co się zmienia: url,



function ajaxPost( data, endpoint, method, success ) {      //opakowanie ajaxa w funkcję, dzięki czemu możemy do środka zamiast sztywnych danych przekazać argumenty

    $.ajax({                        //funkcja jQuery, ma zawierać to, co zawiera nasze API
            method: method,         //GET lub POST
            url: "https://efigence-camp.herokuapp.com/api/"+endpoint, //endpoint - końcówka adresu; naszym adresem dla API jest ...herokuapp... + /data/summary, czyli endpoint
            data: data          //czyli dodatkowe dane, np. w przypadku loginpage to login i hasło
        })
        .done(function (msg) {      //funkcja, która wykonuje się jako sukces
            success(msg);
        });
};

ajaxPost(null, "data/summary", "GET", function (msg) {      //wywołujemy jako funckję anonimową funkcję wyżej, przy czym podajemy jej, co chcemy w console.log, a to wiemy z API
        console.log("Callback pozdrawia");
        console.log(msg);

    }
);
