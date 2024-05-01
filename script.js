document.querySelector("#login-form").addEventListener("click",function(e){
    e.preventDefault();
     
    const username = document.querySelector(".data1").value;
    const password = document.querySelector(".data2").value;

    console.log("username:", username);
    console.log("password:",password);

});


  