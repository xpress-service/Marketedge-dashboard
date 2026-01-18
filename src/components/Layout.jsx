import React from 'react'

const Layout = ({ header, children, footer }) => {
  return (
    <div className="min-h-screen flex flex-col">
      <header>
        {header}
      </header>
      <main className="flex-1">
        {children}
      </main>
      <footer>
        {footer}
      </footer>
    </div>
  )
}

export default Layout
