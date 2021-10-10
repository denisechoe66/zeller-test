// import React from "react";
// import { render, screen } from "@testing-library/react";
import App from './App';

// test("renders learn react link", () => {
//   render(<App />);
//   const linkElement = screen.getByText(/learn react/i);
//   expect(linkElement).toBeInTheDocument();
// });
describe('Fetch Customer Data', () => {
  it('return customer data', async () => {
    const mockResponse = {
      value: {
        data: {
          name: 'David Miller',
          role: 'ADMIN',
          email: 'david@gmail.com',
          id: '73bae2af-4fa4-4023-8829-1034604e7590'
        }
      }
    };
    console.log('mock= ', mockResponse);
  });
});
