import { useState } from 'react';
import SelectReclamationOptions from './SelectReclamationOption';
import FormsReclamationOption from './FormsReclamationOption';
import ReclamationInfo from './ReclamationInfo';

const ReclamationFormsSection = () => {
    const [selectedOption, setSelectedOption] = useState('');

    return (
    <section className="h-auto relative  text  w-full flex-col items-center flex justify-center gap-6 py-8 flex-wrap">
        <section className="w-[800px] max-md:w-auto   bg-white -translate-y-32 text-[#7788A9] max-md:mx-6  h-auto p-6 mt-10 flex flex-col rounded-md ">
            <div>
                <SelectReclamationOptions setSelect={setSelectedOption} select={selectedOption} />
                {selectedOption==='option1' && <FormsReclamationOption/>}
                {selectedOption==='option2' && <FormsReclamationOption/>}
                {selectedOption==='option3' && <FormsReclamationOption/>}
                {selectedOption==='option4' && <ReclamationInfo text='Merci de ressayer avec un navigateur compatible. Exemple :' colored_text='Chrome, Firefox, Safari' before_colored_text={<br/>}/>} 
                {selectedOption==='option5' && <ReclamationInfo text="Le code d'autorisation a une durée de vie de 2 minutes, vous devez le saisir rapidement une fois généré." before_colored_text={<br/>} colored_text="Si l'erreur persiste merci d'appeler le call center d'orange ( 0707 ) pour signaler le problème."/>}  
            </div>
        </section>

                {/* section information*/}
        <section className=" w-[700px] max-xl:w-auto h-auto p-6 flex flex-col mt-10  ">
            {/* titre de la section */}
            <h1 className="text-4xl font-semibold">Comment faire une réclamation ?</h1>
            <p className='py-2 text-[1.3rem]'>Pour faire une réclamation vous devez suivre les étapes suivantes :</p>
            {/* liste des information */}
            <ul className="flex p-2 flex-col gap-4  list-decimal text-justify ">
                <li className="">
                    Selectionner le motif de la réclamation
                </li>
                <li className="">
                    Saisir le numéro de téléphone que vous avez utilisé pour effectuer le paiement
                </li>
                <li className="f">
                    Saisir l'identifiant de paiement reçu par sms après le paiement.
                </li>
                <li className="">
                    Votre réclamation est reçue et sera traitée dans les plus brefs délais.
                </li>
            </ul>
        </section>
    </section>
    )
}

export default ReclamationFormsSection