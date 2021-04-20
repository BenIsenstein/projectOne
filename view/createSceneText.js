const handleMessage = (message) => message ? `${message}<br><br>` : ''

const createSceneText = (description, message=null) => `
<!DOCTYPE html>
<html>
<head>
    <title>Riddle Adventure</title>
</head>
<body>
    <p> 
        ${handleMessage(message)}
    </p>    
    <p> 
        ${description}
    </p>   
    <form action="http://localhost:3000/play" method="post" id="inputForm">
        <input type="text" name="input" id="input" required autofocus>
    </form>
</body>
</html>
`

module.exports = {
    createSceneText
}