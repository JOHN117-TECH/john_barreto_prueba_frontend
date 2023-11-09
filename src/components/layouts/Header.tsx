import { useState } from 'react';
import './Header.css';
import { FcMenu } from 'react-icons/fc';
const Header = () => {
  const [isActived, setIsActive] = useState(false);
  const [isActivedMenu, setIsActiveMenu] = useState(false);

  return (
    <>
      <div className="Container">
        <header className={`Header ${isActived}`}>
          <nav className={`Header__nav ${isActived}`}>
            <div className="Header__nav--bars">
              <FcMenu onClick={() => setIsActive(!isActived)} />
            </div>
            <ul className={`Header__nav--menu ${isActived}`}>
              <li className="Header__nav--link">
                <a href="#home">Home</a>
              </li>
              <li
                className="Header__nav--link menu"
                onClick={() => setIsActiveMenu(!isActivedMenu)}
              >
                <a href="#services">Pages</a>
                <ul className={`Header__nav--Submenu ${isActivedMenu}`}>
                  <li className="menuB">
                    <a href="#" className="menuB__link ">
                      Page 1 <span className="menuB__link--icon">⧨</span>
                    </a>
                    <hr />
                    <ul className="Header__nav--SubmenuB">
                      <li>item 1</li>
                      <hr />
                      <li>item 1</li>
                      <hr />
                      <li>item 1</li>
                      <hr />
                    </ul>
                  </li>
                  <li className="menuC">
                    <a href="#" className="menuC__link">
                      Page 2 <span className="menuC__link--icon">⧨</span>
                    </a>
                    <hr />
                    <ul className="Header__nav--SubmenuB">
                      <li>item 1</li>
                      <hr />
                      <li>item 1</li>
                      <hr />
                      <li>item 1</li>
                      <hr />
                    </ul>
                  </li>
                  <li className="menuD">
                    <a href="#" className="menuD__link">
                      Page 3 <span className="menuD__link--icon">⧨</span>
                    </a>
                    <hr />
                    <ul className="Header__nav--SubmenuB">
                      <li>item 1</li>
                      <hr />
                      <li>item 1</li>
                      <hr />
                      <li>item 1</li>
                      <hr />
                    </ul>
                  </li>
                </ul>
              </li>
              <li className="Header__nav--link">
                <a href="#about">About</a>
              </li>
              <li className="Header__nav--link">
                <a href="#contact">Contact</a>
              </li>
            </ul>
          </nav>
        </header>
        <div className="HeaderScondary"></div>
      </div>
    </>
  );
};

export default Header;
