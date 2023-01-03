import type { Component } from 'solid-js'

function scrollToSmooth(event) {
  event.preventDefault()
  const id = event.target.getAttribute('href').replace('#', '')
  const el = document.getElementById(id)
  el.scrollIntoView({ behavior: 'smooth' })
}

const Header: Component = () => {
  return (
    <div class='w-full h-15 border dark:border-gray-800 shadow-lg'>
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
        <div class='flex p-2 sm:text-sm sm:text-md xl:text-xl font-semibold'>
          <a href='#Movie' onclick={scrollToSmooth} class='p-2 text-red-600'>
            Movies
          </a>
          <a href='#Website' onclick={scrollToSmooth} class='p-2 text-red-600'>
            Websites
          </a>
          <a href='#Partner' onclick={scrollToSmooth} class='p-2 text-red-600'>
            Partners
          </a>
          <a href='#Contact' onclick={scrollToSmooth} class='p-2 text-red-600'>
            Contact
          </a>
        </div>
      </div>
    </div>
  )
}

export default Header
