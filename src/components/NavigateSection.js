import React from 'react';
import { FaArrowRight } from 'react-icons/fa';
import NavigateCard from "./NavigateCard";

const NavigateSection = () => {
  return (
    <div id='helper' className='flex flex-col items-center justify-center pt-24'>
      <h1 className='text-center my-4 font-bold text-3xl md:text-4xl'>
        HOW IT WORKS
      </h1>
      <div className="pb-12 px-4 md:py-16 md:px-8 flex flex-col md:flex-row items-center justify-around w-full">
        <div className="flex items-center justify-center">
          <NavigateCard
            title={"Drag & Drop"}
            description={""}
            buttontxt={"HOME"}
            url={"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSAzf_C6q1hkqITOqnjDhh5EEurGh_mwmRg8w&s"}
            navigator={"/"}
          />
          <div className="hidden md:block mx-4 text-blue-500">
            <FaArrowRight size={24} />
          </div>
        </div>

        <div className="flex items-center justify-center mt-8 md:mt-0">
          <NavigateCard
            title={"Drag & Drop"}
            description={""}
            buttontxt={"ABOUT US"}
            url={"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSAzf_C6q1hkqITOqnjDhh5EEurGh_mwmRg8w&s"}
            navigator={"/"}
          />
          <div className="hidden md:block mx-4 text-blue-500">
            <FaArrowRight size={24} />
          </div>
        </div>

        <div className="flex items-center justify-center mt-8 md:mt-0">
          <NavigateCard
            title={"Drag & Drop"}
            description={""}
            buttontxt={"SIGN UP"}
            url={"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSAzf_C6q1hkqITOqnjDhh5EEurGh_mwmRg8w&s"}
            navigator={"/signup"}
          />
        </div>
      </div>
    </div>
  );
};

export default NavigateSection;
