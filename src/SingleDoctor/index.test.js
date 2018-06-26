import { formatPhoneNumber } from './index';

// test('display license by state', () => {

//     expect(state).toContainObject({ type: 'num1' })
//    expect(state).toContainObject({ type: 'num2' })
//     expect(state).toContainObject({ data: 'num3' })
//    })


// test('phone number of doctor', () => {
  //   expect(formatPhoneNumber(4539986310)).toBe("(453) 998-6310")
  // })
  
  const drNames = [
    {
      number: undefined,
      state: undefined
    },
    {
      number: 'Chang',
      state: 'Ny'
    }
  ];
  test(drNames.filter(x => x.number !== undefined && x.state !== undefined))

test('the Dr Names should be filtered', () => {
  expect(drNames.filter(x => x.number !== undefined && x.state !== undefined)).toEqual([{"number": "Chang", "state": "Ny"}]);
});