const {Door, Chest, Letter, Component, YesOrNoObject} = require("./objectsModule")

let centralRoomsObject = {}

//room 0
centralRoomsObject['room0'] = {}


centralRoomsObject['room0'].x1y1 = {}
centralRoomsObject['room0'].x1y1.description = `
You are at the Southwest corner of the room.<br> 
In the middle of the room is a chest. At the North end of the room is a door.<br> 
`
centralRoomsObject['room0'].x1y1.interactableContent = {}


centralRoomsObject['room0'].x1y2 = {}
centralRoomsObject['room0'].x1y2.description = `
You are about halfway up the length of the room, on the West side. <br> 
To your East in the middle of the room is a chest. At the north end of the room is a door.<br> 
`
centralRoomsObject['room0'].x1y2.interactableContent = {}


centralRoomsObject['room0'].x1y3 = {}
centralRoomsObject['room0'].x1y3.description = `
You are at the Northwest corner of the room. <br> 
In the middle of the room is a chest. Just East of you is a door.<br> 
`
centralRoomsObject['room0'].x1y3.interactableContent = {}


centralRoomsObject['room0'].x2y1 = {}
centralRoomsObject['room0'].x2y1.description = `
You are standing in an all-white room of no more than one hundred square feet.<br> 
The walls appear to have no flaws whatsoever. There are no cracks, no windows,<br> 
no decorations. Despite an absence of light fixtures, the entire room is evenly<br> 
illuminated with a stark white light to the point of discomfort.<br> 
<br> 
You are standing at the South end of the room, exactly halfway along the South wall.<br> 
Straight ahead of you, in the middle of the room, is a chest. It appears to be unlocked.<br> 
Beyond the chest, at the North end of the room, is a door.
`
centralRoomsObject['room0'].x2y1.interactableContent = {}


centralRoomsObject['room0'].x2y2 = {}
centralRoomsObject['room0'].x2y2.description = `
You are within arms reach of the chest. Just ahead of you,<br> 
to the North, is a door.
`
centralRoomsObject['room0'].x2y2.interactableContent = {
    chest: new Chest({
        letter: new Letter("Letter's text."),
        backpack: {
            name: "backpack",
            description: "Probably useful.",
            contents: {}
        },
        jacket: {
            name: "jacket",
            description: "Stay cozy out there!"
        },
        'broken gears': new Component(5, "broken gears", "A rusted and shoddy-looking jumble of old gears. Probably useless.")
    })
}


centralRoomsObject['room0'].x2y3 = {}
centralRoomsObject['room0'].x2y3.description = `
You are within arms reach of the door. Just South of you, <br> 
in the middle of the room, is the chest. <br> 
<br> 
The door beckons you to enter...
`
centralRoomsObject['room0'].x2y3.interactableContent = {door: new Door('http://localhost:3000/play/room1/x2y1')}


centralRoomsObject['room0'].x3y1 = {}
centralRoomsObject['room0'].x3y1.description = `
You are at the Southeast corner of the room. In the middle of the <br> 
room is a chest. At the North end of the room is a door.
`
centralRoomsObject['room0'].x3y1.interactableContent = {}


centralRoomsObject['room0'].x3y2 = {}
centralRoomsObject['room0'].x3y2.description =  `
You are about halfway up the length of the room, on the East side. <br> 
To your West in the middle of the room is a chest. At the North end of the room is a door.
`
centralRoomsObject['room0'].x3y2.interactableContent = {
    panel: { 
        name: "panel",
        description: "A black panel about the size of a sheet of paper. It appears depressible.",
        pressedStatus: false
    }
}


centralRoomsObject['room0'].x3y3 = {}
centralRoomsObject['room0'].x3y3.description = `
You are at the Northeast corner of the room. <br> 
In the middle of the room is a chest. Just West of you is a door.
`
centralRoomsObject['room0'].x3y3.interactableContent = {}

//----------------------------------------------------//

//room 1
centralRoomsObject['room1'] = {}

centralRoomsObject['room1'].x1y1 = {}
centralRoomsObject['room1'].x1y1.description = `
You're standing in the Southwest corner of the room. Just ahead of you, <br>
to the North, is a bookshelf. To the East of that, there is a reading area <br> 
with some chairs spread around an ornate rug. A woman is sitting in one of <br>
the chairs, intensely focused on her book.
`
centralRoomsObject['room1'].x1y1.interactableContent = {}

