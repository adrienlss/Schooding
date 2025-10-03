'use client';

import { useState, useEffect } from 'react';

export default function Ex2Page() {
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
        <div className="flex items-center gap-3">
          <a href="/instructions" className="tab">
            Instructions et Aide
          </a>
          <div className="flex items-center gap-3">
            {Array.from({ length: 11 }, (_, i) => (
              <a key={i} href={`/ex${i + 1}`} className={`tab ${i === 1 ? 'active' : ''}`}>
                <span>&lt;&gt;</span>
                <span>Ex {i + 1}</span>
                <span className="tab-badge">1pts</span>
              </a>
            ))}
          </div>
        </div>
        <div className="flex items-center gap-2 text-white font-semibold">
          <span>Adrien Lassus*</span>
          <span>—</span>
          <span>Termine dans : </span>
          <span 
            onClick={toggleTimer}
            className="cursor-pointer hover:bg-white hover:bg-opacity-10 px-2 py-1 rounded transition-colors"
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
            <h2 className="text-lg font-semibold mb-3">Transformation Matrice vers Vecteur</h2>
            <p className="mb-3">
              Ecrire la méthode qui consiste à traduire une matrice en un tableau (ou vecteur) et retourner le tableau (ou vecteur) résultant
            </p>
            <div className="code-block">
              int[] Matrice_Vecteur(int[,] mat)
            </div>
            <p className="mb-3 secondary">
              Attention à tester les cas aux limites
            </p>
            <div className="mb-3">
              <span className="mark">Exemple :</span>
            </div>
            <p className="mb-3 secondary">
              soit mat la matrice {`{{1,2,3},{4,5,6},{7,8,9}}`}, le résultat est le suivant : {`{1,2,3,4,5,6,7,8,9}`}
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
            <button className="toolbar-btn snippets">Snippets ▾</button>
            <button className="toolbar-btn plus">+</button>
            <button className="toolbar-btn snippets">Historique ▾</button>
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
              <div>12</div>
              <div>13</div>
              <div>14</div>
              <div>15</div>
              <div>16</div>
              <div>17</div>
              <div>18</div>
              <div>19</div>
              <div>20</div>
              <div>21</div>
              <div>22</div>
              <div>23</div>
              <div>24</div>
              <div>25</div>
              <div>26</div>
              <div>27</div>
            </div>
            <div className="code-area">
              <div className="line"><span className="keyword">static</span> <span className="keyword">int</span>[] Matrice_Vecteur(<span className="keyword">int</span>[,] mat)</div>
              <div className="line">{`{`}</div>
              <div className="line">    <span className="keyword">int</span>[] vecteur;</div>
              <div className="line"></div>
              <div className="line">    <span className="keyword">if</span> (mat == <span className="keyword">null</span>)</div>
              <div className="line">    {`{`}</div>
              <div className="line">        vecteur = <span className="keyword">null</span>;</div>
              <div className="line">    {`}`}</div>
              <div className="line">    <span className="keyword">else</span> <span className="keyword">if</span> (mat.Length == <span className="number">0</span>)</div>
              <div className="line">    {`{`}</div>
              <div className="line">        vecteur = <span className="keyword">new</span> <span className="keyword">int</span>[<span className="number">0</span>];</div>
              <div className="line">    {`}`}</div>
              <div className="line">    <span className="keyword">else</span></div>
              <div className="line">    {`{`}</div>
              <div className="line">        <span className="keyword">int</span> rows = mat.GetLength(<span className="number">0</span>);</div>
              <div className="line">        <span className="keyword">int</span> cols = mat.GetLength(<span className="number">1</span>);</div>
              <div className="line">        vecteur = <span className="keyword">new</span> <span className="keyword">int</span>[rows * cols];</div>
              <div className="line"></div>
              <div className="line">        <span className="keyword">int</span> k = <span className="number">0</span>;</div>
              <div className="line">        <span className="keyword">for</span> (<span className="keyword">int</span> i = <span className="number">0</span>; i &lt; rows; i++)</div>
              <div className="line">        {`{`}</div>
              <div className="line">            <span className="keyword">for</span> (<span className="keyword">int</span> j = <span className="number">0</span>; j &lt; cols; j++)</div>
              <div className="line">            {`{`}</div>
              <div className="line">                vecteur[k++] = mat[i, j];</div>
              <div className="line">            {`}`}</div>
              <div className="line">        {`}`}</div>
              <div className="line">    {`}`}</div>
              <div className="line"></div>
              <div className="line">    <span className="keyword">return</span> vecteur;</div>
              <div className="line">{`}`}</div>
            </div>
          </div>

          {/* Bouton Exécuter */}
          <button className="execute-btn">
            <div className="execute-icon">▶</div>
            Exécuter
          </button>
        </div>

        {/* Colonne droite - Chat Enseignant */}
        <div className="chat-container">
          <div className="chat-header">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
              <path d="M20 2H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h4l4 4 4-4h4c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2z"/>
              <path d="M7 9h10v1H7zm0 3h8v1H7zm0 3h6v1H7z" fill="white"/>
            </svg>
            <span>Chat Enseignant</span>
          </div>
          <div className="chat-body"></div>
          <div className="chat-footer">
            <div className="format-tools">
              <button className="format-btn magic">
                <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M7.5 5.6L5 7l1.4-2.5L5 2l2.5 1.4L10 2 8.6 4.5 10 7 7.5 5.6zm12 9.8L22 14l-1.4 2.5L22 19l-2.5-1.4L17 19l1.4-2.5L17 14l2.5 1.4zM22 2l-2.5 1.4L17 2l1.4 2.5L17 7l2.5-1.4L22 7l-1.4-2.5L22 2zM7.5 18.4L5 17l1.4 2.5L5 22l2.5-1.4L10 22 8.6 19.5 10 17 7.5 18.4z"/>
                </svg>
                <svg width="8" height="8" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M7 10l5 5 5-5z"/>
                </svg>
              </button>
              <button className="format-btn">B</button>
              <button className="format-btn">I</button>
              <button className="format-btn">U</button>
              <button className="format-btn active">
                A
                <svg width="8" height="8" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M7 10l5 5 5-5z"/>
                </svg>
              </button>
              <button className="format-btn">•</button>
              <button className="format-btn">1.</button>
            </div>
            <div className="input-container">
              <textarea className="chat-input" placeholder="Tapez votre message..." rows={1}></textarea>
              <div className="resize-handle"></div>
            </div>
            <div className="send-container">
              <button className="send-btn">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M2.01 21L23 12 2.01 3 2 10l15 2-15 2z"/>
                </svg>
              </button>
              <button className="emoji-btn">🙂</button>
            </div>
          </div>
        </div>
      </div>

      {/* Footer */}
      <div className="footer">
        <span>La parole est à : Sabrina BOURAOUI</span>
      </div>
    </div>
  );
}

