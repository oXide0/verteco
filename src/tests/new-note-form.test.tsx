import { render, screen, fireEvent, waitFor } from '@testing-library/react';
import { NewNoteForm } from '../components/new-note-form';
import * as apiModule from '../api';

describe('NewNoteForm', () => {
    it('should render and submit note', async () => {
        const mockCreate = jest.fn();

        jest.spyOn(apiModule.api, 'post').mockResolvedValueOnce({
            data: { id: 1, title: 'Test title', content: 'Test content', createdAt: new Date() }
        });

        render(<NewNoteForm onCreate={mockCreate} />);

        fireEvent.change(screen.getByPlaceholderText('Nadpis'), {
            target: { value: 'Test title' }
        });

        fireEvent.change(screen.getByPlaceholderText('Obsah'), {
            target: { value: 'Test content' }
        });

        fireEvent.click(screen.getByText('Pridať'));

        await waitFor(() => {
            expect(mockCreate).toHaveBeenCalled();
        });
    });
});