centralRoomsObject['room1'].x1y2 = {}
centralRoomsObject['room1'].x1y2.description = `
You are at the South end of the room, just West of where you started. Directly<br>
in front of you is a reading area with some chairs spread around an ornate rug. <br>
A woman is sitting in one of the chairs, intensely focused on her book.
`
centralRoomsObject['room1'].x1y2.interactableContent = {}

centralRoomsObject['room1'].x1y3 = {}
centralRoomsObject['room1'].x1y3.description = `
You're standing at the South end of a library. Along the West wall are two bookshelves. <br>
Parralel to the bookshelves, just out from the wall are two reading areas with ornate rugs.<br>
In the reading area closest to you, a woman is sitting in a chair, intensely focused on her book.<br>
Halfway along the East wall is a vintage-looking solid oak desk. No one is sitting at the desk.
`
centralRoomsObject['room1'].x1y3.interactableContent = {}

centralRoomsObject['room1'].x1y4 = {}
centralRoomsObject['room1'].x1y4.description = `
You're standing in the Southeast corner of the room. The oak desk is halfway along the East wall<br>
ahead of you. Across from you on the West side of the room are two bookshelves against the wall,<br>
each with its own reading area. In the Southern reading area, closest to you, a woman is sitting <br>
in a chair, intensely focused on her book.
`
centralRoomsObject['room1'].x1y4.interactableContent = {}

centralRoomsObject['room1'].x1y5 = {}
centralRoomsObject['room1'].x1y5.description = "test"
centralRoomsObject['room1'].x1y5.interactableContent = {}

centralRoomsObject['room1'].x2y1 = {}
centralRoomsObject['room1'].x2y1.description = "test"
centralRoomsObject['room1'].x2y1.interactableContent = {}

centralRoomsObject['room1'].x2y2 = {}
centralRoomsObject['room1'].x2y2.description = "test"
centralRoomsObject['room1'].x2y2.interactableContent = {}

centralRoomsObject['room1'].x2y3 = {}
centralRoomsObject['room1'].x2y3.description = "test"
centralRoomsObject['room1'].x2y3.interactableContent = {}

centralRoomsObject['room1'].x2y4 = {}
centralRoomsObject['room1'].x2y4.description = "test"
centralRoomsObject['room1'].x2y4.interactableContent = {}

centralRoomsObject['room1'].x2y5 = {}
centralRoomsObject['room1'].x2y5.description = "test"
centralRoomsObject['room1'].x2y5.interactableContent = {}

centralRoomsObject['room1'].x3y1 = {}
centralRoomsObject['room1'].x3y1.description = "test"
centralRoomsObject['room1'].x3y1.interactableContent = {}

centralRoomsObject['room1'].x3y2 = {}
centralRoomsObject['room1'].x3y2.description = "test"
centralRoomsObject['room1'].x3y2.interactableContent = {}

centralRoomsObject['room1'].x3y3 = {}
centralRoomsObject['room1'].x3y3.description = "test"
centralRoomsObject['room1'].x3y3.interactableContent = {}

centralRoomsObject['room1'].x3y4 = {}
centralRoomsObject['room1'].x3y4.description = "test"
centralRoomsObject['room1'].x3y4.interactableContent = {}

centralRoomsObject['room1'].x3y5 = {}
centralRoomsObject['room1'].x3y5.description = "test"
centralRoomsObject['room1'].x3y5.interactableContent = {}

centralRoomsObject['room1'].x4y1 = {}
centralRoomsObject['room1'].x4y1.description = "test"
centralRoomsObject['room1'].x4y1.interactableContent = {}

centralRoomsObject['room1'].x4y2 = {}
centralRoomsObject['room1'].x4y2.description = "test"
centralRoomsObject['room1'].x4y2.interactableContent = {}

centralRoomsObject['room1'].x4y3 = {}
centralRoomsObject['room1'].x4y3.description = "test"
centralRoomsObject['room1'].x4y3.interactableContent = {}

