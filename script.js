function green(var1,var2){
    document.getElementById(var1).style.border=" none ";
    document.getElementById(var2).style.display="none";
}
function validatef() {
    var name = document.forms.regform.Name.value;
    var email = document.forms.regform.EMail.value;
    var MobileNumber = document.forms.regform.MobileNumber.value;
    var password1 = document.forms.regform.Password1.value;
    var password2 = document.forms.regform.Password2.value;
    var regEmail=/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;  
    var regPhone=/^\d{10}$/;                                       
    var regName = /^[a-zA-Z ]+$/; 
    var regpass = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d]{8,20}$/;
    var f1=0,f2=0,f3=0,f4=0,f5=0;
    if (name == "" ||name==" "|| !regName.test(name)) {
        document.getElementById("Name").style.border= "2px solid rgb(138,0,0)";
        document.getElementById("nameerror").style.display="block";
        f1=1;
    }
                 
    if (email == ""||email == " " || !regEmail.test(email)) {
        document.getElementById("EMail").style.border= "2px solid rgb(138,0,0)";
        document.getElementById("emailerror").style.display="block";
        f2=1;
    }
    if (password1 == " " || !regpass.test(password1) ) {
        document.getElementById("Password1").style.border= "2px solid rgb(138,0,0)";
        document.getElementById("pass1error").style.display="block";
        f3=1;
        
        
    }
 
     if(password1!=password2){
        document.getElementById("Password2").style.border= "2px solid rgb(138,0,0)";
        document.getElementById("pass2error").style.display="block";
        f5=1;
        
    }        
 
     if (MobileNumber == "" || !regPhone.test(MobileNumber)) {
        
        document.getElementById("MobileNumber").style.border= "2px solid rgb(138,0,0)";
        document.getElementById("moberror").style.display="block";
        f4=1; 
    }
    if(f1==0 && f2==0 && f3==0 && f4==0&& f5==0){
        console.log("Name-"+ name +"EMail-"+ email +"MobileNumber-" +MobileNumber +"Password2"+ password2);    
        alert("Form Submitted Succesfully");
    }
    return true;
    

}
    window.addEventListener('submit', (e) => {
        e.preventDefault();
    });
