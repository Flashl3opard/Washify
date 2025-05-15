import React from "react";

const Footer = () => {
  return (
    <div>
      <footer className="bg-blue-300  py-12 px-8">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-start gap-8">
          <div className="flex items-start justify-center gap-4">
            <div className="text-blue-500 text-5xl leading-none">🫧</div>
            <h2 className="text-blue-500 text-3xl font-bold">Washify</h2>
          </div>

          <div className="flex flex-wrap gap-16 text-sm text-gray-800">
            <div>
              <h3 className="font-semibold mb-2">About-us</h3>
              <ul className="space-y-1">
                <li>
                  <a href="#">About us</a>
                </li>
                <li>
                  <a href="#">Creators</a>
                </li>
                <li>
                  <a href="#">Philosophy</a>
                </li>
                <li>
                  <a href="#">Contact us</a>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold mb-2">Company</h3>
              <ul className="space-y-1">
                <li>
                  <a href="#">Our team</a>
                </li>
                <li>
                  <a href="#">Terms</a>
                </li>
                <li>
                  <a href="#">How it works</a>
                </li>
                <li>
                  <a href="#">Blog</a>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold mb-2">Services</h3>
              <ul className="space-y-1">
                <li>
                  <a href="#">Pickup</a>
                </li>
                <li>
                  <a href="#">Drop off</a>
                </li>
                <li>
                  <a href="#">Laundry</a>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold mb-2">Check us out</h3>
              <div className="flex space-x-4 text-gray-700">
                <a href="#">
                  <i className="fab fa-facebook-f"></i>
                </a>
                <a href="#">
                  <i className="fab fa-instagram"></i>
                </a>
                <a href="#">
                  <i className="fab fa-linkedin-in"></i>
                </a>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
