import "./index.css";
import { ReactComponent as BankLogo } from "./images/logo.svg";
import phoneMockup from "./images/image-mockups.png";
import { ReactComponent as PhoneMockupBg } from "./images/bg-intro-desktop.svg";
import { ReactComponent as BudgetIcon } from "./images/icon-budgeting.svg";
import { ReactComponent as APIIcon } from "./images/icon-api.svg";
import { ReactComponent as OnBoardIcon } from "./images/icon-onboarding.svg";
import { ReactComponent as OnlineBankIcon } from "./images/icon-online.svg";
import currency from "./images/image-currency.jpg";
import plane from "./images/image-plane.jpg";
import restaurant from "./images/image-restaurant.jpg";
import confetti from "./images/image-confetti.jpg";

function App() {
  return (
    <section id="container" className="relative overflow-x-hidden">
      <section className=" min-h-screen xl:h-screen flex flex-col  bg-[#fafafa]   ">
        <nav className=" flex flex-col py-6 sm:py-0 gap-5 sm:gap-0  sm:flex-row justify-around items-center sticky top=0 bg-white z-10  ">
          <BankLogo />
          <div className="flex flex-col  sm:flex-row gap-4 sm:gap-6 ">
            <button className="font-semibold text-gray-400 border-b-4 border-transparent hover:border-b-4 hover:border-[#31d35c] sm:py-6">
              Home
            </button>
            <button className="font-semibold text-gray-400 border-b-4 border-transparent hover:border-b-4 hover:border-[#31d35c] sm:py-6">
              About
            </button>
            <button className="font-semibold text-gray-400 border-b-4 border-transparent hover:border-b-4 hover:border-[#31d35c] sm:py-6">
              Contact
            </button>
            <button className="font-semibold text-gray-400 border-b-4 border-transparent hover:border-b-4 hover:border-[#31d35c] sm:py-6">
              Blog
            </button>
            <button className="font-semibold text-gray-400 border-b-4 border-transparent hover:border-b-4 hover:border-[#31d35c] sm:py-6">
              Careers
            </button>
          </div>
          <button className="bg-gradient-to-r from-[#31d35c] to-[#2bb7da] text-white px-8 py-2 rounded-3xl font-bold hover:opacity-40">
            Request Invite
          </button>
        </nav>
        <div className="flex flex-col h-full md:h-[inherit] md:grid md:grid-cols-2 md:grid-rows-1 ">
          <div className="h-full gap-10 flex flex-col  pb-20 pt-[22rem] sm:pt-[45rem] px-10 justify-end items-center xl:items-start xl:justify-center xl:py-0 xl:px-40 ">
            <h1 className="text-6xl text-center xl:text-left text-gray-700 leading-[4rem]">
              Next generation digital banking
            </h1>
            <h2 className="text-xl text-gray-400 text-center lg:text-left">
              Take your financial life online. Your Easybank account will be a
              one-stop-shop for spending, saving, budgetting, and much more
            </h2>
            <div>
              <button className="bg-gradient-to-r from-[#31d35c] to-[#2bb7da] text-white px-8 py-2 rounded-3xl font-bold hover:opacity-40 ">
                Request Invite
              </button>
            </div>
          </div>
          <div className=" ">
            <PhoneMockupBg className="absolute -top-[20rem] -right-[30rem]  sm:-top-[20rem] sm:-right-[20rem] md:-top-[11rem] md:-right-[28rem]" />
            <img
              src={phoneMockup}
              alt="Phone Mockups"
              className="absolute top-[15rem] mx-auto right-0 left-0  sm:-top-[10rem] md:-top-[2.5rem]  md:mx-0 md:-right-[8rem] md:left-[auto] "
            />
          </div>
        </div>
      </section>
      <section className="min-h-screen bg-gray-100 flex flex-col justify-around gap-5 px-10 sm:px-40 py-16">
        <div className="flex flex-col gap-8">
          <h1 className="text-5xl text-gray-700 text-center lg:text-left">
            Why choose Easybank?
          </h1>
          <h2 className="text-lg text-gray-400 font-semibold text-center lg:text-left">
            We leverage Open Banking to turn your bank account into your
            financial hub. <br />
            Control your finances like never before.
          </h2>
        </div>
        <div className="flex flex-col lg:flex-row gap-8 text-gray-700 ">
          <article className="flex items-center lg:items-start flex-col gap-6">
            <OnlineBankIcon />
            <h3 className="text-2xl  ">Online Banking</h3>
            <p className="text-gray-400">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit.
              Molestiae hic suscipit alias expedita praesentium aliquid quod
              libero assumenda asperiores. Harum porro aliquam eius deleniti
              pariatur numquam esse illo eum repudiandae.
            </p>
          </article>
          <article className="flex items-center lg:items-start flex-col gap-6">
            <BudgetIcon />
            <h3 className="text-2xl"> Simple Budgeting</h3>
            <p className="text-gray-400">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem
              provident consequuntur debitis optio voluptas voluptatem
              reiciendis iste natus voluptatum quasi illum aliquid dolorum
              distinctio, vitae ipsum quis tempora quod! Quia!
            </p>
          </article>
          <article className="flex items-center lg:items-start flex-col gap-6">
            <OnBoardIcon />
            <h3 className="text-2xl">Fast Onboarding</h3>
            <p className="text-gray-400">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos
              obcaecati deserunt nihil consectetur soluta repellat natus odit
              qui molestias quis perspiciatis iste mollitia, ipsa, explicabo
              sed. Esse, ipsam? Delectus, sit.
            </p>
          </article>
          <article className="flex items-center lg:items-start flex-col gap-6">
            <APIIcon />
            <h3 className="text-2xl">Open API</h3>
            <p className="text-gray-400">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. At aut
              incidunt alias veniam ducimus sed suscipit distinctio, qui sequi
              sint fugiat placeat labore sunt ipsum possimus, nesciunt voluptas
              ad voluptatibus?
            </p>
          </article>
        </div>
      </section>
      <section
        className="min-h-screen bg-[#fafafa]  xl:px-40 py-20 flex flex-col
      items-center xl:items-start gap-10"
      >
        <h1 className="text-5xl text-gray-700">Latest Articles</h1>
        <div className="flex flex-col xl:flex-row  items-center xl:items-start gap-5">
          <article className="bg-white rounded-lg overflow-hidden grid grid-rows-2 sm:w-1/2 xl:w-full">
            <img src={currency} alt="" className="h-full w-full" />
            <div className="px-8 py-5 flex flex-col gap-2">
              <h1 className="text-sm text-gray-400">By asmdkam</h1>
              <h2 className="text-lg text-gray-700 font-semibold">
                Receiving Money
              </h2>
              <p className="text-gray-400">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Praesentium delectus quidem quaerat velit incidunt animi
                voluptatem repellat doloribus officiis, deserunt, cupiditate at
              </p>
            </div>
          </article>
          <article className="bg-white rounded-lg overflow-hidden grid grid-rows-2 sm:w-1/2 xl:w-full">
            <img src={restaurant} alt="" className="h-full w-full" />
            <div className="px-8 py-5 flex flex-col gap-2 ">
              <h1 className="text-sm text-gray-400">By asmdkam</h1>
              <h2 className="text-lg text-gray-700 font-semibold">
                Restaurant
              </h2>
              <p className="text-gray-400">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Praesentium delectus quidem quaerat velit incidunt animi
                voluptatem repellat doloribus officiis, deserunt, cupiditate at
              </p>
            </div>
          </article>
          <article className="bg-white rounded-lg overflow-hidden grid grid-rows-2 sm:w-1/2 xl:w-full">
            <img src={plane} alt="" className="h-full w-full" />
            <div className="px-8 py-5 flex flex-col gap-2 ">
              <h1 className="text-sm text-gray-400">By asmdkam</h1>
              <h2 className="text-lg text-gray-700 font-semibold">Aeroplane</h2>
              <p className="text-gray-400">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Praesentium delectus quidem quaerat velit incidunt animi
                voluptatem repellat doloribus officiis, deserunt, cupiditate at
              </p>
            </div>
          </article>
          <article className="bg-white rounded-lg overflow-hidden grid grid-rows-2 sm:w-1/2 xl:w-full">
            <img src={confetti} alt="" className="h-full w-full" />
            <div className="px-8 py-5 flex flex-col gap-2">
              <h1 className="text-sm text-gray-400">By asmdkam</h1>
              <h2 className="text-lg text-gray-700 font-semibold">Ocean</h2>
              <p className="text-gray-400">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Praesentium delectus quidem quaerat velit incidunt animi
                voluptatem repellat doloribus officiis, deserunt, cupiditate at
              </p>
            </div>
          </article>
        </div>
      </section>
      <footer className="flex flex-col sm:flex-row gap-3 sm:gap-0 justify-around items-center bg-[#2d314d]  py-10">
        <div className="flex flex-col sm:flex-row gap-3 sm:gap-20">
          <div>
            <svg xmlns="http://www.w3.org/2000/svg" width="139" height="20">
              <defs>
                <linearGradient
                  id="a"
                  x1="72.195%"
                  x2="17.503%"
                  y1="0%"
                  y2="100%"
                >
                  <stop offset="0%" stop-color="#33D35E" />
                  <stop offset="100%" stop-color="#2AB6D9" />
                </linearGradient>
              </defs>
              <g fill="none" fill-rule="evenodd">
                <path
                  fill="white"
                  fill-rule="nonzero"
                  d="M37.754 15.847c2.852 0 5.152-1.622 5.952-4.216h-3.897c-.376.665-1.14 1.066-2.055 1.066-1.237 0-2.065-.674-2.32-1.978h8.44c.051-.352.081-.694.081-1.037 0-3.335-2.537-5.95-6.201-5.95-3.568 0-6.175 2.564-6.175 6.049 0 3.473 2.628 6.066 6.175 6.066zm2.344-7.297h-4.596c.317-1.129 1.11-1.749 2.252-1.749 1.181 0 2 .613 2.344 1.75zm10.946 7.296c1.32 0 2.5-.434 3.43-1.188l.336.804h3.027V4.093h-2.919l-.4.88c-.94-.775-2.135-1.222-3.474-1.222-3.476 0-5.961 2.505-5.961 6.026 0 3.533 2.485 6.07 5.961 6.07zm.524-3.467c-1.467 0-2.545-1.108-2.545-2.593 0-1.475 1.069-2.583 2.545-2.583 1.466 0 2.544 1.108 2.544 2.583 0 1.485-1.078 2.593-2.544 2.593zm13.123 3.467c3.02 0 5.025-1.554 5.025-3.93 0-2.883-2.387-3.256-4.183-3.575-1.08-.193-1.95-.344-1.95-.99 0-.527.422-.838 1.05-.838.71 0 1.197.337 1.197 1.063h3.667c-.044-2.303-1.92-3.843-4.816-3.843-2.912 0-4.854 1.47-4.854 3.75 0 2.757 2.337 3.289 4.1 3.574 1.092.181 1.952.368 1.952 1.024 0 .587-.543.88-1.116.88-.742 0-1.32-.383-1.32-1.214h-3.77c.036 2.463 1.919 4.1 5.018 4.1zm8.1 3.858c2.936 0 4.344-1.257 5.877-4.736l4.764-10.863h-4.206l-2.249 6.263-2.412-6.263H70.31l4.698 10.43c-.53 1.414-.983 1.804-2.48 1.804H71.45v3.365h1.341zm18.504-3.858c3.5 0 5.973-2.515 5.973-6.048S94.796 3.75 91.295 3.75a5.332 5.332 0 00-2.825.784V0H84.6v15.474h2.897l.37-.844c.923.771 2.102 1.216 3.428 1.216zm-.523-3.467c-1.467 0-2.545-1.108-2.545-2.58 0-1.486 1.078-2.594 2.545-2.594 1.466 0 2.544 1.108 2.544 2.593 0 1.473-1.087 2.58-2.544 2.58zm13.598 3.467c1.32 0 2.5-.434 3.43-1.188l.336.804h3.027V4.093h-2.918l-.401.88c-.939-.775-2.135-1.222-3.474-1.222-3.476 0-5.96 2.505-5.96 6.026 0 3.533 2.484 6.07 5.96 6.07zm.524-3.467c-1.467 0-2.545-1.108-2.545-2.593 0-1.475 1.07-2.583 2.545-2.583 1.467 0 2.545 1.108 2.545 2.583 0 1.485-1.078 2.593-2.545 2.593zm12.653 3.095V9.403c0-1.447.702-2.3 1.923-2.3.986 0 1.483.657 1.483 1.98v6.39h3.915V8.543c0-2.897-1.733-4.773-4.373-4.773-1.47 0-2.733.565-3.58 1.508l-.537-1.172h-2.747v11.369h3.916zm13.748 0v-4.808l2.848 4.808h4.616l-3.902-5.95 3.543-5.419h-4.397l-2.708 4.454V0h-3.916v15.474h3.916z"
                />
                <g fill="url(#a)">
                  <path d="M10.802 0L0 19.704h5.986L16.789 0z" />
                  <path
                    opacity=".5"
                    d="M18.171 0L7.368 19.704h5.986L24.157 0z"
                  />
                  <path
                    opacity=".15"
                    d="M25.539 0L14.737 19.704h5.986L31.525 0z"
                  />
                </g>
              </g>
            </svg>
          </div>
          <div className="flex flex-col sm:flex-row gap-3 sm:gap-20">
            <ul className="flex flex-col items-center sm:items-start gap-3">
              <li className="text-white">About us</li>
              <li className="text-white">Contact</li>
              <li className="text-white">Blog</li>
            </ul>
            <ul className="flex flex-col items-center sm:items-start gap-3">
              <li className="text-white">Careers</li>
              <li className="text-white">Support</li>
              <li className="text-white">Privacy Policy</li>
            </ul>
          </div>
        </div>
        <div className="flex flex-col gap-3 sm:gap-5 items-center sm:items-end">
          <button className="bg-gradient-to-r from-[#31d35c] to-[#2bb7da] text-white px-8 py-2 rounded-3xl font-bold hover:opacity-40 ">
            Request Invite
          </button>
          <p className="text-lg text-gray-500 font-semibold">
            All rights reserved
          </p>
        </div>
      </footer>
    </section>
  );
}

export default App;
