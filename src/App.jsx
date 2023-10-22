import darkLogo from "../assets/logo-dark.svg";
import desktopHero from "../assets/image-hero-desktop.png";
import tabletHero from "../assets/image-hero-tablet.webp";
import mobileHero from "../assets/image-hero-mobile.webp";
import animation from "../assets/icon-animation.svg";
import business from "../assets/icon-business.svg";
import crypto from "../assets/icon-crypto.svg";
import design from "../assets/icon-design.svg";
import photography from "../assets/icon-photography.svg";
import lightLogo from "../assets/logo-light.svg";
import "./App.css";

function App() {
  return (
    <main className="max-w-[1110px] mx-auto">
      <nav className="flex items-center justify-between p-4">
        <img src={darkLogo} alt="" />
        <button className="bg-[#13183f] text-white px-6 py-2 rounded-full font-bold hover:opacity-50">
          Get Started
        </button>
      </nav>

      <section className="lg:my-20">
        <div className="flex flex-col md:flex-row items-center text-start p-4">
          <div>
            <h1 className="font-extrabold text-4xl lg:text-6xl text-[#13183f] my-10">
              Maximize skill, minimize budget
            </h1>
            <p className="font-medium text-[#83869a] w-96 my-10">
              Our modern courses across a range of in-demand skills will give
              you the knowledge you need to live the life you want.
            </p>
            <button className="bg-gradient-to-r from-[#f02aa6] to-[#ff6f48] px-6 py-2 rounded-full hover:opacity-50 text-white font-bold">
              Get Started
            </button>
          </div>
          <div>
            <img
              src={desktopHero}
              alt=""
              className="relative left-[18.5rem] bottom-36 -z-10 hidden lg:block"
            />
            <img
              src={tabletHero}
              alt=""
              className="hidden md:block lg:hidden relative left-32 bottom-16 -z-10"
            />
            <img src={mobileHero} alt="" className="md:hidden" />
          </div>
        </div>

        <div className="flex flex-wrap p-4 md:my-10 lg:my-0 lg:w-4/5 gap-8 md:justify-center lg:justify-between">
          <div className="bg-gradient-to-r from-[#f02aa6] to-[#ff6f48] md:w-80 text-start p-14 rounded-lg md:h-64">
            <h2 className="text-white font-extrabold text-3xl">
              Check out our most popular courses!
            </h2>
          </div>
          <div className="md:w-80 text-start shadow-xl rounded-lg p-5">
            <img src={animation} alt="" className="w-14 relative bottom-10" />
            <h2 className="font-extrabold text-2xl text-[#13183f] mb-2">
              Animation
            </h2>
            <p className="font-medium text-[#83869a] my-2">
              Learn the latest animation techniques to create stunning motion
              design and captivate your audience.
            </p>
            <button className="font-bold text-[#f74780] hover:opacity-50">
              Get Started
            </button>
          </div>

          <div className="md:w-80 text-start shadow-xl rounded-lg p-5">
            <img src={design} alt="" className="w-14 relative bottom-10" />
            <h2 className="font-extrabold text-2xl text-[#13183f] mb-2">
              Design
            </h2>
            <p className="font-medium text-[#83869a] my-2">
              Create beautiful, usable interfaces to help shape the future of
              how the web looks.
            </p>
            <button className="font-bold text-[#f74780] hover:opacity-50">
              Get Started
            </button>
          </div>

          <div className="md:w-80 text-start shadow-xl rounded-lg p-5">
            <img src={photography} alt="" className="w-14 relative bottom-10" />
            <h2 className="font-extrabold text-2xl text-[#13183f] mb-2">
              Photography
            </h2>
            <p className="font-medium text-[#83869a] my-2">
              Explore critical fundamentals like lighting, composition, and
              focus to capture exceptional photos.
            </p>
            <button className="font-bold text-[#f74780] hover:opacity-50">
              Get Started
            </button>
          </div>

          <div className="md:w-80 text-start shadow-xl rounded-lg p-5">
            <img src={crypto} alt="" className="w-14 relative bottom-10" />
            <h2 className="font-extrabold text-2xl text-[#13183f] mb-2">
              Crypto
            </h2>
            <p className="font-medium text-[#83869a] my-2">
              All you need to know to get started investing in crypto. Go from
              beginner to advanced with this 54 hour course.
            </p>
            <button className="font-bold text-[#f74780] hover:opacity-50">
              Get Started
            </button>
          </div>

          <div className="md:w-80 text-start shadow-xl rounded-lg p-5">
            <img src={business} alt="" className="w-14 relative bottom-10" />
            <h2 className="font-extrabold text-2xl text-[#13183f] mb-2">
              Business
            </h2>
            <p className="font-medium text-[#83869a] my-2">
              A step-by-step playbook to help you start, scale, and sustain your
              business without outside investment.
            </p>
            <button className="font-bold text-[#f74780] hover:opacity-50">
              Get Started
            </button>
          </div>
        </div>
      </section>

      <footer className="bg-[#13183f] p-2 flex items-center justify-between h-32">
        <img src={lightLogo} alt="" />
        <button className="bg-gradient-to-r from-[#f02aa6] to-[#ff6f48] hover:opacity-50 px-6 py-2 rounded-full text-white font-bold">
          Get Started
        </button>
      </footer>
    </main>
  );
}

export default App;
