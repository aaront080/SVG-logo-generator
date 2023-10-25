const triangle = require('../triangle.js');

describe('triangle', () => {
    
        it("should generate green logo with white text", () => {
            const triangle = new triangle ('green','aht','white');
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