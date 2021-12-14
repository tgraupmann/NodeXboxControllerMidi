// didn't work with Razer Wolverine - https://github.com/infusion/node-gamecontroller
var HID = require('node-hid');
let devices = HID.devices();
console.log('devices', devices.length);
for (let index = 0; index < devices.length; ++index) {
  let device = devices[index];
  if (device && device.product && device.product.toUpperCase().includes('XBOX')) {
    console.log(JSON.stringify(device, null, 2));

    let hid = new HID.HID(device.vendorId, device.productId);
    hid.on("data", function (data) {
      console.log(device.product, data);
    });
  }
}

var Gamecontroller = require('gamecontroller');
var dev = Gamecontroller.getDevices();
console.log('GameControllers:', dev);

return;

// ON LINUX
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
