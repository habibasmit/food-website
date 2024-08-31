document.addEventListener("DOMContentloaded", () => {
    function counter(id, start, end, duration ) {
        let obj = document.getElementById(id),
        current = start, 
        range = end - start,
        incremet = end > start ? 1 : -1,
        step = Math.abs (Math.floor(duration / range)),
        timer = setInterval(() => {
            current +=  incremet;
            obj.textContent = current;
            if(current == end ){
                clearInterval(timer);
            }
        }, step);
    }
    counter("count1", 0, 1289, 3000 );
    counter("count2", 100, 1289, 2500 );
    counter("count3", 0, 1400, 3000 );
    counter("count4", 0, 7110, 3000 );
});