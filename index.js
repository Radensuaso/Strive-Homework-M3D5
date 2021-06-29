window.onload = () => {
  getUsers()
}

const generateTr = function (user) {
  return `<th scope="row">${user.id}</th>
            <td>${user.name}</td>
            <td>${user.username}</td>
            <td>${user.email}</td>
            <td>${user.website}</td>`
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
}
