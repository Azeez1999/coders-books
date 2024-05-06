import React from 'react';

function Footer() {
  const year = new Date().getFullYear(); // Get the current year
  return (
    <footer className="bg-white">
      <div className="mx-auto max-w-screen-xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="lg:flex lg:items-start lg:gap-8">
          <div className="text-teal-600">
            <svg className="h-8" viewBox="0 0 28 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              {/* SVG path here */}
            </svg>
          </div>

          <div className="mt-8 grid grid-cols-2 gap-8 lg:mt-0 lg:grid-cols-5 lg:gap-y-16">
            {/* Content here */}
          </div>
        </div>

        <div className="mt-8 border-t border-gray-100 pt-8">
          <div className="sm:flex sm:justify-between">
            <p className="text-xs text-gray-500">&copy; {year}. Company Name. All rights reserved.</p>

            <ul className="mt-8 flex flex-wrap justify-start gap-4 text-xs sm:mt-0 lg:justify-end">
              <li>
                <a href="#" className="text-gray-500 transition hover:opacity-75"> Terms & Conditions </a>
              </li>

              <li>
                <a href="#" className="text-gray-500 transition hover:opacity-75"> Privacy Policy </a>
              </li>

              <li>
                <a href="#" className="text-gray-500 transition hover:opacity-75"> Cookies </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
