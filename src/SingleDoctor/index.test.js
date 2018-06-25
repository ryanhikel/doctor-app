import { formatPhoneNumber } from './index';

// test('display license by state', () => {

//     expect(state).toContainObject({ type: 'num1' })
//    expect(state).toContainObject({ type: 'num2' })
//     expect(state).toContainObject({ data: 'num3' })
//    })

   test('phone number of doctor', () => {
       expect(formatPhoneNumber(4539986310)).toBe("(453) 998-6310")
     })
    
  