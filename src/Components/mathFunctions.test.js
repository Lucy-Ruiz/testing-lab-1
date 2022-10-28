import {add, subtract, multiply, divide} from './mathFunctions.js'


describe('math module', () =>{

    describe('sum function', () => {

        it('add 2 + 2 to equal 4', () => {
            let value = add(2,2);
            expect(value).toBe(4);
        });

        it('add 2 + 2 to be greater than 3', () => {
            let value = add(2,2);
            expect(value).toBeGreaterThan(3);
        })
        
    })
    
    describe('subtraction function', () => {
        
        it('subtracts 4 from 10 and gets 6', () => {
            let value = subtract(10,4)
            expect(value).toBe(6)
        });
        
        it('subtracts 15 from 30 to not equal 10', () => {
            let value = subtract(30,15)
            expect(value).not.toBe(10)
        })
        
    })
    
    describe('multiply function', () => {
        
        it('multiply 3 times 3 and gets 9', () => {
            let value = multiply(3,3)
            expect(value).toBe(9)
        });
        
        it('multiply 1 times 10 to not equal to 11', () => {
            let value = multiply(1,10)
            expect(value).not.toBe(11)
        })
        
    })
    describe('division function', () => {
        
        it('divide 4 between 2 and gets 2', () => {
            let value = divide(4,2)
            expect(value).toBe(2)
        });
        
        it('divide 20 between 10 to not equal 3 ', () => {
            let value = divide(20,10)
            expect(value).not.toBe(3)
        })
        
    });
    
})


// expect(value).toBeGreaterThanOrEqual(3.5);
// expect(value).toBeLessThan(5);
// expect(value).toBeLessThanOrEqual(4.5);
// expect(value).not.toBe(5);