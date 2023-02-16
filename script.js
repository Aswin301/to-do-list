var user=document.getElementById("username");
var password=document.getElementById("exampleInputPassword1");
var error=document.getElementById("error");
var list=document.getElementById("list");
let count=0;
//callback method
function logincheck (main){
        if(user.value=="admin" && password.value=="12345"){
            main();
        }else{
            error.innerHTML="Username or password or both are invalid";
            return false;
        }
}
function main() {
      
      return true;
  }

// API call
function ajax(){

let request=new XMLHttpRequest();
    request.open("GET",'https://jsonplaceholder.typicode.com/todos',true);
    
        request.onreadystatechange=function(){
            try{
            if(this.readyState==4 && this.status==200){
                
                    let response=JSON.parse(this.responseText)
                    document.getElementById("list").innerHTML=`<li class="list1">${response[0].title}</li> <input type="checkbox" onchange="five()" class="form-check-input" id="exampleCheck1">`
                    document.getElementById("list2").innerHTML=`<li class="list2">${response[1].title}</li>  <input type="checkbox" onchange="five()" class="form-check-input" id="exampleCheck2">`
                    document.getElementById("list3").innerHTML=`<li class="list3">${response[2].title}</li>  <input type="checkbox" onchange="five()" class="form-check-input" id="exampleCheck3">`
                    document.getElementById("list4").innerHTML=`<li class="list4">${response[3].title}</li>  <input type="checkbox" onchange="five()" class="form-check-input" id="exampleCheck4">`
                    document.getElementById("list5").innerHTML=`<li class="list5">${response[4].title}</li>  <input type="checkbox" onchange="five()" class="form-check-input" id="exampleCheck5">`
                    document.getElementById("list6").innerHTML=`<li class="list6">${response[5].title}</li>  <input type="checkbox" onchange="five()" class="form-check-input" id="exampleCheck6">`
                    document.getElementById("list7").innerHTML=`<li class="list7">${response[6].title}</li>  <input type="checkbox" onchange="five()" class="form-check-input" id="exampleCheck7">`
                    document.getElementById("list8").innerHTML=`<li class="list8">${respo<nse[7].title}</li>  <input type="checkbox" onchange="five()" class="form-check-input" id="exampleCheck8">`
                    document.getElementById("list9").innerHTML=`<li class="list9">${response[8].title}</li>  <input type="checkbox"  onchange="five()"class="form-check-input" id="exampleCheck9">`
                    document.getElementById("list10").innerHTML= `<li class="list10">${response[9].title}</li> <input type="checkbox"  onchange="five()"class="form-check-input" id="exampleCheck10">`
              
            }else{
                throw new Error("Error in connection with API")
            }
        } catch(error){
            console.log(error);
        }

    }
  
    request.send();
}
// Use of promise
async function five(){
    var prom=new Promise((resolve,reject)=>{
        count=count+1;
        if(count==5){
            resolve()
        }else{
            reject()
        }
    })
  
    prom.then(function () {
        alert("Congrats. 5 Tasks have been Successfully Completed");
    })
    
}
