import { connect } from 'react-redux';
import { Portal } from 'react-portal';
import React, { Component } from 'react';
import { getIndexValues } from '../actions';
import { Menu, Label } from 'semantic-ui-react';

class Filter extends Component {
  // constructor(props) {
  //   super(props);
  // }

  componentDidMount() {
    if (this.props.index_name) {
      this.props.getIndexValues(this.props.index_name);
    }
  }

  componentDidUpdate(prevProps) {
    if (this.props.index_name !== prevProps.index_name) {
      this.props.getIndexValues(this.props.index_name);
    }
  }

  render() {
    return __CLIENT__ &&
      this.props.index_name &&
      document.querySelector('.cols.content-cols .inPageNavigation') ? (
      <Portal
        node={
          __CLIENT__ &&
          document.querySelector('.cols.content-cols .inPageNavigation')
        }
      >
        <div className="headings_navigation">
          <h5>
            <b>Filter by {this.props.index_name}</b>
          </h5>
          <Menu vertical>
            {this.props.items.map(item => (
              <Menu.Item key={item} onClick={() => {}}>
                <Label color="teal">1</Label>
                {item}
              </Menu.Item>
            ))}
          </Menu>
        </div>
      </Portal>
    ) : (
      ''
    );
  }
}

export default connect(
  (state, props) => {
    return {
      items: (state.index_values && state.index_values.items) || [],
    };
  },
  {
    getIndexValues,
  },
)(Filter);
