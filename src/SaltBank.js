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
          width: "100%",
          transition: ".3s ease-in",
          display: "flex",
          flexDirection: "column",
          justifyContent: this.props.onscroll ? "flex-start" : "space-around",
          maxheight: "min-content",
          height: "calc(100% - 20px)",
          fontFamily: "sans-serif",
          alignItems: "center"
        }}
      >
        <i
          {...setting(8, {
            textDecoration: "none",
            position: "fixed",
            left: "7px",
            top: "10px"
          })}
        >
          <a href="https://igg.me/at/occupywallstreet">
            igg.me/at/occupywallstreet
          </a>
          <br />
          taxsecurityfirst.com
          <br />
          micro-theory.com
        </i>

        <i
          {...setting(8, {
            textDecoration: "none",
            position: "fixed",
            left: "7px",
            bottom: "10px"
          })}
        >
          <a href="https://saltbank.org">Saltbank.org</a>
          <br />
          2024nj.com/Carducci
        </i>
        <i
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
          <br />
          ballotpedia.org/Nick_Carducci
          <br />
          vau.money/weed
        </i>
        <div
          style={{
            width: "100%",
            maxWidth: "500px",
            position: "relative", //more than anything, devast
            top: "60px", //uninvest vau.money
            display: "inline-block" //prevent secure loss not or expiry, not good will nor price to inelastic, marginal labor
            //flexDirection: "column", //police can be normal, regular
            //alignItems: "center"
          }}
        >
          I'll appropriate anything if you can tax for it! Socialists will tax
          progressively, progressives just won't tax.
          <h3 style={{ display: "inline-block" }}>
            literally I wouldn't put medics above{space}
            <span
              style={{
                cursor: "pointer",
                textDecoration: "underline"
              }}
              onClick={() =>
                this.setState({ openCivilians: !this.state.openCivilians })
              }
            >
              civilians
            </span>
            <br />
            <br />
            &bull;{space}Baths and cardiology not vaccines. Every debris =
            {space}
            <a href="https://epiology.quora.com">covalent</a>.
            <br />
            &bull;{space}Recession then tax hikes and during its inflation part
            <br />
            &bull;{space}Advance nonsale warranty (fraud), in voice work done (
            <a href="https://saverparty.xyz">garnish-coded</a>), or final
            goods...
            <br />
            &bull;{space}Inflation, material benefit shrinkflation, or leisure
            to prefer complementary demand and substitutive supply fixed costs
            espoused by tendency.
            <br />
            &bull;{space}Did banks fail this time because of subpar sales,
            FedCash currency short of checkable deposits, or variable interest
            rates?
            <br />
            <br />
            peace{space}
            <a href="https://saverparty.xyz/jesus">plan</a>
            <br />
            <a href="https://www.quora.com/Do-Jews-believe-the-passage-Isaiah-53-7-including-for-the-transgression-of-my-people-was-he-stricken-predicts-dying-for-not-due-to-of-sin-or-did-Peter-ruin-the-Old-Testament-Do-Muslims-admit-Jesus-pbuh-committed/answer/Curtis-W-Scissons">
              Save
            </a>
            {space}the (elderly) rats; join WIPO;
          </h3>
          <div style={{ width: "600px" }}>
            <i>
              Why do we really need taxes? Taxes are the price we all pay for
              plaintiff usufruct PRECEDENCE, like we are all bees working on the
              corpus hive for material benefit liquidity and capital goods
              deflation. Medics for all… or none. (
              <i style={{ color: "dodgerblue" }}>
                Is public service loan forgiveness fair?
              </i>
              ) This is our constitutional liberated uniform and tranquil
              unitary demand[.]
            </i>
            <br />
            Taxes nor tax-falls are meant for profiteering or more than its
            deflation, much less safe assets by convenience yield (
            <i style={{ color: "indianred" }}>
              Do you prefer temporally dispositioned supply or liquid unitary
              demand?
            </i>
            ).
            <br />
            Taxes are made for{space}
            <a href="https://scopes.cc">maintenance</a>
            {space}(
            <i style={{ color: "forestgreen" }}>
              Does Upwork advance or protect escrow?
            </i>
            ).
          </div>
          <div style={{ width: "400px" }}>
            <h4>
              The financial benefactor is cardinal, never an absolute material
              benefit, sheer marginal utility and only ordinal after the liquid
              goods for capital deflates justly by some whatever lag.
            </h4>
            <h2>
              <a href="https://saverparty.xyz/nato">Ability</a>
              {space}for{space}
              <a href="https://commie.dev">needs</a>
            </h2>
            <span>
              Technology sunk capital liquid advances towards unavailable
              outright market of primary or by customer if not advanced 1031
              consumable or just MCC escrow from a payment intent payout haram
              bank to haram bank{space}
              <a href="https://multilevelcaital.com">t+</a>.
            </span>
            <br />
            <br />
            <div style={{ width: "200px", float: "left", padding: "10px" }}>
              Extractable means unitary in time and space. The only reason why
              dynamic{space}
              <b>
                Giffen escrow is halal is because commercial legislation
                nowadays concerns itself with warranty consumer fraud and its
                respective labor overtime{space}
                <a href="https://thumbprint.us">indemnity</a>
              </b>
              {space}
              <i>
                instead of its counterpart and countervailing third party donee
                beneficiary surrendered freedom in purchasing the right to own
              </i>
              . That’s western law put together, but full measure is also that
              (and first, simpler, etc.) by Sunnah 26:181 and 17:35, at least.
              <br />
              <br />
              There is not any means [of sustenance] whose reserves We do not
              hold, only bring it forth in precise measure. (15:21)
            </div>
            These words instruct me to deal in commodities, and expire work
            appointments with a concurrentable stop loss. A lease and lien
            therefore are haram, but this part is just how I lead my own life
            and advise others to this Right path where after plausible use we
            must sell outright:
            <span style={{ fontSize: "12px" }}>
              this way hotels and making use of multiple homes is justified
              within seasonal leases (and limited to 5 cubicle floors, how my
              grandfather made money, or townhomes) as specific to rent as
              industry proprietor payday loans is to debt and entrepreneurship.
              The third party donee beneficiary standing is owned by a person
              that is the scribe in the first adage (2:282), a recorder that
              which we hold each other to account to by, through what else but a
              plaintiff payable tax. An immediate contract does not make a
              (marginal utility value) benefactor from interest nor invoice,
              principal, nor warranty, but rather a static (material benefit
              value) utility mechanism. If there is work to be done, let the
              stipulations abound spoils and with consent of those who record
              and enforce the arrangements (2:282 == democracy). Usually (in
              these days, however), probate repossesses any outstanding
              liability without a foreclosure and debt-service fixed game.
              {space}
              <i>
                I would like this point to be discussed amongst professional
                scholars, I am but a (concurrent vertical industry) bootstrapped
                enthusiast. Thanks for hearing me, and although I verily am
                building contract stewardship software like pipe.io at
                vau.money/login (and I endeavor to serve our ummah
                professionally), given half of this is my bona fide
                reflection/abrogation:
              </i>
              {space}Allah (swt) knows best.{space}
              <i>
                Postscript: When coinage was used as money, I’m not sure there
                was much public land deeds…
              </i>
              {space}I hope this helps as it helped me, may Allah be{space}
              <a href="https://marginalism.uk">pleased</a>
              {space}in balance.
            </span>
          </div>
          <h1>
            Coinage was metal when public lands were nigh and before that
            nonsale barrels of{space}
            <a href="https://humanharvest.info">human-feed</a>
          </h1>
          <div
            style={{
              transition: ".3s ease-in",
              fontSize: this.state.openCivilians ? "" : "0px"
            }}
          >
            <span>
              maybe poor red states will fight me on geohash tax. You should
              choose your local public services.
              <br />
              <br />
              (reconciliation default): uninvest vau.money prevent, secure loss
              not or expiry, not good will nor price to inelastic, marginal
              labor
              <br />
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
                fontSize: this.state.openCivilians ? "10px" : "0px",
                padding: this.state.openCivilians && "3px",
                margin: "3px"
              }}
            >
              After $15k/customer/yr 'gifts' of discount{" "}
              <a style={{ color: "white" }} href="https://saverparty.xyz">
                (Save the Rats)
              </a>{" "}
              tax max $60/transaction
            </div>
            <span
              style={{
                fontSize: this.state.openCivilians ? "13px" : "0px",
                backgroundColor: "lightsalmon"
              }}
            >
              Education and medical{" "}
              <a href="https://vau.money/login">institutional gifts</a> are
              <br />
              corporate tax free<i>… sounds weird.</i>
            </span>
            <span
              style={{
                fontSize: this.state.openCivilians ? "12px" : "0px",
                backgroundColor: "lightskyblue"
              }}
            >
              <b>
                profit, <a href="https://scopebook.quora.com">labor</a>, and
                cost to revenue
              </b>{" "}
              betwinst qtrs
              <br />
              capital: profiteer/labor, contractor/
              <a href="https://froth.app">durable</a>
            </span>
            <span
              style={{
                fontSize: this.state.openCivilians ? "11px" : "0px",
                backgroundColor: "chocolate"
              }}
            >
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
                fontSize: this.state.openCivilians ? "11px" : "0px",
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
              style={{
                fontSize: this.state.openCivilians ? "11px" : "0px",
                backgroundColor: "lightseagreen"
              }}
            >
              I could eat a{" "}
              <a href="https://anchor.fm/micro-theory/episodes/Subcontracting-marginal-profits-e1l2ime">
                horse
              </a>
            </span>
            <br />
            {this.state.openCivilians && (
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
            )}
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

