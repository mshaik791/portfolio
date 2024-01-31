const bar = document.querySelector(".loading__bar--inner");
counter_num = document.querySelector(".loading__counter--number");
let c = 0;
let barInterval = setInterval(()=>{
    bar.style.width = c + "%";
    counter_num.innerText = c + "%";
    c++;
    if (c === 101) clearInterval(barInterval);
}, 20);

//# sourceMappingURL=index.b4ce7916.js.map
