
import Head from "next/head"
import Image from "next/image"
import classNames from "classnames"
import Clients from "@organisms/Clients"
import Resources from "@organisms/Resources"
import Partners from "@organisms/Partners"
import Activities from "@organisms/Activities"
import Costs from "@organisms/Costs"
import Revenue from "@organisms/Revenue"
import Hero from "@organisms/Hero"

const activityText = "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum."
const clientsText = "Sapere cosa interessa a un cliente diventa fondamentale per sapere cosa può comprare .... contnua con bereve descrizione "
const partnersProps = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus sagittis mi et lectus hendrerit, et ultrices enim imperdiet. Cras justo dolor, placerat ac tortor faucibus, gravida viverra ante. Maecenas nec dolor at sapien venenatis egestas a eu massa. Nunc rhoncus, dolor non porttitor bibendum, mi nisi congue diam, eu fringilla nisl lacus eget diam. Nunc efficitur dolor condimentum lorem pellentesque, a laoreet dui rhoncus. Suspendisse aliquet maximus pulvinar. Aliquam tincidunt consequat aliquam. Etiam volutpat ex sed tristique aliquam. Nam massa sem, iaculis et malesuada in, interdum ac dolor. Duis elementum porttitor ligula quis interdum. Vestibulum vel ex sit amet augue semper lacinia quis vel leo. Praesent efficitur enim porttitor nulla sagittis, ac gravida nisi accumsan. Vivamus et porta libero. Phasellus magna nunc, congue et ligula sit amet, laoreet volutpat odio."



export default function Home() {
  return (
    <>
      <div className="flex flex-col justify-center px-[20px]">
        <Hero />
        <Clients text={clientsText} />
        <Activities text={activityText} />
        <Partners text={partnersProps} />
        {/* <Resources /> Risorse utilizzate di AWS (specifiche) */}
        <Costs />
        <Revenue />
      </div>
    </>
  )
}
