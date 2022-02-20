import React from 'react';
// import {setupServer} from 'msw/node'
import { render, fireEvent, waitFor, screen } from '@testing-library/react';
import '@testing-library/jest-dom'
import { rest } from 'msw'
import { setupServer } from 'msw/node'
import CardBalanceHistory from '../../src/components/Balance/CardBalanceHistory';
import { Link } from "react-router-dom";
import sinon from "sinon";


function penjumlahan(a, b) {
  return a + b;
}

const server = setupServer(
  // capture "GET /greeting" requests
  rest.get('/greeting', (req, res, ctx) => {
    // respond using a mocked JSON body
    return res(ctx.json({ greeting: 'hello there' }))
  }),
)

// establish API mocking before all tests
beforeAll(() => server.listen())
// reset any request handlers that are declared as a part of our tests
// (i.e. for testing one-time error scenarios)
afterEach(() => server.resetHandlers())
// clean up once the tests are done
afterAll(() => server.close())

describe("Render app", function () {
  // beforeAll(function() {
  //   sinon.stub(ToStubComponent, "default").returns(<div>A stub</div>);
  // });

  it('renders learn react link', () => {
    render(<CardBalanceHistory />);
    // const linkElement = screen.getByText(/learn react/i);
    // console.log(linkElement);
    // expect(linkElement).toBeInTheDocument();
  });
  // for (let index = 0; index < 100; index++) {
  //   it(`react function plus ${index} + ${index}`, () => {
  //     expect(penjumlahan(index, index)).toBe(index + index);
  //   })
  // }
  // beforeAll(function () {
  //   sinon.stub(ToStubComponent, "default").returns(<div>A stub</div>);
  // });

  // it("basic React components", function () {
  //   const { container } = render(<App />);

  //   expect(container).toHaveTextContent("A stub");
  // });
});

