const users = [
    {
      id: 1,
      fullName: "Nguyen Quoc Toan",
      dob: "02-01-2000",
      username: "toan",
      password: "123",
    },
  ];

  const fieldUserName = document.querySelector("#username");
  const fieldPasswd = document.querySelector("#password");
  const btnLogin = document.querySelector("#submit");
  
  btnLogin.addEventListener("click", (e) => {
    e.preventDefault();
    if (fieldUserName.value !== "" && fieldPasswd.value !== "") {
      const valueUser = fieldUserName.value;
      const valuePasswd = fieldPasswd.value;
  
      users.forEach(user =>{
        console.log(users);
        if(user.username === valueUser && user.password === valuePasswd) {
          localStorage.setItem("id", user.id);
          window.location.href = "./index.html";
        }
      });
    }
  })