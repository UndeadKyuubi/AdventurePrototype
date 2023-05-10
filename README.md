A simple adventure game by {who?} based on a simple adventure game engine by [Adam Smith](https://github.com/rndmcnlly).

Code requirements:
- **4+ scenes based on `AdventureScene`**: My project includes 4 scenes derived from AdventureScene, these being demo1, demo2, demo3, and demo4.
- **2+ scenes *not* based on `AdventureScene`**: My project includes an intro and outro scene with some simple text and transitions at the start and end of my game.
- **2+ methods or other enhancement added to the adventure game engine to simplify my scenes**:
    - Enhancement 1: Made a pulse(obj) function that adds a pulsing animation to any object passed in, I used it to make grabbable items easier to notice.
    - Enhancement 2: Made a desc(obj, msg) function that takes any object and a message, then makes it where the passed object provides the given msg when hovered over.
    - EXTRA Enhancement 3: Made a rota(obj) function that rotates any object passed by 90 degrees when clicked by the user, I used this for my statue puzzle.

Experience requirements:
- **4+ locations in the game world**: My game world includes the courtyard, the cemetery of kings, the hall of kings, and the tower entrance as its 4 areas.
- **2+ interactive objects in most scenes**: 
- Courtyard: User can pick up the first key fragment and use arrows on sides of screens to move rooms
- Cemetery: User can pick up the shovel and then with said shovel, search the graves for the correct one to dig up, which then lets them grab the 2nd key fragment
- Statue Hall: User can interact with all 8 statues to rotate them to the correct position to spawn the 3rd key fragment which they can then pick up
- Entrance: The tower entrance will spawn the completed key for players to pick up when they obtain all 3 fragments, and with the key the player can interact with the door to unlock it and go to outro
- **Many objects have `pointerover` messages**: 
- 1. The graves in the cemetery have hover messages showcasing different dates, the player must hover over them to see the dates and find the right grave
- 2. The statues in the hall of kings have hover messages telling the player that the statues seem like they can be rotated
- **Many objects have `pointerdown` effects**: 
- 1. The statues in the hall can all be clicked on to rotate them 90 degrees, which players will have to utilize to finish the statue puzzle
- 2. The correct grave marked 12/25 in the cemetery can be clicked on with the shovel in your inventory to dig up the 2nd key fragment
- **Some objects are themselves animated**: unsatisfied (describe two examples)
- 1. The shovel has a pulse effect to show it can be picked up
- 2. All of the key fragments and the restored key at the end all have the pulse effect to make identifying them on the screen easier

Asset sources:
- (For each image/audio/video asset used, describe how it was created. What tool did you use to create it? Was it based on another work? If so, how did you change it, and where can we learn more about the original work for comparison? Use [Markdown link syntax](https://docs.github.com/en/get-started/writing-on-github/getting-started-with-writing-and-formatting-on-github/basic-writing-and-formatting-syntax#links).)
- All of the art I used in my game was created by me using the online pixel editor pixilart.com

Code sources:
- `adventure.js` and `index.html` were created for this project [Adam Smith](https://github.com/rndmcnlly) and edited by me.
- `game.js` was sketched by [Adam Smith](https://github.com/rndmcnlly) and rewritten by me.
