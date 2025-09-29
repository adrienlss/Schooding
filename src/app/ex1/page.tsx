import LeftPanel from "../_components/LeftPanel";
import EditorPanel from "../_components/EditorPanel";
import RightChat from "../_components/RightChat";

const codeSample = `using System;

public class Person
{
    private string firstname;
    private string lastname;
    private DateTime birthdate;
    private char sex;
    private string address;
    private string phone;
}`;

export default function Ex1Page() {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-[320px_minmax(0,1fr)_320px] gap-4 items-start">
      <LeftPanel>
        <p>
          Classe Person : Attributs 1. Complétez la classe Person avec les attributs privés suivants :
          Attention l’ordre et l’orthographe des attributs sont à respecter.
        </p>
        <ul className="list-disc pl-5 mt-2">
          <li>firstname, de type string</li>
          <li>lastname, de type string</li>
          <li>birthdate, de type DateTime</li>
          <li>sex, de type char</li>
          <li>address, de type string</li>
          <li>phone, de type string</li>
        </ul>
      </LeftPanel>

      <EditorPanel code={codeSample} />

      <RightChat />
    </div>
  );
}


