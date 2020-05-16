import React, {Component} from 'react';
import {connect} from 'react-redux';
import search from '../reducers/search';
import {searchCapsules} from '../redux/actions';

const SearchBar = ({updateSearchTerm}) => {
  return (
    <div>
      <form onChange={updateSearchTerm}>
        <label htmlFor="search-capsules">Search for Capsule(s)</label>
        <input type="search" name="search-capsules" id="search-capsules" />
        <button className="submit-button" type="submit">
          Let's See
        </button>
      </form>
    </div>
  );
};

export default SearchBar;

// class SearchBar extends Component {
//   constructor(props) {
//     super(props);
//     this.state = {searchTerm: ''};
//   }

//   updateSearchTerm = evt => {
//     this.setState({searchTerm: evt.target.value});
//   };

//   handleSubmit = evt => {
//     evt.preventDefault();
//     console.log('Submitted');
//     console.log('PROPS', this.props);
//     this.props.dispatch(searchCapsules(this.state.searchTerm));
//   };

//   render() {
//     return (
//       <div>
//         <form onChange={this.updateSearchTerm} onSubmit={this.handleSubmit}>
//           <label htmlFor="search-capsules">Search for Capsule(s)</label>
//           <input type="search" name="search-capsules" id="search-capsules" />
//           <button className="submit-button" type="submit">
//             Let's See
//           </button>
//         </form>
//       </div>
//     );
//   }
// }

// const mapStateToProps = state => {
//   const {capsules} = state;
// };

// const mapDispatchToProp = dispatch => {
//   return {
//     searchCapsules: searchTerm => {
//       dispatch(searchCapsules(searchTerm));
//     },
//   };
// };

// export default connect(
//   mapStateToProps,
//   {searchCapsules},
// )(SearchBar);

// export default connect()(SearchBar);

// export default connect(
//   mapStateToProps,
//   mapDispatchToProp,
// )(SearchBar);
