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
            <h1 class='sm:text-3xl text-2xl 2xl:text-3xl font-bold title-font mb-2 text-gray-900'>
              {props.title}
            </h1>
            <div class='h-1 w-20 bg-red-500 rounded'></div>
          </div>
          <p class='lg:w-1/2 w-full sm:text-2xl 2xl:text-2xl leading-relaxed text-gray-500'>
            {props.description}
          </p>
        </div>
        <div class='flex flex-wrap items-stretch m-4'>
          <For
            each={Array.from(
              props.projects.filter((p) => p.category.includes(props.filter))
            )}
          >
            {(project) => (
              <div class='xl:max-w-1/4 xl:max-w-1/4 xl:w-1/4 md:w-1/2 flex flex-grow'>
                <div class='p-2 flex flex-grow'>
                  <div class='bg-gray-100 p-6 rounded-lg flex-grow'>
                    <a
                      href={project.link}
                      target='_blank'
                      class={
                        !['Partner', 'Contact'].includes(props.filter)
                          ? 'relative w-full pt-[56.25%] block'
                          : ''
                      }
                    >
                      {project.image && (
                        <img
                          class='hover:scale-105 ease-in duration-100 max-w-full rounded w-full mb-6'
                          src={project.image}
                          alt='content'
                          style='object-fit: cover;'
                          loading='lazy'
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
                            class='hover:scale-105 ease-in duration-100 absolute top-0 h-full w-full rounded'
                            src={project.picture + '.jpg'}
                            alt='content'
                            style='object-fit: cover;'
                            loading='lazy'
                          />
                        </picture>
                      )}
                      {project.video && (
                        <video
                          class='flex mx-auto hover:scale-105 ease-in duration-100 min-w-full max-h-full rounded mb-6'
                          src={project.video}
                          autoplay
                          muted
                          loop
                        />
                      )}
                    </a>
                    <h3 class='tracking-widest text-red-500 text-xs 2xl:text-3xl font-medium title-font'>
                      {project.category}
                    </h3>
                    <h2 class='text-lg 2xl:text-2xl  text-gray-900 font-medium title-font mb-4'>
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
                    <p class='leading-relaxed text-base 2xl:text-xl'>
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
