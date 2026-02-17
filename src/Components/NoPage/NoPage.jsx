import { Link } from "react-router-dom";

const NoPage = () => {
  return (
    <>
      <div className="py-40 backdrop-blur-sm  w-full min-h-screen flex items-center justify-center">
        <div className="max-w-sm w-full h-fit mx-auto text-center p-6">
          <h1 className="text-6xl font-bold text-gray-800 mb-4">404</h1>
          {/* quote */}
          <p className="text-lg text-gray-600 mb-6">
            "The page you are looking for does not exist. It might have been
            moved or deleted."
          </p>
          {/* button */}
          <Link
            to="/"
            className="inline-block px-6 py-3 bg-neutral-700 text-white rounded-lg hover:bg-neutral-900 transition-colors duration-300"
          >
            Go Back Home
          </Link>
        </div>
      </div>
    </>
  );
};

export default NoPage;
