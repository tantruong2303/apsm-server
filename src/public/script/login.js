$(document).ready(function () {
        $("#login-form").submit(function (e) {
                e.preventDefault();

                const user = {
                        username: $("#username").val(),
                        password: $("#password").val(),
                };

                $.ajax("/user/login", {
                        method: "POST",
                        data: user,
                        success: function (response) {
                                console.log(response);
                        },
                        error: function ({ responseText }) {
                                toastr.error(responseText);
                        },
                });
        });
});
