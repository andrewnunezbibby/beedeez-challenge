import React, {Component} from 'react';
import {connect} from 'react-redux';
import List from './List';
import {bindActionCreators} from 'redux';
import fetchCapsules from '../redux/fetchCapsules';
import store from '../redux/store';

class CapsulePage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      loadedCapsules: [],
    };
  }

  async componentWillMount() {
    console.log('MOUNTING');
    console.log('Props!!', this.props);
    const loadedCapsules = await this.props.fetchCapsules();
    this.setState({loadedCapsules});
  }

  render() {
    console.log('STORE', this.props.pending);
    return (
      <div className="capsule-page">
        {!this.props.pending ? (
          <List capsules={this.state.loadedCapsules} />
        ) : (
          'WHERE ARE MY CAPSULES?!'
        )}
      </div>
    );
  }
}

const mapStateToProps = state => ({
  error: state.error,
  capsules: state.capsules,
  pending: state.pending,
});

const mapDispatchToProps = dispatch =>
  bindActionCreators(
    {
      fetchCapsules: fetchCapsules,
    },
    dispatch,
  );

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(CapsulePage);
