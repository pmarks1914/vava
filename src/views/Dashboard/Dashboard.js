import React, { Component, lazy, Suspense } from "react";
import { Bar, Line } from "react-chartjs-2";
import {
  Badge,
  Button,
  ButtonDropdown,
  ButtonGroup,
  ButtonToolbar,
  Card,
  CardBody,
  CardFooter,
  CardHeader,
  CardTitle,
  Col,
  Dropdown,
  DropdownItem,
  DropdownMenu,
  DropdownToggle,
  Progress,
  Row,
  Table,
} from "reactstrap";
import { CustomTooltips } from "@coreui/coreui-plugin-chartjs-custom-tooltips";
import { getStyle, hexToRgba } from "@coreui/coreui/dist/js/coreui-utilities";
import axios from "axios";
import * as APP_CONFIG from "../../config/config";

import { CircularProgressbar, buildStyles } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";
import Account from "../../screens/Account/Account";

const Widget03 = lazy(() => import("../../views/Widgets/Widget03"));

const brandPrimary = getStyle("--primary");
const brandSuccess = getStyle("--success");
const brandInfo = getStyle("--info");
const brandWarning = getStyle("--warning");
const brandDanger = getStyle("--danger");

const percentageETransac = 81;
const percentageGeneralAC = 87.17;
const needDominantBaselineFix = true;

// Card Chart 1  = 489
const cardChartData1 = {
  labels: ["January", "February", "March", "April", "May", "June"],
  datasets: [
    {
      label: "E Transact",
      backgroundColor: brandPrimary,
      borderColor: "rgba(255,255,255,.55)",
      data: [65, 79, 83, 86, 91, 85],
    },
  ],
};

const cardChartOpts1 = {
  tooltips: {
    enabled: false,
    custom: CustomTooltips,
  },
  maintainAspectRatio: false,
  legend: {
    display: false,
  },
  scales: {
    xAxes: [
      {
        gridLines: {
          color: "transparent",
          zeroLineColor: "transparent",
        },
        ticks: {
          fontSize: 2,
          fontColor: "transparent",
        },
      },
    ],
    yAxes: [
      {
        display: false,
        ticks: {
          display: false,
          min: Math.min.apply(Math, cardChartData1.datasets[0].data) - 5,
          max: Math.max.apply(Math, cardChartData1.datasets[0].data) + 5,
        },
      },
    ],
  },
  elements: {
    line: {
      borderWidth: 1,
    },
    point: {
      radius: 4,
      hitRadius: 10,
      hoverRadius: 4,
    },
  },
};

// Card Chart 2 == 523
const cardChartData2 = {
  labels: ["January", "February", "March", "April", "May", "June"],
  datasets: [
    {
      label: "General A/C trasaction rate",
      backgroundColor: brandInfo,
      borderColor: "rgba(255,255,255,.55)",
      data: [75, 79, 89, 91, 94, 95],
    },
  ],
};

const cardChartOpts2 = {
  tooltips: {
    enabled: false,
    custom: CustomTooltips,
  },
  maintainAspectRatio: false,
  legend: {
    display: false,
  },
  scales: {
    xAxes: [
      {
        gridLines: {
          color: "transparent",
          zeroLineColor: "transparent",
        },
        ticks: {
          fontSize: 2,
          fontColor: "transparent",
        },
      },
    ],
    yAxes: [
      {
        display: false,
        ticks: {
          display: false,
          min: Math.min.apply(Math, cardChartData2.datasets[0].data) - 5,
          max: Math.max.apply(Math, cardChartData2.datasets[0].data) + 5,
        },
      },
    ],
  },
  elements: {
    line: {
      tension: 0.00001,
      borderWidth: 1,
    },
    point: {
      radius: 4,
      hitRadius: 10,
      hoverRadius: 4,
    },
  },
};

//Random Numbers
function random(min, max) {
  return Math.floor(Math.random() * (max - min + 1) + min);
}

var elements = 27;
var data1 = [];
var data2 = [];
var data3 = [];

for (var i = 0; i <= elements; i++) {
  data1.push(random(50, 200));
  data2.push(random(80, 100));
  data3.push(65);
}

class Dashboard extends Component {
  constructor(props) {
    super(props);

    this.toggle = this.toggle.bind(this);
    this.onRadioBtnClick = this.onRadioBtnClick.bind(this);

    this.state = {
      dropdownOpen: false,
      radioSelected: 2,
      currentUser: null,
      subscriptionCount: 0,
      channelCount: 0,
      campaignCount: 0,
      userCount: 0,
    };
  }

  toggle() {
    this.setState({
      dropdownOpen: !this.state.dropdownOpen,
    });
  }

  onRadioBtnClick(radioSelected) {
    this.setState({
      radioSelected: radioSelected,
    });
  }