centralRoomsObject['room1'].x4y4 = {}
centralRoomsObject['room1'].x4y4.description = "test"
centralRoomsObject['room1'].x4y4.interactableContent = {}

centralRoomsObject['room1'].x4y5 = {}
centralRoomsObject['room1'].x4y5.description = "test"
centralRoomsObject['room1'].x4y5.interactableContent = {}

//---------------------------------------------------//

//room 2
centralRoomsObject['room2'] = {}

centralRoomsObject['room2'].x1y1 = {}
centralRoomsObject['room2'].x1y1.description = "test"
centralRoomsObject['room2'].x1y1.interactableContent = {}

centralRoomsObject['room2'].x1y2 = {}
centralRoomsObject['room2'].x1y2.description = "test"
centralRoomsObject['room2'].x1y2.interactableContent = {}

centralRoomsObject['room2'].x1y3 = {}
centralRoomsObject['room2'].x1y3.description = "test"
centralRoomsObject['room2'].x1y3.interactableContent = {}

centralRoomsObject['room2'].x1y4 = {}
centralRoomsObject['room2'].x1y4.description = "test"
centralRoomsObject['room2'].x1y4.interactableContent = {}

centralRoomsObject['room2'].x1y5 = {}
centralRoomsObject['room2'].x1y5.description = "test"
centralRoomsObject['room2'].x1y5.interactableContent = {}

centralRoomsObject['room2'].x1y6 = {}
centralRoomsObject['room2'].x1y6.description = "test"
centralRoomsObject['room2'].x1y6.interactableContent = {}

centralRoomsObject['room2'].x2y1 = {}
centralRoomsObject['room2'].x2y1.description = "test"
centralRoomsObject['room2'].x2y1.interactableContent = {}

centralRoomsObject['room2'].x2y2 = {}
centralRoomsObject['room2'].x2y2.description = "test"
centralRoomsObject['room2'].x2y2.interactableContent = {}

centralRoomsObject['room2'].x2y3 = {}
centralRoomsObject['room2'].x2y3.description = "test"
centralRoomsObject['room2'].x2y3.interactableContent = {}

centralRoomsObject['room2'].x2y4 = {}
centralRoomsObject['room2'].x2y4.description = "test"
centralRoomsObject['room2'].x2y4.interactableContent = {}

centralRoomsObject['room2'].x2y5 = {}
centralRoomsObject['room2'].x2y5.description = "test"
centralRoomsObject['room2'].x2y5.interactableContent = {}

centralRoomsObject['room2'].x2y6 = {}
centralRoomsObject['room2'].x2y6.description = "test"
centralRoomsObject['room2'].x2y6.interactableContent = {}

centralRoomsObject['room2'].x3y1 = {}
centralRoomsObject['room2'].x3y1.description = "test"
centralRoomsObject['room2'].x3y1.interactableContent = {}

centralRoomsObject['room2'].x3y2 = {}
centralRoomsObject['room2'].x3y2.description = "test"
centralRoomsObject['room2'].x3y2.interactableContent = {}

centralRoomsObject['room2'].x3y3 = {}
centralRoomsObject['room2'].x3y3.description = "test"
centralRoomsObject['room2'].x3y3.interactableContent = {}

centralRoomsObject['room2'].x3y4 = {}
centralRoomsObject['room2'].x3y4.description = "test"
centralRoomsObject['room2'].x3y4.interactableContent = {}

centralRoomsObject['room2'].x3y5 = {}
centralRoomsObject['room2'].x3y5.description = "test"
centralRoomsObject['room2'].x3y5.interactableContent = {}

centralRoomsObject['room2'].x3y6 = {}
centralRoomsObject['room2'].x3y6.description = "test"
centralRoomsObject['room2'].x3y6.interactableContent = {}

//------------------------------------------------------//

//room 3
centralRoomsObject['room3'] = {}

centralRoomsObject['room3'].x1y1 = {}
centralRoomsObject['room3'].x1y1.description = "test"
centralRoomsObject['room3'].x1y1.interactableContent = {}

centralRoomsObject['room3'].x1y2 = {}
centralRoomsObject['room3'].x1y2.description = "test"
centralRoomsObject['room3'].x1y2.interactableContent = {}

module.exports = {
    centralRoomsObject
}