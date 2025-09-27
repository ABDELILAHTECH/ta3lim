import { Search, X, Loader2 } from 'lucide-react'
import React, { useContext, useState, useMemo, useCallback, useRef, useEffect } from 'react'
import { RessourcesContext } from '../Context/RessourcesContext'
import SearchDocumentCard from './SearchDocumentCard';

export default function SearchBar() {
  const {ressources} = useContext(RessourcesContext);
  const [searchTerm, setSearchTerm] = useState("");
  const [isSearching, setIsSearching] = useState(false);
  const [showResults, setShowResults] = useState(false);
  const searchRef = useRef(null);
  const resultsRef = useRef(null);

  // Debounce function
  const debounce = useCallback((func, delay) => {
    let timeoutId;
    return (...args) => {
      clearTimeout(timeoutId);
      timeoutId = setTimeout(() => func.apply(null, args), delay);
    };
  }, []);

  // Optimized search function with multiple fields
  const searchResults = useMemo(() => {
    if (!searchTerm.trim()) return [];
    
    const term = searchTerm.toLowerCase().trim();
    return ressources.filter((ressource) => {
      const title = (ressource.title || "").toLowerCase();
      const subject = (ressource.subject || "").toLowerCase();
      const level = (ressource.level || "").toLowerCase();
      const type = (ressource.type || "").toLowerCase();
      const className = (ressource.class || "").toLowerCase();
      
      return title.includes(term) || 
             subject.includes(term) || 
             level.includes(term) || 
             type.includes(term) || 
             className.includes(term);
    });
  }, [ressources, searchTerm]);

  // Debounced search handler
  const debouncedSearch = useCallback(
    debounce((value) => {
      setIsSearching(false);
      setShowResults(value.length > 0);
    }, 300),
    []
  );

  const handleSearch = (e) => {
    const value = e.target.value;
    setSearchTerm(value);
    setIsSearching(value.length > 0);
    debouncedSearch(value);
  };

  const clearSearch = () => {
    setSearchTerm("");
    setShowResults(false);
    setIsSearching(false);
    if (searchRef.current) {
      searchRef.current.focus();
    }
  };

  // Close results when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (searchRef.current && !searchRef.current.contains(event.target) && 
          resultsRef.current && !resultsRef.current.contains(event.target)) {
        setShowResults(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  return (
    <div className="relative w-full" ref={searchRef}>
      {/* Search Input */}
      <div className="relative">
        <form className="bg-white/90 dark:bg-slate-800/90 backdrop-blur-sm border-2 border-gray-200 dark:border-gray-600 dark:text-white flex items-center gap-3 px-6 py-4 rounded-2xl shadow-lg hover:shadow-xl focus-within:border-primary focus-within:shadow-primary/20 transition-all duration-300">
          <Search size={24} className="text-gray-400 dark:text-gray-500" />
          <input 
            ref={searchRef}
            onChange={handleSearch} 
            value={searchTerm}
            type="text" 
            className="flex-1 focus:outline-none text-lg font-cairo bg-transparent placeholder-gray-400 dark:placeholder-gray-500" 
            placeholder="ابحث عن دروس، تمارين، امتحانات..." 
          />
          {isSearching && (
            <Loader2 size={20} className="text-primary animate-spin" />
          )}
          {searchTerm && !isSearching && (
            <button
              type="button"
              onClick={clearSearch}
              className="text-gray-400 hover:text-gray-600 dark:hover:text-gray-300 transition-colors"
            >
              <X size={20} />
            </button>
          )}
        </form>
      </div>

      {/* Search Results */}
      {showResults && (
        <div 
          ref={resultsRef}
          className="absolute top-full left-0 right-0 mt-2 bg-white dark:bg-slate-800 border border-gray-200 dark:border-gray-600 rounded-xl shadow-xl max-h-96 overflow-y-auto z-50"
        >
          {searchResults.length > 0 ? (
            <div className="p-2">
              <div className="text-sm text-gray-500 dark:text-gray-400 px-3 py-2 border-b border-gray-100 dark:border-gray-700">
                {searchResults.length} نتيجة
              </div>
              <ul className="space-y-1">
                {searchResults.slice(0, 10).map((result, index) => (
                  <SearchDocumentCard key={`${result._id || result.id}-${index}`} ressource={result} />
                ))}
              </ul>
              {searchResults.length > 10 && (
                <div className="text-center py-2 text-sm text-gray-500 dark:text-gray-400">
                  و {searchResults.length - 10} نتيجة أخرى...
                </div>
              )}
            </div>
          ) : (
            <div className="p-4 text-center text-gray-500 dark:text-gray-400">
              <Search size={24} className="mx-auto mb-2 opacity-50" />
              <p>لا توجد نتائج لـ "{searchTerm}"</p>
            </div>
          )}
        </div>
      )}
    </div>
  )
}
