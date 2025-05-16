import React, { useState } from 'react';
import { X, Plus } from 'lucide-react';

interface DebateTheme {
  id: string;
  title: string;
  strategy: string;
}

interface DebateModalProps {
  isOpen: boolean;
  onClose: () => void;
  themes: DebateTheme[];
  onUpdateThemes: (themes: DebateTheme[]) => void;
}

export default function DebateModal({
  isOpen,
  onClose,
  themes,
  onUpdateThemes,
}: DebateModalProps) {
  const [newTheme, setNewTheme] = useState({
    title: '',
    strategy: '',
  });

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onUpdateThemes([
      ...themes,
      {
        id: Date.now().toString(),
        ...newTheme,
      },
    ]);
    setNewTheme({ title: '', strategy: '' });
  };

  return (
    <div className="fixed inset-0 flex items-center justify-center z-50">
      <div 
        className="absolute inset-0 bg-background/80 backdrop-blur-sm"
        onClick={onClose}
      ></div>

      <div className="relative bg-card border border-primary/20 rounded-xl w-full max-w-2xl mx-4 shadow-2xl animate-scale-in">
        <div className="absolute inset-0 bg-gradient-to-b from-primary/5 to-transparent opacity-30 rounded-xl"></div>
        
        {/* Header */}
        <div className="relative flex items-center justify-between p-4 border-b border-primary/20">
          <h3 className="text-xl font-semibold text-white text-neon">Ejes Temáticos del Debate</h3>
          <button
            onClick={onClose}
            className="p-1.5 hover:bg-primary/10 rounded-lg transition-colors duration-300"
          >
            <X className="w-5 h-5 text-gray-400" />
          </button>
        </div>

        {/* Content */}
        <div className="relative p-4">
          {/* Add Theme Form */}
          <form onSubmit={handleSubmit} className="bg-background/30 p-4 rounded-lg border border-primary/20 mb-4">
            <div className="space-y-3">
              <div>
                <label className="block text-sm font-medium text-gray-400 mb-1">
                  Eje Temático
                </label>
                <input
                  type="text"
                  value={newTheme.title}
                  onChange={(e) => setNewTheme({ ...newTheme, title: e.target.value })}
                  className="w-full bg-background/90 border border-primary/20 rounded-lg px-3 py-1.5 text-gray-200 text-sm"
                  placeholder="Ej: Desarrollo Urbano"
                  required
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-400 mb-1">
                  Estrategia
                </label>
                <textarea
                  value={newTheme.strategy}
                  onChange={(e) => setNewTheme({ ...newTheme, strategy: e.target.value })}
                  className="w-full bg-background/90 border border-primary/20 rounded-lg px-3 py-1.5 text-gray-200 resize-none text-sm"
                  rows={2}
                  placeholder="Describa la estrategia para este eje temático..."
                  required
                />
              </div>
            </div>
            <div className="flex justify-end mt-3">
              <button
                type="submit"
                className="flex items-center gap-2 px-3 py-1.5 bg-primary/10 border border-primary/30 rounded-lg text-primary hover:bg-primary/20 transition-all duration-300 text-sm"
              >
                <Plus className="w-4 h-4" />
                <span>Agregar Eje Temático</span>
              </button>
            </div>
          </form>

          {/* Themes List */}
          <div className="max-h-[300px] overflow-y-auto pr-2">
            <div className="space-y-2">
              {themes.map((theme) => (
                <div
                  key={theme.id}
                  className="bg-background/30 p-3 rounded-lg border border-primary/20"
                >
                  <h4 className="text-sm font-medium text-white mb-1">{theme.title}</h4>
                  <p className="text-xs text-gray-400">{theme.strategy}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}