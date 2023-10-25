const circle = require('./circle.js');
const square = require('./square.js');
const triangle = require('./triangle.js');

function createShape(response) {
    if (response.shape === 'circle') {
        let logo = new circle (response.logoColor, response.text, response.textColor)
        return logo.render()
    }
    if (response.shape === 'square') {
        let logo = new square (response.logoColor, response.text, response.textColor)
        return logo.render()
    }
    if (response.shape === 'triangle') {
        let logo = new triangle (response.logoColor, response.text, response.textColor)
        return logo.render()
    }
}

module.exports = createShape;