$(document).ready(function () {
        $("#change-password-form").submit(function (event) {
                event.preventDefault();

                const user = {
                        username: $("#username").val(),
                        currentPassword: $("#current-password").val(),
                        newPassword: $("#new-password").val(),
                        confirm: $("#confirm-password").val(),
                };

                $.ajax("/api/user/changePassword", {
                        method: "POST",
                        data: user,
                        success: function (response) {
                                $("#status").text("success.");
                                toastr.success("success.");
                        },
                        error: function ({ responseText }) {
                                $("#status").text("fail.");
                                toastr.error(responseText);
                        },
                });
        });
});
