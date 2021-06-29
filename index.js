window.onload = () => {
  getUsers()
}

const generateTr = function (user) {
  return `<th scope="row">${user.id}</th>
            <td>
                <div class="dropdown">
                    <button class="btn btn-secondary dropdown-toggle" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                    Dropdown button
                    </button>
                    <div class="dropdown-menu" aria-labelledby="dropdownMenuButton">
                        <a class="dropdown-item" href="#">${user.name}</a>
                        <a class="dropdown-item" href="#">${user.username}</a>
                        <a class="dropdown-item" href="#">${user.email}</a>
                    </div>
                </div>
            </td>
            <td>${user.address.city}</td>
            <td>${user.phone}</td>
            <td>${user.company.name}</td>
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
