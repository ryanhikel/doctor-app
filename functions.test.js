const functions = require('./functions');
// const fetch = require('fetch');
// import React from 'react';
// import App from '/App';
// import { shallow } from 'enzyme';

// test('adds 2 + 2 to equal 4', () => {
//   expect(functions.add(2, 2)).toBe(4)
//  })

// test('adds 2 + 2 to NOT equal 5', () => {
//   expect(functions.add(2, 2)).not.toBe(5)
// })

// test('should be null', () => {
//   expect(functions.isNull()).toBeNull()
// })

// test('should be falsy', () => {
//   expect(functions.checkValue(null)).toBeFalsy()
// })

// test('user should be Sean Palomino object', () => {
//   expect(functions.createUser()).toEqual({ firstName: 'Sean', lastName: 'Palomino'});
// })

// test('should be under 1600', () => {
//   const load1 = 800;
//   const load2 = 700;
//   expect(load1 + load2).toBeLessThan(1600);
// })

// test('there is no I in team', () => {
//   expect('team').not.toMatch(/I/);
// })

// test('admin should be in username', () => {
//   usernames = ['michelle', 'lauren', 'admin'];
//   expect(usernames).toContain('admin');
// })

// test('user fetch name should be leanne graham', () => {
//   // expect.assertions(1);
//   return functions.fetchUser().then(data => {
//     expect(data.name).toEqual('Leanne Graham');
//   });
// });

// describe('Username Component', () => {
//   it('should render without throwing an error', () => {
//     expect(usernames).toBe('empty')
//   })
// })


// test('all users from db', () => {
//   expect(Users.all()).toContain(users);
// })

// describe('<App />', () => {
//   it('renders 1 <App /> component', () => {
//     const component = shallow(<App />);
//     expect(component).toHaveLength(1);
//   });
// });

test('display license by state', () => {
  expect(state).toContainObject({ type: 'num1' })
  expect(state).toContainObject({ type: 'num2' })
  expect(state).toContainObject({ data: 'num3' })
 })

module.exports = functions;