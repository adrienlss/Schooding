'use client';

import { useState, useEffect } from 'react';
import { usePathname } from 'next/navigation';

export default function Placeholder() {
  const pathname = usePathname();
  const exNum = pathname?.match(/ex(\d+)/)?.[1];
  const currentEx = parseInt(exNum || '1') - 1; // Convert to 0-based index
  
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

  const getEnonceContent = (exNumber: number) => {
    switch (exNumber) {
      case 2:
        return {
          title: "Décaler les valeurs d'une matrice",
          description: "Soit une matrice d'entiers en entrée et une valeur entière qui représente un décalage. Il vous est demandé que la matrice soit modifiée de telle manière que les valeurs de cette matrice soient décalées de manière circulaire. Vous aurez soin de tester les cas d'une matrice null ou de longueur 0 auquel cas la matrice est inchangée.",
          signature: "void DecaleMatrice(int[,] mat, int valeur)",
          example: "soit la matrice suivante {{1,2},{3,4}} avec un décalage de 1, on obtient alors {{4,1},{2,3}} avec un décalage de 2, on obtient alors {{3,4},{1,2}}"
        };
      case 3:
        return {
          title: "POOA2_4 Classe Mot : Attributs",
          description: "Complétez la classe Mot avec les attributs privés suivants : Attention l'ordre et le nom des attributs sont à respecter",
          signature: "class Mot",
          example: "• lemot, de type string\n• categorie_grammaticale, de type string\n• definition, de type string\n• genre, de type char"
        };
      case 4:
        return {
          title: "POOA2_4 Classe Mot : Constructeur naturel",
          description: "Ajoutez un constructeur naturel, qui prend comme paramètres, dans l'ordre, une valeur pour : lemot, categorie_grammaticale, definition, genre. Le genre du mot ne peut prendre que les valeurs f (féminin) ou m (masculin) ou n (neutre pour tous les mots non genrés) avec n comme valeur par défaut.",
          signature: "public Mot(string lemot, string categorie_grammaticale, string definition, char genre = 'n')",
          example: "Mot mot1 = new Mot(\"chat\", \"nom\", \"animal domestique\", 'm');\nMot mot2 = new Mot(\"maison\", \"nom\", \"habitation\"); // genre = 'n' par défaut"
        };
      default:
        return {
          title: "Transformation Matrice vers Vecteur",
          description: "Ecrire la méthode qui consiste à traduire une matrice en un tableau (ou vecteur) et retourner le tableau (ou vecteur) résultant",
          signature: "int[] Matrice_Vecteur(int[,] mat)",
          example: "soit mat la matrice {{1,2,3},{4,5,6},{7,8,9}}, le résultat est le suivant : {1,2,3,4,5,6,7,8,9}"
        };
    }
  };

  const enonceContent = getEnonceContent(currentEx + 1);

  const getCodeContent = (exNumber: number) => {
    switch (exNumber) {
      case 2:
        return (
          <textarea 
            className="code-editor-editable"
            defaultValue={`static void DecaleMatrice(int[,] mat, int valeur)
{
    if (mat == null || mat.Length == 0) return;
    int n = mat.Length;
    int r = mat.GetLength(0), c = mat.GetLength(1);
    valeur %= n; if (valeur == 0) return;
    int[] t = new int[n];
    for (int i = 0; i < n; i++) t[i] = mat[i / c, i % c];
    for (int i = 0; i < n; i++) mat[i / c, i % c] = t[(i - valeur + n) % n];
}`}
            spellCheck={false}
          />
        );
      case 3:
        return (
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
        );
      case 4:
        return (
          <textarea 
            className="code-editor-editable"
            defaultValue={`using System;

public class Mot
{
    private string lemot;
    private string categorie_grammaticale;
    private string definition;
    private char genre;

    public Mot(string lemot, string categorie_grammaticale, string definition, char genre = 'n')
    {
        // TO COMPLETE
    }
}`}
            spellCheck={false}
          />
        );
      default:
        return (
          <textarea 
            className="code-editor-editable"
            defaultValue={`static int[] Matrice_Vecteur(int[,] mat)
{
    int[] vecteur;

    if (mat == null)
    {
        vecteur = null;
    }
    else if (mat.Length == 0)
    {
        vecteur = new int[0];
    }
    else
    {
        int rows = mat.GetLength(0);
        int cols = mat.GetLength(1);
        vecteur = new int[rows * cols];

        int k = 0;
        for (int i = 0; i < rows; i++)
        {
            for (int j = 0; j < cols; j++)
            {
                vecteur[k++] = mat[i, j];
            }
        }
    }

    return vecteur;
}`}
            spellCheck={false}
          />
        );
    }
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
                className={`tab ${i === currentEx ? 'active' : ''}`}
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
            <h2 className="text-lg font-semibold mb-3">{enonceContent.title}</h2>
            <p className="mb-3">
              {enonceContent.description}
            </p>
            <div className="code-block">
              {enonceContent.signature}
            </div>
            <p className="mb-3 secondary">
              Attention à tester les cas aux limites
            </p>
            <div className="mb-3">
              <span className="mark">Exemple :</span>
            </div>
            <p className="mb-3 secondary" style={{ whiteSpace: 'pre-line' }}>
              {enonceContent.example}
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
