export default function Footer() {
  return (
    <button
      type='button'
      data-mdb-ripple={true}
      data-mdb-ripple-color='light'
      class='inline-block p-3 bg-red-500 text-white font-medium text-xs leading-tight uppercase rounded-full shadow-md hover:bg-red-400 hover:shadow-lg focus:bg-red-600 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-red-700 active:shadow-lg cursor-pointer transition duration-150 ease-in-out hidden bottom-5 right-5 fixed h-11 w-11'
      id='btn-back-to-top'
    >
      <svg
        aria-hidden={true}
        data-prefix='fas'
        class='m-auto'
        role='img'
        xmlns='http://www.w3.org/2000/svg'
        viewBox='0 0 448 512'
      >
        <path
          fill='currentColor'
          d='M34.9 289.5l-22.2-22.2c-9.4-9.4-9.4-24.6 0-33.9L207 39c9.4-9.4 24.6-9.4 33.9 0l194.3 194.3c9.4 9.4 9.4 24.6 0 33.9L413 289.4c-9.5 9.5-25 9.3-34.3-.4L264 168.6V456c0 13.3-10.7 24-24 24h-32c-13.3 0-24-10.7-24-24V168.6L69.2 289.1c-9.3 9.8-24.8 10-34.3.4z'
        ></path>
      </svg>
    </button>
  )
}

// When the user scrolls down 20px from the top of the document, show the button
window.onscroll = function () {
  scrollFunction()
}

function scrollFunction() {
  let backToTopButton = document.getElementById('btn-back-to-top')
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    backToTopButton.style.display = 'block'

    if (!backToTopButton.onclick) {
      backToTopButton.onclick = function () {
        // Scroll to top logic smooth
        // Get most top element
        let el = document.getElementsByTagName('nav')[0]
        setTimeout(() => {
          el.scrollIntoView({ behavior: 'smooth' })
        }, 100)
      }
    }
  } else {
    backToTopButton.style.display = 'none'
  }
}
