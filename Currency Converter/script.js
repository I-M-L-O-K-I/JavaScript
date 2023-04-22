let select = document.querySelectorAll(".currency")
let btn = document.getElementById('btn')
let input = document.getElementById('input')
let result = document.getElementById('result')
fetch('https://api.frankfurter.app/currencies')
.then(res => (res.json()))
.then(msg => Droptown(msg))

function Droptown(msg){
   let curr = Object.entries(msg)
   for( i of curr){
let opt = `<option value="${i[0]}">${i[0]}</option>`
select[0].innerHTML += opt
select[1].innerHTML += opt
}
}

btn.addEventListener('click',()=> {

    let curr1 = select[0].value
    let curr2 = select[1].value
    let inputVal = input.value
    if(curr1===curr2){
        alert("Please Don't Select Same Currency.")
    }
        else{
            Convert(curr1,curr2,inputVal)
        }
    }
)

function Convert(curr1,curr2,inputVal){
    const host = 'api.frankfurter.app'
    fetch(`https://${host}/latest?amount=${inputVal}&from=${curr1}&to=${curr2}`)
    .then(resp => resp.json())
    .then((data) => {
        result.value = Object.values(data.rates)[0]
    }   )
}