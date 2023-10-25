const square = require('../square.js');

describe('square', () => {
        it("should generate green logo with white text", () => {
            const square = new square ('green','aht','white');
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
;