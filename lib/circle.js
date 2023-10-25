const shapes = require('./shapes.js')

class circle extends shape {
    constructor(logoColor, text, textColor) {
        super(logoColor, text, textColor);
    };
    render() {
        return ``
    };
};

module.exports = circle;