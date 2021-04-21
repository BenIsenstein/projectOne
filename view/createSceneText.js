const createSceneText = (description, message=null) => `
<!DOCTYPE html>
<html>
<head>
    <title>Riddle Adventure</title>
</head>
<body>
    <p> 
        ${message ? message : ''}
    </p>    
    <p> 
        ${description}
    </p>   
    <form action="http://localhost:3000/play" method="post" id="inputForm">
        <input type="text" name="input" id="input" autofocus>
    </form>
</body>
</html>
`

module.exports = {
    createSceneText
}
