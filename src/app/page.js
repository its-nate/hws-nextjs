import Image from 'next/image'
import { Montserrat, OpenSans } from '@/utils/fonts'
import Menu from '@/components/menu'

const Home = ()=> {
  return (
    <main className="flex min-h-screen flex-col lg:flex-row items-center justify-between">
      <Menu className={`flex-none w-1/4 bg-light-green min-h-screen`} />
      <div className={`flex-none w-3/4 bg-dark-green min-h-screen flex flex-col justify-center items-center p-28`}>
        <Image
          src="/images/hws_logo.png"
          width={400}
          height={400}
          alt="Holistic Web Solutions Logo"
          priority
        />
        <h1
          className={`${Montserrat.className} text-xl text-center text-white uppercase font-bold tracking-widest mt-12`}>Creating comprehensive web solutions uniquely designed for you and
          your brand</h1>
      </div>
    </main>
  );
}

export default Home;