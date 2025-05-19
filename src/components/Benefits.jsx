import React from 'react';
import FeatureCard from './FeatureCard';
import { features } from '../constants/features.jsx';
import benefitsIllustration from '../assets/benefits-illustration.jpg';

function Benefits() {
  return (
    <div className="py-8 sm:py-12 bg-white w-full">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-8">
          <h2 className="text-sm sm:text-base text-indigo-600 font-semibold tracking-wide uppercase">Features</h2>
          <p className="mt-2 text-2xl sm:text-3xl md:text-4xl leading-8 font-extrabold tracking-tight text-gray-900">
            Everything you need
          </p>
        </div>
        <div className="flex flex-col lg:flex-row gap-8 items-center mt-[100px] mb-[150px]">
          {/* Left side - Image */}
          <div className="w-full lg:w-1/2 flex justify-center items-center">
            <img
              src={benefitsIllustration}
              alt="Benefits illustration"
              className="w-[80%] max-w-[500px] h-auto object-contain rounded-lg shadow-lg"
            />
          </div>
          
          {/* Right side - Features */}
          <div className="w-full lg:w-1/2">
            <div className="grid grid-cols-1 gap-6">
              {features.map((feature, index) => (
                <FeatureCard
                  key={index}
                  icon={feature.icon}
                  title={feature.title}
                  description={feature.description}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Benefits; 