$(document).ready(function () {
  $("#login-form").submit(function (event) {
    event.preventDefault();

    const user = {
      username: $("#username").val(),
      password: $("#password").val(),
    };

    $.ajax("/user/login", {
      method: "POST",
      data: user,
      success: function (response) {
        $("#status").text("success.");
        toastr.success("success.");
        //$(location).attr("href", "http://localhost:3000/resident/add");
      },
      error: function ({ responseText }) {
        $("#status").text("fail.");
        toastr.error(responseText);
      },
    });
  });
});
