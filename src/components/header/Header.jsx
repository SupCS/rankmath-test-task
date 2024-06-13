import React, { useContext } from "react";
import NavContext from "../../context/navContext";
import "../../scss/header.scss";
import { IoIosArrowBack } from "react-icons/io";
import { PiShareDuotone } from "react-icons/pi";
import { CiSquareInfo, CiCircleRemove } from "react-icons/ci";
import { CgEditFlipH } from "react-icons/cg";
import { BsThreeDotsVertical, BsThreeDots } from "react-icons/bs";
import { teniaryHandler } from "../../App";

const Header = () => {
    const { navMenu, setNavMenu } = useContext(NavContext);

    const handleToggleMenu = () => {
        setNavMenu(!navMenu);
    };
    return (
        <>
            <nav className="nav-bar">
                <span className="btn-back">
                    <IoIosArrowBack color="#96a4be" size={25} />
                </span>
                <h1 className="logo-name">Bitcoin Wallet</h1>
                <div className="menu-container">
                    <span className="btn-three-dots" onClick={handleToggleMenu}>
                        {navMenu ? (
                            <BsThreeDots color="#fff" size={25} />
                        ) : (
                            <BsThreeDotsVertical color="#96a4be" size={25} />
                        )}
                    </span>
                    {navMenu && (
                        <>
                            <div
                                className={`overlay ${teniaryHandler(
                                    navMenu,
                                    "fade-in"
                                )}`}
                                onClick={handleToggleMenu}
                            ></div>
                            <div
                                className={`mobile-nav ${teniaryHandler(
                                    navMenu,
                                    "scale-in-center"
                                )}`}
                            >
                                <ul className="mobile-list">
                                    <li className="hc-border-bottom">
                                        <span className="lists">Edit</span>
                                        <CgEditFlipH
                                            style={{ gridColumn: -1 }}
                                            size={20}
                                        />
                                    </li>
                                    <li className="hc-border-bottom">
                                        <div className="lists">Info</div>
                                        <CiSquareInfo
                                            style={{ gridColumn: -1 }}
                                            size={20}
                                        />
                                    </li>
                                    <li className="hc-border-bottom">
                                        <span className="lists">Share</span>
                                        <PiShareDuotone
                                            style={{ gridColumn: -1 }}
                                            size={20}
                                        />
                                    </li>
                                    <li
                                        className="hc-border-bottom"
                                        onClick={handleToggleMenu}
                                    >
                                        <span className="lists">Remove</span>
                                        <CiCircleRemove
                                            style={{ gridColumn: -1 }}
                                            size={20}
                                        />
                                    </li>
                                </ul>
                            </div>
                        </>
                    )}
                </div>
            </nav>
        </>
    );
};

export default Header;
