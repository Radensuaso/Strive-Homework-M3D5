const log = console.log
var usersArray = []

window.onload = () => {
  getUsers()
  const inputField = document.querySelector("#user-search-value")
  inputField.addEventListener("keyup", searchUsers)
}

const getUsers = async function () {
  const response = await fetch("https://jsonplaceholder.typicode.com/users")
  const users = await response.json()
  const tBody = document.querySelector("#users-table-container table tbody")
  
  users.forEach( user => {
    let tempUser = {
      name: user.name,
      username: user.username,
      email: user.email,
      selected: false
    }
    usersArray.push(tempUser)
    tBody.innerHTML += generateTr(user)
  })
}

const generateTr = function (user) {
  return `<tr>
            <th scope="row">${user.id}</th>
            <td>
              <select class="form-select" aria-label="Default select example">
                <option selected>Select</option>
                <option class="user-select" value="user-name">${user.name}</option>
                <option class="user-select" value="user-username">${user.username}</option>
                <option class="user-select" value="user-email">${user.email}</option>
              </select>
            </td>
            <td>${user.address.city}</td>
            <td>${user.phone}</td>
            <td>${user.company.name}</td>
            <td>${user.website}</td>
          </tr>`
}

function appendSelectValues() {
  let users = document.getElementsByClassName("form-select")
  for (let person in usersArray){
    let userSelected = users[person].options[users[person].selectedIndex].value
    usersArray[person].selected = userSelected
  }
}

const searchUsers = function () {
  let query = this.value
  log(query)
  appendSelectValues()
  
  log(usersArray)
  
  // for (let user in usersArray){
  //   if (query == usersArray[user])
  // }
}

