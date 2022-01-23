const loginForm = document.querySelector("#form");
const loginInput = loginForm.querySelector(".text_input")
const loginBtn = loginForm.querySelector(".btn")
const loginH1 = document.querySelector(".login_h1");

const CLASS_NAME = "hidden"
const USERNAME_KEY ="username"

function writeInnerHtml(name){
  // loginForm.classList.add(CLASS_NAME);
  loginH1.innerText = `Good to see you, ${name}.`; 
  loginH1.classList.remove(CLASS_NAME);
}

function loginSubmit(event){
  event.preventDefault();
  const username = loginInput.value;
  localStorage.setItem(USERNAME_KEY,username);
  loginForm.classList.add(CLASS_NAME);
  writeInnerHtml(username); 
}


// 새로고침했을 때에도 로그인상태가 유지되록

const localGetItem = localStorage.getItem(USERNAME_KEY);
 console.log(localGetItem);

 if(localGetItem === null){
  loginForm.classList.remove(CLASS_NAME);
  loginForm.addEventListener("submit", loginSubmit);

}else{
  //loginForm.classList.add(CLASS_NAME);
  writeInnerHtml(localGetItem);
  loginForm.classList.add(CLASS_NAME);
  loginInput.classList.add(CLASS_NAME);
  loginBtn.classList.add(CLASS_NAME);
  
  
}