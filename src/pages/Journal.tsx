
import React, { useState } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { useUser } from '@/contexts/UserContext';
import { Plus, BookOpen, Trash2, Edit3 } from 'lucide-react';
import { format } from 'date-fns';

const Journal = () => {
  const { journalEntries, addJournalEntry, deleteJournalEntry } = useUser();
  const [isWriting, setIsWriting] = useState(false);
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');
  const [tags, setTags] = useState('');

  const handleSave = () => {
    if (title.trim() && content.trim()) {
      addJournalEntry({
        title: title.trim(),
        content: content.trim(),
        tags: tags.split(',').map(tag => tag.trim()).filter(Boolean)
      });
      setTitle('');
      setContent('');
      setTags('');
      setIsWriting(false);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-950 via-black to-purple-950 py-8">
      <div className="container mx-auto px-4">
        <div className="text-center mb-8">
          <h1 className="text-4xl font-bold bg-gradient-to-r from-indigo-400 to-purple-600 bg-clip-text text-transparent mb-4">
            📖 Spiritual Journal
          </h1>
          <p className="text-indigo-200 max-w-2xl mx-auto">
            Record your insights, dreams, and spiritual experiences.
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="mb-6">
            <Button 
              onClick={() => setIsWriting(true)}
              className="bg-gradient-to-r from-indigo-500 to-purple-600 hover:opacity-90"
            >
              <Plus className="w-4 h-4 mr-2" />
              New Entry
            </Button>
          </div>

          {isWriting && (
            <Card className="bg-black/40 border-indigo-500/30 mb-6">
              <CardHeader>
                <CardTitle className="text-indigo-200">New Journal Entry</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <input
                  type="text"
                  placeholder="Entry title..."
                  value={title}
                  onChange={(e) => setTitle(e.target.value)}
                  className="w-full bg-black/20 border border-indigo-500/30 rounded px-3 py-2 text-indigo-100 placeholder-indigo-400"
                />
                <textarea
                  placeholder="Write your thoughts and insights..."
                  value={content}
                  onChange={(e) => setContent(e.target.value)}
                  rows={6}
                  className="w-full bg-black/20 border border-indigo-500/30 rounded px-3 py-2 text-indigo-100 placeholder-indigo-400"
                />
                <input
                  type="text"
                  placeholder="Tags (comma separated)"
                  value={tags}
                  onChange={(e) => setTags(e.target.value)}
                  className="w-full bg-black/20 border border-indigo-500/30 rounded px-3 py-2 text-indigo-100 placeholder-indigo-400"
                />
                <div className="flex space-x-2">
                  <Button onClick={handleSave} className="bg-indigo-600 hover:bg-indigo-700">
                    Save Entry
                  </Button>
                  <Button 
                    variant="outline" 
                    onClick={() => setIsWriting(false)}
                    className="border-indigo-500/30 text-indigo-200"
                  >
                    Cancel
                  </Button>
                </div>
              </CardContent>
            </Card>
          )}

          {journalEntries.length === 0 ? (
            <Card className="bg-black/40 border-indigo-500/30">
              <CardHeader className="text-center">
                <BookOpen className="w-12 h-12 mx-auto text-indigo-400 mb-4" />
                <CardTitle className="text-indigo-200">Start Your Spiritual Journal</CardTitle>
                <CardDescription className="text-indigo-300">
                  Begin documenting your spiritual journey and insights.
                </CardDescription>
              </CardHeader>
            </Card>
          ) : (
            <div className="space-y-4">
              {journalEntries.map((entry) => (
                <Card key={entry.id} className="bg-black/40 border-indigo-500/30">
                  <CardHeader>
                    <div className="flex items-center justify-between">
                      <div>
                        <CardTitle className="text-indigo-200">{entry.title}</CardTitle>
                        <CardDescription className="text-indigo-300">
                          {format(entry.date, 'MMMM dd, yyyy')}
                        </CardDescription>
                      </div>
                      <Button
                        variant="ghost"
                        size="sm"
                        onClick={() => deleteJournalEntry(entry.id)}
                        className="text-red-400 hover:text-red-300"
                      >
                        <Trash2 className="w-4 h-4" />
                      </Button>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <p className="text-indigo-100 mb-3">{entry.content}</p>
                    {entry.tags.length > 0 && (
                      <div className="flex flex-wrap gap-2">
                        {entry.tags.map((tag, index) => (
                          <span 
                            key={index}
                            className="bg-indigo-600/30 text-indigo-200 px-2 py-1 rounded-full text-sm"
                          >
                            #{tag}
                          </span>
                        ))}
                      </div>
                    )}
                  </CardContent>
                </Card>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Journal;
