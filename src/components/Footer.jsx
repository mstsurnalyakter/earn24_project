import React from 'react'

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white py-4 ">
      <div className="container mx-auto px-6">
        <div className="flex justify-center">


          {/* Newsletter */}
          <div className="w-full sm:w-1/2 lg:w-1/4 mb-6">
            <h3 className="text-xl text-center font-semibold mb-3">Send Us an Email</h3>
            <form
              action="mailto:textmemj@gmail.com"
              method="POST"
              encType="text/plain"
            >
              <input
                type="text"
                name="name"
                placeholder="Your Name"
                className="bg-gray-700 w-full px-4 py-2 mb-3 text-white border border-gray-600 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
              />
              <input
                type="email"
                name="email"
                placeholder="Your Email"
                className="bg-gray-700 w-full px-4 py-2 mb-3 text-white border border-gray-600 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
              />
              <textarea
                name="message"
                placeholder="Your Message"
                rows="4"
                className="bg-gray-700 w-full px-4 py-2 mb-3 text-white border border-gray-600 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
              ></textarea>
              <button
                type="submit"
                className="w-full bg-indigo-600 text-white py-2 rounded-md hover:bg-indigo-700"
              >
                Send Email
              </button>
            </form>
          </div>

        </div>

        {/* Footer Bottom */}
        <div className="mt-8 border-t border-gray-600 pt-4 text-center text-gray-400">
          <p>&copy; 2024 Earn 24. All Rights Reserved.</p>
        </div>
      </div>
    </footer>
  )
}

export default Footer
