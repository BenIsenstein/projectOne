const {Chest, Letter, Component, YesOrNoDoor} = require("./objectsModule")

let centralRoomsObject = {}

//room 0
centralRoomsObject['room0'] = {}


centralRoomsObject['room0'].x1y1 = {}
centralRoomsObject['room0'].x1y1.description = 
`
You are at the Southwest corner of the room.<br> 
In the middle of the room is a chest. At the North end of the room is a door.<br> 
`
centralRoomsObject['room0'].x1y1.interactableContent = {}


centralRoomsObject['room0'].x1y2 = {}
centralRoomsObject['room0'].x1y2.description = 
`
You are about halfway up the length of the room, on the West side. <br> 
To your East in the middle of the room is a chest. At the north end of the room is a door.<br> 
`
centralRoomsObject['room0'].x1y2.interactableContent = {}


centralRoomsObject['room0'].x1y3 = {}
centralRoomsObject['room0'].x1y3.description = 
`
You are at the Northwest corner of the room. <br> 
In the middle of the room is a chest. Just East of you is a door.<br> 
`
centralRoomsObject['room0'].x1y3.interactableContent = {}


centralRoomsObject['room0'].x2y1 = {}
centralRoomsObject['room0'].x2y1.description = 
`
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
centralRoomsObject['room0'].x2y2.description = 
`
You are within arms reach of the chest. Just ahead of you,<br> 
to the North, is a door.
`
centralRoomsObject['room0'].x2y2.interactableContent = {
    chest: new Chest('chest', {
        letter: new Letter(
        `
        - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -<br>
        "Much has been kept from you. The journey ahead will be arduous.<br>
        No matter the hardship, remember this: <em>You have been chosen.</em>" <br>
        - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -
        `, 
        'letter1'
        ),
        backpack: {
            name: 'backpack',
            description: 'Probably useful.',
        },
        jacket: {
            name: 'jacket',
            description: 'Stay cozy out there!'
        },
        'broken gears': new Component(
            5, 
            'broken gears', 
            'A rusted and shoddy-looking jumble of old gears. Probably useless.'
        )}
    )
}


centralRoomsObject['room0'].x2y3 = {}
centralRoomsObject['room0'].x2y3.description = 
`
You are within arms reach of the door. Just South of you, <br> 
in the middle of the room, is the chest. <br> 
<br> 
The door beckons you to enter...
`
centralRoomsObject['room0'].x2y3.interactableContent = {
    door: new YesOrNoDoor(
    'http://localhost:3000/play/room1/x3y1',
    `
    "You'll find that life often requires some button-pushing to get your way...<br>
    and grab supplies for your journey!"
    `,
    (inventory) => ['jacket', 'letter', 'broken gears', ].every(item => inventory[item])
    )
}


centralRoomsObject['room0'].x3y1 = {}
centralRoomsObject['room0'].x3y1.description = 
`
You are at the Southeast corner of the room. In the middle of the <br> 
room is a chest. At the North end of the room is a door.
`
centralRoomsObject['room0'].x3y1.interactableContent = {}


centralRoomsObject['room0'].x3y2 = {}
centralRoomsObject['room0'].x3y2.description =  
`
You are about halfway up the length of the room, on the East side. <br> 
Within arms reach set into the wall, is a black panel about the size <br>
of a sheet of paper. It appears depressible. To your West in the middle<br>
 of the room is a chest. At the North end of the room is a door.<br>
 <br>
 Press the panel?  [yes]  [no]
