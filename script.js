// let firstChild=document.querySelector("#list>li")
// console.log(firstChild)
// firstChild.innerHTML+="deneme eklendi"

// let newLi=document.createElement("li")
// let ul=document.querySelector("#list")
// newLi.innerHTML=("deneme")
// ul.append(newLi)
    let reachUl=document.querySelector("#list")
    let reachTypeArea=document.querySelector("#input")

let check=document.querySelector("#btn").addEventListener("click", fnc)
function fnc(){
    let newLi=document.createElement("li")
    newLi.textContent=reachTypeArea.value
    reachUl.append(newLi)
    reachTypeArea.value= ""

}