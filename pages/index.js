import Image from 'next/image'
import Link from 'next/link'
import classes from './page.module.css'
import { Fragment, useReducer } from 'react'
import Head from 'next/head'
import ContractForm from '../components/contact-form'
import { useState, useEffect } from "react"
import Swal from "sweetalert2";
import Aos from 'aos'
import 'aos/dist/aos.css'


async function sendContactData(details) {
  console.log(details)
  const res = await fetch('/api/contact', {
    method: 'POST',
    body: JSON.stringify(details),
    headers: {
      'Content-Type': 'application/json',
    },
  })
  // console.log(response)
  const data = await res.json();

  if (!res.ok) {
    console.log("error");
    throw new Error(data.message || 'Something went wrong!');
  } else {
    Swal.fire({
      title: 'Success!',
      text: 'Your message has been sent.',
      icon: 'success',
      confirmButtonText: 'OK',
    })
  }
}



export default function Home() {
  const [enteredSubject, setenteredSubject] = useState('')
  const [enteredEmail, setEnteredEmail] = useState('')
  const [enteredMessage, setEnteredMessage] = useState('')
  const [requestStatus, setRequestStatus] = useState();
  const [requestError, setRequestError] = useState();

  useEffect(() => {
    Aos.init();
    if (requestStatus === 'success' || requestStatus === 'error') {
      const timer = setTimeout(() => {
        setRequestStatus(null);
        setRequestError(null);
      }, 3000);
      return () => clearTimeout(timer);
    }
  }, [requestStatus]);



  async function sendMessageHandler(event) {
    event.preventDefault();

    setRequestStatus('pending');

    try {
      sendContactData({
        email: enteredEmail,
        subject: enteredSubject,
        message: enteredMessage
      });
      console.log(enteredEmail, enteredSubject, enteredMessage)
      setRequestStatus('success');
      setEnteredMessage('');
      setEnteredEmail('');
      setenteredSubject('');
    } catch (error) {
      console.log("error");
      setRequestError(error.message);
      setRequestStatus('error');
      return;
    }


  }


  const [darkMode, setDarkMode] = useState(false);
  const [firstSvgVisible, setFirstSvgVisible] = useState(true);
  const [secondSvgVisible, setSecondSvgVisible] = useState(false);

  const toggleFirstSvg = () => {
    setFirstSvgVisible(!firstSvgVisible);
    setSecondSvgVisible(!secondSvgVisible);
    setDarkMode(!darkMode);
  };

  const toggleSecondSvg = () => {
    setSecondSvgVisible(!secondSvgVisible);
    setFirstSvgVisible(!firstSvgVisible);
    setDarkMode(!darkMode);
  };


  return (
    <Fragment>
      <Head>
        <title>Aifu Portfolio</title>
        <meta name='description' content='My Portfolio' />
      </Head>
      <div>
        <section>
          <header className=" w-full">
            <nav className={`${darkMode ? 'bg-slate-200' : 'bg-gray-800'} border-gray-200 px-4 lg:px-6 py-2.5 `}>
              <div className="flex flex-wrap justify-between items-center mx-auto max-w-screen-xl">
                <a href="#hero" className="flex items-center">
                  <Image src="/images/aifu.png" alt="logo" width={40} height={40} className="mr-2 bg-slate-900 rounded-full" />
                  <span className={`self-center text-xl font-semibold whitespace-nowrap ${darkMode ? 'text-black' : 'text-white'} `}>Portfolio</span>
                </a>
                <button className='flex items-center lg:order-2'>
                  {firstSvgVisible && (
                    <svg
                      aria-hidden="true"
                      focusable="false"
                      height="22"
                      role="presentation"
                      viewBox="0 0 24 24"
                      width="22"
                      className='text-white'
                      onClick={toggleFirstSvg}
                    >
                      {<g fill="currentColor"><path d="M19 12a7 7 0 11-7-7 7 7 0 017 7z"></path><path d="M12 22.96a.969.969 0 01-1-.96v-.08a1 1 0 012 0 1.038 1.038 0 01-1 1.04zm7.14-2.82a1.024 1.024 0 01-.71-.29l-.13-.13a1 1 0 011.41-1.41l.13.13a1 1 0 010 1.41.984.984 0 01-.7.29zm-14.28 0a1.024 1.024 0 01-.71-.29 1 1 0 010-1.41l.13-.13a1 1 0 011.41 1.41l-.13.13a1 1 0 01-.7.29zM22 13h-.08a1 1 0 010-2 1.038 1.038 0 011.04 1 .969.969 0 01-.96 1zM2.08 13H2a1 1 0 010-2 1.038 1.038 0 011.04 1 .969.969 0 01-.96 1zm16.93-7.01a1.024 1.024 0 01-.71-.29 1 1 0 010-1.41l.13-.13a1 1 0 011.41 1.41l-.13.13a.984.984 0 01-.7.29zm-14.02 0a1.024 1.024 0 01-.71-.29l-.13-.14a1 1 0 011.41-1.41l.13.13a1 1 0 010 1.41.97.97 0 01-.7.3zM12 3.04a.969.969 0 01-1-.96V2a1 1 0 012 0 1.038 1.038 0 01-1 1.04z"></path></g>}
                    </svg>
                  )}
                  {secondSvgVisible && (
                    <svg
                      aria-hidden="true"
                      focusable="false"
                      height="22"
                      role="presentation"
                      viewBox="0 0 24 24"
                      width="22"
                      className='text-black'
                      onClick={toggleSecondSvg}
                    >
                      {<path d="M21.53 15.93c-.16-.27-.61-.69-1.73-.49a8.46 8.46 0 01-1.88.13 8.409 8.409 0 01-5.91-2.82 8.068 8.068 0 01-1.44-8.66c.44-1.01.13-1.54-.09-1.76s-.77-.55-1.83-.11a10.318 10.318 0 00-6.32 10.21 10.475 10.475 0 007.04 8.99 10 10 0 002.89.55c.16.01.32.02.48.02a10.5 10.5 0 008.47-4.27c.67-.93.49-1.519.32-1.79z" fill="currentColor"></path>}
                    </svg>
                  )}
                  <div className="flex pl-4 items-center lg:order-2">
                    <Link
                      href="#contact"
                      className="text-white bg-primary-700 hover:bg-primary-800 focus:ring-4 focus:ring-primary-300 font-medium rounded-lg text-sm px-4 lg:px-5 py-2 lg:py-2.5 mr-2 dark:bg-primary-600 dark:hover:bg-primary-700 focus:outline-none dark:focus:ring-primary-800"
                    >
                      Contact
                    </Link>
                  </div>

                </button>
              </div>
            </nav>
          </header>
        </section>






        <div class={`${darkMode ? 'bg-white' : 'bg-gray-900'} overflow-hidden`} >

          <section id='hero' class=" pt-5 max-[768px]:justify-center max-[768px]:text-center max-[768px]:pt-20" data-aos="zoom-in-up">
            <div class="grid max-w-screen-xl px-4 py-8 mx-auto lg:gap-8 xl:gap-0 lg:py-16 lg:grid-cols-12">
              <div class="mr-auto place-self-center lg:col-span-7">
                <h1 className={`${darkMode ? 'text-black' : 'text-white'} text-5xl font-bold`}>Full-Stack Developer</h1>
                <h2 className={`${classes.h2} text-white`}>Master in&nbsp;<span className={classes.typewriter}></span></h2>
                <p class="max-w-2xl mb-6 font-light text-gray-500 lg:mb-8 md:text-lg lg:text-xl">Welcome to my world of coding and creativity, where Next.js empowers me to bring imagination to life.</p>
                <a href="https://drive.google.com/uc?export=download&id=12yEC_N2mPjo7DtXJ_hUHzaYLvPIQcTR1" class={`inline-flex items-center justify-center px-5 py-3 mr-3 text-base font-medium text-center text-white rounded-lg bg-primary-700 hover:bg-primary-800 focus:ring-4 focus:ring-primary-300 ${darkMode ? 'focus:ring-primary-900' : ''}`}>                  Download Resume
                  <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                    <path d="M10 13l-5-4h3V4h4v5h3l-5 4zm0 2a1 1 0 100 2 1 1 0 000-2z" />
                  </svg>

                  {/* <svg class="w-5 h-5 ml-2 -mr-1" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg> */}
                </a>
                <a href="https://drive.google.com/file/d/12yEC_N2mPjo7DtXJ_hUHzaYLvPIQcTR1/view?usp=sharing" class={`inline-flex items-center justify-center px-5 py-3 text-base font-medium text-center border  ${darkMode ? 'text-black border-gray-300 hover:text-white hover:bg-gray-400 ' : 'text-white border-gray-700 hover:bg-gray-700'}  rounded-lg    max-[768px]:mt-5`}>
                  View Resume
                </a>
                <div className='mt-10'>
                  <h3 className={`${darkMode ? 'text-black' : ' text-white'} text-xl font-normal flex flex-col md:flex-row items-center`}>
                    Tech Stack
                    <span className='text-orange-500 mt-2 md:mt-0 ml-0 md:ml-5 hidden md:block'></span>
                    <span className='hidden md:inline-block h-8 border-l-2 border-orange-500 ml-5'></span>
                    <div className="flex space-x-3 md:space-x-5 ml-0 md:ml-10 mt-2 md:mt-0">
                      <Image src="/images/js.png" width={30} height={30} />
                      <Image src="/images/html.png" width={30} height={30} />
                      <Image src="/images/css-3.png" width={30} height={30} />
                      <Image src="/images/react.png" width={30} height={30} />
                      <Image src="/images/tailwindcss-icon.png" width={30} height={30} />
                      <Image src="/images/graphql-icon.png" width={30} height={30} />
                    </div>
                  </h3>
                </div>
              </div>
              <div class="hidden lg:mt-0 lg:col-span-5 lg:flex">
                <Image src="/images/me.jpeg" alt="mockup" width={380} height={380} layout='fixed' className={classes.Image} />
              </div>
            </div>
          </section>


          <section class=" py-8">
            <div class="max-w-screen-md mx-auto text-center">
              <h2 class="pb-4 text-5xl font-extrabold text-orange-500 sm:text-5xl">
                GET TO KNOW ME
              </h2>
              <div data-aos="fade-right" class={`${darkMode ? 'bg-slate-200 border-gray-200' : 'bg-gray-800  border-gray-700'} shadow-lg rounded-lg p-6 border  mx-auto`}>
                <p class={`${darkMode ? 'text-gray-800' : ' text-gray-300'} leading-relaxed`}>
                  Hey there, I'm <strong>Huzaifa Bilal</strong>, a dedicated full stack developer pursuing a Computer Science degree at FAST National University. With expertise in React, Node.js, GraphQL, and Next.js, I love creating dynamic web experiences. Problem-solving is my passion, driving me to craft seamless front-end interfaces and robust back-end systems. I'm always learning and staying ahead of tech trends, committed to making impactful contributions to the digital world. Let's embark on this coding journey together!
                </p>
              </div>
            </div>
          </section>

          <section class=" antialiased pt-5">
            <div class="max-w-screen-xl px-4 py-8 mx-auto lg:px-6 sm:py-16 lg:py-24">
              <div class="max-w-2xl mx-auto text-center">
                <h2 class="text-5xl font-extrabold leading-tight tracking-wide text-orange-500 sm:text-5xl">
                  My Projects
                </h2>
                <p class={`mt-4 text-base font-normal sm:text-xl ${darkMode ? 'text-gray-500' : 'text-gray-400'}`}>
                  Crafted with my skills and knowledge!
                </p>
              </div>

              <div class="grid grid-cols-1 mt-12 text-center sm:mt-16 gap-x-20 gap-y-12 sm:grid-cols-2 lg:grid-cols-3">

                <div data-aos="fade-up" class={`rounded-lg overflow-hidden shadow-md ${darkMode ? 'bg-white' : ' bg-gray-800'}`}>
                  <Image src="/images/blog_gen.png" width={400} height={400} alt="blog" class="w-full h-44 object-cover" />
                  <div class="p-4 space-y-2">
                    <h3 class="text-xl font-medium text-slate-500">
                      Nextjs Blog Generator
                    </h3>
                    <p class={`text-md font-normal ${darkMode ? 'text-gray-600' : 'text-gray-300'} `}>
                      The Nextjs Blog Generator is designed to simplify the process of managing blogs using the Next.js framework.
                    </p>
                    <a href="https://github.com/huzaifa-bilal-01/my-blog-engine.git" title=""
                      class={`text-white inline-flex items-center px-4 py-2 text-sm font-medium rounded-md ${darkMode ? 'bg-primary-700 hover:bg-primary-800' : 'bg-primary-600 hover:bg-primary-700'}   `}>
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


                <div data-aos="fade-up" class={`rounded-lg overflow-hidden shadow-md ${darkMode ? 'bg-white' : ' bg-gray-800'}`}>
                  <Image src="/images/fighter.jpg" width={360} height={300} alt="fighter" class="w-full h-44 object-cover" />
                  <div class="p-4 space-y-2">
                    <h3 class="text-xl font-medium text-slate-500">
                      AI Street Fighter
                    </h3>
                    <p class={`text-md font-normal ${darkMode ? 'text-gray-600' : 'text-gray-300'} `}>
                      This project contains a simple and brief AI model trained for the classic Street Fighter game.
                    </p>
                    <a href="https://github.com/huzaifa-bilal-01/SF-DeepLearningGame.git" title=""
                      class={`text-white inline-flex items-center px-4 py-2 text-sm font-medium rounded-md ${darkMode ? 'bg-primary-700 hover:bg-primary-800' : 'bg-primary-600 hover:bg-primary-700'}   `}>
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


                <div class={`rounded-lg overflow-hidden shadow-md ${darkMode ? 'bg-white' : ' bg-gray-800'}`} data-aos="fade-up">
                  <Image src="/images/Vet.jpg" width={330} height={330} alt="vet" class="w-full h-44 object-cover" />
                  <div class="p-4 space-y-2">
                    <h3 class="text-xl font-medium text-slate-500">
                      Web DEV-MERN
                    </h3>
                    <p class={`text-md font-normal ${darkMode ? 'text-gray-600' : 'text-gray-300'} `}>
                      The MERN-based veteran app is a feature-rich web application designed to serve and support veterans.
                    </p>
                    <a href="https://github.com/huzaifa-bilal-01/Web-Development-MERN-Course-Project-2022.git" title=""
                      class={`text-white inline-flex items-center px-4 py-2 text-sm font-medium rounded-md ${darkMode ? 'bg-primary-700 hover:bg-primary-800' : 'bg-primary-600 hover:bg-primary-700'}   `}>
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
            </div>
          </section>



          <section class=" pt-5">
            <div class="max-w-screen-xl px-4 py-8 mx-auto text-center lg:py-16 lg:px-6">
              <h2 class=" pb-2 text-5xl font-extrabold leading-tight tracking-wide text-orange-500 sm:text-5xl">
                Testonimal
              </h2>
              <figure class="max-w-screen-md mx-auto">
                <svg class={`h-12 mx-auto mb-3 ${darkMode ? 'text-gray-400' : ' text-gray-600'} `} viewBox="0 0 24 27" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M14.017 18L14.017 10.609C14.017 4.905 17.748 1.039 23 0L23.995 2.151C21.563 3.068 20 5.789 20 8H24V18H14.017ZM0 18V10.609C0 4.905 3.748 1.038 9 0L9.996 2.151C7.563 3.068 6 5.789 6 8H9.983L9.983 18L0 18Z" fill="currentColor" />
                </svg>
                <div data-aos="zoom-in"> 
                  <blockquote>
                    <p class={`text-2xl font-medium ${darkMode ? 'text-gray-900' : 'text-white'} `}>"I've found Next.js to be the perfect solution for both small projects and large-scale applications. It has become my go-to framework for web development, and I highly recommend it to fellow developers looking to elevate their frontend game and deliver exceptional digital experiences."</p>
                  </blockquote>
                  <figcaption class="flex items-center justify-center mt-6 space-x-3">
                    <Image height={20} width={20} class="w-6 h-6 rounded-full" src="/images/CTO.jpg" alt="profile picture" />
                    <div class={`flex items-center divide-x-2 ${darkMode ? 'divide-gray-500' : ' divide-gray-700'}`}>
                      <div class={`pr-3 font-medium ${darkMode ? 'text-gray-900' : ' text-white'}`}>Guillermo Rauch</div>
                      <div class={`pl-3 text-sm font-light ${darkMode ? 'text-gray-500' : ' text-gray-400'}`}>CTO at LearnBoost</div>
                    </div>
                  </figcaption>
                </div>

              </figure>
            </div>
          </section>

          <section id='contact' className="sm:flex justify-center sm:items-center  mt-8">
            <div className="sm:flex max-w-screen-2xl mt-5">
              {/* Contact Details */}
              <div className="sm:w-1/2 p-4" data-aos="fade-up">
                <h2 className="mb-4 text-5xl leading-tight font-extrabold text-orange-500 sm:text-5xl">Contact Me</h2>
                <p className={`mb-8 lg:mb-16 font-light ${darkMode ? 'text-gray-500' : 'text-gray-400'} sm:text-xl`}>Got a technical issue? Want to send feedback about a beta feature? Need details about our Business plan? Let me know.</p>
                {/* Contact details here */}
              </div>
              {/* Form */}
              <div className="sm:w-1/2 p-4">
                <form className="space-y-8" onSubmit={sendMessageHandler} data-aos="fade-left">
                  <div>
                    <label for="email" className={`block mb-2 text-sm font-medium ${darkMode ? 'text-gray-900' : 'text-gray-300'} `}>Your email</label>
                    <input type="email" id="email" className={`shadow-sm text-sm rounded-lg border block w-full p-2.5 ${darkMode ? 'bg-slate-200  border-gray-300 text-gray-900  focus:ring-primary-500 focus:border-primary-500' : 'bg-gray-700 border-gray-600 placeholder-gray-400 text-white focus:ring-primary-500 focus:border-primary-500 shadow-sm-light'}`} placeholder="name@domain.com" required
                      value={enteredEmail}
                      onChange={(event) => setEnteredEmail(event.target.value)}
                    />
                  </div>
                  <div>
                    <label for="subject" className={`block mb-2 text-sm font-medium ${darkMode ? 'text-gray-900' : 'text-gray-300'} `}>Subject</label>
                    <input id="subject" className={`shadow-sm text-sm rounded-lg border block w-full p-2.5 ${darkMode ? 'bg-slate-200  border-gray-300 text-gray-900  focus:ring-primary-500 focus:border-primary-500' : 'bg-gray-700 border-gray-600 placeholder-gray-400 text-white focus:ring-primary-500 focus:border-primary-500 shadow-sm-light'}`} placeholder="What is subject" required
                      value={enteredSubject}
                      onChange={(event) => setenteredSubject(event.target.value)}
                    />
                  </div>
                  <div className="sm:col-span-2">
                    <label for="message" className={`block mb-2 text-sm font-medium ${darkMode ? 'text-gray-900' : 'text-gray-300'} `}>Your Message</label>
                    <textarea id="message" rows="6" className={`block p-2.5 w-full text-sm rounded-lg shadow-sm border ${darkMode ? 'text-gray-900 bg-slate-200  border-gray-300 focus:ring-primary-500 focus:border-primary-500' : 'bg-gray-700 border-gray-600 placeholder-gray-400 text-white focus:ring-primary-500 focus:border-primary-500 '} `} placeholder="Leave a message..."
                      value={enteredMessage}
                      onChange={(event) => setEnteredMessage(event.target.value)}
                    ></textarea>
                  </div>
                  <button className={`py-3 px-5 text-sm font-medium text-center rounded-lg sm:w-fit focus:ring-4 focus:outline-none ${darkMode ? 'text-white  bg-primary-600  hover:bg-primary-800  focus:ring-primary-300' : 'bg-primary-600 hover:bg-primary-700 focus:ring-primary-800'} `}>Send message</button>
                </form>
              </div>
            </div>
          </section>


        </div>




        <section className='overflow-hidden'>
          <footer class={`p-4 sm:p-6 ${darkMode ? 'bg-slate-200' : 'bg-gray-800'} ov`}>
            <div class="mx-auto max-w-screen-xl">
              <div class="md:flex md:justify-between">
                <div class="mb-6 md:mb-0">

                </div>
                <div class="grid grid-cols-2 gap-8 sm:gap-6 sm:grid-cols-3">
                  <div>
                    <h2 class={`mb-6 text-sm font-semibold uppercase ${darkMode ? 'text-gray-900' : 'text-white'}`}>Resources</h2>
                    <ul class={`${darkMode ? 'text-gray-600' : 'text-gray-400'}`}>
                      <li class="mb-4">
                        <a href="https://nextjs.org/docs" class="hover:underline">Nextjs</a>
                      </li>
                      <li>
                        <a href="https://fontawesome.com/v5/docs/web/use-with/react" class="hover:underline">Font Awesome</a>
                      </li>
                    </ul>
                  </div>
                  <div>
                    <h2 class={`mb-6 text-sm font-semibold uppercase ${darkMode ? 'text-gray-900' : 'text-white'}`}>Follow Me</h2>
                    <ul class={`${darkMode ? 'text-gray-600' : 'text-gray-400'}`}>
                      <li class="mb-4">
                        <a href="https://github.com/huzaifa-bilal-01" class="hover:underline ">Github</a>
                      </li>
                      <li>
                        <a href="https://www.linkedin.com/in/huzaifa-bilal-0a3481231" class="hover:underline">LinkedIn</a>
                      </li>
                    </ul>
                  </div>
                  <div>
                    <h2 class={`mb-6 text-sm font-semibold uppercase ${darkMode ? 'text-gray-900' : 'text-white'}`}>Legal</h2>
                    <ul class={`${darkMode ? 'text-gray-600' : 'text-gray-400'}`}>
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
              <hr class={`my-6 sm:mx-auto ${darkMode ? 'border-gray-200' : 'border-gray-700'} lg:my-8`} />
              <div class="sm:flex sm:items-center sm:justify-between">
                <span class="text-sm text-gray-500 sm:text-center">© 2023 <a href="https://flowbite.com" class="hover:underline">AIFU Portfolio™</a>. All Rights Reserved.
                </span>
                <div class="flex mt-4 space-x-6 sm:justify-center sm:mt-0">
                  <a href="https://www.facebook.com/profile.php?id=100093702731832" class={`text-gray-500 ${darkMode ? 'hover:text-gray-900' : 'hover:text-white'}  `}>
                    <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true"><path fill-rule="evenodd" d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" clip-rule="evenodd" /></svg>
                  </a>
                  <a href="https://www.instagram.com/zaifuu_/" class={`text-gray-500 ${darkMode ? 'hover:text-gray-900' : 'hover:text-white'}  `}>
                    <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true"><path fill-rule="evenodd" d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z" clip-rule="evenodd" /></svg>
                  </a>
                  <a href="https://twitter.com/yarri0331?s=09" class={`text-gray-500 ${darkMode ? 'hover:text-gray-900' : 'hover:text-white'}  `}>
                    <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true"><path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84" /></svg>
                  </a>
                  <a href="https://github.com/huzaifa-bilal-01" class={`text-gray-500 ${darkMode ? 'hover:text-gray-900' : 'hover:text-white'}  `}>
                    <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true"><path fill-rule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clip-rule="evenodd" /></svg>
                  </a>
                </div>
              </div>
            </div>
          </footer>
        </section>
      </div>
    </Fragment>

  )
}