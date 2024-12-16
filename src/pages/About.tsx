import React from 'react';

export function About() {
  return (
    <div className="bg-white">
      <div className="max-w-7xl mx-auto py-16 px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h1 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
            About Anayat WebDev Co.
          </h1>
          <p className="mt-4 text-xl text-gray-500">
            Building the future of web development, one project at a time.
          </p>
        </div>

        <div className="mt-16">
          <div className="grid grid-cols-1 gap-8 lg:grid-cols-2">
            <div>
              <h2 className="text-2xl font-bold text-gray-900">Our Story</h2>
              <p className="mt-4 text-lg text-gray-500">
                Founded in 2024, WebDev Co. has been at the forefront of web development
                innovation. Our passion for creating exceptional digital experiences drives
                everything we do.
              </p>
            </div>
            <div>
              <h2 className="text-2xl font-bold text-gray-900">Our Mission</h2>
              <p className="mt-4 text-lg text-gray-500">
                We strive to empower businesses with cutting-edge web solutions that drive
                growth and success in the digital age.
              </p>
            </div>
          </div>
        </div>

        <div className="mt-16">
          <h2 className="text-2xl font-bold text-gray-900 text-center">Our Values</h2>
          <div className="mt-8 grid grid-cols-1 gap-8 md:grid-cols-3">
            <div className="text-center">
              <h3 className="text-lg font-medium text-gray-900">Innovation</h3>
              <p className="mt-2 text-base text-gray-500">
                Pushing boundaries and embracing new technologies
              </p>
            </div>
            <div className="text-center">
              <h3 className="text-lg font-medium text-gray-900">Quality</h3>
              <p className="mt-2 text-base text-gray-500">
                Delivering excellence in every project
              </p>
            </div>
            <div className="text-center">
              <h3 className="text-lg font-medium text-gray-900">Collaboration</h3>
              <p className="mt-2 text-base text-gray-500">
                Working together to achieve exceptional results
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}