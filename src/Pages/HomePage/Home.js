import React from "react";
import img from "../../Assets/images/woman.png";
import logo1 from "../../Assets/logo/1.png";
import logo2 from "../../Assets/logo/2.png";
import logo3 from "../../Assets/logo/3.png";
import SocialIcon from "../../Shared/SocialIcon";
import Hero from "../../Components/Hero";

const Home = () => {
  return (
    <div>
      <Hero />
      <div
        className="hero min-h-screen rounded-lg px-10"
        style={{
          backgroundImage: `url("https://i.ibb.co/xqy0dLY/Group-387978.png")`,
        }}>
        <div className="hero-content flex-col lg:flex-row-reverse">
          <div className="text-info">
            <SocialIcon></SocialIcon>
          </div>
          <img src={img} className="w-full rounded-lg lg:w-1/2" alt="" />

          <div className="w-full lg:w-1/2">
            <p className="font-bold text-info">WE ARE THE CREATIVE</p>
            <h1 className="text-5xl font-bold text-white">
              MARKETING <br /> AGENCY
            </h1>
            <p className="py-6 text-gray-100">
              As a marketing professional, you will be in charge of creating and
              executing marketing communications for the agency
            </p>
            <button className="btn btn-info btn-outline">SEE MORE</button>

            <div className="mt-3 ">
              <div className="avatar placeholder ">
                <div className="bg-white text-neutral-content rounded-full w-12">
                  <img src={logo1} alt="" />
                </div>
                <div className="avatar placeholder ml-2">
                  <div className="bg-white text-neutral-content rounded-full w-12">
                    <img src={logo2} alt="" />
                  </div>
                </div>
                <div className="avatar placeholder ml-2">
                  <div className="bg-white text-neutral-content rounded-full w-12">
                    <img src={logo3} alt="" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
