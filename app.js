const submit = document.getElementById("submitBtn");
const h4=document.querySelector(".message-content");
submit.addEventListener("click",function(e){
const message= document.getElementById("message").value;
console.log(message)

 e.preventDefault();
h4.textContent=message;
})
