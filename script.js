let inp1 = document.querySelector('.input2')
let inp2 = document.querySelector('.input1')
let btn = document.querySelector('button')
let div = document.querySelector('div')


fetch("https://688e0e74a459d5566b13ef84.mockapi.io/users")
    .then((res) => res.json())
    .then((data) => {
        console.log(data);
        data.map((item) => {
            div.innerHTML += `
        <div class="card">
        <h1> ${item.name}</h1>
        <b>${item.password}</b>
        </div>
        
        
        `
        })

    })




btn.addEventListener('click', () => {
    fetch("https:/
        "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({
            name: inp1.value,
            password: inp2.value
        })
    })})