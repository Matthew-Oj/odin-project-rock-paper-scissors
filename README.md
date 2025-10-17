# Rock Paper Scissors

## Introduction
This is a simple **Rock Paper Scissors game** built with HTML, CSS, and JavaScript.  
The game is played by clicking on images for your choice. The computer randomly selects its choice, and the score and round are updated dynamically.  

No GUI buttons yet; the game runs entirely via the webpage interface.

---

## Features
- Click on Rock, Paper, or Scissors to play.
- The computer randomly selects its choice.
- Displays the current round number.
- Keeps track of **human and computer scores**.
- Visual highlight effect when the computer image changes.

---

## Project Structure
```
index.html       → main HTML page
styles.css       → CSS styling
index.js         → JavaScript logic
images/          → contains rock, paper, scissors images
```

---

## How to Play
1. Open `index.html` in a browser.
2. Click on one of the three images (Rock, Paper, or Scissors).
3. The computer will randomly choose, the round will update, and scores are displayed.
4. Play up to 5 rounds (TODO: add end-game button).

---

## Key Code Concepts
- **Event Listeners:** Click on user images triggers game logic.
- **Random Choice:** `Math.random()` selects the computer’s choice.
- **DOM Updates:** Round number and scores update dynamically via `innerHTML`.
- **CSS Effects:** Hover effects for user selection; brief border flash for computer choice.

---

## Future Improvements
- Add a button to limit the game to 5 rounds.
- Add a message declaring the overall winner at the end.
- Add a full GUI with start/reset buttons and animations.