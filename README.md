[Notes](https://github.com/SpencerHill4/startup2024/blob/main/notes.md) for this class.

# Block Bonanza

## Specification Deliverable

### Elevator Pitch
Have you ever been bored or only had a 5 minute break in a busy schedule? Well, I'd like to introduce to you Block Bonanza! This grid based game will have you moving your square from space to space absorbing smaller cubes before they can become bigger than you. As the game progresses the faster and harder the game gets. Your goal is to see how long you can last, represented by how many points you can get per game. If a cube becomes too big for you to absorb, then you can no longer move to that space. The game ends when can no longer move. Want a competitive experience? Try to get a higher highscore than your friends and/or the top 10 high scores! See if you can become number one!
### Design
**Note: There is a typo in the images (Bananza instead of Bonanza).**
![Concept image of what users will see at the beginning of a game.](https://github.com/SpencerHill4/startup2024/blob/main/startUpSpec/BlockBonanzaStart.jpg)
**First move:**
![Player's first move](https://github.com/SpencerHill4/startup2024/blob/main/startUpSpec/BlockBonanzaMove1.jpg)
**Second move:**
![Player's second move](https://github.com/SpencerHill4/startup2024/blob/main/startUpSpec/BlockBonanzaMove2.jpg)
**Third move:**
![Player's third move](https://github.com/SpencerHill4/startup2024/blob/main/startUpSpec/BlockBonanzaMove3.jpg)
**Fourth move:**
![Player's fourth move](https://github.com/SpencerHill4/startup2024/blob/main/startUpSpec/BlockBonanzaMove4.jpg)
### Key Features
- Secure login over HTTPS
- Ability to start new game
- Ability to play game via user input
- Totals player's score in realtime
- Display top 10 highscores
- Highscores are persistently stored
### Technologies
How I plan to use the following technologies:
- **HTLM** - Uses correct HTML sturcture for application. Two HTML pages. One for login and one for playing the game.
- **CSS** - Styling the application so that it appears correctly on different screen as well as looks visually appealing. It will also be used to provide animations for the game.
- **React** - Provides login, playing the game, displaying top 10 highscores, and use of React for routing and components.
- **Service** - Backend service with endpoints for:
	- Login
	- Retrieving highscores
	- Updating highscores
- **DB/Login** - Store users and their highscores in database. Register and login users. Credential are securely stored in database. Can't play the game unless authenticated.
- **WebSocket** - The player's highscore and the top 10 highscores are updated in realtime.

## HTML Deliverable
For this deliverable I built out the structure of my application using HTML.
-   **HTMLE pages** - Four HTML pages: home page, play page (the game itself), score page (the highscores), about page
-   **Links** - Each page has all the links to each page at the top.
-   **Text** - Each highscore, the current player, the current score, and the about description are all is represented as text discription.
-   **Images** - The game uses an image placeholder to represent what the game will look like.
-   **DB/Login** - Input boxes for username and password. The highscores will be pulled from the database.
-   **WebSocket** - The highscores rpresent the realtime top 10 highscores for every user.
