import React, { useContext } from "react";
import "../../scss/display.scss";
import DropDownContext from "../../context/dropDownContext";
import { SiBitcoinsv } from "react-icons/si";
import { SlArrowDown, SlArrowUp } from "react-icons/sl";
import { teniaryHandler } from "../../App";

const Display = ({ coinName, coinAmount, coin, coinInUsd, valueRate }) => {
    const { isOpen, setIsOpen } = useContext(DropDownContext);
    const dropDown = () => {
        setIsOpen(!isOpen);
    };

    return (
        <>
            <div className="card-container">
                <div className="btc">
                    <div>
                        <SiBitcoinsv color="#FF9605" size={35} />
                    </div>
                    <p className="coin-bitcoin">{coinName}</p>
                </div>
                <span className="coin-name">{coin}</span>
                <span className="coin-amount">{coinAmount} BTC</span>
                <p className="coin-in-usd">${coinInUsd} USD</p>
                <button className="value-rate">{valueRate}</button>
                <div className="arrow-down" onClick={dropDown}>
                    {isOpen ? (
                        <SlArrowUp color={"#96a4be"} size={17} />
                    ) : (
                        <SlArrowDown color={"#96a4be"} size={17} />
                    )}
                </div>
            </div>
            <div
                className={`button-container ${teniaryHandler(
                    isOpen,
                    "slide-down",
                    "slide-up"
                )}`}
            >
                <button className="buy-sell-button buy">Buy</button>
                <button className="buy-sell-button sell">Sell</button>
            </div>
        </>
    );
};

export default Display;
