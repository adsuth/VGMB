# VGMB
Video Game Music Blitz: The Game: The Project

## IMPORTANT NOTE 
**update 09/06/23:** I've implemented a safety net of sorts. Broken links should now be skipped automatically.

Due to the way tracks are played (in an invisible YouTube iframe), tracks are bound to break from time to time; be it from copyright strikes or videos being deleted.

Recently GilvaSunner, one of the larger channels that uploaded VGM soundtracks, [committed to deleting his channel](https://twitter.com/GilvaSunner/status/1488555303918616581) in lieu of Nintendo cracking down on unofficial uploads of music from their games. Many of the tracks in our database used their uploads and its difficult to say how many or which links will be down.

This project is currently retired and so ammendments to the database are very unlikely. Should a track be broken, all you can really do is skip, either by typing "/skip" or clicking the skip button. To tell if a track isn't working, just check the progress bar in the top left of the screen. If the bar isn't moving, the track has failed to load.

I'm considering remaking VGMB in the future, using an automated system of adding tracks instead of doing it manually like I had before. This should make the process of adding new soundtracks - and replacing broken links - a lot easier.

## What is VGMB?
VGMB is a single-player "guess the song" featuring 2000+ tracks from all of your favorite games; from The Last of Us to Mario and everything inbetween. The project was heavily inspired by [VGM Quiz (Video Game Music Quiz)](https://www.vgm-quiz.com/). While VGMQ is great, there is a lot of necessary downtime between tracks owing to the fact that the game takes place in a global lobby. VGMB mitigates this by being singleplayer.

## How to Play
To begin, first click **Standard Mode**.
Standard Mode is broken down into "rounds". Each round, a new song will play. Your job is to guess the **game the song is from**. If your guess is in the list of accepted guesses, you'll gain points!

How many points you gain is determined on your score. Guess it quick and you'll get a *supersonic* and earn more points - guess even faster to gain the elusive *ultrasonic*.

You'll also rack up a combo for guessing consecutive song correctly.

### Abilities
#### Shield
Protects you from losing a combo. Use this if you're unsure of the answer. If you do end up guessing correctly in the same round, you'll get your shield back! Otherwise, it'll regenerate after 2 rounds.

#### Hint
Gives you a few of the letters in the game's name. This should nudge you in the right direction. If you still can't get it, we'll refund the hint so you can use it again. Otherwise, this power regenerates after 2 rounds.

### Risk
After hitting a combo of 10x or higher, you'll be offered a bit of a gamble in the next round. Guess correctly to gain even more points... Guess wrong, and you'll lose points

## Commands
I've added in QoL commands for debugging and general use. Below is a list:

To use them, enter a / in the text box followed by the Command.

For example, typing:
`/cheat` 
and hitting enter will use the cheat command
**this one is particularly useful for trying out the site** 

| Command | Use                                       | Note                   |
| ------- | ----------------------------------------- | ---------------------- |
| skip    | Skips to the next song                    | replaces skip button   |
| pass    | Skips to the next song                    | replaces skip button   |
| next    | Skips to the next song                    | replaces skip button   |
|         |                                           |                        |
| mute    | toggles mute for the current song         | DEBUG COMMAND          |
| unmute  | toggles mute for the current song         | DEBUG COMMAND          |
|         |                                           |                        |
| shield  | Uses the SHIELD ability                   | replaces SHIELD button |
| def     | Uses the SHIELD ability                   | replaces SHIELD button |
|         |                                           |                        |
| hint    | Uses the HINT ability                     | replaces HINT button   |
|         |                                           |                        |
| cheat   | Automatically plugs in the correct answer | DEBUG COMMAND          |
| debug   | Automatically plugs in the correct answer | DEBUG COMMAND          |
|         |                                           |                        |
| risk    | Uses the RISK ability                     | replaces RISK button   |
|         |                                           |                        |
| afk     | Mutes current track, and keeps combos     | replaces AFK button    |
| away    | Mutes current track, and keeps combos     | replaces AFK button    |
| back    | Mutes current track, and keeps combos     | replaces AFK button    |
|         |                                           |                        |
| clear   | Clears the text area                      |                        |
|         |                                           |                        |
| wrong   | Prevents wrong answer popups              |                        |
| ans   | Prevents wrong answer popups              |                        |
| twa   | Prevents wrong answer popups              |                        |

---
## VGMB - Relaxed Mode
Relaxed Mode is a more chill experience than Standard Mode. No points, no timers, just music - and some random facts after every song courtesy of Facts API from [API Ninjas](https://api-ninjas.com/api/facts).
