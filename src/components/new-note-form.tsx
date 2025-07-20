import { useState } from 'react';
import { api } from '../api';

interface Props {
    readonly onCreate: () => void;
}

export function NewNoteForm({ onCreate }: Props) {
    const [title, setTitle] = useState<string>('');
    const [content, setContent] = useState<string>('');

    return (
        <form
            onSubmit={async (e) => {
                e.preventDefault();
                await api.post('/notes', { title, content });
                setTitle('');
                setContent('');
                onCreate();
            }}
            className='max-w-xl mx-auto p-6 bg-white shadow-md rounded-2xl mt-6'
        >
            <h2 className='text-2xl font-bold mb-4 text-gray-800'>Nová poznámka</h2>

            <div className='mb-4'>
                <label className='block text-sm font-medium text-gray-700 mb-1'>Nadpis</label>
                <input
                    required
                    value={title}
                    onChange={(e) => setTitle(e.target.value)}
                    placeholder='Nadpis'
                    className='w-full border border-gray-300 rounded-lg p-2 focus:outline-none focus:ring-2 focus:ring-blue-500'
                />
            </div>

            <div className='mb-4'>
                <label className='block text-sm font-medium text-gray-700 mb-1'>Obsah</label>
                <textarea
                    required
                    value={content}
                    onChange={(e) => setContent(e.target.value)}
                    placeholder='Obsah'
                    className='w-full h-40 border border-gray-300 rounded-lg p-2 focus:outline-none focus:ring-2 focus:ring-blue-500 resize-none'
                />
            </div>

            <button
                type='submit'
                className='bg-green-600 text-white px-4 py-2 rounded-lg hover:bg-green-700 transition'
            >
                Pridať
            </button>
        </form>
    );
}
