"use client"
import React, { useEffect, useState } from 'react'
import { quoteApi } from '@/utils'
import { useDispatch, useSelector } from 'react-redux'
import { setFavoriteQuotes, setQuote } from '@/features/quoteSlice'
import axios from 'axios'
import { toast } from 'react-toastify'
type Props = {}

const KanyeQuotes = (props: Props) => {
    const dispatch = useDispatch()
    const [newQuote, setNewQuote] = useState('')
    const quote = useSelector((state: any) => state.quote.quote)
    const favQuotes = useSelector((state: any) => state.quote.favQuotes)

    const handleQuote = async () => {
        try {
            const response = await axios.get<{ quote: string }>(quoteApi);
            setNewQuote(response.data.quote);
        } catch (error) {
            console.log(error);
        }
    }

    const addFavQuotes = () => {
        if (favQuotes.includes(quote)) {
            toast.error('This quote is already in your favorites.');
        } else {
            dispatch(setFavoriteQuotes([...favQuotes, quote]));
        }
    }

    const getQuote = async () => {
        const response = await axios.get<{ quote: string }>(quoteApi);
        dispatch(setQuote(response.data.quote));
    }

    useEffect(() => {
        handleQuote()
    }, [dispatch, newQuote])


    return (
        <section className='w-1/2'>
            <article className='border bg-white px-4 rounded-lg divide-y-2'>
                <h2 className='p-2 font-semibold'>Quotes By Kanye</h2>
                <div>
                    {quote ? (
                        <p className='bg-zinc-200 w-full p-2 rounded-md mt-3'>{quote}</p>
                    ) : (
                        <p className='bg-zinc-200 w-full p-2 rounded-md mt-3 text-zinc-500'>Get Quote</p>
                    )}
                    <div className='my-5 flex gap-x-3'>
                        <button className='bg-black text-white px-5 py-1 rounded-md' onClick={getQuote}>Get Quote</button>
                        <button className='bg-black text-white px-5 py-1 rounded-md' onClick={addFavQuotes}>Add Favorite</button>
                    </div>
                </div>

            </article>
        </section>
    )
}

export default KanyeQuotes