'use client';
import { useState, useEffect } from 'react';

export default function Ex3() {
  const [timeLeft, setTimeLeft] = useState(45 * 60); // 45 minutes en secondes
  const [isActive, setIsActive] = useState(false);
  const [headerColor, setHeaderColor] = useState('green'); // green, violet, brown

  useEffect(() => {
    let interval: NodeJS.Timeout | null = null;
    if (isActive && timeLeft > 0) {
      interval = setInterval(() => {
        setTimeLeft(timeLeft => timeLeft - 1);
      }, 1000);
    } else if (timeLeft === 0) {
      setIsActive(false);
    }
    return () => {
      if (interval) clearInterval(interval);
    };
  }, [isActive, timeLeft]);

  const formatTime = (seconds: number) => {
    const minutes = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${minutes}min ${secs}s`;
  };

  const toggleTimer = () => {
    if (isActive) {
      // Si le chrono est déjà lancé et on reclique, on enlève une minute
      setTimeLeft(prev => Math.max(0, prev - 60));
    } else {
      // Sinon on démarre/arrête le chrono normalement
      setIsActive(!isActive);
    }
  };

  const cycleHeaderColor = () => {
    setHeaderColor(prev => {
      switch(prev) {
        case 'green': return 'violet';
        case 'violet': return 'brown';
        case 'brown': return 'blue';
        case 'blue': return 'red';
        case 'red': return 'orange';
        case 'orange': return 'purple';
        case 'purple': return 'pink';
        case 'pink': return 'cyan';
        case 'cyan': return 'green';
        default: return 'green';
      }
    });
  };

  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <header className={`header color-${headerColor}`}>
        <div className="flex items-center gap-2">
          <a href="/instructions" className="instructions-link">
            <span>Instructions</span>
            <span>et Aide</span>
          </a>
          <div className="flex items-center gap-1">
            {Array.from({ length: 6 }, (_, i) => (
              <a 
                key={i} 
                href={`/ex${i + 1}`} 
                className={`tab ${i === 2 ? 'active' : ''}`}
                onClick={i === 5 ? (e) => { e.preventDefault(); cycleHeaderColor(); } : undefined}
              >
                <div className="flex items-center gap-1">
                  <span>&lt;&gt;</span>
                  <span>Ex {i + 1}</span>
                </div>
                <span className="tab-badge">1pts</span>
              </a>
            ))}
          </div>
        </div>
        <div className="flex flex-col items-end text-white">
          <span className="user-name">Adrien Lassus*</span>
          <span>Termine dans :</span>
          <span 
            onClick={toggleTimer}
            className="timer-display"
            title={isActive ? "Cliquer pour mettre en pause" : "Cliquer pour démarrer"}
          >
            {formatTime(timeLeft)}
          </span>
        </div>
      </header>

      {/* Layout principal */}
      <div id="layout">
        {/* Colonne gauche - Énoncé */}
        <div className="enonce-card">
          <div className="enonce-header">
            <span>Énoncé</span>
            <button className="options-btn">⋮</button>
          </div>
          <div className="enonce-body">
            <h2 className="text-lg font-semibold mb-3">POOA2_4 Classe Mot : Attributs</h2>
            <p className="mb-3">
              Complétez la classe Mot avec les attributs privés suivants : Attention l&apos;ordre et le nom des attributs sont à respecter
            </p>
            <div className="code-block">
              class Mot
            </div>
            <p className="mb-3 secondary">
              Attention à tester les cas aux limites
            </p>
            <div className="mb-3">
              <span className="mark">Exemple :</span>
            </div>
            <p className="mb-3 secondary" style={{ whiteSpace: 'pre-line' }}>
              • lemot, de type string{'\n'}• categorie_grammaticale, de type string{'\n'}• definition, de type string{'\n'}• genre, de type char
            </p>
            <p>
              <span className="mark">Pas de Main, ni d&apos;affichage</span>
            </p>
          </div>
        </div>

        {/* Colonne centrale - Éditeur */}
        <div className="editor-container">
          {/* Toolbar */}
          <div className="toolbar">
            <button className="toolbar-btn snippets toolbar-label-small">Snippets ▾</button>
            <button className="toolbar-btn plus">+</button>
            <button className="toolbar-btn save">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                <path d="M19 12v7H5v-7H3v7c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2v-7h-2zm-6 .67l2.59-2.58L17 11.5l-5 5-5-5 1.41-1.41L11 12.67V3h2z"/>
              </svg>
            </button>
            <span className="toolbar-label">Theme</span>
            <select className="toolbar-select">
              <option>Eclipse ▾</option>
            </select>
            <button className="toolbar-btn zoom">−</button>
            <button className="toolbar-btn zoom">+</button>
            <button className="toolbar-btn more">⋯</button>
          </div>

          {/* Zone de code */}
          <div className="editor-area">
            <div className="gutter">
              <div>1</div>
              <div>2</div>
              <div>3</div>
              <div>4</div>
              <div>5</div>
              <div>6</div>
              <div>7</div>
              <div>8</div>
              <div>9</div>
              <div>10</div>
            </div>
          <div className="code-area">
            <textarea 
              className="code-editor-editable"
              defaultValue={`using System;

public class Mot
{
    private string lemot;
    private string categorie_grammaticale;
    private string definition;
    private char genre;
}`}
              spellCheck={false}
            />
          </div>
          </div>

          {/* Bouton Exécuter */}
          <button className="execute-btn">
            <div className="execute-icon">▶</div>
            <span>Exécuter</span>
          </button>
        </div>

        {/* Colonne droite - Chat */}
        <div className="chat-container">
          <div className="chat-header">
            <span>Chat Enseignant</span>
            <button className="chat-icon">▶</button>
          </div>
          <div className="chat-body">
            {/* Zone de chat vide */}
          </div>
          <div className="chat-footer">
            <div className="format-tools">
              <button className="format-btn">🪄</button>
              <button className="format-btn">B</button>
              <button className="format-btn">I</button>
              <button className="format-btn">U</button>
              <button className="format-btn">A</button>
              <button className="format-btn">•</button>
              <button className="format-btn">1.</button>
            </div>
            <div className="input-container">
              <textarea 
                className="chat-input" 
                placeholder="Tapez votre message..."
                rows={1}
              />
              <div className="resize-handle"></div>
            </div>
            <div className="send-container">
              <button className="send-btn">📤</button>
              <button className="emoji-btn">😊</button>
            </div>
          </div>
        </div>
      </div>

      {/* Footer */}
      <footer className="footer">
        <p>Plateforme d&apos;évaluation en ligne - Tous droits réservés</p>
      </footer>
    </div>
  );
}
