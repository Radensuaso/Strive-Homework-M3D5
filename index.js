const log = console.log

window.onload = () => {
  getUsers()
  const inputField = document.querySelector("#user-search-value")
  inputField.addEventListener("keyup", searchUsers)
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

const getUsers = async function () {
  const response = await fetch("https://jsonplaceholder.typicode.com/users")
  const users = await response.json()
  console.log(users)

  //get Table Body from the Dom
  const tBody = document.querySelector("#users-table-container table tbody")

  //Create row for each element
  users.forEach( user => {
    console.log(user)
    tBody.innerHTML += generateTr(user)
  })
  
  searchUsers()
}

// const searchUsers = function () {
//   let userSearch = document.getElementsByClassName("user-select")[5]
//   console.log(userSearch)
// }

const searchUsers = function () {
  let searchValue = this.value
  let users = document.getElementsByClassName("user-select")
  log(users[0].value)
  
  let users2 = document.getElementsByTagName("tr")
  log(users2)
  log(users)
  
}