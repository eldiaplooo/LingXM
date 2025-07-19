import { useState } from 'react';
import { useEffect } from 'react';
import { MyWordsPage } from './MyWordsPage';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Slider } from '@/components/ui/slider';
import { Switch } from '@/components/ui/switch';
import {
  Tooltip,
  TooltipTrigger,
  TooltipContent,
  TooltipProvider,
} from '@/components/ui/tooltip';
import { Play, Mic, RefreshCcw, Lock, Search, Globe, Sparkles, Volume2, MicIcon, Sun, Moon } from 'lucide-react';

export default function StartPage() {
  const [currentPage, setCurrentPage] = useState('practice');
  const [targetLang, setTargetLang] = useState('Spanish');
  const [sourceLang, setSourceLang] = useState('English');
  const [sentenceCount, setSentenceCount] = useState([8]);
  const [searchQuery, setSearchQuery] = useState('');
  const [isDarkMode, setIsDarkMode] = useState(false);

  // Theme effect
  useEffect(() => {
    if (isDarkMode) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [isDarkMode]);

  // Sentence count mapping
  const sentenceCountMap = {
    1: 5,
    2: 8,
    3: 12,
    4: 15,
    5: 20
  };

  const getCurrentSentenceCount = () => sentenceCountMap[sentenceCount[0] as keyof typeof sentenceCountMap];

  const languages = [
    'English', 'Spanish', 'French', 'German', 'Italian', 'Portuguese', 
    'Chinese', 'Japanese', 'Korean', 'Russian', 'Arabic', 'Dutch', 'Swedish'
  ];

  const wordCounts = [50, 100, 150, 200, 500];

  const handleWordCountClick = (count: number) => {
    console.log(`Load ${count} most frequent words`);
  };

  const handleRandomList = () => {
    console.log('Generate random sentence list');
  };

  const handleSearch = (query: string) => {
    setSearchQuery(query);
    console.log(`Search for: ${query}`);
  };

  const handleRefresh = () => {
    console.log('Refresh sentence list');
  };

  const sampleSentences = [
    { en: "The weather is absolutely beautiful today.", es: "El clima está absolutamente hermoso hoy." },
    { en: "I would like to order some delicious food.", es: "Me gustaría pedir algo de comida deliciosa." },
    { en: "Where is the nearest train station?", es: "¿Dónde está la estación de tren más cercana?" },
    { en: "Can you help me with directions to the city center?", es: "¿Puedes ayudarme con las direcciones al centro de la ciudad?" },
    { en: "What time does the store open in the morning?", es: "¿A qué hora abre la tienda por la mañana?" },
    { en: "I'm looking for a good restaurant nearby.", es: "Estoy buscando un buen restaurante cerca." },
    { en: "How much does this beautiful item cost?", es: "¿Cuánto cuesta este hermoso artículo?" },
    { en: "Do you speak English fluently?", es: "¿Hablas inglés con fluidez?" },
    { en: "I need to find a comfortable hotel.", es: "Necesito encontrar un hotel cómodo." },
    { en: "Thank you very much for your help.", es: "Muchas gracias por tu ayuda." }
  ];

  return (
    <TooltipProvider>
      <div className="min-h-screen world-bg dark:world-bg-dark transition-colors duration-300">
        <div className="flex min-h-screen">
          {/* Sidebar */}
          <div className="w-80 bg-white/95 dark:bg-gray-900/95 backdrop-blur-xl border-r border-gray-200/50 dark:border-gray-700/50 shadow-xl transition-colors duration-300">
            <div className="p-8 h-full overflow-y-auto">
              {/* Logo */}
              <div className="mb-10">
                <div className="flex items-center justify-between mb-2">
                  <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-gradient-to-br from-indigo-500 to-purple-600 rounded-xl flex items-center justify-center">
                    <Globe className="w-6 h-6 text-white" />
                  </div>
                    <h1 className="text-3xl font-bold bg-gradient-to-r from-indigo-600 to-purple-600 dark:from-indigo-400 dark:to-purple-400 bg-clip-text text-transparent">
                    LingXM
                  </h1>
                  </div>
                  
                  {/* Theme Toggle */}
                  <div className="flex items-center gap-2">
                    <Sun className="w-4 h-4 text-gray-500 dark:text-gray-400" />
                    <Switch
                      checked={isDarkMode}
                      onCheckedChange={setIsDarkMode}
                      className="data-[state=checked]:bg-indigo-600"
                    />
                    <Moon className="w-4 h-4 text-gray-500 dark:text-gray-400" />
                  </div>
                </div>
                <p className="text-sm text-gray-500 dark:text-gray-400 ml-13">Master languages naturally</p>
                <p className="text-xs text-gray-400 dark:text-gray-500 ml-13 mt-1">Smart-People</p>
              </div>

              {/* Navigation */}
              <div className="mb-8">
                <div className="flex gap-2">
                  <Button 
                    variant={currentPage === 'practice' ? "default" : "outline"}
                    size="sm"
                    onClick={() => setCurrentPage('practice')}
                    className={`flex-1 h-10 font-medium ${
                      currentPage === 'practice' 
                        ? 'bg-indigo-600 hover:bg-indigo-700 text-white' 
                        : 'border-gray-200 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-800'
                    }`}
                  >
                    Practice
                  </Button>
                  <Button 
                    variant={currentPage === 'my-words' ? "default" : "outline"}
                    size="sm"
                    onClick={() => setCurrentPage('my-words')}
                    className={`flex-1 h-10 font-medium ${
                      currentPage === 'my-words' 
                        ? 'bg-indigo-600 hover:bg-indigo-700 text-white' 
                        : 'border-gray-200 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-800'
                    }`}
                  >
                    My Words
                  </Button>
                </div>
              </div>

              {/* Language Selection */}
              <div className="space-y-6 mb-10">
                <div className="space-y-3">
                  <label className="flex items-center gap-2 text-sm font-semibold text-gray-700 dark:text-gray-300">
                    <span className="text-indigo-500">▸</span>
                    I am learning
                  </label>
                  <Select value={targetLang} onValueChange={setTargetLang}>
                    <SelectTrigger className="w-full h-12 border-gray-200 dark:border-gray-700 dark:bg-gray-800 focus:border-indigo-300 focus:ring-indigo-200">
                      <SelectValue />
                    </SelectTrigger>
                    <SelectContent>
                      {languages.map(lang => (
                        <SelectItem key={lang} value={lang}>{lang}</SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>

                <div className="space-y-3">
                  <label className="flex items-center gap-2 text-sm font-semibold text-gray-700 dark:text-gray-300">
                    <span className="text-indigo-500">▸</span>
                    I speak
                  </label>
                  <Select value={sourceLang} onValueChange={setSourceLang}>
                    <SelectTrigger className="w-full h-12 border-gray-200 dark:border-gray-700 dark:bg-gray-800 focus:border-indigo-300 focus:ring-indigo-200">
                      <SelectValue />
                    </SelectTrigger>
                    <SelectContent>
                      {languages.map(lang => (
                        <SelectItem key={lang} value={lang}>{lang}</SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>
              </div>

              {/* Search */}
              <div className="mb-10">
                <label className="block text-sm font-semibold text-gray-700 dark:text-gray-300 mb-3">
                  Search new words
                </label>
                <div className="relative">
                  <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 w-4 h-4 text-gray-400 dark:text-gray-500" />
                  <Input 
                    placeholder="Type a word to search..." 
                    className="w-full h-12 pl-12 border-gray-200 dark:border-gray-700 dark:bg-gray-800 focus:border-indigo-300 focus:ring-indigo-200"
                    value={searchQuery}
                    onChange={(e) => handleSearch(e.target.value)}
                  />
                </div>
              </div>

              {/* Most Frequent Words */}
              <div className="mb-10">
                <label className="block text-sm font-semibold text-gray-700 dark:text-gray-300 mb-4">
                  Most-frequent words
                </label>
                <div className="grid grid-cols-3 gap-2">
                  {wordCounts.map(count => (
                    <Button
                      key={count}
                      variant="outline"
                      size="sm"
                      onClick={() => handleWordCountClick(count)}
                      className="h-10 hover:bg-indigo-50 dark:hover:bg-indigo-900/20 hover:border-indigo-300 hover:text-indigo-700 dark:hover:text-indigo-400 transition-all duration-200"
                    >
                      {count}
                    </Button>
                  ))}
                  <Button
                    variant="outline"
                    size="sm"
                    onClick={() => handleWordCountClick(1000)}
                    className="h-10 hover:bg-indigo-50 dark:hover:bg-indigo-900/20 hover:border-indigo-300 hover:text-indigo-700 dark:hover:text-indigo-400 transition-all duration-200"
                  >
                    🂠
                  </Button>
                </div>
              </div>

              {/* Random List Button */}
              <div className="mb-10">
                <Button 
                  variant="outline" 
                  className="w-full h-12 hover:bg-indigo-50 dark:hover:bg-indigo-900/20 hover:border-indigo-300 hover:text-indigo-700 dark:hover:text-indigo-400 transition-all duration-200"
                  onClick={handleRandomList}
                >
                  <span className="text-indigo-500 mr-2">▸</span>
                  <span className="font-semibold">Random list</span>
                </Button>
              </div>

              {/* Pro Subscription Card */}
              <Card className="bg-gradient-to-br from-indigo-50 via-purple-50 to-pink-50 dark:from-indigo-950/50 dark:via-purple-950/50 dark:to-pink-950/50 border-indigo-200/50 dark:border-indigo-800/50 shadow-lg">
                <CardHeader className="pb-4">
                  <CardTitle className="flex items-center gap-2 text-lg">
                    <Sparkles className="w-5 h-5 text-indigo-600 dark:text-indigo-400" />
                    Pro Subscription
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="space-y-3 text-sm">
                    <div className="flex items-center gap-3">
                      <div className="w-2 h-2 bg-indigo-500 rounded-full"></div>
                      <span className="text-gray-700 dark:text-gray-300">AI Levels (A1-C2)</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <div className="w-2 h-2 bg-purple-500 rounded-full"></div>
                      <span className="text-gray-700 dark:text-gray-300">Unlimited examples</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <div className="w-2 h-2 bg-pink-500 rounded-full"></div>
                      <span className="text-gray-700 dark:text-gray-300">Speech feedback</span>
                    </div>
                  </div>
                  <Tooltip>
                    <TooltipTrigger asChild>
                      <Button 
                        disabled 
                        className="w-full h-11 bg-gray-300 dark:bg-gray-700 text-gray-500 dark:text-gray-400 cursor-not-allowed hover:bg-gray-300 dark:hover:bg-gray-700"
                      >
                        <Lock className="w-4 h-4 mr-2" />
                        Go Pro
                      </Button>
                    </TooltipTrigger>
                    <TooltipContent side="top" className="bg-gray-900 text-white">
                      <p>Subscribe to access these perks</p>
                    </TooltipContent>
                  </Tooltip>
                </CardContent>
              </Card>
            </div>
          </div>

          {/* Main Content */}
          <div className="flex-1 p-8">
            {currentPage === 'practice' ? (
              <div className="max-w-4xl mx-auto">
                {/* Header */}
                <div className="mb-8">
                  <h2 className="text-2xl font-bold text-gray-900 dark:text-gray-100 mb-2">Practice Sentences</h2>
                  <p className="text-gray-600 dark:text-gray-400">Learn {targetLang} through contextual examples</p>
                </div>

                {/* Sentence Count Slider */}
                <Card className="mb-8 bg-white/90 dark:bg-gray-900/90 backdrop-blur-sm border-gray-200/50 dark:border-gray-700/50 shadow-lg">
                  <CardContent className="p-6">
                    <div className="space-y-4">
                      <label className="block text-sm font-semibold text-gray-700 dark:text-gray-300">
                        Sentence count: {getCurrentSentenceCount()} sentences
                      </label>
                      <div className="px-2">
                        <Slider
                          value={sentenceCount}
                          onValueChange={setSentenceCount}
                          max={5}
                          min={1}
                          step={1}
                          className="w-full"
                        />
                        <div className="flex justify-between text-xs text-gray-400 dark:text-gray-500 mt-2 px-1">
                          <span>5</span>
                          <span>8</span>
                          <span>12</span>
                          <span>15</span>
                          <span>20</span>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                {/* Sentence List */}
                <Card className="bg-white/90 dark:bg-gray-900/90 backdrop-blur-sm border-gray-200/50 dark:border-gray-700/50 shadow-lg">
                  <CardContent className="p-0">
                    <div className="max-h-[500px] overflow-y-auto">
                      {sampleSentences.slice(0, getCurrentSentenceCount()).map((sentence, index) => (
                        <div key={index} className="p-6 border-b border-gray-100/80 dark:border-gray-800/80 last:border-b-0 hover:bg-gray-50/50 dark:hover:bg-gray-800/50 transition-colors duration-200">
                          <div className="space-y-4">
                            {/* Source sentence */}
                            <div className="text-lg font-semibold text-gray-900 dark:text-gray-100 leading-relaxed">
                              {sentence.en}
                            </div>
                            
                            {/* Target sentence */}
                            <div className="text-gray-600 dark:text-gray-400 leading-relaxed">
                              {targetLang === 'Spanish' ? sentence.es : `Sample translation in ${targetLang}`}
                            </div>
                            
                            {/* Action buttons */}
                            <div className="flex gap-3 pt-2">
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
                                  <p>Play audio</p>
                                </TooltipContent>
                              </Tooltip>
                              
                              <Tooltip>
                                <TooltipTrigger asChild>
                                  <Button 
                                    variant="ghost" 
                                    size="sm" 
                                    className="h-10 w-10 p-0 hover:bg-red-50 dark:hover:bg-red-900/20 hover:text-red-600 dark:hover:text-red-400 transition-colors duration-200"
                                  >
                                    <MicIcon className="w-4 h-4 text-gray-600 dark:text-gray-400" />
                                  </Button>
                                </TooltipTrigger>
                                <TooltipContent>
                                  <p>Record pronunciation</p>
                                </TooltipContent>
                              </Tooltip>
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>

                {/* Refresh Button */}
                <div className="flex justify-center mt-8">
                  <Tooltip>
                    <TooltipTrigger asChild>
                      <Button 
                        variant="outline" 
                        size="lg"
                        onClick={handleRefresh}
                        className="h-12 w-12 p-0 rounded-full hover:bg-indigo-50 dark:hover:bg-indigo-900/20 hover:border-indigo-300 hover:text-indigo-600 dark:hover:text-indigo-400 transition-all duration-200 shadow-lg"
                      >
                        <RefreshCcw className="w-5 h-5 text-gray-600 dark:text-gray-400" />
                      </Button>
                    </TooltipTrigger>
                    <TooltipContent>
                      <p>Refresh sentences</p>
                    </TooltipContent>
                  </Tooltip>
                </div>
              </div>
            ) : (
              <MyWordsPage targetLang={targetLang} sourceLang={sourceLang} isDarkMode={isDarkMode} />
            )}
          </div>
        </div>
      </div>
    </TooltipProvider>
  );
}