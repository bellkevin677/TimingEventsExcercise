setTimeout(()=>{
    const div1 = document.querySelector(`#first`);
    const p1 = document.createElement(`p`);
    p1.innerText = `Hi`;
    div1.append(p1);
}, 2000);

setTimeout(()=>{
    const timenest = document.querySelector(`#timeout-nesting`);
    const p2 = document.createElement(`p`);
    p2.innerText = `One`;
    timenest.append(p2);
    setTimeout(()=>{
        const timenest = document.querySelector(`#timeout-nesting`);
        const p3 = document.createElement(`p`);
        p3.innerText = `Two`;
        timenest.append(p3);
    }, 1000)
}, 2000);

let time = 1;
const clock = setInterval(() => {
    console.log(time);
    time++;
}, 1000);

const stop = document.querySelector(`button`);
stop.addEventListener(`click`, ()=>{
    clearInterval(clock);
});

setInterval(() => {
    const cd = doument.mediaquery(`#countdown`);
    
}, 1000);