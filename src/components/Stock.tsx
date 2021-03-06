import { mainModule } from "process";
import React, { Component } from "react";
import Highcharts from "highcharts/highstock";
import HighchartsReact from "highcharts-react-official";

let indicators = require("highcharts/indicators/indicators");
indicators(Highcharts);

interface MyProps {}

interface MyState {
  stockSymbol: String;
  exists: boolean;
  chartOptions: any;
  hoverData: any;
}
class Stock extends Component<MyProps, MyState> {
  constructor(props: any) {
    super(props);
    this.state = {
      stockSymbol: window.location.pathname.split("/")[2],
      exists: true,
      chartOptions: {
        chart: {
          redraw: true,
          borderColor: "#022C39",
          borderWidth: 2,
          borderRadius: 15,
        },
        title: {
          text: "",
        },
        legend: {
          enabled: true,
        },

        plotOptions: {
          series: {
            connectNulls: false,
            showInLegend: true,
          },
        },
        series: [
          {
            type: "candlestick",
            name: "",
            id: "link",
            data: [1, 2, 3],
          },
          {
            type: "sma",
            linkedTo: "link",
          },
        ],
        responsive: {
          rules: [
            {
              condition: {
                maxWidth: 500,
              },
              chartOptions: {
                legend: {
                  align: "center",
                  verticalAlign: "bottom",
                  layout: "horizontal",
                },
              },
            },
          ],
        },
      },
      hoverData: null,
    };
  }

  componentDidMount() {
    this.fetchStock();
  }

  fetchStock() {
    const pointerToThis = this;
    const API_KEY = "HGJWFG4N8AQ66ICD";

    pointerToThis.setState({
      stockSymbol: window.location.pathname.split("/")[2],
    });
    let StockSymbol = window.location.pathname.split("/")[2].toUpperCase();
    let API_Call = `https://www.alphavantage.co/query?function=TIME_SERIES_DAILY_ADJUSTED&symbol=${StockSymbol}&outputsize=compact&apikey=${API_KEY}`;

    fetch(API_Call)
      .then(function (response) {
        return response.json();
      })
      .then(function (data) {
        if (formatStockData(data["Time Series (Daily)"]) === 0) {
          pointerToThis.setState({
            exists: false,
          });
        } else {
          pointerToThis.setState({
            chartOptions: {
              legend: {
                enabled: true,
              },

              plotOptions: {
                series: {
                  showInLegend: true,
                },
              },
              series: [
                {
                  name: StockSymbol,
                  data: formatStockData(data["Time Series (Daily)"]),
                  id: "link",
                },
                {
                  type: "sma",
                  linkedTo: "link",
                },
              ],
            },
            exists: true,
          });
        }
      });
  }

  render() {
    const { chartOptions, exists, stockSymbol } = this.state;
    return exists ? (
      <div className="">
        <div className="tc f2-ns f3 fw6 mb3 title-color">
          {stockSymbol.toUpperCase() + " Price"}
        </div>
        <div className="">
          <HighchartsReact
            highcharts={Highcharts}
            constructorType={"stockChart"}
            options={chartOptions}
          />
        </div>
        <style>{`
            .title-color {
                color: #022c39;
            }
        `}</style>
      </div>
    ) : (
      <div>
        <div className="pt4 b light-purple f2-ns f3 tc pb1">
          No stocks with the ticker symbol "{stockSymbol}" exist.
        </div>
        <div className="mt2 tc blue f4-ns f5">
          You may have mistyped the symbol or this stock may not be available in
          the database.
        </div>
      </div>
    );
  }
}
function formatStockData(stockData: any[]) {
  if (stockData == null || stockData == undefined) {
    return 0;
  }
  return Object.entries(stockData).map((entries) => {
    const [date, priceData] = entries;

    const x = new Date(date).getTime();
    return {
      x,
      open: Number(priceData["1. open"]),
      high: Number(priceData["2. high"]),
      low: Number(priceData["3. low"]),
      close: Number(priceData["4. close"]),
    };
  });
}
export default Stock;
