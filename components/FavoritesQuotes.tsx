"use client"
import React from 'react'
import { useSelector } from 'react-redux'
type Props = {}

const FavoritesQuotes = (props: Props) => {
    const favQuotes = useSelector((state: any) => state.quote.favQuotes)
    return (
        <section className='w-1/2'>
            {favQuotes.length > 0 ? (
                <article className='border bg-white  px-4 rounded-lg divide-y-2'>
                    <h2 className='p-2 font-semibold'>Your Favorites Quotes</h2>
                    <div>
                        {favQuotes.length > 0 ? (
                            <ol className='list-decimal px-5'>
                                {favQuotes.map((quote: string, index: number) => (
                                    <li key={index} className=' w-full py-2 rounded-md '>
                                        {quote}
                                    </li>
                                ))}
                            </ol>
                        ) : (
                            <p className='text-center w-full p-2 rounded-md mt-3 text-zinc-500'>No Favorites Quotes</p>
                        )}
                    </div>
                </article>
            ) : null}
        </section>
    )
}

export default FavoritesQuotes