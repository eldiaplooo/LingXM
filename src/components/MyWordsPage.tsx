import { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Badge } from '@/components/ui/badge';
import {
  Tooltip,
  TooltipTrigger,
  TooltipContent,
} from '@/components/ui/tooltip';
import { Search, Volume2, Trash2, BookOpen, Star, Filter } from 'lucide-react';

interface MyWordsPageProps {
  targetLang: string;
  sourceLang: string;
  isDarkMode: boolean;
}

export function MyWordsPage({ targetLang, sourceLang, isDarkMode }: MyWordsPageProps) {
  const [searchQuery, setSearchQuery] = useState('');
  const [filterLevel, setFilterLevel] = useState('all');

  // Sample saved words data
  const savedWords = [
    {
      id: 1,
      word: 'hermoso',
      translation: 'beautiful',
      level: 'beginner',
      category: 'adjective',
      example: 'El paisaje es muy hermoso.',
      exampleTranslation: 'The landscape is very beautiful.',
      dateAdded: '2024-01-15',
      practiced: 5,
      mastered: false
    },
    {
      id: 2,
      word: 'delicioso',
      translation: 'delicious',
      level: 'beginner',
      category: 'adjective',
      example: 'La comida está deliciosa.',
      exampleTranslation: 'The food is delicious.',
      dateAdded: '2024-01-14',
      practiced: 8,
      mastered: true
    },
    {
      id: 3,
      word: 'estación',
      translation: 'station',
      level: 'intermediate',
      category: 'noun',
      example: '¿Dónde está la estación de tren?',
      exampleTranslation: 'Where is the train station?',
      dateAdded: '2024-01-13',
      practiced: 3,
      mastered: false
    },
    {
      id: 4,
      word: 'direcciones',
      translation: 'directions',
      level: 'intermediate',
      category: 'noun',
      example: '¿Puedes ayudarme con las direcciones?',
      exampleTranslation: 'Can you help me with directions?',
      dateAdded: '2024-01-12',
      practiced: 6,
      mastered: false
    },
    {
      id: 5,
      word: 'fluidez',
      translation: 'fluency',
      level: 'advanced',
      category: 'noun',
      example: 'Habla español con fluidez.',
      exampleTranslation: 'He speaks Spanish with fluency.',
      dateAdded: '2024-01-11',
      practiced: 12,
      mastered: true
    }
  ];

  const filteredWords = savedWords.filter(word => {
    const matchesSearch = word.word.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         word.translation.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesLevel = filterLevel === 'all' || word.level === filterLevel;
    return matchesSearch && matchesLevel;
  });

  const getLevelColor = (level: string) => {
    switch (level) {
      case 'beginner': return 'bg-green-100 text-green-800 dark:bg-green-900/20 dark:text-green-400';
      case 'intermediate': return 'bg-yellow-100 text-yellow-800 dark:bg-yellow-900/20 dark:text-yellow-400';
      case 'advanced': return 'bg-red-100 text-red-800 dark:bg-red-900/20 dark:text-red-400';
      default: return 'bg-gray-100 text-gray-800 dark:bg-gray-900/20 dark:text-gray-400';
    }
  };

  const getCategoryColor = (category: string) => {
    switch (category) {
      case 'noun': return 'bg-blue-100 text-blue-800 dark:bg-blue-900/20 dark:text-blue-400';
      case 'verb': return 'bg-purple-100 text-purple-800 dark:bg-purple-900/20 dark:text-purple-400';
      case 'adjective': return 'bg-indigo-100 text-indigo-800 dark:bg-indigo-900/20 dark:text-indigo-400';
      default: return 'bg-gray-100 text-gray-800 dark:bg-gray-900/20 dark:text-gray-400';
    }
  };

  return (
    <div className="max-w-4xl mx-auto">
      {/* Header */}
      <div className="mb-8">
        <h2 className="text-2xl font-bold text-gray-900 dark:text-gray-100 mb-2">My Words</h2>
        <p className="text-gray-600 dark:text-gray-400">
          Your saved {targetLang} vocabulary collection
        </p>
      </div>

      {/* Stats Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
        <Card className="bg-white/90 dark:bg-gray-900/90 backdrop-blur-sm border-gray-200/50 dark:border-gray-700/50 shadow-lg">
          <CardContent className="p-6">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-indigo-100 dark:bg-indigo-900/20 rounded-lg flex items-center justify-center">
                <BookOpen className="w-5 h-5 text-indigo-600 dark:text-indigo-400" />
              </div>
              <div>
                <p className="text-2xl font-bold text-gray-900 dark:text-gray-100">{savedWords.length}</p>
                <p className="text-sm text-gray-600 dark:text-gray-400">Total Words</p>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card className="bg-white/90 dark:bg-gray-900/90 backdrop-blur-sm border-gray-200/50 dark:border-gray-700/50 shadow-lg">
          <CardContent className="p-6">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-green-100 dark:bg-green-900/20 rounded-lg flex items-center justify-center">
                <Star className="w-5 h-5 text-green-600 dark:text-green-400" />
              </div>
              <div>
                <p className="text-2xl font-bold text-gray-900 dark:text-gray-100">
                  {savedWords.filter(w => w.mastered).length}
                </p>
                <p className="text-sm text-gray-600 dark:text-gray-400">Mastered</p>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card className="bg-white/90 dark:bg-gray-900/90 backdrop-blur-sm border-gray-200/50 dark:border-gray-700/50 shadow-lg">
          <CardContent className="p-6">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-purple-100 dark:bg-purple-900/20 rounded-lg flex items-center justify-center">
                <Filter className="w-5 h-5 text-purple-600 dark:text-purple-400" />
              </div>
              <div>
                <p className="text-2xl font-bold text-gray-900 dark:text-gray-100">
                  {Math.round(savedWords.reduce((acc, w) => acc + w.practiced, 0) / savedWords.length)}
                </p>
                <p className="text-sm text-gray-600 dark:text-gray-400">Avg. Practice</p>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Search and Filter */}
      <Card className="mb-8 bg-white/90 dark:bg-gray-900/90 backdrop-blur-sm border-gray-200/50 dark:border-gray-700/50 shadow-lg">
        <CardContent className="p-6">
          <div className="flex flex-col md:flex-row gap-4">
            <div className="flex-1 relative">
              <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 w-4 h-4 text-gray-400 dark:text-gray-500" />
              <Input 
                placeholder="Search your words..." 
                className="w-full h-12 pl-12 border-gray-200 dark:border-gray-700 dark:bg-gray-800 focus:border-indigo-300 focus:ring-indigo-200"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
            </div>
            <div className="flex gap-2">
              {['all', 'beginner', 'intermediate', 'advanced'].map(level => (
                <Button
                  key={level}
                  variant={filterLevel === level ? "default" : "outline"}
                  size="sm"
                  onClick={() => setFilterLevel(level)}
                  className={`capitalize ${
                    filterLevel === level 
                      ? 'bg-indigo-600 hover:bg-indigo-700 text-white' 
                      : 'hover:bg-indigo-50 dark:hover:bg-indigo-900/20 hover:text-indigo-600 dark:hover:text-indigo-400'
                  }`}
                >
                  {level}
                </Button>
              ))}
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Words List */}
      <Card className="bg-white/90 dark:bg-gray-900/90 backdrop-blur-sm border-gray-200/50 dark:border-gray-700/50 shadow-lg">
        <CardContent className="p-0">
          <div className="max-h-[600px] overflow-y-auto">
            {filteredWords.length === 0 ? (
              <div className="p-12 text-center">
                <BookOpen className="w-12 h-12 text-gray-400 dark:text-gray-500 mx-auto mb-4" />
                <h3 className="text-lg font-semibold text-gray-900 dark:text-gray-100 mb-2">
                  No words found
                </h3>
                <p className="text-gray-600 dark:text-gray-400">
                  {searchQuery ? 'Try adjusting your search or filter.' : 'Start learning to build your vocabulary!'}
                </p>
              </div>
            ) : (
              filteredWords.map((word, index) => (
                <div key={word.id} className="p-6 border-b border-gray-100/80 dark:border-gray-800/80 last:border-b-0 hover:bg-gray-50/50 dark:hover:bg-gray-800/50 transition-colors duration-200">
                  <div className="space-y-4">
                    {/* Word Header */}
                    <div className="flex items-start justify-between">
                      <div className="flex-1">
                        <div className="flex items-center gap-3 mb-2">
                          <h3 className="text-xl font-bold text-gray-900 dark:text-gray-100">
                            {word.word}
                          </h3>
                          {word.mastered && (
                            <Star className="w-5 h-5 text-yellow-500 fill-current" />
                          )}
                        </div>
                        <p className="text-lg text-gray-600 dark:text-gray-400 mb-3">
                          {word.translation}
                        </p>
                        <div className="flex gap-2 mb-3">
                          <Badge className={getLevelColor(word.level)}>
                            {word.level}
                          </Badge>
                          <Badge className={getCategoryColor(word.category)}>
                            {word.category}
                          </Badge>
                          <Badge variant="outline" className="text-gray-600 dark:text-gray-400">
                            Practiced {word.practiced}x
                          </Badge>
                        </div>
                      </div>
                      <div className="flex gap-2">
                        <Tooltip>
                          <TooltipTrigger asChild>
                            <Button 
                              variant="ghost" 
                              size="sm" 
                              className="h-10 w-10 p-0 hover:bg-indigo-50 dark:hover:bg-indigo-900/20 hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors duration-200"
                            >
                              <Volume2 className="w-4 h-4 text-gray-600 dark:text-gray-400" />
                            </Button>
                          </TooltipTrigger>
                          <TooltipContent>
                            <p>Play pronunciation</p>
                          </TooltipContent>
                        </Tooltip>
                        
                        <Tooltip>
                          <TooltipTrigger asChild>
                            <Button 
                              variant="ghost" 
                              size="sm" 
                              className="h-10 w-10 p-0 hover:bg-red-50 dark:hover:bg-red-900/20 hover:text-red-600 dark:hover:text-red-400 transition-colors duration-200"
                            >
                              <Trash2 className="w-4 h-4 text-gray-600 dark:text-gray-400" />
                            </Button>
                          </TooltipTrigger>
                          <TooltipContent>
                            <p>Remove word</p>
                          </TooltipContent>
                        </Tooltip>
                      </div>
                    </div>

                    {/* Example Sentence */}
                    <div className="bg-gray-50/50 dark:bg-gray-800/50 rounded-lg p-4">
                      <p className="text-gray-900 dark:text-gray-100 font-medium mb-2">
                        {word.example}
                      </p>
                      <p className="text-gray-600 dark:text-gray-400 text-sm">
                        {word.exampleTranslation}
                      </p>
                    </div>

                    {/* Footer Info */}
                    <div className="flex justify-between items-center text-sm text-gray-500 dark:text-gray-400">
                      <span>Added on {new Date(word.dateAdded).toLocaleDateString()}</span>
                      <Button 
                        variant="outline" 
                        size="sm"
                        className="hover:bg-indigo-50 dark:hover:bg-indigo-900/20 hover:text-indigo-600 dark:hover:text-indigo-400"
                      >
                        Practice
                      </Button>
                    </div>
                  </div>
                </div>
              ))
            )}
          </div>
        </CardContent>
      </Card>
    </div>
  );
}