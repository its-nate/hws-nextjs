import { Montserrat, OpenSans } from '@/utils/fonts'

const Home = ()=> {
  // console.log(Montserrat);
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <h1 className={`${Montserrat.className} text-9xl uppercase font-bold`}>homeeee</h1>
    </main>
  );
}

export default Home;