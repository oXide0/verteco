import { useState } from 'react';
import { api } from '../api';
import type { Note } from '../types';

interface NoteDetailProps {
    readonly note: Note;
    readonly onBack: () => void;
}

export function NoteDetail({ note, onBack }: NoteDetailProps) {
    const [title, setTitle] = useState<string>(note.title);
    const [content, setContent] = useState<string>(note.content);

    return (
        <div className='max-w-xl mx-auto p-6 bg-white shadow-lg rounded-2xl mt-6'>
            <h2 className='text-2xl font-bold mb-4 text-gray-800'>Detail poznámky</h2>

            <div className='mb-4'>
                <label className='block text-sm font-medium text-gray-700 mb-1'>Nadpis</label>
                <input
                    value={title}
                    onChange={(e) => setTitle(e.target.value)}
                    className='w-full border border-gray-300 rounded-lg p-2 focus:outline-none focus:ring-2 focus:ring-blue-500'
                    placeholder='Nadpis poznámky'
                />
            </div>

            <div className='mb-4'>
                <label className='block text-sm font-medium text-gray-700 mb-1'>Obsah</label>
                <textarea
                    value={content}
                    onChange={(e) => setContent(e.target.value)}
                    className='w-full h-40 border border-gray-300 rounded-lg p-2 focus:outline-none focus:ring-2 focus:ring-blue-500 resize-none'
                    placeholder='Obsah poznámky'
                />
            </div>

            <div className='flex justify-between mt-6'>
                <button
                    onClick={async () => {
                        await api.put(`/notes/${note.id}`, { title, content });
                        onBack();
                    }}
                    className='bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition'
                >
                    Uložiť
                </button>

                <button
                    onClick={async () => {
                        await api.delete(`/notes/${note.id}`);
                        onBack();
                    }}
                    className='bg-red-600 text-white px-4 py-2 rounded-lg hover:bg-red-700 transition'
                >
                    Vymazať
                </button>

                <button
                    onClick={onBack}
                    className='bg-gray-300 text-gray-800 px-4 py-2 rounded-lg hover:bg-gray-400 transition'
                >
                    Späť
                </button>
            </div>
        </div>
    );
}
