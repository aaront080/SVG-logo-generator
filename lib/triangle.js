const shapes = require('./shapes.js')

//triangle class that extends shapes class and renders the SVG logo code

class triangle extends shapes {
    constructor(logoColor, text, textColor) {
        super(logoColor, text, textColor);
    };
    render() {
        return `
        <svg width="300" height="200"
        version="1.1"         
        xmlns="http://www.w3.org/2000/svg">
        <polygon points="100, 15 200, 200 0, 200" fill="${this.logoColor}"/>
        <text x="100" y="185" font-size="70" text-anchor="middle" fill="${this.textColor}">${this.text}</text>
        </svg>`
    };
};

module.exports = triangle;
