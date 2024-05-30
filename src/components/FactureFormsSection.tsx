import { Label } from './ui/label'
import SelectOptions from './SelectOptions'
import { useState } from 'react';
import FormsFactureOption1 from './FormsFactureOption1';
import FormsFactureOption2 from './FormsFactureOption2';
import FormsFactureOption3 from './FormsFactureOption3';

const FactureFormsSection = () => {
  const [selectedOption, setSelectedOption] = useState('');

  return (
    <section className="h-auto relative  text  w-full flex justify-center gap-6 py-8 flex-wrap">
        <section className="w-[800px]   bg-white -translate-y-32 text-[#7788A9] max-md:mx-6  h-auto p-6 mt-10 flex flex-col rounded-md ">
          <div>
            <Label>Choisissez une option de recherche </Label>
            <SelectOptions setSelect={setSelectedOption} select={selectedOption} />
            {selectedOption==='option1' && <FormsFactureOption1/>}
            {selectedOption==='option2' && <FormsFactureOption2/>}
            {selectedOption==='option3' && <FormsFactureOption3/>}
          </div>
        </section>
    </section>
  )
}

export default FactureFormsSection