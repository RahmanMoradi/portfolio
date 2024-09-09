import './App.css'
import Typewriter from 'typewriter-effect';

function App() {
  
  return (
    <>
      <div className="h-screen bg-gray-100 flex flex-col lg:flex-row items-center">
        <div className='mt-14 w-full flex flex-col items-center justify-center'>
          <h1 className='p-1 text-center text-3xl bg-white font-mono'>
            Rahman Moradi
          </h1>
          <div className='flex'>
            <img src='images/location.png' className='w-6 h-6'></img>
            <p className='text-lg'>Based in Iran / Mashhad</p>
          </div>
          <div className='flex'>
            <span className="relative flex h-3 w-3">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-sky-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-3 w-3 bg-green-500"></span>
            </span>
            <p> Available For a <b>Full-Time</b> Position</p>
          </div>
        </div>
        <div className='my-8'>
          <img src='images/rahman.jpg' className='w-62 h-72 rounded-full'></img>
        </div>
        <div className='w-3/4 flex item-center justify-center text-center text-xl font-mono'>
          <Typewriter
            onInit={(typewriter) => {
              typewriter.typeString('19 Y.o 🐘Php, 🐍Python Developer Who Is Interested in Network and AI')
                .start();
            }}
          />
        </div>
      </div>
    </>
  );
}

export default App
