// function calculate() {
//     const length = Number(document.querySelector("#num1").value);
//     let width = Number(document.querySelector("#num2").value);
//     const items = Number(document.querySelector("#items").value);
//     const pricePerSqFt = Number(document.querySelector("#price").value);

//     if (length <= 0 || width <= 0 || items <= 0 || pricePerSqFt <= 0) {
//         alert("Please enter valid values in all fields");
//         return;
//     }

//     const originalWidth = width;

//     // Adjust width to next multiple of 3
//     if (width % 3 !== 0) {
//         width = width + (3 - (width % 3));
//     }

//     const areaPerItemSqFt = (length * width) / 144;
//     const totalFeet = areaPerItemSqFt * items;
//     const totalPrice = totalFeet * pricePerSqFt;

//     document.querySelector("#feet").value = totalFeet.toFixed(2);
//     document.querySelector("#totalPrice").value = totalPrice.toFixed(2);

//     console.log("---- Marble Calculation ----");
//     console.log("Length (in):", length);
//     console.log("Original Width (in):", originalWidth);
//     console.log("Adjusted Width (in):", width);
//     console.log("Area per item (sq ft):", areaPerItemSqFt.toFixed(2));
//     console.log("Items:", items);
//     console.log("Total area (sq ft):", totalFeet.toFixed(2));
//     console.log("Price per sq ft:", pricePerSqFt);
//     console.log("Total price:", totalPrice.toFixed(2));
//     console.log("----------------------------");
// }

// function resetForm() {
//     document.querySelector("#name").value = "";
//     document.querySelector("#num1").value = "";
//     document.querySelector("#num2").value = "";
//     document.querySelector("#items").value = "";
//     document.querySelector("#price").value = "";
//     document.querySelector("#feet").value = "";
//     document.querySelector("#totalPrice").value = "";

//     console.clear();
// }

const inputs = document.querySelectorAll("#num1, #num2, #items, #price, #name");
inputs.forEach(input => input.addEventListener("input", calculate));

function highlight(element) {
    element.style.transition = "background 0.3s ease";
    element.style.backgroundColor = "#d1fae5"; // Light green flash
    setTimeout(() => {
        element.style.backgroundColor = "";
    }, 300);
}

function calculate() {
    const length = Number(document.querySelector("#num1").value);
    let width = Number(document.querySelector("#num2").value);
    const items = Number(document.querySelector("#items").value);
    const pricePerSqFt = Number(document.querySelector("#price").value);

    if (length <= 0 || width <= 0 || items <= 0 || pricePerSqFt <= 0) {
        document.querySelector("#feet").value = "";
        document.querySelector("#totalPrice").value = "";
        return;
    }

    const originalWidth = width;

    // Adjust width to next multiple of 3
    if (width % 3 !== 0) {
        width = width + (3 - (width % 3));
    }

    const areaPerItemSqFt = (length * width) / 144;
    const totalFeet = areaPerItemSqFt * items;
    const totalPrice = totalFeet * pricePerSqFt;

    document.querySelector("#feet").value = totalFeet.toFixed(2);
    document.querySelector("#totalPrice").value = totalPrice.toFixed(2);

    // Highlight totals
    highlight(document.querySelector("#feet"));
    highlight(document.querySelector("#totalPrice"));

    // Console log for debugging
    console.log("---- Marble Calculation ----");
    console.log("Length (in):", length);
    console.log("Original Width (in):", originalWidth);
    console.log("Adjusted Width (in):", width);
    console.log("Area per item (sq ft):", areaPerItemSqFt.toFixed(2));
    console.log("Items:", items);
    console.log("Total area (sq ft):", totalFeet.toFixed(2));
    console.log("Price per sq ft:", pricePerSqFt);
    console.log("Total price:", totalPrice.toFixed(2));
    console.log("----------------------------");
}

function resetForm() {
    document.querySelector("#name").value = "";
    document.querySelector("#num1").value = "";
    document.querySelector("#num2").value = "";
    document.querySelector("#items").value = "";
    document.querySelector("#price").value = "";
    document.querySelector("#feet").value = "";
    document.querySelector("#totalPrice").value = "";

    console.clear();
}

