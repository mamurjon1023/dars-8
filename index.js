let numberInp = document.querySelector(".number");
let ageInp = document.querySelector(".age");
let button = document.querySelector("button");
let usersbox = document.querySelector(".users");
button.addEventListener("click", function (event) {
  event.preventDefault();

  fetch("https://dummyjson.com/users")
    .then(function (response) {
      return response.json();
    })
    .then(function (data) {
      let users = data.users;
      let filteredUsers = users.filter(function (user) {
        return user.age >= Number(ageInp.value);
      });
      for (i = 0; i < Number(numberInp.value); i++) {
        let box = document.createElement("div");
        let name = document.createElement("h2");
        let age = document.createElement("p");
      
        name.textContent = `${filteredUsers[i].firstname} ${filteredUsers[i].lastname}`
        age.textContent = filteredUsers[i].age;

        box.appendChild(name);
        box.appendChild(age);

        usersbox.appendChild(box);
      }
    });
});
