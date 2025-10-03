'use client';
import { useState, useEffect } from 'react';

export default function Ex4() {
  const [timeLeft, setTimeLeft] = useState(45 * 60); // 45 minutes en secondes
  const [isActive, setIsActive] = useState(false);

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
    setIsActive(!isActive);
  };

  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <header className="header">
        <div className="flex items-center gap-2">
          <a href="/instructions" className="instructions-link">
            Instructions et Aide
          </a>
          <div className="flex items-center gap-1">
            {Array.from({ length: 6 }, (_, i) => (
              <a key={i} href={`/ex${i + 1}`} className={`tab ${i === 3 ? 'active' : ''}`}>
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
            <h2 className="text-lg font-semibold mb-3">POOA2_4 Classe Mot : Constructeur naturel</h2>
            <p className="mb-3">
              Ajoutez un constructeur naturel, qui prend comme paramètres, dans l&apos;ordre, une valeur pour : lemot, categorie_grammaticale, definition, genre. Le genre du mot ne peut prendre que les valeurs f (féminin) ou m (masculin) ou n (neutre pour tous les mots non genrés) avec n comme valeur par défaut.
            </p>
            <div className="code-block">
              public Mot(string lemot, string categorie_grammaticale, string definition, char genre = &apos;n&apos;)
            </div>
            <p className="mb-3 secondary">
              Attention à tester les cas aux limites
            </p>
            <div className="mb-3">
              <span className="mark">Exemple :</span>
            </div>
            <p className="mb-3 secondary" style={{ whiteSpace: 'pre-line' }}>
              Mot mot1 = new Mot(&quot;chat&quot;, &quot;nom&quot;, &quot;animal domestique&quot;, &apos;m&apos;);{'\n'}Mot mot2 = new Mot(&quot;maison&quot;, &quot;nom&quot;, &quot;habitation&quot;); // genre = &apos;n&apos; par défaut
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
              <div>11</div>
            </div>
          <div className="code-area">
            <div className="line"><span className="keyword">using</span> System;</div>
            <div className="line"></div>
            <div className="line"><span className="keyword">public</span> <span className="keyword">class</span> Mot</div>
            <div className="line">{`{`}</div>
            <div className="line">    <span className="keyword">private</span> <span className="keyword">string</span> lemot;</div>
            <div className="line">    <span className="keyword">private</span> <span className="keyword">string</span> categorie_grammaticale;</div>
            <div className="line">    <span className="keyword">private</span> <span className="keyword">string</span> definition;</div>
            <div className="line">    <span className="keyword">private</span> <span className="keyword">char</span> genre;</div>
            <div className="line"></div>
            <div className="line">    <span className="keyword">public</span> Mot(<span className="keyword">string</span> lemot, <span className="keyword">string</span> categorie_grammaticale, <span className="keyword">string</span> definition, <span className="keyword">char</span> genre = <span className="string">&apos;n&apos;</span>)</div>
            <div className="line">    {`{`}</div>
            <div className="line">        {`// TO COMPLETE`}</div>
            <div className="line">    {`}`}</div>
            <div className="line">{`}`}</div>
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
