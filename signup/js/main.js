let supName=document.getElementById('signupName');
let supEmail=document.getElementById('signupEmail')
let supPass=document.getElementById('signupPassword')
let signupBtn=document.getElementById('btn-signup');
let error=document.getElementById('error');
let exist=document.getElementById('exist');
let success=document.getElementById('success');

let userData=[];
if(JSON.parse(localStorage.getItem('dataList')) != null)
{
    userData=JSON.parse(localStorage.getItem('dataList'))
}
// **************signupButton*****************
signupBtn.onclick=function(){
    if ( isEmailExist()== false) {
        exist.classList.remove('d-none');
        success.classList.add('d-none');
    } 
    else
    {
        addData();
    }
}   
function addData()
{
    if (supName.value == '' ||  supEmail.value == '' || supPass.value == '')
    {
        error.classList.remove('d-none');

    }
    else{
       let data=
        {
            name:supName.value,
            email:supEmail.value,
            password:supPass.value,
        }
        userData.push(data)
        localStorage.setItem("dataList",JSON.stringify(userData))
        success.classList.remove('d-none');
        error.classList.add('d-none');

    }
   
}
// ---------------------------------------------
// **********Email-Existence***********
function isEmailExist()
{
    for(var i=0;i<userData.length;i++)
    {

    if(userData[i].email.toLowerCase()==supEmail.value.toLowerCase())
         
          {
            return false;
          }
   }
}
// -----------------------------------------------



