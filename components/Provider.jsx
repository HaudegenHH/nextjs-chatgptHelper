"use client";

import { SessionProvider } from 'next-auth/react'

// getting children and current session through props
const Provider = ({children, session}) => {
  return (
    <SessionProvider session={session}>
      {children}
    </SessionProvider>
  )
}

export default Provider