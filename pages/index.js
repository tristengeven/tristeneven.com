import Head from "next/head";
import { BsCodeSlash, BsPeople } from "react-icons/bs";
import {
  AiFillTwitterCircle,
  AiFillLinkedin,
  AiFillYoutube,
  AiFillGithub,
} from "react-icons/ai";
import { MdWeb, MdDarkMode } from "react-icons/md";
import { BiServer } from "react-icons/bi";
import Image from "next/image";
import deved from "../public/dev-ed-wave.png";
import design from "../public/design.png";
import code from "../public/code.png";
import consulting from "../public/consulting.png";
import web1 from "../public/web1.png";
import web2 from "../public/web2.png";
import web3 from "../public/web3.png";
import web4 from "../public/web4.png";
import web5 from "../public/web5.png";
import web6 from "../public/web6.png";
import utdrugby from "../public/utdrugby.png";
import { useState } from "react";
// import Image from "next/image";
// import styles from "../styles/Home.module.css";

export default function Home() {
  const [darkMode, setDarkMode] = useState(false);
  return (
    <div className={darkMode ? "dark" : ""}>
      <Head>
        <title>Tristen Even Portfolio</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="bg-white px-10 md:px-20 lg:px-40 dark:bg-gray-900">
        <section className="min-h-screen">
          <nav className="py-10 mb-12 flex justify-between">
            <h1 className="text-xl font-silkscreen dark:text-gray-300">
              tristen
            </h1>
            <ul className="flex items-center">
              <li>
                <MdDarkMode
                  onClick={() => setDarkMode(!darkMode)}
                  className="cursor-pointer text-2xl dark:text-gray-300"
                />
              </li>
              <li>
                {/* <a
                  className="bg-gradient-to-r from-sky-800 to-sky-600 text-white px-4 py-2 rounded-xl ml-8"
                  href="#"
                >
                  Resume
                </a> */}
              </li>
            </ul>
          </nav>
          <div className="text-center p-10">
            <h2 className="text-5xl py-2 text-sky-900 font-medium md:text-6xl">
              Tristen Even
            </h2>
            <h3 className=" text-2xl py-2 md:text-3xl dark:text-gray-300">
              Developer and cloud enthusiast.
            </h3>
            <p className="text-lg pt-5 pb-20 leading-6 text-gray-600 max-w-lg mx-auto mt-5 md:text-xl md:mt-0 dark:text-gray-300">
              {/* Infrastucture and Systems Admin by day, freelancer in my other
              time. See my services and projects below and feel free to reach
              out if you'd like to work together. */}
              Systems Administrator with a passion for maintaining knowledge and
              capability in current tech trends. I love to work with small
              businesses and individuals to make things work. Let&apos;s create
              something together.
            </p>
          </div>
          {/* <div className=" text-4xl flex justify-center gap-10 py-3 text-gray-600 dark:text-sky-900">
            <AiFillGithub />
            <AiFillLinkedin />
            <AiFillYoutube />
          </div> */}
          {/* <div className="relative mx-auto my-10 bg-gradient-to-b from-sky-800 rounded-full w-80 h-80 mt-20 overflow-hidden md:h-90 md:w-90">
            <Image src={deved} layout="fill" objectFit="cover" />
          </div> */}
        </section>
        {/* End Landing Section */}
        <section>
          <div>
            <h3 className="text-3xl py-1 dark:text-gray-300">Services</h3>
            <p className="text-md py-2 leading-6 text-gray-600 dark:text-gray-300">
              {/* I work professionally with{" "}
              <span className="text-sky-800">Windows sytems</span>, Azure,
              Office 365 */}
              I work professionally as a Systems Administrator, working mainly
              with server administration and cloud tools like Office 365 and
              Azure. I enjoy curating websites for small business or
              individuals, writing code where I can help, and tutoring
              computing/math courses. See a bit more on what I know and what I
              can offer.
            </p>
            {/* <p className="text-md py-2 leading-6 text-gray-600 dark:text-gray-300">
              Website <span className="text-sky-800">design</span>, on-site or
              remote tech support, server & infastructure setup and maintenance,
              desktop support
            </p> */}
          </div>
          <div className="lg:flex lg:justify-between gap-10">
            <div className="text-center shadow-xl p-10 rounded-xl my-10 dark:bg-white lg:max-w-[22%]">
              {/* <Image src={design} width={100} height={100} /> */}
              <MdWeb className=" text-6xl mx-auto text-sky-800" />
              <h3 className="text-lg font-medium pt-8 pb-2">Web Design</h3>
              <p className="py-2">creating custom websites to fit your needs</p>
              <h4 className="py-4 font-medium text-sky-900">
                Frameworks I use
              </h4>
              <p className="text-gray-800 py-1">HTML/CSS/JS</p>
              <p className="text-gray-800 py-1">React</p>
              <p className="text-gray-800 py-1">NextJS</p>
              <p className="text-gray-800 py-1">Angular</p>
              <p className="text-gray-800 py-1">TailwindCSS</p>
            </div>
            <div className="text-center shadow-xl p-10 rounded-xl my-10 dark:bg-white lg:max-w-[22%]">
              {/* <Image src={consulting} width={100} height={100} /> */}
              <BiServer className=" text-6xl mx-auto text-sky-800" />
              <h3 className="text-lg font-medium pt-8 pb-2">Infrastucture</h3>
              <p className="py-2">
                helping your business meet technical needs, from desktop to
                cloud
              </p>
              <h4 className="py-4 font-medium text-sky-900">
                Areas of expertise
              </h4>
              <p className="text-gray-800 py-1">Windows Server/Desktop</p>
              <p className="text-gray-800 py-1">Microsoft Azure</p>
              <p className="text-gray-800 py-1">Office 365</p>
              <p className="text-gray-800 py-1">Outlook</p>
            </div>
            <div className="text-center shadow-xl p-10 rounded-xl my-10 dark:bg-white lg:max-w-[22%]">
              {/* <Image src={code} width={100} height={100} /> */}
              <BsCodeSlash className=" text-6xl mx-auto text-sky-800" />
              <h3 className="text-lg font-medium pt-8 pb-2">Code</h3>
              <p className="py-2">
                tailored software for personal or business use
              </p>
              <h4 className="py-4 font-medium text-sky-900">Languages I use</h4>
              <p className="text-gray-800 py-1">Javascript</p>
              <p className="text-gray-800 py-1">Typescript</p>
              <p className="text-gray-800 py-1">Python</p>
              <p className="text-gray-800 py-1">Powershell/Bash</p>
            </div>

            <div className="text-center shadow-xl p-10 rounded-xl my-10 dark:bg-white lg:max-w-[22%]">
              {/* <Image src={consulting} width={100} height={100} /> */}
              <BsPeople className=" text-6xl mx-auto text-sky-800" />
              <h3 className="text-lg font-medium pt-8 pb-2">Tutoring</h3>
              <p className="py-2">1-on-1 tutoring in a range of courses</p>
              <h4 className="py-4 font-medium text-sky-900">Subjects I know</h4>
              <p className="text-gray-800 py-1">Programming</p>
              <p className="text-gray-800 py-1">Discrete Math/Logic</p>
              <p className="text-gray-800 py-1">Pre-Algebra/Algebra</p>
              <p className="text-gray-800 py-1">Pre-Cal/Calculus</p>
            </div>
          </div>
        </section>
        {/* <section>
          <div>
            <h3 className="text-3xl py-1 dark:text-gray-300">Portfolio</h3>
            <p className="text-md py-2 leading-6 text-gray-600 dark:text-gray-300">
              I work professionally with{" "}
              <span className="text-sky-800">Windows sytems</span>, Azure,
              Office 365
            </p>
          </div>
          <div className="flex flex-col gap-10 py-10 lg:flex-row lg:flex-wrap">
            <div className="basis-1/3 flex-1">
              <Image
                src={utdrugby}
                className="rounded-lg object-cover"
                width={"100%"}
                height={"100%"}
                layout="responsive"
              />
            </div>
            <div className="basis-1/3 flex-1">
              <Image
                src={web2}
                className="rounded-lg object-cover"
                width={"100%"}
                height={"100%"}
                layout="responsive"
              />
            </div>
            <div className="basis-1/3 flex-1">
              <Image
                src={web3}
                className="rounded-lg object-cover"
                width={"100%"}
                height={"100%"}
                layout="responsive"
              />
            </div>
            <div className="basis-1/3 flex-1">
              <Image
                src={web4}
                className="rounded-lg object-cover"
                width={"100%"}
                height={"100%"}
                layout="responsive"
              />
            </div>
            <div className="basis-1/3 flex-1">
              <Image
                src={web5}
                className="rounded-lg object-cover"
                width={"100%"}
                height={"100%"}
                layout="responsive"
              />
            </div>
            <div className="basis-1/3 flex-1">
              <Image
                src={web6}
                className="rounded-lg object-cover"
                width={"100%"}
                height={"100%"}
                layout="responsive"
              />
            </div>
          </div>
        </section> */}
      </main>
    </div>
  );
}
