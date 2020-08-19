$(document).ready(function () {
        $("#delete-user").submit(function (event) {
                event.preventDefault();

                const user = {
                        confirmPassword: $("#confirm-password").val(),
                        password: $("#password").val(),
                };

                $.ajax("/api/user/delete", {
                        method: "POST",
                        data: user,
                        success: function (response) {
                                $("#status").text("success.");
                                toastr.success("success.");
                                $(location).attr("href", "/home");
                        },
                        error: function ({ responseText }) {
                                $("#status").text("fail.");
                                toastr.error(responseText);
                        },
                });
        });
});
