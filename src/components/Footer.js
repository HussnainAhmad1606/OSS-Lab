import React from 'react'

function Footer() {
  return (
    <footer className="footer items-center p-4 bg-neutral text-neutral-content">
  <aside className="items-center grid-flow-col">
    <p>Copyright © 2024 - OSS Lab</p>
  </aside> 
  <nav className="grid-flow-col gap-4 md:place-self-center md:justify-self-end">
    <p>Developed by: <a className='' target='_blank' href='https://github.com/HussnainAhmad1606/'>Psycho Coder</a></p>
  </nav>
</footer>
  )
}

export default Footer