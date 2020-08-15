$(document).ready(function () {
  $("#changePassword-form").submit(function (event) {
    console.log("aa");
    event.preventDefault();

    const user = {
      username: $("#username").val(),
      currentPassword: $("#current-password").val(),
      newPassword: $("#new-password").val(),
      confirm: $("#confirm-password").val(),
    };

    $.ajax("/user/changePassword", {
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
