'use client'
import { Session } from "next-auth"
import {SessionProvider as Provider } from "next-auth/react"
type Props ={
    children: React
}
export function SessionProvider({children, session}:Props){
    return(
        <Provider>
            {childern}
        </Provider>
    )
}