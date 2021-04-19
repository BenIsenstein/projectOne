const handleErrorMessage = (errorMessage) => !errorMessage ? '' : errorMessage + '\n\n'

const createSceneText = (description, errorMessage=null) => `
<!DOCTYPE html>
<html>
<head>
    <title>Riddle Adventure</title>
</head>
<body>
    <p> 
        ${handleErrorMessage(errorMessage)}
    </p>    
    <p> 
        ${description}
    </p>   
    <form action="http://localhost:3000/play" method="post" id="inputForm">
        <input type="text" name="input" id="input" required autofocus>
    </form>
</body>

<script> 
    //grab input form, so we may use it without a submit button
    let inputForm = document.getElementById("inputForm")

    // Submit the form when the user releases enter key on the keyboard
    inputForm.addEventListener("keyup", function(event) {
        if (event.which === 13) {
            // Cancel the default submit as there is no submit button. Would likely throw an error
            event.preventDefault()
            inputForm.submit()
        }
    })
</script>
</html>
`

module.exports = {
    createSceneText
}