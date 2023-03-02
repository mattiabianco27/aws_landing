
import Head from "next/head"
import classNames from "classnames"
import Hero from "@organisms/Hero"
import BusinessPlan from "@organisms/Business Plan"
import Footer from "@organisms/Footer"

const text1 = "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s"
const text2 = "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s"
const text3 = "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s"
const activity = "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s"
const clients = "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s"
const partners = "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s"
const costsRevenue = "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s"


export default function Home() {
  return (
    <>
      <div className="flex flex-col justify-center px-[20px]">
        <Hero text1={text1} text2={text2} text3={text3} />
        <BusinessPlan activitText={activity} clientText={clients} partnersText={partners} CostsRevenueText={costsRevenue} />
        <Footer />
      </div>
    </>
  )
}
