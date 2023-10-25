const square = require('../square');

describe('square', () => {
    describe('render', () => {
        it("should apply user inputs to the generated logo", () => {
            const square = new square ({
                shape: 'square',
                logoColor: 'green',
                text: 'aht',
                textColor: 'white'
            });
            expect(square.render()).toEqual(
                `<svg width="300" height="200"
                version="1.1"        
                xmlns="http://www.w3.org/2000/svg">
                <rect width="200" height="200" fill="green"/>
                <text x="100" y="125" font-size="70" text-anchor="middle" fill="white">aht</text>
                </svg>`
            );
        });
    });
});