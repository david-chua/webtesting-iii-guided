import React from 'react';
import { render, fireEvent } from 'react-testing-library';
import renderer from 'react-test-renderer';

import Speaker from './Speaker.js';

describe('<Speaker /> ', () => {
  xit ('should call the speak function on click', () =>{
    const speakMock = jest.fn();

    const { getByText } = render(<Speaker speak={speakMock} />);

    const speakButton = getByText(/speak/i);

    fireEvent.click(speakButton);

    expect(speakMock).toHaveBeenCalled();
  });

describe('<Speaker />', () => {
  it('should match the snapshot', () => {
    const tree = renderer.create(<Speaker />);

    expect(tree.toJSON()).toMatchSnapshot();
  });

  it('should match the snapshot with a message', () => {
    const tree = renderer.create(<Speaker message={"hello"}/>).toJSON();

    expect(tree).toMatchSnapshot();

  })
})



});
