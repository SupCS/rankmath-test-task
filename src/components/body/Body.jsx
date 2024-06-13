import { DropDownProvider } from "../../context/dropDownContext";
import Display from "../display/Display";
import Chart from "../chart/Chart";
import Purchase from "../purchase/Purchase";
const Body = () => {
    return (
        <>
            <DropDownProvider>
                <Display
                    coinName="Bitcoin"
                    coinImage=""
                    coinAmount="3.529020"
                    coin="BTC"
                    coinInUsd="19.153"
                    valueRate="&#8209;&nbsp;2.23%"
                />
                <Chart />
                <Purchase />
            </DropDownProvider>
        </>
    );
};
export default Body;
