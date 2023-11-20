"use client"
import React, { useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { setMyQuotes } from '@/features/quoteSlice'
type Props = {}

const MyQuotes = (props: Props) => {
    const dispatch = useDispatch()
    const [myQuote, setMyQuote] = useState<string>('')
    const myQuotes: string[] = useSelector((state: any) => state.quote.myQuotes)
    const handleMyQuote = (e: any) => {
        setMyQuote(e.target.value)
    }

    const addMyQuote = (e: any) => {
        e.preventDefault()
        dispatch(setMyQuotes([...myQuotes, myQuote]))
        setMyQuote('')
    }


    return (
        <section className='mt-10 w-1/2'>
            <article className='border bg-white  px-4 rounded-lg divide-y-2'>
                <h2 className='p-2 font-semibold'>Your Quotes</h2>
                <form action="" className='' onSubmit={addMyQuote}>
                    <div className='flex whitespace-nowrap gap-x-2 py-3'>
                        <input type="text" name="" id="" className='bg-zinc-300 w-full rounded-md px-3' onChange={handleMyQuote} value={myQuote} placeholder='Add Quotes' />
                        <button className='bg-black text-white  py-1 rounded-md px-4'>Add Quote</button>
                    </div>
                </form>
                <div>
                    {myQuotes.length > 0 ? (
                        <ol className='list-decimal px-5'>
                            {myQuotes.map((quote: string, index: number) => (
                                <li key={index} className=' w-full py-2 rounded-md '>
                                    {quote}
                                </li>
                            ))}
                        </ol>
                    ) : (
                        <p className='text-center w-full p-2 rounded-md mt-3 text-zinc-500'>Add Your Quotes</p>
                    )}
                </div>
            </article>
        </section>
    )
}

export default MyQuotes