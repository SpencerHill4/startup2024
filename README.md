[Notes](https://github.com/SpencerHill4/startup2024/blob/main/notes.md) for this class.

# Block Bonanza

## Specification Deliverable

### Elevator Pitch
### Design
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
