import * as React from 'react';
import styles from './styles.module.scss';

interface IOverlayProps {
  children?: any;
}

export class Overlay extends React.PureComponent<IOverlayProps> {
  render() {
    const { children } = this.props;

    return <div className={styles.overlay}>{children}</div>;
  }
}
