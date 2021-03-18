import * as React from 'react';
import styles from './dropdownButton.module.scss';
import nextId from 'react-id-generator';
import classNames from 'classnames';

export interface IDropdownButtonProps {
  // Makes the DropdownButton disabled
  disabled?: boolean;
  // Makes the DropdownButton focused
  autoFocus?: boolean;
  // Callback fired when the DropdownButton is clicked
  onClick?: () => void;
  // Callback fired when the disabled DropdownButton is clicked
  onDisabledClick?: () => void;
  // Space-delimited list of class names to customize DropdownButton
  className?: string;
  // Size of DropdownButton
  size?: 'small' | 'middle';
  // Color of DropdownButton
  color?: 'white' | 'blue';
}

export class DropdownButton extends React.PureComponent<IDropdownButtonProps> {
  static defaultProps: IDropdownButtonProps = {
    size: 'middle',
    color: 'blue',
  };

  htmlId = nextId();

  render() {
    const {
      disabled,
      autoFocus,
      onClick,
      onDisabledClick,
      children,
      size,
      color,
      className,
    } = this.props;

    const sizeClass =
      size === 'small' ? styles.buttonSmall : styles.buttonMiddle;
    const colorClass =
      color === 'blue' ? styles.buttonBlue : styles.buttonWhite;

    return (
      <>
        <input
          id={this.htmlId}
          type="button"
          disabled={disabled}
          autoFocus={autoFocus}
          className={classNames(styles.input, 'visually-hidden')}
          onClick={onClick}
        />
        <label
          htmlFor={this.htmlId}
          className={classNames(
            styles.button,
            sizeClass,
            colorClass,
            className,
          )}
          onClick={disabled ? onDisabledClick : () => null}
        >
          {children}
        </label>
      </>
    );
  }
}
