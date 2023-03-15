import React from 'react';
import { render, screen } from '@testing-library/react';
import App from 'App';

describe('App', () => {
  it('renders App', () => {
    render(<App />);
    const linkElement = screen.getByText('search for inspiration');
    expect(linkElement).toBeInTheDocument();
  });
})


