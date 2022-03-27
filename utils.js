function inputValidation(input, valueLength) {
    if (input.val().length < valueLength) {
        input.focus();
        input.css({ "border-color": "red" });
        alert(`${valueLength} үсэгтэй утга оруулна уу`);
        return false;
    }
    input.css({ "border-color": "green" });
}
function displayPerData(data) {
    return `<p>${data.name}</p>`;
}
function displayAllData(allData) {
    if (allData.length === 0 || allData === null) {
        alert('data hooson baina')
        return false;
    }
    return allData.forEach((element) => {
        let dataHTML = displayPerData(element);
        $("#displayData").append(dataHTML);
    });
}