import Header from '@/components/ui/header'
import React from 'react'

function AppLayout({children} : {children: React.ReactNode}) {
  return (
    <div>
        <Header />
        {children}
    </div>
  )
}

export default AppLayout