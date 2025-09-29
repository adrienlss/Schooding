function Panel({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <div className="panel p-4">
      <h3 className="mb-3 font-semibold">{title}</h3>
      {children}
    </div>
  );
}

export default function Ex1Page() {
  return (
    <>
      <aside className="space-y-3">
        <Panel title="Énoncé">
          <p className="text-sm">
            Classe Person : Attributs 1. Complétez la classe Person avec les attributs privés suivants...
          </p>
          <ul className="text-sm list-disc pl-5">
            <li>firstname: string</li>
            <li>lastname: string</li>
            <li>birthdate: DateTime</li>
            <li>sex: char</li>
            <li>address: string</li>
            <li>phone: string</li>
          </ul>
        </Panel>
      </aside>
      <section className="lg:col-span-2 space-y-3">
        <Panel title="Snippets">
          <pre className="text-xs bg-neutral-50 border rounded p-3 overflow-auto whitespace-pre">
            {`using System;

public class Person
{
    private string firstname;
    private string lastname;
    private DateTime birthdate;
    private char sex;
    private string address;
    private string phone;
}`}
          </pre>
          <button className="mt-3 inline-flex items-center rounded bg-[#3f6f0d] px-3 py-1 text-white text-xs">Exécuter</button>
        </Panel>
      </section>
      <aside className="space-y-3">
        <Panel title="Chat Enseignant">
          <div className="text-sm text-neutral-600">Tapez votre message…</div>
        </Panel>
      </aside>
    </>
  );
}


