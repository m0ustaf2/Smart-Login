let signinEmail=document.getElementById('signinEmail');
let signinPass=document.getElementById('signinPassword');
let loginBtn=document.getElementById('btn-login');
let required=document.getElementById('required');
let incorrect=document.getElementById('incorrect');

let userData=[];

    userData=JSON.parse(localStorage.getItem('dataList'))


loginBtn.onclick=function()
{
    if (signinEmail.value == '' ||  signinPass.value == '') 
    {
        required.classList.remove('d-none')
    
    }
    else
    {
        checkInputs();
        
    }
}
function checkInputs()
{
    for(var i=0;i<userData.length;i++)
{
if(userData[i].email.toLowerCase() == signinEmail.value.toLowerCase() && userData[i].password.toLowerCase() == signinPass.value.toLowerCase())
     
      {
        let x = userData[i].name;
        localStorage.setItem('userName', x)
        location.href = "../home/index.html";
        break;
      }
      else
      {
        incorrect.classList.remove('d-none')
        required.classList.add('d-none')
      }
}
} 
