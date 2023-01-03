export default function Footer() {
  return (
    <footer class='text-gray-600 body-font'>
      <div class='container px-5 py-2 mx-auto flex items-center sm:flex-row flex-col'>
        <img src='svg/logo.svg' alt='logo' class='w-20 text-white p-2' />
        <p class='text-sm text-gray-500 sm:ml-4 sm:pl-4 sm:border-l-2 sm:border-gray-200 sm:py-2 sm:mt-0 mt-10'>
          © {new Date().getFullYear()} Logge Media Factory
        </p>
      </div>
    </footer>
  )
}