  loading = () => (
    <div
      className="animated fadeIn pt-1 text-center"
      style={{ fontFamily: "initial" }}
    >
      ...
    </div>
  );
  componentDidMount() {
    const currentUser = JSON.parse(localStorage.getItem("currentUser"));
    this.setState({
      currentUser: currentUser,
    });

    // Count subscriptions
    axios
      .get(
        APP_CONFIG[APP_CONFIG.REACT_APP_ENVIRONMENT].API_GET_SUBSCRIPTION_TOTAL,
        {
          headers: {
            ContentType: "application/json",
            Authorization: currentUser?.token,
          },
        }
      )
      .then((response) => {
        this.setState({
          subscriptionCount: response?.data?.data[0].count,
        });
      });
  }
  render() {
    // Sign off user
    if (this.state?.currentUser?.errCode === "") {
      window.location.href = "/login";
      localStorage.removeItem("currentUser");
    }

    return (
      <div
        className="animated fadeIn"
        style={{ backgroundColor: "#fff", height: "1200px" }}
      >
        <Row>
          {/* progress circle bar */}
          <Col xs="12" sm="6">
            <Card className="text-white" style={{ backgroundColor: "#483C32" }}>
              <CardBody className="pb-0">
                <div style={{ width: "150px", float: "right" }}>
                  <a className="text-value" style={{ fontSize: "1.2em" }}>
                    E-Transact
                  </a>
                  <br />
                  <table>
                    <tr>
                      <th
                        style={{
                          display: "flex",
                          width: "10px",
                          height: "10px",
                          background: "blue",
                        }}
                      ></th>
                      <th style={{ paddingLeft: "5px", fontSize: "0.7em" }}>
                        {" "}
                        Internet Banking
                      </th>
                    </tr>
                  </table>
                  <table>
                    <tr>
                      <th
                        style={{
                          display: "flex",
                          width: "10px",
                          height: "10px",
                          background: "black",
                        }}
                      ></th>
                      <th style={{ paddingLeft: "5px", fontSize: "0.7em" }}>
                        {" "}
                        Other Channels
                      </th>
                    </tr>
                  </table>
                </div>

                <div style={{ width: "100px" }}>
                  <CircularProgressbar
                    value={percentageETransac}
                    text={`${percentageETransac}%`}
                    circleRatio={1}
                    styles={buildStyles({
                      textColor: "#fff",
                      pathColor: "blue",
                      rotation: 1 / 2 + 1 / 8,
                      strokeLinecap: "butt",
                      trailColor: "#000",
                    })}
                  />
                  <div style={{ width: "150px" }}></div>
                </div>
              </CardBody>

              <div className="chart-wrapper mx-3" style={{ height: "70px" }}>
                <Line
                  data={cardChartData1}
                  options={cardChartOpts1}
                  height={70}
                />
              </div>
            </Card>
          </Col>

          <Col xs="12" sm="6">
            <Card className="text-white" style={{ backgroundColor: "#483C32" }}>
              <CardBody className="pb-0">
                <div style={{ width: "150px", float: "right" }}>
                  <a className="text-value" style={{ fontSize: "1.2em" }}>
                    General A/C
                  </a>
                  <br />
                  <table>
                    <tr>
                      <th
                        style={{
                          display: "flex",
                          width: "10px",
                          height: "10px",
                          background: "#3193CA",
                        }}
                      ></th>
                      <th style={{ paddingLeft: "5px", fontSize: "0.7em" }}>
                        {" "}
                        General Savings{" "}
                      </th>
                    </tr>
                  </table>
                  <table>
                    <tr>
                      <th
                        style={{
                          display: "flex",
                          width: "10px",
                          height: "10px",
                          background: "#fff",
                        }}
                      ></th>
                      <th style={{ paddingLeft: "5px", fontSize: "0.7em" }}>
                        {" "}
                        Investment
                      </th>
                    </tr>
                  </table>

                  <table>
                    <tr>
                      <th
                        style={{
                          display: "flex",
                          width: "10px",
                          height: "10px",
                          backgroundColor: "transparent",
                        }}
                      ></th>
                      <th style={{ paddingLeft: "5px", fontSize: "0.7em" }}>
                        {" "}
                        Insurance & Wellbeing{" "}
                      </th>
                    </tr>
                  </table>
                </div>

                <div className="text-value" style={{ width: "100px" }}>
                  <CircularProgressbar
                    value={percentageGeneralAC}
                    text={`${percentageGeneralAC}%`}
                    circleRatio={0.75}
                    styles={buildStyles({
                      textColor: "#fff",
                      pathColor: "#3193CA",
                      rotation: 1 / 2 + 1 / 8,
                      strokeLinecap: "butt",
                      trailColor: "#fff",
                      backgroundColor: "red",
                    })}
                  />
                </div>
              </CardBody>
              <div className="chart-wrapper mx-3" style={{ height: "70px" }}>
                <Line
                  data={cardChartData2}
                  options={cardChartOpts2}
                  height={70}
                />
              </div>
            </Card>
          </Col>
        </Row>

        <hr
          style={{ borderBlockWidth: "0.15em", borderBlockColor: "#E60000" }}
        />

        <h3>
          My Account
          {/* {this.state?.currentUser != null
            ? this.state?.currentUser?.username
            : ""} */}
        </h3>
        
        <Account />
      </div>
    );
  }
}

export default Dashboard;
