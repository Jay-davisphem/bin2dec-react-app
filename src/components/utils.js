module.exports = {
  bin2dec(bin){
    return parseInt(bin.toString(), 2);
  },
  dec2bin(dec){
    return parseInt(dec).toString(2);
  },
};
