import Image from 'next/image'
import Link from 'next/link'
import classes from './page.module.css'
import { Fragment } from 'react'
import Head from 'next/head'
import ContractForm from '../components/contact-form'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFacebook, faGithub, faInstagram, faLinkedin, faTwitter, faYoutube } from '@fortawesome/free-brands-svg-icons'


export default function Home() {
  return (
    <Fragment>
      <Head>
        <title>Aifu Portfolio</title>
        <meta name='description' content='My Portfolio' />
      </Head>
      <div>
        <section>
          <header class="fixed w-full">
            <nav class="bg-neutral-800 border-gray-200 px-4 lg:px-6 py-2.5">
              <div class="flex flex-wrap justify-between items-center mx-auto max-w-screen-xl">
                <a href="" class="flex items-center">
                  <Image src="/images/aifu.png" alt="logo" width={40} height={40} />
                  <span class="self-center text-xl font-semibold whitespace-nowrap text-white">Portfolio</span>
                </a>
                <div class="flex items-center lg:order-2">
                  <a href="https://nextjs-blog-website-ruby.vercel.app/" class="text-white hover:text-black hover:bg-gray-50 focus:ring-4 focus:ring-gray-300 font-medium rounded-lg text-sm px-4 lg:px-5 py-2 lg:py-2.5 mr-2 dark:hover:bg-gray-400 focus:outline-none dark:focus:ring-gray-500">My Blog Site</a>
                </div>
              </div>
            </nav>
          </header>
        </section>

        <section class="pt-10 bg-neutral-900 max-[768px]:justify-center max-[768px]:text-center max-[768px]:pt-15">
          <div class="grid max-w-screen-xl px-4 py-8 mx-auto lg:gap-8 xl:gap-0 lg:py-16 lg:grid-cols-12">
            <div class="mr-auto place-self-center lg:col-span-7">
              <h1 className={classes.h1}><span className='text-slate-500'>My</span> Name is <br /> <span className={classes.span}>Huzaifa Bilal</span>
              </h1>

              <h2 className={classes.h2}>I'm a&nbsp;<span className={classes.typewriter}></span></h2>
              <p class="max-w-2xl mb-6 font-light text-gray-500 lg:mb-8 md:text-lg lg:text-xl dark:text-gray-400">Welcome to my world of coding and creativity, where Next.js empowers me to bring imagination to life, one beautifully functional line of code at a time, leaving a lasting impression on the digital landscape.</p>
              <a href="https://drive.google.com/uc?export=download&id=12yEC_N2mPjo7DtXJ_hUHzaYLvPIQcTR1" class="inline-flex items-center justify-center px-5 py-3 mr-3 text-base font-medium text-center text-white rounded-lg bg-primary-700 hover:bg-primary-800 focus:ring-4 focus:ring-primary-300 dark:focus:ring-primary-900">
                Download Resume
                <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                  <path d="M10 13l-5-4h3V4h4v5h3l-5 4zm0 2a1 1 0 100 2 1 1 0 000-2z" />
                </svg>

                {/* <svg class="w-5 h-5 ml-2 -mr-1" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg> */}
              </a>
              <a href="https://drive.google.com/file/d/12yEC_N2mPjo7DtXJ_hUHzaYLvPIQcTR1/view?usp=sharing" class="inline-flex items-center justify-center px-5 py-3 text-base font-medium text-center text-white hover:text-black border border-gray-300 rounded-lg hover:bg-gray-100 focus:ring-4 focus:ring-gray-100 dark:text-white dark:border-gray-400 dark:hover:bg-gray-400 dark:focus:ring-gray-500 max-[768px]:mt-5">
                View Resume
              </a>
            </div>
            <div class="hidden lg:mt-0 lg:col-span-5 lg:flex">
              <Image src="/images/me.jpeg" alt="mockup" width={380} height={380} layout='fixed' className={classes.Image} />
            </div>
          </div>
        </section>


        <section class="bg-neutral-900 antialiased pt-5">
          <div class="max-w-screen-xl px-4 py-8 mx-auto lg:px-6 sm:py-16 lg:py-24">
            <div class="max-w-2xl mx-auto text-center">
              <h2 class="text-5xl font-extrabold leading-tight tracking-wide text-white sm:text-5xl">
                My Projects
              </h2>
              <p class="mt-4 text-base font-normal text-gray-500 sm:text-xl dark:text-gray-400">
                Crafted with my skills and knowledge!
              </p>
            </div>

            <div class="grid grid-cols-1 mt-12 text-center sm:mt-16 gap-x-20 gap-y-12 sm:grid-cols-2 lg:grid-cols-3">
              <div class="space-y-4">
                <Image src="/images/blog_gen.png" width={400} height={400} alt="blog" className="rounded-md items-center justify-center inline-flex" />
                <h3 class="text-2xl font-medium leading-tight text-slate-500">
                  Nextjs Blog Generator
                </h3>
                <p class="text-lg font-normal text-gray-500 dark:text-gray-400">
                  The Nextjs Blog Generator is designed to simplify the process managing blogs using the Next.js framework.
                </p>
                <a href="https://github.com/huzaifa-bilal-01/my-blog-engine.git" title=""
                  class="text-white bg-primary-700 justify-center hover:bg-primary-800 inline-flex items-center  focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800"
                  role="button">
                  Go to Github
                  <svg aria-hidden="true" class="w-5 h-5 ml-2 -mr-1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"
                    fill="currentColor">
                    <path fill-rule="evenodd"
                      d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z"
                      clip-rule="evenodd" />
                  </svg>
                </a>
              </div>

              <div class="space-y-4">
                <Image src="/images/fighter.jpg" width={300} height={300} alt="blog" className="rounded-md items-center justify-center inline-flex" />

                <h3 class="text-2xl font-medium leading-tight text-slate-500">
                  AI Street Fighter
                </h3>
                <p class="text-lg font-normal text-gray-500 dark:text-gray-400">
                  This project contains a simple and brief AI model trained for the classic Street Fighter game.
                </p>
                <a href="https://github.com/huzaifa-bilal-01/SF-DeepLearningGame.git" title=""
                  class="text-white bg-primary-700 justify-center hover:bg-primary-800 inline-flex items-center  focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800"
                  role="button">
                  Go to Github
                  <svg aria-hidden="true" class="w-5 h-5 ml-2 -mr-1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"
                    fill="currentColor">
                    <path fill-rule="evenodd"
                      d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z"
                      clip-rule="evenodd" />
                  </svg>
                </a>
              </div>

              <div class="space-y-4">
                <Image src="/images/Vet.jpg" width={330} height={330} alt="blog" className="rounded-md items-center justify-center inline-flex" />

                <h3 class="text-2xl font-medium leading-tight text-slate-500">
                  Web DEV-MERN
                </h3>
                <p class="text-lg font-normal text-gray-500 dark:text-gray-400">
                  The MERN-based veteran app is a feature-rich web application designed to serve and support veterans.
                </p>
                <a href="https://github.com/huzaifa-bilal-01/Web-Development-MERN-Course-Project-2022.git" title=""
                  class="text-white bg-primary-700 justify-center hover:bg-primary-800 inline-flex items-center  focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800"
                  role="button">
                  Go to Github
                  <svg aria-hidden="true" class="w-5 h-5 ml-2 -mr-1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"
                    fill="currentColor">
                    <path fill-rule="evenodd"
                      d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z"
                      clip-rule="evenodd" />
                  </svg>
                </a>
              </div>
            </div>
          </div>
        </section>


        <section class="bg-neutral-900 pt-5">
          <div class="max-w-screen-xl px-4 py-8 mx-auto text-center lg:py-16 lg:px-6">
            <h2 class=" pb-2 text-5xl font-extrabold leading-tight tracking-wide text-white sm:text-5x">
              Testonimal
            </h2>
            <figure class="max-w-screen-md mx-auto">
              <svg class="h-12 mx-auto mb-3 text-gray-400 dark:text-gray-600" viewBox="0 0 24 27" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M14.017 18L14.017 10.609C14.017 4.905 17.748 1.039 23 0L23.995 2.151C21.563 3.068 20 5.789 20 8H24V18H14.017ZM0 18V10.609C0 4.905 3.748 1.038 9 0L9.996 2.151C7.563 3.068 6 5.789 6 8H9.983L9.983 18L0 18Z" fill="currentColor" />
              </svg>
              <blockquote>
                <p class="text-2xl text-white">"I've found Next.js to be the perfect solution for both small projects and large-scale applications. It has become my go-to framework for web development, and I highly recommend it to fellow developers looking to elevate their frontend game and deliver exceptional digital experiences."</p>
              </blockquote>
              <figcaption class="flex items-center justify-center mt-6 space-x-3">
                <Image height={20} width={20} class="w-6 h-6 rounded-full" src="/images/CTO.jpg" alt="profile picture" />
                <div class="flex items-center divide-x-2 divide-gray-500 dark:divide-gray-700">
                  <div class="pr-3 font-medium text-white">Guillermo Rauch</div>
                  <div class="pl-3 text-sm font-light text-gray-500 dark:text-gray-400">CTO at LearnBoost</div>
                </div>
              </figcaption>
            </figure>
          </div>
        </section>

        <section>
          <ContractForm />
        </section>


        <section class="bg-neutral-900">
          <footer class="p-4 pt-5">
            <div class="mx-auto max-w-screen-xl">
              <div class="md:flex md:justify-between">
                <div class="mb-6 md:mb-0">
                  <a href="https://nextjs-blog-website-ruby.vercel.app/" class="flex items-center">
                    <Image src="/images/aifu.png" alt="logo" width={50} height={50} /><span class="self-center text-2xl font-semibold whitespace-nowrap text-white">About Me</span>
                  </a>
                </div>
                <div class="grid grid-cols-2 gap-8 sm:gap-6 sm:grid-cols-3">
                  <div>
                    <h2 class="mb-6 text-sm font-semibold text-white">Resources</h2>
                    <ul class="text-gray-600 dark:text-gray-400">
                      <li class="mb-4">
                        <a href="https://nextjs.org/docs" class="hover:underline">Nextjs</a>
                      </li>
                      <li>
                        <a href="https://fontawesome.com/v5/docs/web/use-with/react" class="hover:underline">Font Awesome</a>
                      </li>
                    </ul>
                  </div>
                  <div>
                    <h2 class="mb-6 text-sm font-semibold text-white">Follow me</h2>
                    <ul class="text-gray-600 dark:text-gray-400">
                      <li class="mb-4">
                        <a href="https://github.com/huzaifa-bilal-01" class="hover:underline ">Github</a>
                      </li>
                      <li>
                        <a href="https://www.linkedin.com/in/huzaifa-bilal-0a3481231" class="hover:underline">LinkedIn</a>
                      </li>
                    </ul>
                  </div>
                  <div>
                    <h2 class="mb-6 text-sm font-semibold text-white">Legal</h2>
                    <ul class="text-gray-600 dark:text-gray-400">
                      <li class="mb-4">
                        <a href="#" class="hover:underline">Privacy Policy</a>
                      </li>
                      <li>
                        <a href="#" class="hover:underline">Terms &amp; Conditions</a>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
              <hr class="my-6 border-gray-200 sm:mx-auto dark:border-gray-700 lg:my-8" />
              <div class="sm:flex sm:items-center sm:justify-between">
                <span class="text-sm text-gray-500 sm:text-center dark:text-gray-400">© 2023 <a href="https://flowbite.com" class="hover:underline">AIFU Portfolio™</a>. All Rights Reserved.
                </span>
                <div className={classes.social_links}>
                  <Link href="https://www.facebook.com/profile.php?id=100093702731832"><FontAwesomeIcon icon={faFacebook} className='px-2 text-white hover:text-blue-700' /></Link>
                  <Link href="https://twitter.com/anime_gotit"><FontAwesomeIcon icon={faTwitter} className='px-2 text-white hover:text-blue-500' /></Link>
                  <Link href="https://www.instagram.com/zaifuu_/"><FontAwesomeIcon icon={faInstagram} className='px-2 text-white hover:text-instaMagenta' /></Link>
                  <Link href="https://www.linkedin.com/in/huzaifa-bilal-0a3481231"><FontAwesomeIcon icon={faLinkedin} className='px-2 text-white hover:text-linkedinblue' /></Link>
                  <Link href="https://github.com/huzaifa-bilal-01"><FontAwesomeIcon icon={faGithub} className='px-2 text-white hover:text-githubblack' /></Link>
                  <Link href="https://www.youtube.com/channel/UCotolfOfWxtaGwTgbpn7pPQ"><FontAwesomeIcon icon={faYoutube} className='px-2 text-white hover:text-red-600' /></Link>
                </div>
              </div>
            </div>
          </footer>
        </section>
      </div>
    </Fragment>

  )
}