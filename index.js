'use strict';
const sharp = require('sharp');

const defaultOptions = {
  quality: 90,
  lossless: false,
  speed: 5,
  chromaSubsampling: '4:2:0'
}

module.exports = options => async buffer => {
  return await sharp(buffer)
    .avif(Object.assign(defaultOptions, options))
    .toBuffer()
    .catch(error => { throw error });
};
