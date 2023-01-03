import type { Component } from 'solid-js'

function scrollToSmooth(event) {
  event.preventDefault()
  const id = event.target.getAttribute('href').replace('#', '')
  const el = document.getElementById(id)
  el.scrollIntoView({ behavior: 'smooth' })
}

const Header: Component = () => {
  return (
    <nav class='w-full h-15 border shadow-lg'>
      <div class='flex h-15 items-center justify-between sm:px-0 md:px-10 xl:px-15'>
        <div class='p-2'>
          <a href='#' class='text-xl font-bold'>
            <img
              src='/images/logo.svg'
              alt='logo'
              class='h-13 pt-2 inline-block'
            />
          </a>
        </div>
        <div class='flex p-2 font-semibold xl:text-xl md:text-base sm:text-sm text-xs'>
          <a
            href='#Movie'
            onclick={scrollToSmooth}
            class='p-2 text-red-600 md:block display-none'
          >
            Movies
          </a>
          <a
            href='#Website'
            onclick={scrollToSmooth}
            class='p-2 text-red-600 md:block display-none'
          >
            Websites
          </a>
          <a
            href='#Partner'
            onclick={scrollToSmooth}
            class='p-2 text-red-600 md:block display-none'
          >
            Partners
          </a>
          <a href='#Contact' onclick={scrollToSmooth} class='p-2 text-red-600'>
            Contact
          </a>
        </div>
      </div>
    </nav>
  )
}

export default Header
