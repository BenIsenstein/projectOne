//Chest object constructor

function Chest(contentsObject) {
    this.name = "chest"
    this.contents = contentsObject
    this.displayContents = () => {
        let contents = this.contents
        let contentsMessage = 'Chest contents:<br><br>'
        for (let key in contents) {
            contentsMessage += key + ': '
            contentsMessage += contents[key].description + '<br><br>'
        }
        return contentsMessage
    }
}   

module.exports = {
    Chest
}
