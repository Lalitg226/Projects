let cs=document.getElementById('cels');
let fh=document.getElementById('frh');

cs.addEventListener('input', function(){
    fh.value=((9*this.value)/5)+32;
})

fh.addEventListener('input', function(){
    cs.value=(((this.value-32)*5)/9).toFixed(3);
})