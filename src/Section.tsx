import { For } from 'solid-js'

export default function Section(props: {
  projects: [
    {
      title: string
      category: string
      description: string
      image?: string
      picture?: string
      link?: string
      video?: string
    }
  ]
  filter: string
  title: string
  description: string
}) {
  return (
    <section class='text-gray-600'>
      <a id={props.filter}></a>
      <div class='container px-4 py-24 mx-auto'>
        <div class='flex flex-wrap w-full mb-20'>
          <div class='lg:w-1/2 w-full mb-6 lg:mb-0'>
            <h1 class='sm:text-3xl text-2xl font-medium title-font mb-2 text-gray-900'>
              {props.title}
            </h1>
            <div class='h-1 w-20 bg-indigo-500 rounded'></div>
          </div>
          <p class='lg:w-1/2 w-full leading-relaxed text-gray-500'>
            {props.description}
          </p>
        </div>
        <div class='flex flex-wrap m-4'>
          <For
            each={Array.from(
              props.projects.filter((p) => p.category.includes(props.filter))
            )}
          >
            {(project) => (
              <div class='xl:w-1/4 md:w-1/2'>
                <div class='p-2'>
                  <div class='bg-gray-100 p-6 rounded-lg'>
                    <a href={project.link} target='_blank'>
                      {project.image && (
                        <img
                          class='hover:scale-105 ease-in duration-100 h-40 rounded w-full object-cover object-center mb-6'
                          src={project.image}
                          alt='content'
                        />
                      )}
                      {project.picture && (
                        <picture>
                          <source
                            srcset={project.picture + '.avif'}
                            type='image/avif'
                          />
                          <source
                            srcset={project.picture + '.webp'}
                            type='image/webp'
                          />
                          <img
                            class='block mx-auto object-contain hover:scale-105 ease-in duration-100 h-40 rounded object-center mb-6'
                            src={project.picture + '.jpg'}
                            alt='content'
                          />
                        </picture>
                      )}
                      {project.video && (
                        <video
                          class='block mx-auto object-contain hover:scale-105 ease-in duration-100 h-40 rounded object-center mb-6'
                          src={project.video}
                          alt='content'
                          autoplay
                          loop
                        />
                      )}
                    </a>
                    <h3 class='tracking-widest text-indigo-500 text-xs font-medium title-font'>
                      {project.category}
                    </h3>
                    <h2 class='text-lg text-gray-900 font-medium title-font mb-4'>
                      <a
                        href={project.link}
                        target='_blank'
                        class={
                          project.link ? 'text-gray-900 hover:text-red-500' : ''
                        }
                      >
                        {project.title}
                      </a>
                    </h2>
                    <p class='leading-relaxed text-base'>
                      {project.description}
                    </p>
                  </div>
                </div>
              </div>
            )}
          </For>
        </div>
      </div>
    </section>
  )
}
