# Windows

* Add the [node-hid](https://github.com/node-hid/node-hid#prerequisites) package

```
npm install node-hid
```

* Add the [xbox-controller-node](https://github.com/mapaiva/xbox-controller-node) package  [This package references an obsolete version of node-hid](https://github.com/node-hid/node-hid/issues/454)

```
npm install xbox-controller-node
```

## WSL2

* Note: Unfortunately WSL2 lacks MIDI support...

* Add asoundlib.h

```
sudo apt-get install libasound2-dev
```

* Add the [easymidi](https://www.youtube.com/watch?v=vW2Lve_hMzg) package

```
npm i easymidi
```

* [WSL2 lacks MIDI support](https://github.com/microsoft/WSL/issues/237)

```
node app.js 
ALSA lib seq_hw.c:466:(snd_seq_hw_open) open /dev/snd/seq failed: No such file or directory

MidiOutAlsa::initialize: error creating ALSA sequencer client object.
```
