'use client';

import { useState } from 'react';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Button } from '@/components/ui/button';
import { Card, CardHeader, CardTitle } from '@/components/ui/card';
import { CharacterEnumSchema, type CharacterEnum } from '@/ai/types/chat-types';

export default function ChatPage() {
  const [selectedCharacter, setSelectedCharacter] = useState<CharacterEnum | null>(null);

  const handleCharacterChange = (value: string) => {
    const character = value as CharacterEnum;
    setSelectedCharacter(character);
  };

  const characterLinks: Record<CharacterEnum, string> = {
    'Il Sognatore': 'https://character.ai/chat/MotUYalZODNCvirdg9JfC8HeTMIyK8NXgA5ZSda8dVI',
    'Nastenka': 'https://character.ai/chat/mDBNdSVm2mat5Ug6YKHQR7KfckUX2OyZ24fLSJNGMeA',
  };

  return (
    <div className="container mx-auto px-4 md:px-6 py-12 md:py-16 flex flex-col items-center justify-center min-h-[calc(100vh-4rem)]">
      <div className="text-center mb-8">
        <h1 className="text-4xl md:text-5xl font-playfair-display font-bold mb-2">
          Chatta con i Personaggi
        </h1>
        <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
          Seleziona un personaggio per avviare la conversazione su Character.AI.
        </p>
      </div>

      <Card className="w-full max-w-md shadow-lg">
        <CardHeader>
          <CardTitle className="font-cormorant-garamond text-2xl mb-4">
            Seleziona un Personaggio
          </CardTitle>
          <Select onValueChange={handleCharacterChange}>
            <SelectTrigger>
              <SelectValue placeholder="Scegli un personaggio..." />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="Il Sognatore">Il Sognatore</SelectItem>
              <SelectItem value="Nastenka">Nasten'ka</SelectItem>
            </SelectContent>
          </Select>

          {selectedCharacter && (
            <div className="mt-6 text-center">
              <Button
                variant="default"
                onClick={() => {
                  const url = characterLinks[selectedCharacter];
                  window.open(url, '_blank', 'popup,width=360,height=640,left=100,top=100');
                }}
              >
                Apri {selectedCharacter} su Character.AI
              </Button>
            </div>
          )}
        </CardHeader>
      </Card>
    </div>
  );
}
