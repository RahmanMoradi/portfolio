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
          <p className='text-lg'>Based in Iran / Mashhad</p>
          <p><span className='text-green-600 animate-ping'>●</span> Available For a Full-Time Position</p>
        </div>
        <div className='my-8'>
          <img src='src/assets/rahman.jpg' className='w-62 h-72 rounded-full'></img>
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
