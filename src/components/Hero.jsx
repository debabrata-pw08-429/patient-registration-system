import React from 'react';
import { heroContent } from '../constants/hero';
import { useNavigate } from 'react-router-dom';

function Hero() {
  const navigate = useNavigate();
  return (
    <div className="relative bg-white overflow-hidden w-full">
      <div className="w-full">
        <div className="relative z-10 pb-8 bg-white sm:pb-16 md:pb-20 lg:w-full lg:pb-28 xl:pb-32">
          <main className="mt-8 sm:mt-10 w-full px-4 sm:px-6 md:mt-16 lg:mt-20 lg:px-8 xl:mt-28">
            <div className="max-w-7xl mx-auto text-center lg:text-left">
              <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl tracking-tight font-extrabold text-gray-900">
                <span className="block">{heroContent.title.firstLine}</span>
                <span className="block text-indigo-600 mt-2">{heroContent.title.secondLine}</span>
              </h1>
              <p className="mt-3 text-sm sm:text-base md:text-lg text-gray-500 sm:mt-5 sm:max-w-xl sm:mx-auto md:mt-5 md:text-xl lg:mx-0">
                {heroContent.description}
              </p>
              <div className="mt-5 sm:mt-8 flex flex-col sm:flex-row sm:justify-center lg:justify-start space-y-4 sm:space-y-0 sm:space-x-4">
                {heroContent.buttons.map((button, index) => (
                  <div key={index} className={button.variant === 'primary' ? 'rounded-md shadow' : ''}>
                    {button.text === 'Register a Patient' ? (
                      <button
                        type="button"
                        onClick={() => navigate('/dashboard/register')}
                        className={`w-full flex items-center justify-center px-6 sm:px-8 py-3 border border-transparent text-sm sm:text-base font-medium rounded-md md:py-4 md:text-lg md:px-10 text-white bg-indigo-600 hover:bg-indigo-700`}
                      >
                        {button.text}
                      </button>
                    ) : (
                      <a
                        href={button.href}
                        className={`w-full flex items-center justify-center px-6 sm:px-8 py-3 border border-transparent text-sm sm:text-base font-medium rounded-md md:py-4 md:text-lg md:px-10 text-indigo-700 bg-indigo-100 hover:bg-indigo-200`}
                      >
                        {button.text}
                      </a>
                    )}
                  </div>
                ))}
              </div>
            </div>
          </main>
        </div>
      </div>
    </div>
  );
}

export default Hero; 