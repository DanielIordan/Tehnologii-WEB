$("form").submit(function(event){
    event.preventDefault();
    var name = $("#name").val();
    var email = $("#email").val();
    if(check_validation() === true){

$.ajax({
    url: "contact_us.php",
    method: "POST",
    data: {name:name, email:email},
    dataType: "JSON",
    success:function(result){
        $("#validationText").text(result);
    }
});
}
    });