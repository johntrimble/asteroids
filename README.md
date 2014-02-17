# Asteroids
This is a simple asteroids-esque game for experimenting with using the Entity Component System in ClojureScript. This is still a work in progress.

## Demo
You can see the game in action at [http://johntrimble.github.io/asteroids/](http://johntrimble.github.io/asteroids/).
Currently, this works best in Chrome, but also supports Safari and Firefox. I'm still ironing out some issues with IE.

## Requirements
- bower (>=1.2.4)
- leiningen (>=2.3.2)

## Build
From the project root, run the following commands:

```
bower install
lein cljsbuild once dev
```

## Run
From the project root, run the following commands:

```
lein ring server-headless
```

You can now use your browser to access the application at [http://localhost:3000](http://localhost:3000). The game performs best in Chrome.


## Controls
Keys:

  - *left arrow* rotate left
  - *right arrow* rotate right
  - *up arrow* fire thrusters
  - *spacebar* fire weapons
