import { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import { Menu as MenuIcon, Search as SearchIcon, ArrowLeft } from "lucide-react";

const Header = () => {
  const [showSticky, setShowSticky] = useState(false);
  const [isSearching, setIsSearching] = useState(false);
  const [showSearchButton, setShowSearchButton] = useState(false);
  const inputRef = useRef<HTMLInputElement | null>(null);

  useEffect(() => {
    const handleScroll = () => {
      const shouldShowSticky = window.scrollY > 48;
      setShowSticky(shouldShowSticky);
      setShowSearchButton(shouldShowSticky && !isSearching);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, [isSearching]);

  useEffect(() => {
    if (isSearching && inputRef.current) {
      inputRef.current.focus();
      setShowSearchButton(false);
    }
  }, [isSearching]);

  const handleCloseSearch = () => {
    setIsSearching(false);
    setShowSearchButton(window.scrollY > 48);
  };

  const containerPositionClass = showSticky || isSearching 
    ? "fixed top-0 left-0 right-0 z-50 px-4 py-2 bg-white/75 backdrop-blur-md" 
    : "relative mt-4 px-2";

  return (
    <>
      {/* Desktop Header */}
      <div className='hidden fixed top-0 left-0 md:flex w-full justify-between items-center py-4 px-8 bg-white z-50 gap-6'>
        <img src='./Logo.svg' alt='logo' width={100} height={100}/>

        {!showSticky && (
          <ul className='flex gap-6 text-gray-700 font-normal text-md items-center transition-all duration-300'>
            <li>How it works</li>
            <li>About us</li>
            <li>FAQs</li>
            <li>Contact</li>
          </ul>
        )}

        {showSticky && (
          <div className='flex relative items-center w-full max-w-[350px] border-[0.5px] rounded-full px-4 py-2 transition-all ease-in duration-300'>
            <SearchIcon size={16} className='absolute left-4 text-gray-500'/>
            <input 
              type='text' 
              placeholder='search...' 
              className='w-full pl-8 outline-none bg-transparent text-sm'
            />
          </div>
        )}
        <Link to='/login'>
        <button className='flex rounded-3xl py-2 px-3 border bg-blue-700 text-white font-medium text-sm'>
          Get started
        </button>
        </Link>
      </div>

      {/* Mobile Header */}
      <div className={`md:hidden ${containerPositionClass}`}>
        {!isSearching && (
          <div className="flex items-center justify-between w-full border border-gray-300 rounded-full px-4 py-2 bg-white/60 backdrop-blur-sm shadow-sm">
            <div className="flex items-center gap-2">
              <div className="flex items-center justify-center rounded-full w-8 h-8 p-2 bg-[#E8E8E8]">
                <MenuIcon size={16} />
              </div>
              <img src="./Logo2.svg" alt="logo" width={70} height={70} />
            </div>
            {!showSearchButton && (
              <button
                onClick={() => setIsSearching(true)}
                className="flex-1 mx-3 min-w-0 text-left"
                aria-label="Open search"
                type="button"
              >
                <div className="flex items-center gap-3 pl-2 pr-3 py-2 rounded-full bg-transparent border border-transparent text-sm text-gray-600 w-full">
                  <SearchIcon size={18} className="text-gray-600" />
                  <span className="truncate text-sm text-gray-500">Search</span>
                </div>
              </button>
            )}
            <div className="flex items-center">
              {showSearchButton ? (
                <button
                  onClick={() => setIsSearching(true)}
                  className="flex items-center justify-center rounded-full w-10 h-10 p-2 bg-slate-100 text-slate-400"
                  aria-label="Open search"
                  type="button"
                >
                  <SearchIcon size={18} />
                </button>
              ) : (
                <button
                  className="rounded-3xl py-2 px-3 border bg-blue-700 text-white font-medium text-sm"
                  type="button"
                >
                  Get started
                </button>
              )}
            </div>
          </div>
        )}
        {isSearching && (
          <div className="w-full bg-white/75 backdrop-blur-md border border-gray-200 rounded-full px-3 py-3 flex items-center gap-3 shadow-md">
            <button
              onClick={handleCloseSearch}
              aria-label="Close search"
              className="flex items-center justify-center p-1"
              type="button"
            >
              <ArrowLeft size={22} className="text-gray-700" />
            </button>
            <div className="flex-1 min-w-0">
              <input
                ref={inputRef}
                type="text"
                placeholder="Search..."
                className="w-full bg-transparent outline-none text-[16px] placeholder:text-gray-500"
              />
            </div>
            <div className="flex items-center justify-center p-1">
              <SearchIcon size={18} className="text-gray-700" />
            </div>
          </div>
        )}
      </div>
      {(showSticky || isSearching) && <div className="h-16 md:hidden"></div>}
    </>
  )
}

export default Header