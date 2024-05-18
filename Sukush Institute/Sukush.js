
// Number Confirmation //
document.querySelector("#mob-cnfm").addEventListener("click", () =>
        {
            let input1 = document.querySelector("#exampleFormControlInput1").value
            let input2 = document.querySelector("#exampleFormControlInput2").value

            if(input1 === input2)
            {
                alert("Number Confirmed!");
            }
            else
            {
                alert("Wrong Number!");
            }
        });

// Email Confirmation /
document.querySelector("#email-cnfm").addEventListener("click", () =>
{
    let email1 = document.querySelector("#emailFormControlInput1").value
    let email2 = document.querySelector("#cnfmFormControlInput2").value


    if(email1 === email2)
    {
        alert("Email Confirmed")
    }
    else
    {
        alert("Invalid Email!")
    }
});

// form Confirmation //
function formcnfm()
{
    var btnmsg;
    btnmsg=confirm("Do you want to Submit?");
    if(btnmsg == true)
    {
        alert("Form Submitted Successfully!");
    }
    
}