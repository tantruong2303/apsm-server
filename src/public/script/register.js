$(document).ready(function () {
        $("#register-form").submit(function (event) {
                event.preventDefault();

                const user = {
                        username: $("#username").val(),
                        password: $("#password").val(),
                        confirm: $("#confirm-password").val(),
                };

                $.ajax("/api/user/register", {
                        method: "POST",
                        data: user,
                        success: function (response) {
                                $("#status").text("success.");
                                toastr.success(response);
                                $(location).attr("href", "/user/login");
                        },
                        error: function ({ responseText }) {
                                $("#status").text("fail.");
                                toastr.error(responseText);
                        },
                });
        });
});
