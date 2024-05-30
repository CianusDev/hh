
const SecondMiddleBar = () => {
  return (
    <section className='h-auto p-4 w-full gap-8 bg-primary flex flex-col items-center'>

        <div className='w-1/3 max-sm:w-full  flex justify-center items-center text-background flex-col mt-10'>
            <h1 className='text-4xl font-bold'>Lorem </h1>
            <p className='text-center'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dolorem quia accusamus quam sit consectetur quaerat blanditiis ullam debitis ut.</p>
        </div>

        <div className="flex p-8 gap-6 h-[600px] w-[600px] max-sm:w-full max-sm:h-auto rounded-xl shadow-lg justify-center flex-col bg-background mb-6">
            <div>
                <h1 className='text-md font-bold flex items-center gap-2'><div className="w-6 h-6  p-4 bg-primary rounded-full text-background flex flex-col justify-center items-center ">1</div> Achetez votre timbre en ligne sur www.rnpp.ci</h1>
                <p className="py-2 font-light">Payer en ligne avec Orange Money, Moov Money, MTN Mobile Money, Visa, Mastercard</p>
            </div>

            <div>
                <h1 className='text-md font-bold flex items-center gap-2'><div className="w-6 h-6 p-4 bg-primary rounded-full text-background flex justify-center items-center">2</div> Imprimer votre reçu</h1>
                <p className="py-2 font-light">Imprimez votre reçu et une copie vous est envoyé dans votre boite email.</p>
            </div>

            <div>
                <h2 className='text-md font-bold flex items-center gap-2'><div className="w-6 h-6 bg-primary p-4 rounded-full text-background flex justify-center items-center">3</div> Rendez-vous dans l’un des centres d’enrôlement pour terminer le processus</h2>
                <p className="py-2 font-light">Cliquez ici pour voire la liste des centres d’enrôlement.</p>
            </div>
            
            <div>
                <h2 className='text-md font-bold flex items-center gap-2'><div className="w-6 h-6 bg-primary p-4 rounded-full text-background flex justify-center items-center">4</div> Récupérer votre CNI</h2>
                <p className="py-2 font-light">Vous recevez un SMS une fois que votre carte nationale d'identité sera disponible pour le retrait.</p>
            </div>
        </div>

    </section>
  )
}

export default SecondMiddleBar