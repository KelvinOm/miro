import * as React from 'react';
import styles from './styles.module.scss';
import classNames from 'classnames';
import { ReactSVG } from 'react-svg';

interface IIconProps {
  icon?: string;
  className?: string;
  size?: 'small' | 'middle';
}

export class Icon extends React.PureComponent<IIconProps> {
  static defaultProps: IIconProps = {
    size: 'middle',
  };

  render() {
    const { icon, className, size } = this.props;
    const sizeClass =
      size === 'small' ? styles.svgWrapperSmall : styles.svgWrapperMiddle;

    return (
      <ReactSVG
        className={classNames(styles.svgWrapper, className, sizeClass)}
        src={`${process.env.PUBLIC_URL}/images/icons/${icon}.svg`}
      />
    );
  }
}
