//Chest object constructor
function Chest(contents) {
    this.name = "chest"
    this.contents = contents
    this.displayContents = () => {console.log("Chest contents:\n"); console.log(this.contents)}
}

module.exports = {
    Chest
}
