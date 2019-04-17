import React from 'react';
import { render, fireEvent } from 'react-testing-library';
import banana from 'react-test-renderer'; // 1: install this npm module as a dev dependency

import App from './App';

describe('<App />', () => {
  // 2. write this test
  it.skip('matches snapshot', () => {
    const tree = banana.create(<App />); // generates a DOM tree

    // snapshots are a JSON representation of the DOM tree
    expect(tree.toJSON()).toMatchSnapshot();
  });

  it('is mocking me', () => {
    const mock = jest.fn();
    // const mock = () => {};
    const result = mock();

    expect(result).toBeUndefined();
    expect(mock).toHaveBeenCalled();
    expect(mock).toHaveBeenCalledTimes(1);
  });

  it('is mocking me even more', () => {
    const mock = jest.fn(() => 'hello');

    const result = mock('smile');

    expect(result).toBe('hello');
    expect(mock).toHaveBeenCalled();
    expect(mock).toHaveBeenCalledTimes(1);
    expect(mock).toHaveBeenCalledWith('smile');
  });

  it('should display default message', () => {
    const { getByText, queryByText } = render(<App />);
    getByText(/nothing to say/i);

    expect(queryByText(/you are not mocking me!/i)).toBeFalsy();

  })

  it('update the message when speak is clicked', () => {
    const { getByText } = render(<App />);
    
    const speakButton = getByText(/speak/i);
    fireEvent.click(speakButton);

    getByText(/you are not mocking me!/i);
  })


});
