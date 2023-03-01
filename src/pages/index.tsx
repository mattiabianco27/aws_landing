
import Head from "next/head"
import Image from "next/image"
import classNames from "classnames"
import Clients from "@organisms/Clients"
import Resources from "@organisms/Resources"
import Partners from "@organisms/Partners"
import Activities from "@organisms/Activities"
import Costs from "@organisms/Costs"
import Revenue from "@organisms/Revenue"


export default function Home() {
  return (
    <>
      <div className="bg-black h-7">
        <Clients />
        <Activities />
        <Partners />
        {/* <Resources /> Risorse utilizzate di AWS (specifiche) */}
        <Costs />
        <Revenue />
      </div>
    </>
  )
}
