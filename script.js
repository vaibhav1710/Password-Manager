console.log("Hello");

const deletePassword = (website)=>{
    let data = localStorage.getItem("passwords")
    let arr = JSON.parse(data);
    arrUpdated = arr.filter((e)=>{
        return e.website != website
    })
    localStorage.setItem("passwords", JSON.stringify(arrUpdated))
    addpassword()
    alert(`Successfully deleted ${website}'s password`)
}

function addpassword(){
let data = localStorage.getItem("passwords");
let table = document.querySelector("table");
if(data==null){
  table.innerHTML = "No Data to Show";
}else{
    table.innerHTML = `<tr>
    <th>Website</th>
    <th>Username</th>
    <th>Password</th>
    <th>Delete</th>
</tr> `
    str = '';
    let arr = JSON.parse(data);
    for(let i = 0; i<arr.length;i++){
        const element = arr[i];
      
     str += `<tr>
          <td>${element.website}</td>
          <td>${element.username}</td>
          <td>${element.password}</td>
          <td><button class="btnsm" onclick="deletePassword('${element.website}')">Delete</button></td>
          </tr>`
    }    

    table.innerHTML = table.innerHTML + str;
 }

  website.value="";
  username.value="";
  password.value="";

}


addpassword();
document.querySelector(".btn").addEventListener("click", (e)=>{
 e.preventDefault();
 console.log("clicked");
 console.log(username.value, password.value,website.value);
 let passwords = localStorage.getItem("passwords");
 console.log(passwords);
 
 if(passwords==null){
   let json = [];
   json.push({website: website.value, username:username.value,password:password.value});
   localStorage.setItem("passwords",JSON.stringify(json));
 }else{
    let json = JSON.parse(localStorage.getItem("passwords"));
    json.push({website: website.value, username:username.value,password:password.value});
    localStorage.setItem("passwords",JSON.stringify(json));
 }
 addpassword();
})
