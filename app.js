let easymidi = require('easymidi');
let output = new easymidi.Output('Mindy', true);

setTimeout(function () {
  output.send('noteon', {
    note: 12 * 5,
    velocity: 127,
    channel: 1,
  });
}, 100);

setTimeout(function () {
  output.send('noteoff', {
    note: 12 * 5,
    velocity: 127,
    channel: 1,
  });
}, 3000);
