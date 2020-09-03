$(function () {
    $(".navbar a, footer a").on("click", function (event) {
        event.preventDefault();
        var hash = this.hash;
        $('body,html').animate({ scrollTop: $(hash).offset().top }, 900, function () { window.location.hash = hash; })
    });

    $("#myNavbar a").on("click", function () {
        $("#myNavbar").collapse("hide");
    });

    $('#contact-form').submit(function (e) {
        e.preventDefault();
        $(".comments").empty();
        var postdata = $("#contact-form").serialize();

        $.ajax({
            type: 'POST',
            url: 'php/contact.php',
            data: postdata,
            dataType: 'json',
            success: function (result) {

                if (result.isSuccess) {
                    $("#contact-form").append("<p class='thanks-you'>Votre message a bien été envoyé.Merci de nous avoir contacter :)</p>");
                    $("#contact-form")[0].reset();
                }

                else {
                    $("#firstname + .comments").html(result.firstnameError);
                    $("#name + .comments").html(result.nameError);
                    $("#email + .comments").html(result.emailError);
                    $("#phone + .comments").html(result.phoneError);
                    $("#message + .comments").html(result.messageError);
                }

            }


        });


    });



});