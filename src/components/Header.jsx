import React, {useState} from "react";
// internal
import { connectWallet } from "../utils/Interact";
import { getCurrentWalletConnected } from "../utils/Interact";

const Header = () => {
  const [connectionSatatus, setConnectionStatus] = useState(true);
	const [walletAddress, setWallet] = useState("");
	const [errorMsg, setErrorMssg] = useState("");

	// const showNav = () => {
	// 	document.getElementById("uni_mobile_menu").style.display = "block";
	// 	document.getElementById("menu_").style.display = "block";
	// };

	const connectWalletPressed = async () => {
		const response = await connectWallet();
		if (response?.status) {
			// window.location.reload();
      setWallet(response?.res)
		} else {
			setConnectionStatus(false);
			setErrorMssg(response?.res);
		}
	};
  return (
    <header className="cs-site_header cs-style1 cs-sticky-header cs-primary_color" >
      <div className="cs-main_header">
        <div className="container">
          <div className="cs-main_header_in">
            <div className="cs-main_header_left">
              <a className="cs-site_branding cs-accent_color" href="index-2.html">
                <img
                  src="https://www.veritasecosystem.com/wp-content/uploads/2023/08/Group-1.png"
                  alt="Logo"
                  className="cs-hide_dark"
                />
                <img
                  src="https://www.veritasecosystem.com/wp-content/uploads/2023/08/Group-1.png"
                  alt="Logo"
                  className="cs-hide_white"
                />
              </a>
            </div>
            <div className="cs-main_header_center">
              <div className="cs-nav">
                <ul className="cs-nav_list">
                  <li className="menu-item-has-children">
                    <a href="#home" className="cs-smoth_scroll">
                      Home
                    </a>
                    {/* <ul>
                      <li>
                        <a href="index-2.html">Default Home</a>
                      </li>
                      <li>
                        <a href="index-3.html">Home Version-2</a>
                      </li>
                      <li>
                        <a href="index-4.html">Home Version-3</a>
                      </li>
                    </ul> */}
                  </li>
                  <li>
                    <a href="#about" className="cs-smoth_scroll">
                      About
                    </a>
                  </li>
                  <li>
                    <a href="#roadmap" className="cs-smoth_scroll">
                      Roadmap
                    </a>
                  </li>
                  {/* <li>
                    <a href="#team" className="cs-smoth_scroll">
                      Team
                    </a>
                  </li> */}
                  {/* <li>
                    <a href="#faq" className="cs-smoth_scroll">
                      FAQ
                    </a>
                  </li> */}
                  <li>
                    <a href="#contact" className="cs-smoth_scroll">
                      Contact
                    </a>
                  </li>
                  {/* <li className="menu-item-has-children">
                    <a href="#">Pages</a>
                    <ul>
                      <li>
                        <a href="blog.html">Blog Page</a>
                      </li>
                      <li>
                        <a href="blog-details.html">Blog Details</a>
                      </li>
                    </ul>
                  </li> */}
                </ul>
              </div>
            </div>
            <div className="cs-main_header_right">
              <div className="cs-toolbox">
                <span className="cs-icon_btn cs-mode_btn">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    xmlnsXlink="http://www.w3.org/1999/xlink"
                    aria-hidden="true"
                    role="img"
                    className="cs-hide_dark iconify iconify--ph"
                    width="1em"
                    height="1em"
                    viewBox="0 0 256 256"
                  >
                    <path
                      fill="currentColor"
                      d="M233.54 142.23a8 8 0 0 0-8-2a88.08 88.08 0 0 1-109.8-109.8a8 8 0 0 0-10-10a104.84 104.84 0 0 0-52.91 37A104 104 0 0 0 136 224a103.09 103.09 0 0 0 62.52-20.88a104.84 104.84 0 0 0 37-52.91a8 8 0 0 0-1.98-7.98Zm-44.64 48.11A88 88 0 0 1 65.66 67.11a89 89 0 0 1 31.4-26A106 106 0 0 0 96 56a104.11 104.11 0 0 0 104 104a106 106 0 0 0 14.92-1.06a89 89 0 0 1-26.02 31.4Z"
                    ></path>
                  </svg>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    xmlnsXlink="http://www.w3.org/1999/xlink"
                    aria-hidden="true"
                    role="img"
                    className="cs-hide_white iconify iconify--ph"
                    width="1em"
                    height="1em"
                    viewBox="0 0 256 256"
                  >
                    <path
                      fill="currentColor"
                      d="M116 32V16a12 12 0 0 1 24 0v16a12 12 0 0 1-24 0Zm80 96a68 68 0 1 1-68-68a68.07 68.07 0 0 1 68 68Zm-24 0a44 44 0 1 0-44 44a44.05 44.05 0 0 0 44-44ZM51.51 68.49a12 12 0 1 0 17-17l-12-12a12 12 0 0 0-17 17Zm0 119l-12 12a12 12 0 0 0 17 17l12-12a12 12 0 1 0-17-17ZM196 72a12 12 0 0 0 8.49-3.51l12-12a12 12 0 0 0-17-17l-12 12A12 12 0 0 0 196 72Zm8.49 115.51a12 12 0 0 0-17 17l12 12a12 12 0 0 0 17-17ZM44 128a12 12 0 0 0-12-12H16a12 12 0 0 0 0 24h16a12 12 0 0 0 12-12Zm84 84a12 12 0 0 0-12 12v16a12 12 0 0 0 24 0v-16a12 12 0 0 0-12-12Zm112-96h-16a12 12 0 0 0 0 24h16a12 12 0 0 0 0-24Z"
                    ></path>
                  </svg>
                </span>
                <span
                  className="cs-btn cs-btn_filed cs-accent_btn cs-modal_btn"
                  data-modal="connect_wallet"
                  onClick={connectWalletPressed}
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    xmlnsXlink="http://www.w3.org/1999/xlink"
                    aria-hidden="true"
                    role="img"
                    className="iconify iconify--ion"
                    width="1em"
                    height="1em"
                    viewBox="0 0 512 512"
                  >
                    <rect
                      width="416"
                      height="288"
                      x="48"
                      y="144"
                      fill="none"
                      stroke="currentColor"
                      strokeLinejoin="round"
                      strokeWidth="32"
                      rx="48"
                      ry="48"
                    ></rect>
                    <path
                      fill="none"
                      stroke="currentColor"
                      strokeLinejoin="round"
                      strokeWidth="32"
                      d="M411.36 144v-30A50 50 0 0 0 352 64.9L88.64 109.85A50 50 0 0 0 48 159v49"
                    ></path>
                    <path
                      fill="currentColor"
                      d="M368 320a32 32 0 1 1 32-32a32 32 0 0 1-32 32Z"
                    ></path>
                  </svg>
                  <span>
                  {connectionSatatus === false ? (
														<>
															{(walletAddress === "") | undefined | null ? (
																<> Connect</>
															) : (
																<>
																	{String(walletAddress).substring(0, 6) +
																		"..." +
																		String(walletAddress).substring(38)}
																</>
															)}
															
														</>
													) : (
														<>{String(walletAddress).substring(0, 6) +
															"..." +
															String(walletAddress).substring(38)}</>
													)}
                  </span>
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
