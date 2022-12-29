import React from "react";
import Cable from "./Dropwire.js"; //"react-dropwire";

class SaltBank extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
    for (let i = 0; i < 100; i++) {
      this["scrollImg" + i] = React.createRef();
    }
  }

  render() {
    //const {} = this.state;
    //console.log(this.state.username);
    //const space = " ";
    const setting = (n, more) => {
      return {
        style: {
          color: this.state["hoverin" + n] ? "rgb(50,70,90)" : "black",
          cursor: "pointer",
          ...more
        },
        onMouseEnter: () => this.setState({ ["hoverin" + n]: true }),
        onMouseLeave: () => this.setState({ ["hoverin" + n]: false })
      };
    };
    //https://www.quora.com/What-is-the-cause-of-inequality-in-competitive-markets/answer/Nick-Carducci
    //reverse amortization
    let arrayOfnumbers = 0;
    const scrollnum = () => {
      arrayOfnumbers = arrayOfnumbers + 1; //arrayOfnumbers[arrayOfnumbers.length - 1] + 1;
      //arrayOfnumbers.push(num);
      //console.log(arrayOfnumbers)
      return arrayOfnumbers;
    };
    const space = " ";
    return (
      <div
        style={{
          transition: ".3s ease-in",
          display: "flex",
          flexDirection: "column",
          justifyContent: this.props.onscroll ? "flex-start" : "space-around",
          maxheight: "min-content",
          height: "calc(100% - 20px)",
          fontFamily: "sans-serif",
          textAlign: "center",
          alignItems: "center"
        }}
      >
        <div
          style={{
            height: "min-content",
            position: "relative",
            top: "0px",
            marginTop: "30px"
          }}
        >
          <a
            href="https://igg.me/at/occupywallstreet"
            {...setting(8, {
              color: "black",
              textDecoration: "none",
              position: "fixed",
              left: "30px",
              top: "40px"
            })}
          >
            igg.me/at/occupywallstreet
          </a>

          <a
            {...setting(8, {
              color: "black",
              textDecoration: "none",
              position: "fixed",
              left: "30px",
              bottom: "40px"
            })}
            href="https://saltbank.org"
          >
            Saltbank.org
          </a>
          <a
            {...setting(8, {
              textDecoration: "none",
              position: "fixed",
              right: "7px",
              top: "10px"
            })}
          >
            <a href="https://truncatedwholesaletax.com">
              <span role="img" aria-label="plumber">
                👨🏽‍🔧
              </span>
            </a>
            punished
            <a href="https://saverparty.xyz">
              <span role="img" aria-label="squirrel">
                🐿
              </span>
            </a>
          </a>
          <div
            style={{
              position: "relative",
              top: "60px",
              display: "flex",
              flexDirection: "column",
              alignItems: "center"
            }}
          >
            <span>
              tax to{space}
              <a href="https://humanharvest.info">prevent</a>
              {space}loss
              <br />
              the objective right to own
              <br />
              borrowed made-loan derivative
              <br />
              <i>treasury share debenture max royalty</i>
              <br />
              rich salt liberalist:{" "}
              <i>
                democracy
                <br />
                spoofs accounting geohash
              </i>
            </span>
            <h1 {...setting(0)}>
              TTP <span style={{ fontSize: "15px" }}></span>
            </h1>
            <a href="https://truncatedwholesaletax.com">
              <h4 {...setting(1)}>the tax party</h4>
            </a>
            <div
              style={{
                width: "min-content",
                minWidth: "170px",
                color: "white",
                backgroundColor: "rgba(20,20,20,.6)",
                fontSize: "10px",
                padding: "3px",
                margin: "3px"
              }}
            >
              After $15k/customer/yr 'gifts' of discount{" "}
              <a style={{ color: "white" }} href="https://saverparty.xyz">
                (Save the Rats)
              </a>{" "}
              tax max $60/transaction
            </div>
            <span style={{ fontSize: "13px", backgroundColor: "lightsalmon" }}>
              Education and medical{" "}
              <a href="https://truncatedwholesaletax.com">
                institutional gifts
              </a>{" "}
              are
              <br />
              corporate tax free<i>… sounds weird.</i>
            </span>
            <span style={{ fontSize: "12px", backgroundColor: "lightskyblue" }}>
              <b>
                profit, <a href="https://scopebook.quora.com">labor</a>, and
                cost to revenue
              </b>{" "}
              betwinst qtrs
              <br />
              capital: profiteer/labor, contractor/
              <a href="https://froth.app">durable</a>
            </span>
            <span style={{ fontSize: "11px", backgroundColor: "chocolate" }}>
              <a href="https://commie.dev">capital</a> slave is cost to revenue
              in house
              <br />
              government is the{" "}
              <a href="https://generalmaintenanceunit.quora.com">goose</a> on
              vaxx <a href="https://humanharvest.info">permit</a>
            </span>
            <span
              style={{
                transition: ".3s ease-out",
                fontSize: "11px",
                backgroundColor: "linen",
                maxWidth: "300px"
              }}
            >
              Save the rats
              <br />
              <i style={{ color: "grey" }}>
                What are some well-reasoned critiques of Anarchism?
              </i>
              <br />
              <span
                style={{ cursor: "pointer" }}
                onMouseEnter={
                  () =>
                    this.setState({ designUItimeout: true }, () => {
                      clearTimeout(this.designUItimeout);
                      this.designUItimeout = setTimeout(() => {
                        this.setState({ designUItimeout: false });
                      }, 5000);
                    }) //scopebook
                }
              >
                Pinky-and-the-brain vibes
                {/**"anything he can to make it someone else's problem" */}
              </span>
              <br />
              <span
                style={{
                  color: "chocolate"
                }}
              >
                {this.state.designUItimeout &&
                  `(1) social as in burning of a field rather than building the new world
              within the shell of the old, (2) one last push by the working
              class to seize the means of production. An approach far astray
              from models of recruitment, education, progress, or the crossed
              fingers that the next riot will be the Big one.`}
              </span>
            </span>
            <span
              style={{ fontSize: "11px", backgroundColor: "lightseagreen" }}
            >
              I could eat a{" "}
              <a href="https://anchor.fm/micro-theory/episodes/Subcontracting-marginal-profits-e1l2ime">
                horse
              </a>
            </span>
            <br />
            <Cable
              style={{ height: "400px" }}
              float={null}
              src="https://vaults.biz/gdp"
              title="https://vaults.biz/gdp"
              //frameborder="0"
              //allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              //allowfullscreen
              scrolling={this.props.scrolling}
              fwd={this["scrollImg" + scrollnum()]}
              scrollTopAndHeight={this.props.scrollTop + window.innerHeight}
              scrollTop={this.props.scrollTop}
            />
            <i>To make a future civic tech non profit, tax exempt</i>
            <br />
            dissolve one non profit before making another quasi-purposeful
            business income
            <br />
            with corporate bylaws toward an individual's pay.
            <br />
            Then, all income from another non profit to a personal non profit
            <br />
            consortium is tax free. Use platform processed merchants as business
            account.
            <br />
            Cash charges above $11k and Stripe charges .8% with Standard connect
            accounts.
            <br />
            <br />I actualy don't think sunk costs ARE a fallacy. opportunity
            costs are
          </div>
        </div>
        <div
          style={{
            position: "fixed",
            //alignSelf: "start",
            bottom: "3px",
            right: "5px"
          }}
        ></div>
      </div>
    );
  }
}

export default SaltBank;

