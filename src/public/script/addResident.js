$(document).ready(function () {
        $("#add-resident-form").submit(function (e) {
                e.preventDefault();

                const resident = {
                        name: $("#name").val(),
                        sex: $("#sex").val(),
                        old: $("#old").val(),
                        carerr: $("#career").val(),
                        houseId: $("houseId").val(),
                };

                $.ajax("/api/user/resident", {
                        method: "POST",
                        data: resident,
                        success: function (response) {
                                console.log(response);
                        },
                        error: function ({ responseText }) {
                                toastr.error(responseText);
                        },
                });
        });
});
