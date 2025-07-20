import { useEffect, useState } from 'react';
import { api } from '../api';
import type { Note } from '../types';

interface Props {
    readonly onSelect: (note: Note) => void;
}

export function NoteList({ onSelect }: Props) {
    const [notes, setNotes] = useState<Note[]>([]);

    useEffect(() => {
        api.get('/notes').then((res) => setNotes(res.data));
    }, []);

    return (
        <div className='max-w-2xl mx-auto mt-8'>
            <h2 className='text-2xl font-bold mb-4 text-gray-800'>Zoznam poznámok</h2>
            {notes.length === 0 ? (
                <p className='text-gray-500'>Žiadne poznámky</p>
            ) : (
                <ul className='space-y-3'>
                    {notes.map((note) => (
                        <li
                            key={note.id}
                            onClick={() => onSelect(note)}
                            className='cursor-pointer p-4 bg-white shadow hover:shadow-md transition rounded-xl border border-gray-200'
                        >
                            <div className='text-lg font-semibold text-blue-600'>{note.title}</div>
                            <div className='text-sm text-gray-500'>{new Date(note.createdAt).toLocaleString()}</div>
                        </li>
                    ))}
                </ul>
            )}
        </div>
    );
}
