
import React, { createContext, useContext, useState } from 'react';

interface SearchContextType {
  searchQuery: string;
  setSearchQuery: React.Dispatch<React.SetStateAction<string>>;
  searchResults: any[];
  setSearchResults: React.Dispatch<React.SetStateAction<any[]>>;
  isSearching: boolean;
  setIsSearching: React.Dispatch<React.SetStateAction<boolean>>;
  performSearch: (query: string) => void;
}

const SearchContext = createContext<SearchContextType | undefined>(undefined);

export const useSearch = () => {
  const context = useContext(SearchContext);
  if (!context) {
    throw new Error('useSearch must be used within a SearchProvider');
  }
  return context;
};

export const SearchProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [searchQuery, setSearchQuery] = useState('');
  const [searchResults, setSearchResults] = useState<any[]>([]);
  const [isSearching, setIsSearching] = useState(false);

  // Mock database for search
  const searchDatabase = [
    { id: 'e1', type: 'event', title: 'Tech Fest 2025', path: '/events' },
    { id: 'e2', type: 'event', title: 'Cultural Night', path: '/events' },
    { id: 'e3', type: 'event', title: 'Career Fair', path: '/events' },
    { id: 'c1', type: 'club', title: 'Coding Club', path: '/communities/1' },
    { id: 'c2', type: 'club', title: 'Music Society', path: '/communities/2' },
    { id: 'c3', type: 'club', title: 'Art & Design Club', path: '/communities/3' },
    { id: 'n1', type: 'notice', title: 'Mid-semester Exam Schedule', path: '/noticeboard' },
    { id: 'n2', type: 'notice', title: 'Library Timing Changes', path: '/noticeboard' },
    { id: 'n3', type: 'notice', title: 'Scholarship Applications', path: '/noticeboard' },
    { id: 'f1', type: 'faculty', title: 'Dr. Raj Kumar', path: '/faculty' },
    { id: 'f2', type: 'faculty', title: 'Dr. Priya Sharma', path: '/faculty' },
    { id: 'f3', type: 'faculty', title: 'Dr. Amit Singh', path: '/faculty' },
  ];

  const performSearch = (query: string) => {
    if (!query.trim()) {
      setSearchResults([]);
      setIsSearching(false);
      return;
    }
    
    setIsSearching(true);
    
    const lowercaseQuery = query.toLowerCase();
    const results = searchDatabase.filter(item => 
      item.title.toLowerCase().includes(lowercaseQuery)
    );
    
    setSearchResults(results);
  };

  return (
    <SearchContext.Provider
      value={{
        searchQuery,
        setSearchQuery,
        searchResults,
        setSearchResults,
        isSearching,
        setIsSearching,
        performSearch
      }}
    >
      {children}
    </SearchContext.Provider>
  );
};
