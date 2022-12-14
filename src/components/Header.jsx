import { useState } from 'react';

import { Link as ScrollTo } from 'react-scroll';

const Header = ({ darkTheme, toggleTheme }) => {
  const [showMenu, setShowMenu] = useState(false);

  const scroll = { smooth: true, offset: -96, duration: 250 };

  return (
    <header className='header'>
      <nav className='nav'>
        <ScrollTo to='root' {...scroll} className='nav__logo'>
          MN
        </ScrollTo>

        <button
          className={`nav-toggle hamburger ${showMenu ? 'hamburger--active nav-toggle--bg-visible' : ''}`}
          onClick={() => setShowMenu((prev) => !prev)}
        >
          <span className='hamburger__box'>
            <span className={`hamburger__inner ${showMenu ? 'nav-toggle--line-visible' : ''}`}></span>
          </span>
        </button>

        {showMenu && <div className='nav-close' onClick={() => setShowMenu(false)} />}

        <ul className={`nav__list ${showMenu ? 'nav__list--visible' : ''}`}>
          <li className='nav__list-item nav__list-item--first'>
            <ScrollTo to='about' {...scroll} onClick={() => setShowMenu(false)} className='nav__list-link btn'>
              About
            </ScrollTo>
          </li>

          <li className='nav__list-item'>
            <ScrollTo to='projects' {...scroll} onClick={() => setShowMenu(false)} className='nav__list-link btn'>
              Projects
            </ScrollTo>
          </li>

          <li className='nav__list-item nav__list-item--last'>
            <ScrollTo to='contact' {...scroll} onClick={() => setShowMenu(false)} className='nav__list-link btn'>
              Contact
            </ScrollTo>
          </li>

          <li className='nav__list-item'>
            <button onClick={() => toggleTheme((prev) => !prev)} className='nav__list-link nav__list-theme-toggle btn'>
              {darkTheme ? <i className='fa-solid fa-moon' /> : <i className='fa-solid fa-sun' />}
            </button>
          </li>

          {showMenu && (
            <ScrollTo
              to='root'
              {...scroll}
              onClick={() => setShowMenu(false)}
              className='nav__list-link nav__list-scroll btn'
            >
              <i class='fa-sharp fa-solid fa-arrow-up' />
            </ScrollTo>
          )}
        </ul>
      </nav>
    </header>
  );
};

export default Header;
