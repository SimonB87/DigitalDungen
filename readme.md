# Digital dungeon

A JavaScript dungeon crawler

### Info:

- Game for testing OOP application in JavaScript.
- Play the current version [LIVE CLICK HERE!](http://simonburyan.cz/digitaldungeon/)

### Description:


- [x] Hero - a player venturing through the dungeon.

- [x] Dungeon - map of 4 x 4 tiles.

- [ ] Danger - the player can run into monsters. Monsters are hidden and reveal only, if hero enters their room.

- [X] Monsters - beasts that fight with the hero. In a room there can be ususally one monster.

- [X] Discover dungeon - the hero passes the map. He can proceed in four directions (East, South, West, North).

- [X] Target - hero has to go to the end of the game area.

- [ ] Hero hit points - hero has 3 God Blessings, which can regenerate him 3 times, if his hit points went to 0. Hero can use points for minor healing.

- [ ] Action - round starts by appearing on the given square on the square. If a monster appears in front of hero, he can fight he monster or flight.

- [ ] Fighting the monster - Monster attacks first. Hero can fight back or heal himself. The battle ends with monster or hero defeated.

- [ ] Treasures - hero can loot momnster treasures, which consist of points, armor and weapons.

### Link:

[Simon Buryan](http://www.simonburyan.cz)
Front End Web Developer - author of the game

### Current Status:

- The hero can go around the map, but all the doors can be used to navigate.
- Next step: Only the doors that are in the room as the hero is, could be used for moving the hero to another room.

### Dev notes

- build Less `lessc style/less/styles.less style/css/styles.css` or `gulp less`