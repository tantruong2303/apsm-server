$(document).ready(function () {
        $("#register-form").submit(function (e) {
                e.preventDefault();

                const user = {
                        username: $("#username").val(),
                        password: $("#password").val(),
                        confirmPassword: $("#confirm-password").val(),
                };

                $.ajax("/api/user/register", {
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
