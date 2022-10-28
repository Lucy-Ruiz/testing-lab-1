import {capitalize, concatenate, secondWord} from './stringFunctions'

describe('string module', () => {

    describe('capitalize first letter', () => {
        it('capitalize hello to equal Hello', () =>{
            let value = capitalize('hello');
            expect(value).toBe('Hello');
        })
        it('capitalize hello to not equal hEllo', () =>{
            let value = capitalize('hello');
            expect(value).not.toBe('hEllo');
        })
    })
    describe('concatenate two smaller strings/words', () => {
        it('concatenate sky and fall equal to skyfall', () =>{
            let value = concatenate('sky', 'fall');
            expect(value).toBe('skyfall');
        })
        it('concatenate sky and fall not equal to fall sky', () =>{
            let value = concatenate('sky', 'fall');
            expect(value).not.toBe('fall sky');
        })
    })
    describe('return the second word of a multi-word string', () => {
        it('return string "it" from "turn it off"', () =>{
            let value = secondWord('turn it off');
            expect(value).toBe('it');
        })
        it('do not return string "off" from "turn it off"', () =>{
            let value = secondWord('turn it off');
            expect(value).not.toBe('off');
        })
    })

})