class HogTile extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        clicked: false
      };
    }
    getImage = hogName => {
      let formattedName = hogName
        .split(" ")
        .join("_")
        .toLowerCase();
      let pigPics = require(`../hog-imgs/${formattedName}.jpg`);
      return pigPics;
    };
    handleDetailsClick = () => {
        //when clicked, change clicked to true
        this.setState({ clicked: !this.state.clicked });
       };
    
       render() {
         const { name, specialty } = this.props.hog;
         return (
           <div className="ui card eight wide column pigTile">
               <button className="ui button" onClick={this.handleDetailsClick}>
                 {this.state.clicked ? "Less Info" : "More Info"}
               </button>
               <button
                 className="ui button"
                 onClick={() => this.props.handleBanishedClick(this.props.hog)}
               >
                 Hide Me 🐽
               </button>
             </div>
           
         );
        }
    }
    export default HogTile;