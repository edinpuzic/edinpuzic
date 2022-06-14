import Head from "next/head";
import Image from "next/image";

export default function Home() {
  return (
    <div className="w-full h-full bg-primary flex items-center border-8 border-secondary-200 relative px-6 md-px-0">
      <Head>
        <title>Edin Puzic | Frontend developer</title>
        <meta
          name="description"
          content="Frontend Developer with a focus on building web and mobile applications. Professional hands-on experience working with JavaScript, React, Vue, React Native, and Node.js."
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="container m-auto flex flex-col-reverse lg:flex-row items-center gap-6 justify-center">
        <div>
          <h2 className="font-main text-secondary-100 text-3xl md:text-5xl">{`Hello I'm Edin Puzic`}</h2>
          <p className="font-main text-secondary-200 text-xl md:text-2xl max-w-[740px] mt-4">
            Frontend Developer with a focus on building web and mobile applications. Professional hands-on experience
            working with JavaScript, React, React Native, Vue, and Node.js.
          </p>
          <ul className="flex gap-2 mt-4">
            <li>
              <a
                className="font-main font-bold text-pink text-2xl max-w-[780px] mt-4 transition-all hover:bg-pink hover:text-white px-1"
                rel="noreferrer"
                href="https://github.com/edinpuzic"
                target="_blank"
              >
                GH
              </a>
            </li>
            <li>
              <a
                className="font-main font-bold text-pink text-2xl max-w-[780px] mt-4 transition-all hover:bg-pink hover:text-white px-1"
                rel="noreferrer"
                href="https://www.linkedin.com/in/edin-puzic-37164464"
                target="_blank"
              >
                LN
              </a>
            </li>
          </ul>
        </div>
        <div className="w-[200px] md:w-[300px] overflow-hidden rounded-full border-4 border-pink border-dashed opacity-80">
          <Image src="/edin.png" width={500} height={500} priority alt="Edin Puzic" layout="responsive" />
        </div>
      </main>
      <footer className="absolute bottom-3 flex justify-center w-full">
        <a
          className="font-main text-secondary-200  font-bold text-xl md:text-lg transition-all hover:bg-pink hover:text-white px-3"
          href="mailto:edinpuzic11@gmail.com"
        >
          Say Hello!
        </a>
      </footer>
    </div>
  );
}
