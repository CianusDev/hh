import Banner from "@/components/Banner"
import Footer from "@/components/Footer"
import Header from "@/components/Header"
import ReclamationFormsSection from "@/components/ReclamationFormsSection"

const Reclamation = () => {
  return (
    <main>
    <Header/>
    <Banner className="h-72 max-md:h-96" title="Nouvelle réclamation" description="Veuillez saisir le motif, le numéro de téléphone et l'identifiant de la transaction reçu par sms"/>
    <ReclamationFormsSection/>
    <Footer/>
    </main>
  )
}

export default Reclamation