import { render, screen, waitFor } from "@testing-library/react";
import { MockedProvider } from '@apollo/client/testing';
import mocks from "./__mocks__/templates"
import App from "./App";

const cdnUrl = `${process.env.REACT_APP_CDN_URL}/images`

describe('App tests',  () => {

  beforeAll(() => {
    render(<MockedProvider mocks={mocks}>
      <App cdnUrl={cdnUrl} />
    </MockedProvider>);
  })
  

  it("should display the header ",  async () => {
  
    // find images
    await waitFor(() =>  {
      const header = screen.getByRole("banner");
      expect(header).toEqual(<header>Code Development Project</header>);
    })
  });
});


