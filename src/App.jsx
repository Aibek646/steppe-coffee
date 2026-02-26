import Footer from "./components/Footer";
import Header from "./components/Header";
import SteppeImg from "./assets/SteppeCoffeeGuidebook_compressed-97.png";
import SteppeTxtImg from "./assets/Steppe Coffee Guidebook_compressed-91.png";
import Hero from "./components/Hero";
import BeforeAndAfter from "./components/BeforeAndAfter";
import DesignInterior from "./components/DesignInterior";
import InnerInterior from "./components/InnerInterior";
import Signs from "./components/Signs";
import Stats from "./components/Stats";
import Stats2 from "./components/Stats2";
import AuthorBio from "./components/AuthorBio";
import Desert from "./components/Desert";
import Stickers from "./components/Stickers";
import Results from "./components/Results";
import SteppeCoffeImg from "./assets/file-001.png";

function App() {
  return (
    <>
      <div className=" mb-[40px] relative bg-[#FAF100] max-w-[1440px] rounded-b-[40px] w-full mx-auto">
        <Header />
        <div className="flex flex-col items-center justify-center h-[850px]">
          <div className="flex flex-col items-center">
            <img src={SteppeImg} alt="steppeImg" />
            <img src={SteppeTxtImg} alt="steppeTxtImg" />
          </div>
        </div>
      </div>
      <div className="bg-[url('./assets/bg.png')]  bg-cover bg-center bg-no-repeat min-h-[300px] max-w-[1440px] rounded-t-[48px] w-full mx-auto flex flex-col gap-[40px]">
        <Hero />
        <BeforeAndAfter />
        <DesignInterior />
        <InnerInterior />
        <Signs />
        <Stats />
        <Stats2 />
        <AuthorBio />
        <Desert />
        <Stickers />
        <Results />
        <div>
          <img src={SteppeCoffeImg} alt="SteppeCoffeImg" />
        </div>
        <Footer />
      </div>
    </>
  );
}

export default App;

{
  /*<div className="flex items-center justify-between bg-slate-900 text-white p-4">*/
}
{
  /*  <div className="font-bold">Logo</div>*/
}

{
  /*  <div className="hidden sm:flex gap-2">*/
}
{
  /*    <span>Home</span>*/
}
{
  /*    <span>About</span>*/
}
{
  /*    <span>Contact</span>*/
}
{
  /*  </div>*/
}
{
  /*  <button className="text-xl cursor-pointer">---</button>*/
}
{
  /*</div>*/
}

{
  /*<div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 text-center font-semibold text-white p-6 gap-6 text-2xl sm:text-lg">*/
}
{
  /*  <div className="bg-slate-900 p-4 rounded hover:bg-slate-600 hover:scale-105 transition-all duration-500">*/
}
{
  /*    Feature One*/
}
{
  /*  </div>*/
}
{
  /*  <div className="bg-slate-900 p-4 rounded">Feature Two</div>*/
}
{
  /*  <div className="bg-slate-900 p-4 rounded">Feature Three</div>*/
}
{
  /*  <div className="bg-slate-900 p-4 rounded">Feature One</div>*/
}
{
  /*  <div className="bg-slate-900 p-4 rounded">Feature One</div>*/
}
{
  /*  <div className="bg-slate-900 p-4 rounded">Feature One</div>*/
}
{
  /*  <div className="bg-slate-900 p-4 rounded">Feature One</div>*/
}
