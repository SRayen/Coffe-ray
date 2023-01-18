const btn=document.querySelector("#btn")
const name=document.querySelector("#name")
const result=document.querySelector("#result")

btn.addEventListener("click",(e) => {
    e.preventDefault()
    let text=`Merci ${name.value} pour votre question,nous allons vous répondre dans les meilleurs délais `
    result.innerHTML=text
})

