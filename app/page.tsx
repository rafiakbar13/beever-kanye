import FavoritesQuotes from '@/components/FavoritesQuotes'
import KanyeQuotes from '@/components/KanyeQuotes'
import MyQuotes from '@/components/MyQuotes'
import Image from 'next/image'


export default function Home() {
  return (
    <main className="max-w-7xl p-10 relative h-screen">
      <div className='flex justify-between w-full gap-x-5'>
        <KanyeQuotes />
        <FavoritesQuotes />
      </div>
      <MyQuotes />

      <div className="absolute z-[-1] bottom-0 left-0 right-0 text-center">
        <Image src='https://images.businessoffashion.com/profiles/asset/1797/43897e2e4a6d155d72dd9df352017b546ef9e229.jpeg' width={800} height={800} alt='kanye' className="mx-auto" />
      </div>
    </main>
  )
}