`
centralRoomsObject['room0'].x3y2.interactableContent = {
    interactKey: false,
    changeInteractKey: () => this.interactKey = !this.interactKey,
    interactFunction: () => {
        let partnerDoor = centralRoomsObject['room0'].x2y3.interactableContent.door
        partnerDoor.isUnlocked = this.interactKey
    },
    interactMessage: '<p style="font-weight: 700; color: red;">Pressed the panel!</p>',
    panel: { 
        name: "panel",
        text: 
        `
        A black panel about the size of a sheet of paper. It appears depressible.<br>
        <br>
        Press the panel?  [yes]  [no]
        `  
    }
}


centralRoomsObject['room0'].x3y3 = {}
centralRoomsObject['room0'].x3y3.description = 
`
You are at the Northeast corner of the room. <br> 
In the middle of the room is a chest. Just West of you is a door.
`
centralRoomsObject['room0'].x3y3.interactableContent = {}

//----------------------------------------------------//

//room 1
centralRoomsObject['room1'] = {}

centralRoomsObject['room1'].x1y1 = {}
centralRoomsObject['room1'].x1y1.description = 
`
You're standing in the Southwest corner of the room. Just ahead of you, <br>
to the North, is a bookshelf. To the East of that, there is a reading area <br> 
with some chairs spread around an ornate rug. A woman is sitting in one of <br>
the chairs, intensely focused on her book.
`
centralRoomsObject['room1'].x1y1.interactableContent = {}



centralRoomsObject['room1'].x1y2 = {}
centralRoomsObject['room1'].x1y2.description = 
`
You're on the west side of the library, just north of the South wall. To your <br>
left is a bookshelf containing nothing interesting. Directly East of you, there <br> 
is a reading area with some chairs spread around an ornate rug. A woman is sitting <br>
in one of the chairs, intensely focused on her book.`
centralRoomsObject['room1'].x1y2.interactableContent = {}



centralRoomsObject['room1'].x1y3 = {}
centralRoomsObject['room1'].x1y3.description = 
`
You are halfway between the South and North walls of the library. A few paces <br>
North of you, there is a bookshelf against the wall. Just East of the bookshelf <br>
is a reading area with some chairs spread around an ornate rug. A man sits there <br>
in one of the chairs, peacefully petting a cat in his lap. South of you are an <br>
identical bookshelf and reading area, where a woman sits reading intensely. Accross <br>
from you, against the East wall, is the oak desk. At the North end of the library, you <br>
can now make out a hulking figure standing in front of the door. 
`
centralRoomsObject['room1'].x1y3.interactableContent = {}



centralRoomsObject['room1'].x1y4 = {}
centralRoomsObject['room1'].x1y4.description = 
`
You're on the West side of the library, just South of the North wall. To your <br>
left is a bookshelf containing what appears to be a spool of wire. It most<br>
likely does nothing. Directly East of you, there is a reading area with some <br> 
chairs spread around an ornate rug. A man sits there in one of the chairs, <br>
peacefully petting a cat in his lap.
`
centralRoomsObject['room1'].x1y4.interactableContent = {
    'spool of wire': new Component(
        4, 
        'spool of wire', 
        'It appears to be a spool of wire. It most likely does nothing.'
    )
}



centralRoomsObject['room1'].x1y5 = {}
centralRoomsObject['room1'].x1y5.description = 
`
You are in the Northwest corner of the room. A few paces South of you is<br>
the North bookshelf. As you gaze back to the South end of the room,<br>
you can see the true length of the library corridor. The oak desk is <br>
halfway down the corridor, against the East wall. Along the North wall,<br>
a short walk towards the East, stands a terrifyingly large man.
`
centralRoomsObject['room1'].x1y5.interactableContent = {}



centralRoomsObject['room1'].x2y1 = {}
centralRoomsObject['room1'].x2y1.description = 
`
You are at the South end of the room, just West of where you started. Directly<br>
in front of you is a reading area with some chairs spread around an ornate rug. <br>
A woman is sitting in one of the chairs, intensely focused on her book.
`
centralRoomsObject['room1'].x2y1.interactableContent = {}



centralRoomsObject['room1'].x2y2 = {}
centralRoomsObject['room1'].x2y2.description = 
`
You're in the middle of a reading area, standing on an ornate rug. A bookshelf <br>
is just West of you, against the wall. A woman is sitting in a chair a few feet <br>
from you. She looks up from her book and pierces you with a searching stare. <br>
<br>
"So you've come," she says. "Well, at least let me do you a small service. You <br>
can't quite see him from here, but there's a big tough security guard at the <br>
end of the corridor who doesn't want you moving on. His name's Grundag. I happen <br>
to know he's a softie for cinnabuns. Since I've been held by oath for as <br>
long as I can remember to aid you in your journey, I've made a cinnabun just <br>
how Grundag likes it - except he won't know that it's full of a strong sleeping <br>
potion."<br>
<br>
She pulls the cinnabun from her bag.<br>
<br>
"Hand this to him when you reach the North end of the library, and <br>
you'll be able to practically waltz past him. Go on, take it."
`
centralRoomsObject['room1'].x2y2.interactableContent = {
    cinnabun: {
        description: 
        `
        I've made a cinnabun just how Grundag likes it - except he<br>
        won't know that it's full of a strong sleeping potion...
        `,
        text: 
        `
        I've made a cinnabun just how Grundag likes it - except he<br>
        won't know that it's full of a strong sleeping potion...
        `
    }
}



centralRoomsObject['room1'].x2y3 = {}
centralRoomsObject['room1'].x2y3.description = 
`
You are halfway between the South and North walls of the library. You are <br>
a handful of paces out from the West wall, sandwiched between the South <br>
and North reading areas. At the South reading area, a man sits in one of <br>
the chairs, peacefully petting a cat in his lap. A few paces West of him <br>
is a bookshelf against the wall. South of you are an identical bookshelf and<br>
reading area, where a woman sits reading intensely. Across from you, against <br>
the East wall, is the oak desk. At the North end of the library, you <br>
can now make out a hulking figure standing in front of the door. 
`
centralRoomsObject['room1'].x2y3.interactableContent = {}

centralRoomsObject['room1'].x2y4 = {}
centralRoomsObject['room1'].x2y4.description = 
`
You are standing in the North reading area. An elderly man is sitting a few feet<br>
from you, a peaceful look on his face and a cat in his lap. He looks up<br>
at you blissfully and says, <br>
<br>
"What a lovely day, isn't it? I s'pose we can't sit on our laurels all day though.<br>
Well, actually, maybe I can, but YOU CAN'T."<br>
<br>
He lets out a wild cackle, and his eyes look like they might pop out. 
The cat doesn't flinch.<br>
<br>
"In case you haven't already been, you'll want to stop by that bookshelf right<br>
over there." He points at the West wall just behind you. "Oh yes, you'll want<br>
to check there indeed..."
`
centralRoomsObject['room1'].x2y4.interactableContent = {}



centralRoomsObject['room1'].x2y5 = {}
centralRoomsObject['room1'].x2y5.description = 
`
You are at the North end, against the West wall. A few paces South<br>
of you is the North reading area. A man sits there in one of the chairs,<br>
petting a cat in his lap. As you gaze back to the South end of the room,<br>
you can see the true length of the library corridor. The oak desk is <br>
halfway down the corridor, against the East wall. Along the North wall,<br>
a few paces East, stands a terrifyingly large man.
`
centralRoomsObject['room1'].x2y5.interactableContent = {}



centralRoomsObject['room1'].x3y1 = {}
centralRoomsObject['room1'].x3y1.description = 
`
You're standing at the South end of a library. Along the West wall are two bookshelves. <br>
Parralel to the bookshelves, just out from the wall are two reading areas with ornate rugs.<br>
In the reading area closest to you, a woman is sitting in a chair, intensely focused on her book.<br>
Halfway along the East wall is a vintage-looking solid oak desk. No one is sitting at the desk.
`
centralRoomsObject['room1'].x3y1.interactableContent = {}



centralRoomsObject['room1'].x3y2 = {}
centralRoomsObject['room1'].x3y2.description = 
`
You are a handful of paces North of the South wall where you started. Just to <br>
the West of you is a reading area with some chairs spread around an ornate rug. <br>
A woman is sitting in one of the chairs, intensely focused on her book. The oak <br>
desk is halfway along the East wall ahead of you. 
`

centralRoomsObject['room1'].x3y2.interactableContent = {}



centralRoomsObject['room1'].x3y3 = {}
centralRoomsObject['room1'].x3y3.description = 
`
You are in exactly the middle of the room. To the West of you are the North and <br>
South reading areas. A woman sits at the Southern one, and a man with a cat in his <br>
lap at the Northern one. East of you is the oak desk against the wall. At the North <br>
end of the library, you can now make out a hulking figure standing in front of the door.
`
centralRoomsObject['room1'].x3y3.interactableContent = {}



centralRoomsObject['room1'].x3y4 = {}
centralRoomsObject['room1'].x3y4.description = 
`
The North reading area is just West of you. Equidistant to the other side of you is<br>
the Eastern wall. In the distance behind you are the South reading area and the door<br>
through which you entered. Directly ahead of you, along the North wall, stands a <br>
terrifyingly large man.
`
centralRoomsObject['room1'].x3y4.interactableContent = {}



centralRoomsObject['room1'].x3y5 = {}
centralRoomsObject['room1'].x3y5.displaySpecialDescription = false
centralRoomsObject['room1'].x3y5.specialDescription = 
`
Grundag is intensely focused in the presence of the cinnabun you're carrying.<br>
<br>
Give cinnabun to Grundag? [yes] [no]
`
centralRoomsObject['room1'].x3y5.description = 
`
You are standing before the most gruesome-looking, ogre of a human being you have <br>
ever encountered. His breath reaches your nostrils and your eyes begin to water. <br>
It's an absolute mystery how he fell into a career as a security guard. He bellows:<br>
<br>
"Hah, I <em>KNEW</em> you'd come eventually! Yep, I did. That's right, never let my guard<br>
down. Who am I, you ask? The name's Grundag. G-R-U-N-D-A-G <em>GRUNDAG!!</em> And I'm not<br>
about to let <em>YOU,</em> or <em>ANYONE ELSE</em> get <em>BEYOND. THIS. <b>DOOR!!"</b></em><br>
<br>
It's surprising your bladder hasn't emptied itself by now. You best ought to <br>
scurry back a few paces and come up with a plan.
`
centralRoomsObject['room1'].x3y5.interactableContent = {
    interactKey: false,
    changeInteractKey: () => this.interactKey = !this.interactKey,
    interactFunction: () => {
        let partnerDoor = centralRoomsObject['room1'].x3y5.interactableContent.door
        partnerDoor.isUnlocked = this.interactKey
    },
    interactMessage: `
    <p style="font-weight: 700; color: red;">
        Gave cinnabun to Grundag!   
    </p>
    <br>
    <br>
    "<em>Gimme that!</em> Heh, chump," he sneers as he snatches it out of your hand.<br>
    <br>
    It goes down his gullet in one bite. "Don't think for a single minute that I'm le-"<br>
    <br>
    Grundag collapses at your feet. Bless your elders that got you this far.<br>
    <br>
    Just behind where Grundag was standing, a lunchbox is tucked against the wall<br>
    in front of the door. 
    `,
    door: new YesOrNoDoor(
        'http://localhost:3000/play/room2/x2y1',
        `
        <p style="font-weight: 700;">Don't think you'll make it past Grundag so easily.</p>
        `
    ),
    lunchbox: new Chest(
        'lunchbox', {
            transmitter: new Component(
                3, 
                'transmitter', 
                'What appears to be a functioning transmitter. Probably maybe useless.'
            )
        }
    )
}



centralRoomsObject['room1'].x4y1 = {}
centralRoomsObject['room1'].x4y1.description = 
`
You're standing in the Southeast corner of the room. The oak desk is halfway along the East wall<br>
ahead of you. Across from you on the West side of the room are two bookshelves against the wall,<br>
each with its own reading area. In the Southern reading area, closest to you, a woman is sitting <br>
in a chair, intensely focused on her book.
`
centralRoomsObject['room1'].x4y1.interactableContent = {}



centralRoomsObject['room1'].x4y2 = {}
centralRoomsObject['room1'].x4y2.description = 
`
You are a handfull of paces North of the South wall, with the East wall directly at your side. <br>
The oak desk is a handfull of paces ahead of you. Across from you on the West side of the room <br>
are two bookshelves against the wall, each with its own reading area. In the Southern reading <br>
area, closest to you, a woman is sitting in a chair, intensely focused on her book.
`
centralRoomsObject['room1'].x4y2.interactableContent = {}



centralRoomsObject['room1'].x4y3 = {}
centralRoomsObject['room1'].x4y3.description = 

`
You are within arms reach of the oak desk against the East wall, halfway between the South and <br>
North ends of the library. The desk has one big drawer across its front face. Across from you, <br>
on the West end of the room, are the North and South reading areas. A woman sits at the Southern <br>
one, and a man with a cat in his lap at the Northern one. At the North end of the library, you <br>
can now make out a hulking figure standing in front of the door. 
`
centralRoomsObject['room1'].x4y3.interactableContent = {
    desk: new Chest(
        'desk', {
        rope: {
            name: 'rope',
            description: "A sizeable coil of rope. Probably useful."
        },
        letter: new Letter(
        `<i>
        I measure every Grief I meet<br>
        With narrow, probing, eyes –<br>
        I wonder if It weighs like Mine -<br>
        Or has an Easier size.<br><br>

        I wonder if They bore it long -<br>
        Or did it just begin –<br>
        I could not tell the Date of Mine -<br>
        It feels so old a pain –<br><br>

        I wonder if it hurts to live -<br>
        And if They have to try –<br>
        And whether – could They chose between –<br>
        It would not be – to die –<br><br>

        I note that Some – gone patient long -<br> 
        At length, renew their smile -<br>
        An imitation of a Light<br>
        That has so little Oil –<br><br>

        I wonder if when Years have piled -<br>
        Some Thousands – on the Harm -<br>
        That hurt them early – such a lapse<br>
        Could give them any Balm – <br><br>

        Or would they go on aching still<br>
        Through Centuries of Nerve –<br>
        Enlightened to a larger Pain -<br>
        In Contrast with the Love – <br><br>

        The Grieved – are many – I am told -<br> 
        There is the various Cause –<br>
        Death – is but one – and comes but once -<br>
        And only nails the eyes – <br><br>

        There's Grief of Want – and grief of Cold – <br>
        A sort they call "Despair" –<br>
        There's Banishment from native Eyes -<br>
        In sight of Native Air – <br><br>

        And though I may not guess the kind -<br>
        Correctly – yet to me<br>
        A piercing Comfort it afford<br>
        In passing Calvary – <br><br>

        To note the fashions – of the Cross -<br>
        And how they're mostly worn -<br>
        Still fascinated to presume<br>
        That Some – are like my own -<br><br></i>
        
        Source: https://www.familyfriendpoems.com/poem/i-measure-every-grief-i-meet-by-emily-dickinson<br>
        `, 
        'letter2'
        )}
    )
}



centralRoomsObject['room1'].x4y4 = {}
centralRoomsObject['room1'].x4y4.description = 
`
You are a handfull of paces South of the North wall, with the East wall directly at your side. <br>
The oak desk is a handfull of paces behind you. Across from you on the West side of the room <br>
are two bookshelves against the wall, each with its own reading area. In the Northern reading <br>
area, closest to you, a man sits in one of the chairs, peacefully petting a cat in his lap. From<br>
here you can see the hulking figure clearly. 
`
centralRoomsObject['room1'].x4y4.interactableContent = {}



centralRoomsObject['room1'].x4y5 = {}
centralRoomsObject['room1'].x4y5.description = 
`
You're standing in the Northeast corner of the room. The oak desk is halfway along the East wall<br>
behind you. Across from you on the West side of the room are two bookshelves against the wall,<br>
each with its own reading area. In the Northern reading area, closest to you, a man sits in one<br>
of the chairs, peacefully petting a cat in his lap. Along the North wall, a short walk towards<br>
the West, stands a terrifyingly large man.
`
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
centralRoomsObject['room2'].x2y1.description = `
-----------------<br>
!!SUCCESS!!<br>
------------------
`
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