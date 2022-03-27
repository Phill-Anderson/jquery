$(document).ready(function () {
    const input = $("input");
    input.addClass("rounded");
    input.on("keypress", function () {
        if (input1.val().length > 6) {
            alert("6- өөс их байж болохгүй ...");
            return false;
        }
    });

    const input1 = $("#val1");
    input1.change(() => inputValidation(input1, 4));

    const textSelectionInput = $("#selectTextInput");
    textSelectionInput.select((event) => {
        alert("select hiilee");
        console.log(event);
    });

    const button = $("#button1");
    button.addClass("rounded");
    button.on("click", function () {
        $("p").animate({ opacity: "0" }, "slow", "linear");
        button.toggleClass("active");
        button.text("Clicked");
    });

    button.on("mouseover", function () {
        button.addClass("hovered");
    });
    button.on("mouseout", function () {
        button.removeClass("hovered");
    });

    const saveButton = $("#saveButton");
    saveButton.on("click", function (event) {
        //   event.preventDefault();
        saveButton.val("saving ...");
    });
    const form = $("form");
    form.submit(function () {
        alert("өгөгдөл хадгалагдлаа");
    });

    const selectBox = $("#myselect");
    selectBox.addClass("rounded");
    selectBox.on("change", () => {
        let selectedValue = $("#myselect option:selected").text();
        alert("сонгосон утга: " + selectedValue);
    });


    const getDataButton = $("#getDataButton");
    getDataButton.click(() => {
        $.ajax({
            url: "http://localhost:8000/api/v1/courses",
            success: (result, status, xhr) => {
                console.log(result);
                console.log(status);
                console.log(xhr.status);
                displayAllData(result.data)
            },
        });
    });
});

