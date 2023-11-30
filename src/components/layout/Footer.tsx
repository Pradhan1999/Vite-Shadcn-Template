const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white p-8">
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
        {/* Column 1: Links */}
        <div>
          <h2 className="text-xl font-bold mb-4">Quick Links</h2>
          <ul>
            <li>
              <a href="#" className="hover:text-gray-300">
                Home
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-gray-300">
                About
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-gray-300">
                Services
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-gray-300">
                Contact
              </a>
            </li>
          </ul>
        </div>

        {/* Column 2: Contact Information */}
        <div>
          <h2 className="text-xl font-bold mb-4">Contact Us</h2>
          <p>123 Street, City</p>
          <p>Email: info@example.com</p>
          <p>Phone: +123 456 7890</p>
        </div>

        {/* Column 3: Newsletter Signup */}
        <div>
          <h2 className="text-xl font-bold mb-4">
            Subscribe to Our Newsletter
          </h2>
          <form>
            <input
              type="email"
              placeholder="Your email"
              className="w-full py-2 px-4 mb-2 rounded"
            />
            <button
              type="submit"
              className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
            >
              Subscribe
            </button>
          </form>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
