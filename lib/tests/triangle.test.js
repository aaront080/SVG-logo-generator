const triangle = require('../triangle');

describe('triangle', () => {
    describe('render', () => {
        it("should apply user inputs to the generated logo", () => {
            const triangle = new triangle ({
                shape: 'square',
                logoColor: 'green',
                text: 'aht',
                textColor: 'white'
            });
            expect(triangle.render()).toEqual(
                `<svg width="300" height="200"
                version="1.1"         
                xmlns="http://www.w3.org/2000/svg">
                <polygon points="100, 15 200, 200 0, 200" fill="green"/>
                <text x="100" y="185" font-size="70" text-anchor="middle" fill="white">aht</text>
                </svg>`
            );
        });
    });
});