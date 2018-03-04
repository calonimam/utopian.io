import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import './Topic.less';

class Topic extends React.Component {
  static propTypes = {
    name: PropTypes.string,
    favorite: PropTypes.bool,
    closable: PropTypes.bool,
    onClose: PropTypes.func,
  };

  static defaultProps = {
    name: '',
    favorite: false,
    closable: false,
    onClose: () => {},
  };

  state = {
    closing: false,
  };

  onCloseOver = () => {
    this.setState({
      closing: true,
    });
  };

  onCloseOut = () => {
    this.setState({
      closing: false,
    });
  };

  onCloseClick = (e) => {
    e.preventDefault();
    this.props.onClose(this.props.name);
  };

  render() {
    const { name, favorite, closable } = this.props;

    return (
      <span
        className={classNames('Topic', {
          'Topic--favorite': favorite,
          'Topic--closing': this.state.closing,
        })}
      >
        {name}
        {closable &&
          <i
            role="presentation"
            className="iconfont icon-close Topic__close"
            onClick={this.onCloseClick}
            onMouseOver={this.onCloseOver}
            onMouseOut={this.onCloseOut}
          />}
      </span>
    );
  }
}

export default Topic;
