//Get elements
let slider = document.getElementById("rangeSlider");
let outputEl = document.querySelector(".range-slider__value");
let outputEl2 = document.querySelector(".range-slider__value__mobile");
radioValue = parseInt(0);

outputEl.textContent = slider.value; // Display the default slider value
outputEl2.textContent = slider.value; // Display the default slider value

// Update the current slider value (each time you drag the slider handle)
slider.oninput = function () {
    if (slider.value <= 50) {
        sliderValue = 0;
    } else if (slider.value >= 51 && slider.value <= 100) {
        sliderValue = 499;
    } else if (slider.value >= 101 && slider.value <= 250) {
        sliderValue = 999;
    } else if (slider.value >= 251 && slider.value <= 500) {
        sliderValue = 1999;
    } else if (slider.value >= 501 && slider.value <= 1000) {
        sliderValue = 2999;
    } else if (slider.value >= 1001 && slider.value <= 9999) {
        sliderValue = 3999;
    }

    outputEl.textContent = Number.parseInt(sliderValue) + radioValue;
    outputEl2.textContent = Number.parseInt(sliderValue) + radioValue;
};

//Loop through the radio buttons, first find all the elements with that Name then you can
//loop through to to detect the onClick.
var radios = document.getElementsByName("radio");
sliderValue = 0;
for (var i = 0, max = radios.length; i < max; i++) {
    radios[i].onclick = function () {
        /* console.log(parseInt(this.value)); */
        outputEl.textContent = Number.parseInt(sliderValue) + parseInt(this.value);
        outputEl2.textContent = Number.parseInt(sliderValue) + parseInt(this.value);
        radioValue = parseInt(this.value);
    };
}

//Generate Range slider value tooltip
const range = document.getElementById("rangeSlider"),
    rangeV = document.getElementById("rangeV"),
    setValue = () => {
        const newValue = Number(((range.value - range.min) * 100) / (range.max - range.min)),
            newPosition = 10 - newValue * 0.2;
        rangeV.innerHTML = `<span>${range.value}</span>`;
        rangeV.style.left = `calc(${newValue}% + (${newPosition}px))`;
    };
document.addEventListener("DOMContentLoaded", setValue);
range.addEventListener("input", setValue);


/*Accordion functionality*/
const items = document.querySelectorAll(".accordion button");

function toggleAccordion() {
    const itemToggle = this.getAttribute('aria-expanded');

    for (i = 0; i < items.length; i++) {
        items[i].setAttribute('aria-expanded', 'false');
    }

    if (itemToggle == 'false') {
        this.setAttribute('aria-expanded', 'true');
    }
}

items.forEach(item => item.addEventListener('click', toggleAccordion));