export default function InstructionsPage() {
  return (
    <div className="p-6 space-y-4 text-sm leading-6 max-w-4xl">
      <h2 className="text-2xl font-semibold">Instructions Générales</h2>
      <ul className="list-disc pl-6 space-y-1">
        <li>Ne pas ouvrir d&apos;autres onglets.</li>
        <li>Ne pas sortir de la fenêtre d&apos;examen.</li>
        <li>Ne pas s&apos;aider de vos camarades.</li>
        <li>Ne pas copier des ressources externes.</li>
      </ul>
      <h3 className="text-xl font-semibold">Aide</h3>
      <p>Vous êtes actuellement connecté. Si vous souhaitez vous déconnecter, cliquez « ici ».</p>
      <div className="space-y-3">
        <h4 className="font-semibold">F.A.Q.</h4>
        <p>Vous pouvez tester/soumettre plusieurs fois, 10 secondes entre chaque essai.</p>
        <p>Si un exercice ne se charge pas, essayez le bouton refresh ou rafraîchissez la page.</p>
      </div>
    </div>
  );
}


