import Image from "next/image";

export default function Home() {
  return (
    <>
      <header className="w-full h-16 border-b flex justify-between font-bold text-lg items-center">
        <h1 className="m-4 text-2xl font-sans">Resume</h1>
        <Image
          src="/menu.png"
          width={30}
          height={30}
          alt="Menu"
          className="m-4"
        />
      </header>
      <main className="font-sans">
        <div className="mt-14 flex justify-center items-center">
          <div className="mt-12 w-[17rem] h-64 bg-gray-200 relative"></div>
          <Image
            src="/me.jpg"
            width={220}
            height={230}
            alt="Rahman Moradi"
            className="m-4 absolute rounded border-8 border-white"
          />
        </div>
        <div className="m-4 mt-16">
          <h1 className="font-semibold text-4xl">Hi, I’m Rahman 👋</h1>
          <p className="mt-2 text-gray-600 text-lg">
            Im a full stack developer (Next.js & Laravel/Php) with a focus on
            creating (and occasionally designing) exceptional digital
            experiences that are fast, accessible, visually appealing, and
            responsive. Even though I have been creating web applications for
            over 7 years, I still love it as if it was something new.
          </p>
        </div>
        <div className="w-full h-8 mt-8 mx-4 text-gray-600 text-lg">
          <div className="flex flex-row items-center">
            <Image
              src="/location.png"
              width={24}
              height={24}
              alt="Location"
              className=""
            />
            <p className="ml-2">Iran, Mashhad</p>
          </div>
          <div className="mt-3">
            <div className="flex items-center">
              <div className="flex h-6 w-6 items-center justify-center">
                <span className="relative flex h-3 w-3">
                  <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-75"></span>
                  <span className="relative inline-flex h-3 w-3 rounded-full bg-emerald-500"></span>
                </span>
              </div>
              <p className="ml-2">Available for new projects</p>
            </div>
          </div>
        </div>
      </main>
    </>
  );
}
