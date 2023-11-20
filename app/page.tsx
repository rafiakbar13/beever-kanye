import FavoritesQuotes from '@/components/FavoritesQuotes'
import KanyeQuotes from '@/components/KanyeQuotes'
import MyQuotes from '@/components/MyQuotes'


export default function Home() {
  return (
    <main className="max-w-7xl p-10">
      <div className='flex justify-between w-full gap-x-5'>
        <KanyeQuotes />
        <FavoritesQuotes />
      </div>
      <MyQuotes />
    </main>
  )
}
