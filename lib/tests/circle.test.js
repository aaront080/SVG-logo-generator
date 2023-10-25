const circle = require('../circle');

describe('circle', () => {
    describe('render', () => {
        it("should apply user inputs to the generated logo", () => {
            const circle = new circle ({
                shape: 'circle',
                logoColor: 'green',
                text: 'aht',
                textColor: 'white'
            });
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
});