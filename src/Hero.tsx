export default function Header(props: {
  projects: [
    {
      title: string
      category: string
      description: string
      image?: string
      picture?: string
      link?: string
    }
  ]
}) {
  return (
    <div class='px-6 py-12 lg:my-12 md:px-12 text-gray-800 text-center lg:text-left'>
      <div class='container mx-auto xl:px-32'>
        <div class='grid lg:grid-cols-2 gap-12 flex items-center'>
          <div class='mt-12 lg:mt-0'>
            <p class='text-4xl md:text-5xl xl:text-7xl tracking-tight mb-12'>
              <span class='font-bold leading-tight'>Logge</span> <br />
              <span class='font-medium text-red-600 leading-tight'>
                Media Factory
              </span>
            </p>
          </div>
          <div class='mb-12 lg:mb-0'>
            Latest Project:
            <a href={props.projects[0].link} target='_blank'>
              <div
                class='hover:scale-101 ease-in duration-100 embed-responsive embed-responsive-16by9 relative w-full overflow-hidden rounded-lg shadow-md hover:shadow-lg'
                style={`padding-top: 56.25%; background-image: url(${
                  props.projects[0].image || props.projects[0].picture + '.jpg'
                }); background-size: cover; background-position: center center;`}
              ></div>
            </a>
          </div>
        </div>
      </div>
    </div>
  )
}
