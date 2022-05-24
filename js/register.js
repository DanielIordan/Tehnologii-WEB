$(document).ready(function(){
    $("form").submit(function(event){
    event.preventDefault();
    var fname = $("#fname").val();
    var sname = $("#sname").val();
    var email = $("#email").val();
    var password = $("#password").val();
    if(check_validation() === true){

       $.ajax({
           url: "register.php",
           method: "POST",
           data: {
             fname: fname,
             sname: sname,
             email: email,
             password: password,
           dataType: "JSON",
           success:function(result){
               $("#validationText").text(result);
           }
       });
       }
    });
    });
