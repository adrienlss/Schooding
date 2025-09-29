export default function InstructionsPage() {
  return (
    <div className="lg:col-span-3">
      <div className="p-6 space-y-6 text-[15px] leading-7 bg-white border rounded-xl shadow-sm">
        <h2 className="text-3xl font-semibold">Instructions Générales</h2>
        <div>
          <p>Durant l’épreuve, vous n’avez pas le droit :</p>
          <ul className="mt-2 list-disc pl-6 space-y-1">
            <li>d’ouvrir d’autres onglets</li>
            <li>de sortir de la fenêtre d’examen (n’allez pas sur d’autres sites/programmes)</li>
            <li>de s’aider de vos camarades</li>
            <li>d’utiliser votre portable (il doit être éteint)</li>
            <li>de copier des ressources extérieures à l’examen, y compris vos anciens exercices</li>
          </ul>
        </div>
        <div className="rounded-md bg-red-100 text-red-900 px-4 py-3 border border-red-200">
          Tout manquement à ces règles peut entraîner des sanctions allant jusqu’au conseil de discipline.
        </div>
        <h3 className="text-2xl font-semibold">Aide</h3>
        <p>
          Vous êtes actuellement connecté en tant que <b>Adrien Lassus*</b>. Si vous souhaitez vous déconnecter,
          cliquez <u>ici</u>. Si l’examen est terminé, et que vous souhaitez revenir à la page principale, cliquez <u>ici</u>.
        </p>
        <h3 className="text-2xl font-semibold">F.A.Q.</h3>
        <div className="space-y-6">
          <section>
            <p className="font-semibold">Question : Puis-je soumettre/tester plusieurs fois un exercice ?</p>
            <p>Vous pouvez le faire autant de fois que vous voulez, vous avez juste 10 secondes entre chaque essai/soumission.</p>
          </section>
          <section>
            <p className="font-semibold">Question : J’ai fini de répondre aux exercices, puis-je quitter Schooding ?</p>
            <p>Vous pouvez quitter Schooding après avoir terminé vos exercices. Vérifiez bien avant que vous avez soumis chaque exercice !</p>
          </section>
          <section>
            <p className="font-semibold">Question : Je souhaite me déconnecter de mon compte, mais je n’arrive pas à sortir de la fenêtre d’examen : que faire ?</p>
            <p>Si vous souhaitez vous déconnecter, cliquez <u>ici</u>.</p>
          </section>
          <section>
            <p className="font-semibold">Question : J’ai quitté la fenêtre sans faire exprès, et je l’ai remise de suite : vais-je être pénalisé ?</p>
            <p>Non, ne vous en faites pas. Le focus de fenêtre est juste là pour vous empêcher d’aller vers d’autres ressources non autorisées.</p>
          </section>
          <section>
            <p className="font-semibold">Question : Un de mes exercices ne se charge pas, le cercle “loading” reste affiché : que faire ?</p>
            <ul className="list-disc pl-6 space-y-1">
              <li>Cliquez sur le bouton refresh en bas à droite de la fenêtre de l’exercice en question.</li>
              <li>Si le problème persiste, rafraîchissez la page (touche F5).</li>
              <li>Si le problème persiste encore, vérifiez votre connexion internet.</li>
              <li>Si le problème persiste, contactez un enseignant.</li>
            </ul>
          </section>
          <section>
            <p className="font-semibold">Question : Je n’arrive plus à saisir de réponse, la page semble figée : que faire ?</p>
            <ul className="list-disc pl-6 space-y-1">
              <li>Cliquez sur le bouton refresh en bas à droite de la fenêtre de l’exercice en question.</li>
              <li>Si le problème persiste, rafraîchissez la page (F5).</li>
              <li>Si le problème persiste, vérifiez votre souris et votre clavier.</li>
              <li>Si le problème persiste, contactez un enseignant.</li>
            </ul>
          </section>
        </div>
      </div>
    </div>
  );
}


