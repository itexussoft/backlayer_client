import React, { Component } from 'react';
import HomeView from './HomeView';
import { connect } from 'react-redux';
import * as dataActions from 'app/actions/fetchDataActions';

class HomeContainer extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return <HomeView {...this.props} />;
    }
}

function mapStateToProps(state) {
    return {
        data: state.dataReducer.data
    };
}

function mapDispatchToProps(dispatch) {
    return {
        fetchData: () => dispatch(dataActions.requestFetchingData())
    };
}
export default connect(
    mapStateToProps,
    mapDispatchToProps
)(HomeContainer);
