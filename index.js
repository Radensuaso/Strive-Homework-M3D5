const log = console.log

window.onload = () => {
  getUsers()
}

const generateTr = function (user) {
  return `<tr>
            <th scope="row">${user.id}</th>
            <td>
              <select class="form-select" aria-label="Default select example">
                <option selected>Select</option>
                <option class="user-name" value="user-name">${user.name}</option>
                <option class="user-username" value="user-username">${user.username}</option>
                <option class="user-email" value="user-email">${user.email}</option>
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
  users.forEach((user) => {
    tBody.innerHTML += generateTr(user)
  })

  //add event listener to input text
  const inputField = document.querySelector("#user-search-value")
  inputField.addEventListener("keyup", (event) => searchUsers(event, users))
}

const searchUsers = function (event, users) {
  const tBody = document.querySelector("tbody")
  tBody.innerHTML = ``
  let searchValue = event.currentTarget.value.toLowerCase()
  users.forEach((user) => {
    const name = user.name.toLowerCase()
    const userName = user.username.toLowerCase()
    const email = user.email.toLowerCase()

    if (
      name.includes(searchValue) ||
      userName.includes(searchValue) ||
      email.includes(searchValue)
    ) {
      tBody.innerHTML += generateTr(user)
    } else if (searchValue === ``) {
      tBody.innerHTML += generateTr(user)
    }
  })
}
