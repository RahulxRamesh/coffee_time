import CaffeineForm from "@/components/forms/CaffeineForm"
import Image from "next/image"

export default function Home() {
  return (
    <div className='flex h-screen max-h-screen'>
      <section className='remove-scrollbar container my-auto'>
        <div className="sub-container max-w-[496px]">
         
          <CaffeineForm/>

          <div className="text-14-regular mt-20 flex justify-between">
            <p className="justify-items-end text-dark-600 xl:text-left">
                © 2024 we hate celcius
            </p>
            <p>
              
            </p>
          </div>
        </div>
      </section>

      <Image
        src="/assets/images/homepage_coffee.jpg"
        height={1000}
        width={1000}
        alt="coffee-homepage-banner"
        className="side-img max-w-[50%]"
      />
    </div>
  )
}
