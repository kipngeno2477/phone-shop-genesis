import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-black text-gray-300">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
          <div>
            <h4 className="text-white font-semibold mb-3">Products</h4>
            <ul className="space-y-2 text-sm">
              <li><a className="hover:text-white" href="/category/iphones">iPhone</a></li>
              <li><a className="hover:text-white" href="/category/samsungs">Samsung</a></li>
              <li><a className="hover:text-white" href="/category/laptops">Laptops</a></li>
              <li><a className="hover:text-white" href="/category/accessories">Accessories</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-semibold mb-3">Services</h4>
            <ul className="space-y-2 text-sm">
              <li><a className="hover:text-white" href="/repairs">Repairs</a></li>
              <li><a className="hover:text-white" href="/warranty">Warranty</a></li>
              <li><a className="hover:text-white" href="/trade-ins">Trade-ins</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-semibold mb-3">Top Sellers</h4>
            <ul className="space-y-2 text-sm">
              <li><a className="hover:text-white" href="/product/iphone-14-pro-max">iPhone 14 Pro Max</a></li>
              <li><a className="hover:text-white" href="/product/airpods-pro">AirPods Pro</a></li>
              <li><a className="hover:text-white" href="/product/macbook-m2">M2 MacBook Pro</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-semibold mb-3">Contact</h4>
            <p className="text-sm">Phone: <a className="text-gray-300 hover:text-white" href="tel:++254101125353">++254101125353</a></p>
            <p className="text-sm mt-2">Email: <a className="text-gray-300 hover:text-white" href="mailto:info@centsoreske.co.ke">info@centstoresKe.co.ke</a></p>
            <p className="text-sm mt-4">Kenya — Open weekdays</p>
          </div>
        </div>

        <div className="mt-8 border-t border-gray-800 pt-6 text-center text-sm text-gray-400">
          © 2025 centstoresKE — All rights reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
