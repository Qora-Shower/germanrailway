
import { useState, useRef, useEffect } from 'react';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Play, MessageCircle, Image, RotateCcw, HelpCircle, Send, Bot } from "lucide-react";
import Navbar from "@/components/Navbar";
import { cn } from "@/lib/utils";

interface Message {
  id: string;
  text: string;
  sender: 'user' | 'agent';
  timestamp: Date;
}

const DBAgent = () => {
  const [messages, setMessages] = useState<Message[]>([]);
  const [inputValue, setInputValue] = useState('');
  const [isUploadFrameOpen, setIsUploadFrameOpen] = useState(false);
  const [isInputFocused, setIsInputFocused] = useState(false);
  const [placeholderText, setPlaceholderText] = useState('Ask DB Agent for help');
  const [animatingText, setAnimatingText] = useState('');
  const [isAnimating, setIsAnimating] = useState(false);
  const [userColor] = useState(() => {
    const colors = ['#FF6B6B', '#4ECDC4', '#45B7D1', '#96CEB4', '#FFEAA7', '#DDA0DD', '#98D8C8'];
    return colors[Math.floor(Math.random() * colors.length)];
  });
  
  const fileInputRef = useRef<HTMLInputElement>(null);
  const chatContainerRef = useRef<HTMLDivElement>(null);

  // Animated placeholder effect
  useEffect(() => {
    if (!isInputFocused && inputValue === '') {
      const texts = [
        'Ask DB Agent for help',
        'Ask DB Agent any related DB question'
      ];
      let currentTextIndex = 0;
      let currentCharIndex = 0;
      let isDeleting = false;

      const animateText = () => {
        setIsAnimating(true);
        const currentText = texts[currentTextIndex];
        
        if (!isDeleting && currentCharIndex < currentText.length) {
          setAnimatingText(currentText.slice(0, currentCharIndex + 1));
          currentCharIndex++;
          setTimeout(animateText, 100);
        } else if (isDeleting && currentCharIndex > 0) {
          setAnimatingText(currentText.slice(0, currentCharIndex - 1));
          currentCharIndex--;
          setTimeout(animateText, 50);
        } else if (!isDeleting && currentCharIndex === currentText.length) {
          setTimeout(() => {
            isDeleting = true;
            animateText();
          }, 2000);
        } else if (isDeleting && currentCharIndex === 0) {
          isDeleting = false;
          currentTextIndex = (currentTextIndex + 1) % texts.length;
          setTimeout(animateText, 500);
        }
      };

      const timer = setTimeout(animateText, 1000);
      return () => clearTimeout(timer);
    } else {
      setIsAnimating(false);
      setAnimatingText('');
    }
  }, [isInputFocused, inputValue]);

  // Auto scroll to bottom when new messages are added
  useEffect(() => {
    if (chatContainerRef.current) {
      chatContainerRef.current.scrollTop = chatContainerRef.current.scrollHeight;
    }
  }, [messages]);

  const handleSendMessage = async () => {
    if (!inputValue.trim()) return;

    const userMessage: Message = {
      id: Date.now().toString(),
      text: inputValue,
      sender: 'user',
      timestamp: new Date()
    };

    setMessages(prev => [...prev, userMessage]);
    setInputValue('');

    // Simulate DB Agent response with typing animation
    setTimeout(() => {
      const agentResponse: Message = {
        id: (Date.now() + 1).toString(),
        text: `Als DB Agent kann ich dir bei allen Fragen rund um die Deutsche Bahn helfen. ${inputValue.includes('job') ? 'Für Jobs schau gerne auf unserer Jobs-Seite vorbei!' : inputValue.includes('station') ? 'Informationen zu Bahnhöfen findest du auf der Stations-Seite.' : inputValue.includes('server') ? 'Server-Status kannst du auf der Servers-Seite einsehen.' : 'Wie kann ich dir weiter helfen?'}`,
        sender: 'agent',
        timestamp: new Date()
      };
      setMessages(prev => [...prev, agentResponse]);
    }, 1500);
  };

  const handleFileUpload = () => {
    fileInputRef.current?.click();
  };

  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      // Handle file upload here
      console.log('File selected:', file.name);
      setIsUploadFrameOpen(false);
    }
  };

  const startNewConversation = () => {
    setMessages([]);
    setInputValue('');
    setIsUploadFrameOpen(false);
  };

  const handleGameJoinQuestion = () => {
    const gameMessage: Message = {
      id: Date.now().toString(),
      text: "How can I join the game?",
      sender: 'user',
      timestamp: new Date()
    };

    setMessages(prev => [...prev, gameMessage]);

    setTimeout(() => {
      const agentResponse: Message = {
        id: (Date.now() + 1).toString(),
        text: "Um dem Deutsche Bahn Roblox Spiel beizutreten, gehe einfach auf die Startseite und klicke auf 'Play Now'. Du wirst dann zu Roblox weitergeleitet, wo du dem Spiel beitreten kannst. Stelle sicher, dass du Roblox installiert hast!",
        sender: 'agent',
        timestamp: new Date()
      };
      setMessages(prev => [...prev, agentResponse]);
    }, 1500);
  };

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      
      <div className="container mx-auto px-4 py-8 h-[calc(100vh-4rem)] flex flex-col">
        {/* Header with Play Now button */}
        <div className="text-center mb-8">
          <Button className="bg-db-red hover:bg-db-darkred text-white px-8 py-3 text-lg rounded-full">
            <Play className="mr-2 h-5 w-5" />
            Play Now
          </Button>
        </div>

        {/* Chat Messages Area */}
        <div 
          ref={chatContainerRef}
          className="flex-1 overflow-y-auto mb-4 space-y-4 px-4"
        >
          {messages.map((message) => (
            <div key={message.id} className={cn(
              "flex gap-3",
              message.sender === 'user' ? 'justify-end' : 'justify-start'
            )}>
              {message.sender === 'agent' && (
                <div className="flex-shrink-0">
                  <div 
                    className="w-8 h-8 rounded-full border-2 border-db-red flex items-center justify-center bg-white"
                    style={{ outlineOffset: '2px' }}
                  >
                    <Bot className="h-4 w-4 text-db-red" />
                  </div>
                </div>
              )}
              
              <div className={cn(
                "max-w-[70%]",
                message.sender === 'user' ? 'text-right' : 'text-left'
              )}>
                <div className={cn(
                  "flex items-center gap-2 mb-1",
                  message.sender === 'user' ? 'justify-end' : 'justify-start'
                )}>
                  <span className="text-sm font-medium">
                    {message.sender === 'user' ? 'Du' : 'DB Agent'}
                  </span>
                  {message.sender === 'user' && (
                    <div 
                      className="w-6 h-6 rounded-full border-2 flex-shrink-0"
                      style={{ 
                        borderColor: userColor,
                        outlineOffset: '2px',
                        outline: `2px solid ${userColor}`
                      }}
                    />
                  )}
                </div>
                <div className={cn(
                  "p-3 rounded-lg animate-fade-in",
                  message.sender === 'user' 
                    ? 'bg-db-red text-white' 
                    : 'bg-gray-100 dark:bg-gray-800 text-foreground'
                )}>
                  {message.text}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Upload Frame */}
        {isUploadFrameOpen && (
          <div className="mb-4 animate-slide-in">
            <div 
              className="bg-white dark:bg-gray-800 border rounded-t-[20px] p-6 max-h-[40vh] overflow-y-auto"
              style={{ borderRadius: '20px 20px 0px 0px' }}
            >
              <div className="space-y-4">
                <input
                  ref={fileInputRef}
                  type="file"
                  accept="image/*"
                  onChange={handleFileChange}
                  className="hidden"
                />
                
                <Button
                  onClick={handleFileUpload}
                  variant="outline"
                  className="w-full justify-start"
                >
                  <Image className="mr-2 h-4 w-4" />
                  Datei oder Foto hinzufügen
                </Button>

                <div className="space-y-2">
                  <Button
                    onClick={startNewConversation}
                    variant="outline"
                    className="w-full justify-start"
                    style={{ margin: '0 10px' }}
                  >
                    <RotateCcw className="mr-2 h-4 w-4" />
                    Start New Conversation
                  </Button>

                  <Button
                    onClick={handleGameJoinQuestion}
                    variant="outline"
                    className="w-full justify-start"
                    style={{ margin: '0 10px' }}
                  >
                    <HelpCircle className="mr-2 h-4 w-4" />
                    How can I join the Game?
                  </Button>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Input Area */}
        <div 
          className="bg-white dark:bg-gray-800 border rounded-t-[30px] p-4"
          style={{ borderRadius: '30px 30px 0px 0px' }}
        >
          <div className="flex items-center gap-3">
            <Button
              variant="ghost"
              size="icon"
              onClick={() => setIsUploadFrameOpen(!isUploadFrameOpen)}
              className="flex-shrink-0"
            >
              <Image className="h-5 w-5" />
            </Button>

            <div className="flex-1 relative">
              <Input
                value={inputValue}
                onChange={(e) => setInputValue(e.target.value)}
                onFocus={() => setIsInputFocused(true)}
                onBlur={() => setIsInputFocused(false)}
                onKeyPress={(e) => e.key === 'Enter' && handleSendMessage()}
                placeholder={isAnimating ? animatingText : (isInputFocused || inputValue ? '' : 'Ask DB Agent for help')}
                className="pr-12 border-gray-300 dark:border-gray-600 focus:border-db-red"
              />
              
              {(inputValue.trim() || isInputFocused) && (
                <Button
                  size="icon"
                  onClick={handleSendMessage}
                  className="absolute right-1 top-1/2 transform -translate-y-1/2 h-8 w-8 bg-db-red hover:bg-db-darkred"
                >
                  <Send className="h-4 w-4" />
                </Button>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DBAgent;
