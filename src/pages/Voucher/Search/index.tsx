import Banner from "@/components/Banner"
import FactureFormsSection from "@/components/FactureFormsSection"
import Footer from "@/components/Footer"
import Header from "@/components/Header"

const Search = () => {
  return (
    <main>
        <Header/>
        <Banner title="Rechercher mon reçu de paiement"/>
        <FactureFormsSection/>
        <Footer/>
    </main>
  )
}

export default Search