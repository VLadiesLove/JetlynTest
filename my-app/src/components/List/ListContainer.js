import React from "react";
import { connect } from "react-redux";
import {
  getUsersThunkCreator,
  toggleInfoActionCreator,
} from "../../store/list-reducer";
import List from "./List";

class ListContainer extends React.Component {
  componentDidMount() {
    this.props.getUsers(100, 0);
  }
  render = () => {
    return (
      <List
        list={this.props.list}
        toggleInfo={this.props.toggleInfo}
        error={this.props.error}
      />
    );
  };
}

const mapStateToProps = (state) => {
  return {
    list: state.list,
    error: state.list.error,
  };
};
const mapDispatchToProps = (dispatch) => {
  return {
    getUsers: (rows, delay) => dispatch(getUsersThunkCreator(rows, delay)),
    toggleInfo: (id) => dispatch(toggleInfoActionCreator(id)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(ListContainer);
