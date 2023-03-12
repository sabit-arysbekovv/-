let currentyear = new Date().getFullYear()

console.log(currentyear)
let tr = new Audio("./pr.mp3");
let er = new Audio("./prr.mp3");
const ResolveOld = () => {
    let year = document.getElementById('year').value;
    let incorrect = document.getElementById('incorrect')
    let result = document.getElementById('result')

    year = parseInt(year);

    if(Number.isNaN(year)) {
        incorrect.style.display = 'block'
        incorrect.style.color = '#B20000'
        result.style.display = 'none'
        tr.play();
    }else{
        incorrect.style.display = 'none'
        let res = currentyear -year
        result.innerHTML = 'Сиздин жашыныз:'+ res
        result.style.display = 'block'
        result.style.color = '#058240'
        er.play();
    }
}