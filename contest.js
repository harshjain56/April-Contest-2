let name = document.getElementById("name")
let profession = document.getElementById("profession")
let age = document.getElementById("age")
let addUser = document.getElementById("addUser")
let list = document.getElementById("list-of-employees")


let professiondropdwon = document.getElementById("profession-dropdown")

let porfessionfilter = document.getElementById("profession-filter")

let filter = document.getElementById("filter")

filter.addEventListener("click", filterTheList)




// filtering according to profeesion


function filterTheList() {
    let arr = []
    for (let i = 0; i < list.children.length; i++) {
        if (!(list.children[i].children[2].innerText.includes(professiondropdwon.value))) {


            let removedElement = list.children[i]
            arr.push(removedElement)
        }


    }

    for (let i = 0; i < arr.length; i++) {
        list.removeChild(arr[i])
    }


    setTimeout(() => {
        for (let i = 0; i < arr.length; i++) {
            list.appendChild(arr[i])
        }
    }, 2000)




}
















// for adding a user


addUser.addEventListener("click", addItems)


function addItems() {


    let i = list.children.length;

    let SrNo = document.createElement("span")
    let Name = document.createElement("span")
    let Profession = document.createElement("span")
    let Age = document.createElement("span")

    let div = document.createElement("div")
    div.className = "list-item"

    SrNo.innerText = "" + ++i
    Name.innerText = "Name:" + name.value.trim();
    Profession.innerText = "Profession:" + profession.value.trim();
    Age.innerText = "Age" + age.value

    div.append(SrNo)
    div.append(Name)
    div.append(Profession)
    div.append(Age)

    list.append(div)



    console.log(Name, Age, Profession)
}