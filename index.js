let num = ['+','-','*','/']

function getRandomIntInclusive(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min; //Максимум и минимум включаются
}

const solution = document.querySelector('.solution')
const inputNum = document.querySelector('.inputNum')
const ok = document.querySelector('.btn')



function searchTrueSol(){
    let n = Number(inputNum.value)
    let y = `1${num[getRandomIntInclusive(0,3)]}2${num[getRandomIntInclusive(0,3)]}3${num[getRandomIntInclusive(0,3)]}4${num[getRandomIntInclusive(0,3)]}5`
    if(eval(y) === n){
        solution.textContent = `${y}=${n}`;
    }
    else {
        searchTrueSol()
    }
}
ok.addEventListener('click',()=>{
    searchTrueSol()
})