function inputValidation(input, valueLength) {
    if (input.val().length < valueLength) {
        input.focus();
        input.css({ "border-color": "red" });
        alert(`${valueLength} үсэгтэй утга оруулна уу`);
        return false;
    }
    input.css({ "border-color": "green" });
}