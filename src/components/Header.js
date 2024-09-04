import { useLocation, useNavigate } from 'react-router-dom';

const Header = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const isHomePage = location.pathname === '/';
  const isAuthPage = location.pathname === '/login' || location.pathname === '/signup';

  const scrollToHelper = () => {
    const helperSection = document.getElementById('helper');
    if (helperSection) {
      helperSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const scrollToDashboard = () => {
    const dashboardSection = document.getElementById('dashboard');
    if (dashboardSection) {
      dashboardSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const scrollToFooter = () => {
    const footerSection = document.getElementById('footer');
    if (footerSection) {
      footerSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleSignUp = () => {
    navigate('/signup');
  }
  return (
    <div className="fixed px-8 py-2 bg-gradient-to-b from-black z-10 w-full flex items-center justify-between">
      <h1 className='text-5xl font-bold p-4'>Header</h1>
      {!isAuthPage &&
        <div className='flex items-center justify-center gap-4'>
          <ul className="flex space-x-4">
            {isHomePage ?
              <div className='flex gap-4'>
                <li>
                  <button
                    onClick={scrollToHelper}
                    className="text-white hover:text-gray-400"
                  >
                    Help
                  </button>
                </li>
                <li>
                  <button
                    onClick={scrollToDashboard}
                    className="text-white hover:text-gray-400"
                  >
                    Dashboard
                  </button>
                </li>
                <li>
                  <button
                    onClick={() => navigate('/community')}
                    className="text-white hover:text-gray-400"
                  >
                    Community
                  </button>
                </li>
              </div> : <li onClick={() => navigate('/')} className='cursor-pointer'>Home</li>}
            <li>
              <button
                onClick={scrollToFooter}
                className="text-white hover:text-gray-400"
              >
                About Us
              </button>
            </li>
          </ul>
          <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded" onClick={handleSignUp}>
            Sign up
          </button>
        </div>
      }
    </div>
  );
};

export default Header;
