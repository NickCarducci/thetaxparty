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
    /*const setting2 = (n, more) => {
      return {
        style: {
          color: this.state["hoverin" + n]
            ? "rgb(80,100,120)"
            : "rgb(50,70,90)",
          cursor: "pointer",
          ...more
        },
        onMouseEnter: () => this.setState({ ["hoverin" + n]: true }),
        onMouseLeave: () => this.setState({ ["hoverin" + n]: false })
      };
    };*/
    //https://www.quora.com/What-is-the-cause-of-inequality-in-competitive-markets/answer/Nick-Carducci
    //reverse amortization
    let arrayOfnumbers = 0;
    const scrollnum = () => {
      arrayOfnumbers = arrayOfnumbers + 1; //arrayOfnumbers[arrayOfnumbers.length - 1] + 1;
      //arrayOfnumbers.push(num);
      //console.log(arrayOfnumbers)
      return arrayOfnumbers;
    };
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
          {/*<Cable
            {...setting(8, {
              color: "black",
              textDecoration: "none",
              position: "fixed",
              left: "30px",
              bottom: "40px",
              maxWidth: "calc(100% - 50px)",
              width: "560px",
              height: "315px"
            })}
            float={null}
            src="https://www.youtube.com/embed/D43NASit-J0"
            title="https://www.youtube.com/watch?v=D43NASit-J0"
            //frameborder="0"
            //allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            //allowfullscreen
            scrolling={this.props.onscroll}
            fwd={this["scrollImg" + scrollnum()]}
            scrollTopAndHeight={this.props.scrollTop + window.innerHeight}
            scrollTop={this.props.scrollTop}
          />*/}
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
              display: "flex",
              flexDirection: "column",
              alignItems: "center"
            }}
          >
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
                fontSize: "14px",
                padding: "6px"
              }}
            >
              After $15k/customer/yr 'gifts' of discount
              <br />
              tax max $60/transaction
            </div>
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
