let empolyeesDetails=[]

let displayMessage=document.getElementById("displayMessage")

let employeeName=document.getElementById("name")
let employeeProfession=document.getElementById("profession")
let employeeAge=document.getElementById("age")
let employeeDisplayTable=document.getElementById("employeeDisplayTable")
let employeeNumberMessage=document.getElementById("employeeNumberMessage")

let addEmployeebtn=document.getElementById("addEmployeebtn")
addEmployeebtn.addEventListener("click" ,addingEmployeetoTheDatabase)

function addingEmployeetoTheDatabase(event){
    event.preventDefault()
    displayMessage.innerText=""
    if(employeeName.value===""||employeeAge.value===""||employeeProfession.value===""){
         setTimeout(()=>{
            displayMessage.className="error"
            displayMessage.innerText="Error: Please fill all the Details"
        },100)

        setTimeout(()=>{
            displayMessage.className=""
            displayMessage.innerText=""
        },2000)
      return;
    }
   
    let employeeData={
        "Id":generateId(),
        "Name":employeeName.value,
        "Profession":employeeProfession.value,
        "Age":employeeAge.value,
    }

    empolyeesDetails.push(employeeData)
    console.log(empolyeesDetails)
    setTimeout(()=>{
        employeeNumberMessage.style.display="none"
        displayMessage.className="success"
        displayMessage.innerText="Employee Details Successfully Added"
        displayEmployeeData(empolyeesDetails)
    },200)

    setTimeout(()=>{
        displayMessage.className=""
        displayMessage.innerText=""
    },2000)


   
}

function generateId(){
    let id=Math.floor(Math.random()*10000)
    return id
}

function displayEmployeeData(empolyeesDetails) {
   employeeDisplayTable.innerHTML=""
   for(let i=0;i<empolyeesDetails.length;i++){
         let tr=document.createElement("tr")
         tr.setAttribute("id", `${empolyeesDetails[i].Id}`)
        
         let Sno=document.createElement("td")
         Sno.innerText=`${i+1}.`

         let name=document.createElement("td")
         name.innerText=empolyeesDetails[i].Name

         let profession=document.createElement("td")
         profession.innerText=empolyeesDetails[i].Profession

         let age=document.createElement("td")
         age.innerText=empolyeesDetails[i].Age

         let deletebtnColumn=document.createElement("td")
         let deletebtn=document.createElement("button")
         deletebtn.innerText="Delete User"
         deletebtn.addEventListener("click",deleteTheUser)
         deletebtnColumn.appendChild(deletebtn)

         tr.appendChild(Sno)
         tr.appendChild(name)
         tr.appendChild(profession)
         tr.appendChild(age)
         tr.appendChild(deletebtnColumn)
         employeeDisplayTable.appendChild(tr)

   }
      
}

function deleteTheUser(){
    let td=this.parentNode
    let tr=td.parentNode
    employeeDisplayTable.removeChild(tr)
    empolyeesDetails=empolyeesDetails.filter((employee)=>{
      if(`${employee.Id}`!==tr.id) return true
    })

    if(empolyeesDetails.length===0){
        employeeNumberMessage.style.display="block"
    }
   displayEmployeeData(empolyeesDetails)
}