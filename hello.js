let clickCount = 0;

function hello() {
    clickCount++;
    alert(`You clicked the button ${clickCount} times`);
}

const button = document.getElementById('clickButton');


button.addEventListener('click', hello);