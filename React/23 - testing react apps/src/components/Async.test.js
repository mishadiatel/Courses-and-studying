import { render, screen } from "@testing-library/react"
import Async from "./Async"

describe('Async component', () => {
    test('renders posts if request successed', async () => {
        window.fetch = jest.fn();
        window.fetch.mockResolvedValueOnce({
            json: async () => [{id: 'p1', title: 'First post'}]
        });
        render(<Async />);

        const listItemsElements = await screen.findAllByRole("listitem");
        expect(listItemsElements).not.toHaveLength(0);
    })
})