import {connect} from 'react-redux';
import List from '../components/List';
import {VisibilityFilters} from '../actions';

const filterCapsules = (capsules, searchTerm) => {
  return Object.assign({}, state, {
    capsules: state.capsules.filter(cap => cap.name.match(regex)),
  });
};

const mapStateToProps = state => ({
  todos: getVisibleTodos(state.todos, state.visibilityFilter),
});

const mapDispatchToProps = dispatch => ({
  toggleTodo: id => dispatch(toggleTodo(id)),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(List);
