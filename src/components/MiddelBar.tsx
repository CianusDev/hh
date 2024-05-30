import imgUrl from '@/assets/card-amico.svg'
import { FadeText } from './magicui/fade-text'
const MiddelBar = () => {
  return (
    <section className='max-sm:h-auto h-96 p-4 w-full gap-4 flex max-sm:flex-col justify-center items-center'>
        {/* Titre et description  */}
        <div className='h-full w-1/3 max-sm:w-full max-sm:p-4 gap-2  flex justify-center flex-col'>
            <FadeText
                className="text-4xl max-sm:text-2xl max-sm:text-center font-bold"
                direction="left"
                framerProps={{
                show: { transition: { delay: 0.2 } },
                }}
                text="Achat de vouchers"
            />
            <FadeText
                className="text-justify max-sm:text-center max-sm:text-sm text-muted-foreground"
                direction="left"
                framerProps={{
                show: { transition: { delay: 0.4 } },
                }}
                text="Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dolorem quia accusamus quam sit consectetur quaerat blanditiis ullam debitis ut. Repellat fugit corporis reiciendis amet voluptate dolor blanditiis nostrum ab nulla!"
            />
        </div>
        {/* illustration de la carte */}
        <div className=''>
            <img src={imgUrl} alt="card-pay" className='w-52 h-52'/>
        </div>
    </section>
  )
}

export default MiddelBar