import NavBar from '@/components/NavBar/page'
import Image from 'next/image'

export default function Home() {
  return (
    <>
      <NavBar />
      <div className="container mx-auto">
        <div className="flex items-center md:flex-row flex-col justify-center pt-10">
          <Image src="/assets/online_reserve.svg" width={350} height={100} alt='yummigreek' />
          <div className="flex flex-col items-center justify-center">
            <h1 className="md:text-4xl text-2xl font-bold text-nowrap">Welcome to YummiGreek</h1>
            <span className="md:text-2xl text-1xl font-bold">Online Reservation</span>
            <button className="bg-red-700 text-white px-4 py-2 rounded-lg mt-4">Reserve Now</button>
          </div>
        </div>
      </div>
    </>
  )
}
