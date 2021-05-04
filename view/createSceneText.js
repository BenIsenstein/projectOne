const createSceneText = (description, message=null) => `
<!DOCTYPE html>
<html>
<head>
    <title>Riddle Adventure</title>
</head>
<body>
    <p> 
        ${message || ''}
    </p>    
    <p> 
        ${description}
    </p>   
    <form action="/play" method="post">
        <input type="text" name="input" autofocus>
    </form>
</body>
</html>
`

module.exports = {
    createSceneText
}
