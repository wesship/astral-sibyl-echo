
import React, { createContext, useContext, useState, useEffect } from 'react';

export interface Reading {
  id: string;
  type: 'tarot' | 'oracle' | 'rune' | 'horoscope';
  date: Date;
  cards?: any[];
  result?: string;
  notes?: string;
}

export interface JournalEntry {
  id: string;
  date: Date;
  title: string;
  content: string;
  tags: string[];
}

export interface UserSettings {
  theme: 'dark' | 'light' | 'mystical';
  soundEnabled: boolean;
  animationsEnabled: boolean;
  dailyReminders: boolean;
}

interface UserContextType {
  readings: Reading[];
  journalEntries: JournalEntry[];
  settings: UserSettings;
  addReading: (reading: Omit<Reading, 'id' | 'date'>) => void;
  addJournalEntry: (entry: Omit<JournalEntry, 'id' | 'date'>) => void;
  updateSettings: (settings: Partial<UserSettings>) => void;
  deleteReading: (id: string) => void;
  deleteJournalEntry: (id: string) => void;
}

const defaultSettings: UserSettings = {
  theme: 'mystical',
  soundEnabled: true,
  animationsEnabled: true,
  dailyReminders: false
};

const UserContext = createContext<UserContextType | undefined>(undefined);

export const UserProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [readings, setReadings] = useState<Reading[]>([]);
  const [journalEntries, setJournalEntries] = useState<JournalEntry[]>([]);
  const [settings, setSettings] = useState<UserSettings>(defaultSettings);

  useEffect(() => {
    // Load data from localStorage on mount
    const savedReadings = localStorage.getItem('sacredGrove_readings');
    const savedJournal = localStorage.getItem('sacredGrove_journal');
    const savedSettings = localStorage.getItem('sacredGrove_settings');

    if (savedReadings) {
      setReadings(JSON.parse(savedReadings).map((r: any) => ({
        ...r,
        date: new Date(r.date)
      })));
    }
    if (savedJournal) {
      setJournalEntries(JSON.parse(savedJournal).map((e: any) => ({
        ...e,
        date: new Date(e.date)
      })));
    }
    if (savedSettings) {
      setSettings({ ...defaultSettings, ...JSON.parse(savedSettings) });
    }
  }, []);

  const addReading = (reading: Omit<Reading, 'id' | 'date'>) => {
    const newReading: Reading = {
      ...reading,
      id: Date.now().toString(),
      date: new Date()
    };
    const updatedReadings = [newReading, ...readings];
    setReadings(updatedReadings);
    localStorage.setItem('sacredGrove_readings', JSON.stringify(updatedReadings));
  };

  const addJournalEntry = (entry: Omit<JournalEntry, 'id' | 'date'>) => {
    const newEntry: JournalEntry = {
      ...entry,
      id: Date.now().toString(),
      date: new Date()
    };
    const updatedEntries = [newEntry, ...journalEntries];
    setJournalEntries(updatedEntries);
    localStorage.setItem('sacredGrove_journal', JSON.stringify(updatedEntries));
  };

  const updateSettings = (newSettings: Partial<UserSettings>) => {
    const updatedSettings = { ...settings, ...newSettings };
    setSettings(updatedSettings);
    localStorage.setItem('sacredGrove_settings', JSON.stringify(updatedSettings));
  };

  const deleteReading = (id: string) => {
    const updatedReadings = readings.filter(r => r.id !== id);
    setReadings(updatedReadings);
    localStorage.setItem('sacredGrove_readings', JSON.stringify(updatedReadings));
  };

  const deleteJournalEntry = (id: string) => {
    const updatedEntries = journalEntries.filter(e => e.id !== id);
    setJournalEntries(updatedEntries);
    localStorage.setItem('sacredGrove_journal', JSON.stringify(updatedEntries));
  };

  return (
    <UserContext.Provider value={{
      readings,
      journalEntries,
      settings,
      addReading,
      addJournalEntry,
      updateSettings,
      deleteReading,
      deleteJournalEntry
    }}>
      {children}
    </UserContext.Provider>
  );
};

export const useUser = () => {
  const context = useContext(UserContext);
  if (!context) {
    throw new Error('useUser must be used within a UserProvider');
  }
  return context;
};
