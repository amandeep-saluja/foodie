import { render, screen } from '@testing-library/react';
import Contact from '../components/Contact/Contact';
import '@testing-library/jest-dom';

describe('Contact Component', () => {
    test('Should load contact us component', () => {
        render(<Contact />);

        const heading = screen.getByRole('heading');

        expect(heading).toBeInTheDocument();
    });

    test('Should load contact us component with button', () => {
        render(<Contact />);

        const heading = screen.getByRole('button');

        expect(heading).toBeInTheDocument();
    });

    it('Should load contact us component with input block', () => {
        render(<Contact />);

        const input = screen.getByPlaceholderText('Enter your Name');

        expect(input).toBeInTheDocument();
    });

    it('Should load contact us component with 2 input block', () => {
        render(<Contact />);

        const inputBoxes = screen.getAllByRole('textbox');

        expect(inputBoxes.length).toBe(2);
        expect(inputBoxes.length).not.toBe(3);
    });
});