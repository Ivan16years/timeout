let result = document.getElementById('res');

function start() {
    result.value = result.value * result.value;
}

const sq = setInterval(start, 1000);

setTimeout(() => {
    clearInterval(sq);
}, 5000);
