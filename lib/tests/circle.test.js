const circle = require('../circle.js');

describe('circle', () => {
        it("should generate green logo with white text", () => {
            const circle = new circle ('green','aht','white');
            expect(circle.render()).toEqual(
                `<svg width="300" height="200"
                version="1.1"        
                xmlns="http://www.w3.org/2000/svg">
                <circle cx="150" cy="100" r="100" fill="green" />
                <text x="150" y="125" font-size="70" text-anchor="middle" fill="white">aht</text>
                </svg>`
            );
        });
    });
;