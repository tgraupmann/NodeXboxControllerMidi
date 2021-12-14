# WSL2

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
