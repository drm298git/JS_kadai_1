/*ボタンの要素を取得*/
const time = document.getElementById('time');
const startbutton = document.getElementById('start');
const stopbutton = document.getElementById('stop');
const resetbutton = document.getElementById('reset');

/*変数の定義*/
let startTime;
let stopTime = 0;
let reset;


function displayTime() {
    const currentTime = new Date(Date.now() - startTime + stopTime);
    const h = String(currentTime.getHours()-1).padStart(2, '0');
    const m = String(currentTime.getMinutes()).padStart(2, '0');
    const s = String(currentTime.getSeconds()).padStart(2, '0');
    const ms = String(currentTime.getMilliseconds()).padStart(3, '0');

    time.textContent = `${h}:${m}:${s}.${ms}`;
    timeoutID = setTimeout(displayTime, 10);
}


startbutton.addEventListener('click', () => {
    startbutton.disabled = true;
    stopbutton.disabled = false;
    resetbutton.disabled = true;
    startTime = Date.now();
    displayTime();
});


stopbutton.addEventListener('click', () => {
    startbutton.disabled = false;
    stopbutton.disable = true;
    resetbutton.disabled = false;
    clearTimeout(timeoutID);
    stopTime += (Date.now() - startTime);
})


resetbutton.addEventListener('click', () => {
    startbutton.disabled = false;
    stopbutton.disable = true;
    resetbutton.disable = true;
    time.textContent = '00:00:00.000';
    stopTime = 0;
})