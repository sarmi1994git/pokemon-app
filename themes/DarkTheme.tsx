import React, { FC } from 'react'

interface Props {
    children: any
}

export const DarkTheme: FC<Props> = ({ children } ) => {
  return (
    <main className="dark text-foreground bg-background">
        {children}
    </main>
  )
}
