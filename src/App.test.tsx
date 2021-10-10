// import React from "react";
// import { render, screen } from "@testing-library/react";
import renderer from 'react-test-renderer';
import App from './App';

// describe('Fetch Customer Data', () => {
//   it('return customer data', async () => {
//     const mockResponse = {
//       value: {
//         data: {
//           name: 'David Miller',
//           role: 'ADMIN',
//           email: 'david@gmail.com',
//           id: '73bae2af-4fa4-4023-8829-1034604e7590'
//         }
//       }
//     };
//     console.log('mock= ', mockResponse);
//   });
// });

describe('<App />', () => {
  it('should render App', () => {
    const component = renderer.create(<App />).toJSON();
    expect(component).toMatchSnapshot();
  });
});
