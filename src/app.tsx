import { useState } from 'react';
import { NoteList } from './components/note-list';
import { NewNoteForm } from './components/new-note-form';
import { NoteDetail } from './components/note-detail';
import type { Note } from './types';

function App() {
    const [selectedNote, setSelectedNote] = useState<Note | null>(null);
    const [refresh, setRefresh] = useState<boolean>(false);

    const handleRefresh = () => {
        setSelectedNote(null);
        setRefresh(!refresh);
    };

    return (
        <div className='min-h-screen bg-gray-100 p-4'>
            <div className='max-w-3xl mx-auto'>
                <h1 className='text-4xl font-bold text-center text-blue-700 mb-8'>Správa poznámok</h1>

                {selectedNote ? (
                    <NoteDetail note={selectedNote} onBack={handleRefresh} />
                ) : (
                    <>
                        <NewNoteForm onCreate={handleRefresh} />
                        <NoteList key={refresh.toString()} onSelect={setSelectedNote} />
                    </>
                )}
            </div>
        </div>
    );
}

export default App;
