import { render, screen } from '@testing-library/react';
import RestaurantCard from '../components/RestaurantCard/RestaurantCard';
import REST_MOCK_DATA from '../__mocks__/resCardMock.json';
import '@testing-library/jest-dom';

it('Should load Restaurant card', () => {
    render(<RestaurantCard rest={REST_MOCK_DATA} />);

    const name = screen.getByText('Pizza Hut');

    expect(name).toBeInTheDocument();
});
