
import Head from "next/head"
import classNames from "classnames"
import Hero from "@organisms/Hero"
import BusinessPlan from "@organisms/Business Plan"
import Footer from "@organisms/Footer"
import Favicon from "@molecules/Favicon"

const text1 = "Sei un'agenzia di telecomunicazione? Conosci le ricerche degli utenti su internet? Aiutali a trovare ciò che vogliono, ora"
const text2 = "Immagina di entrare in un negozio e di trovare subito quello che volevi, a metà prezzo. Solo per te"
const text3 = "Sfrutta la potenza dei servizi Amazon Web Services per ottenere analisi precise e veloci dei dati collezionati"
const activity = "Il modello di business che vuole essere proposto è un modello per cui le agenzie di telecomunicazioni analizzano, sfruttando i servizi di cloud computing offerti da AWS,"+
" i dati delle ricerche dgli utenti per vendere a negozi fisici analisi di interesse dei singoli utenti. Il modello è tale per cui a un qualsiasi cliente che entra in un negozio fisico "+
"convenzionato vengono generate offerte personalizzate basate sui dati di ricerca per soddisfare le sue esigenze uniche. Questo sistema innovativo di advertising permetterebbe una rivalutazione dei negozi fisici"+
" oltre che la creazione di un vero e proprio business per le agenzie di telecomunicazioni"
const clients = "I clienti diretti di AWS diventerebbero quindi le grandi agenzie di telecomunicazione come AT&T e Verizon Communications, immaginando che queste abbiano stretto degli accordi di privacy con i vari clienti tali per cui sono autorizzate alla vendita e alla divulgazione dei dati di navigazione "
const partners = "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s"
const costsRevenue = "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s"


export default function Home() {
  return (
    <>
    <Head>
      <title>BusinessPlan</title>
      <meta name="keywords" content="Business Plan, an Innovative Cloud Challenge landing"/>
      <Favicon />
    </Head>
      <div className="flex flex-col justify-center px-[20px]">
        <Hero text1={text1} text2={text2} text3={text3} />
        <BusinessPlan activitText={activity} clientText={clients} partnersText={partners} CostsRevenueText={costsRevenue} />
      </div>
    </>
  )
}
