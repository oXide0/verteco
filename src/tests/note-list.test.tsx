import { render, screen } from '@testing-library/react';
import { NoteList } from '../components/note-list';
import '@testing-library/jest-dom';

test('renders notes list', () => {
    render(<NoteList onSelect={() => {}} />);

    expect(screen.getByText('Zoznam poznámok')).toBeInTheDocument();
});
