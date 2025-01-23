import Image from "next/image";

export default function Home() {

  return (
    <>
      <header className='w-full h-16 border-b flex justify-between font-bold text-lg items-center'>
        <h1 className='m-4'>CLAY</h1>
        <Image
          src="/menu.png"
          width={30}
          height={30}
          alt="Menu"
          className="m-4"
        />
      </header>
      <main>
        <div className="flex justify-center items-center">
          <div className="mt-20 w-72 h-72 bg-gray-300 relative"></div>
          <Image
            src="/me.jpg"
            width={200}
            height={200}
            alt="Rahman Moradi"
            className="m-4 absolute rounded-xl shadow-white shadow-2xl"
          />
        </div>
        <div className="m-6">
          <h1 className="font-bold text-2xl">Hi, I’m Rahman 👋</h1>
          <p>I'm a full stack developer (React.js & Laravel/Php) with a focus on creating (and occasionally designing) exceptional digital experiences that are fast, accessible, visually appealing, and responsive. Even though I have been creating web applications for over 7 years, I still love it as if it was something new.</p>
        </div>
        <div className="m-6 flex flex-row items-center">
          <Image
            src="/location.png"
            width={20}
            height={20}
            alt="Location"
            className="mt-4"
          />
          <p className="ml-5"> Iran, Mashhad</p>
        </div>
      </main>
    </>
  );
}
