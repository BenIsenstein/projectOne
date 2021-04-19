const spawnInputForm = () => {

    let inputForm = document.createElement('form')
    let inputField = document.createElement('input')

    inputField.setAttribute('type', 'text')
    inputField.setAttribute('name', 'input')
    inputField.setAttribute('id', 'input')
    inputField.setAttribute('required', '')
    inputField.setAttribute('autofocus', '')

    inputForm.setAttribute('id', 'inputForm')
    inputForm.setAttribute("action", hostUrl)
    inputForm.setAttribute('method', 'post')

    inputForm.appendChild(inputField)

    // Submit the form when the user releases enter key on the keyboard
    inputForm.addEventListener("keyup", function(event) {
        if (event.which === 13) {
            // Cancel the default submit as there is no submit button. Would likely throw an error
            event.preventDefault()
            inputForm.submit()
        }
    })

    document.body.appendChild(inputForm)

    return dom.serialize()
}

module.exports = {
    spawnInputForm
}


