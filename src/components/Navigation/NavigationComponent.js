import React from 'react';
import Link from '../Link/LinkComponent';

class Navigation extends React.Component {

  componentDidMount() {
    window.componentHandler.upgradeElement(this.root);
  }

  componentWillUnmount() {
    window.componentHandler.downgradeElements(this.root);
  }

  render() {
    return (
      <nav className="mdl-navigation" ref={node => (this.root = node)}>
        <Link className="mdl-navigation__link" to="/">Home</Link>
        <Link className="mdl-navigation__link" to="/studio">Studio</Link>
        <Link className="mdl-navigation__link" to="/galeria">Galeria</Link>
      </nav>
    );
  }

}

export default Navigation;
