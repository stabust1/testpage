const users = [
    {
      id: 1,
      fullName: "Nguyen Quoc Toan",
      dob: "02-01-2000",
      username: "toan",
      password: "123",
    },
  ];
  
  const fieldUserNameR = document.querySelector("#usernameR");
  const fieldPasswordR = document.querySelector("#passwordR");
  const btnRegister = document.querySelector("#submitR");
  
  btnRegister.addEventListener("click", (e) => {
    e.preventDefault() ;
    users.forEach((user) => {
      if (fieldUserNameR.value === user.username) {
        alert("tai khoan da co nguoi su dung");
      } else {
        users.push({
          id: 2,
          username: fieldUserNameR.value,
          
        });
        alert("dang ki thanh cong");
        window.location.href = './Sign-in.html'
        console.log(users)
      }
    });
  });