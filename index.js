const nameCampus = require('./information.js');

const cowsay = require("cowsay");

console.log(cowsay.say({
    text: `${nameCampus.name}, ${nameCampus.campus}`,
  }));
