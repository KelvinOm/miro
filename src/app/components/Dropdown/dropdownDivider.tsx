import * as React from 'react';
import classNames from 'classnames';
import styles from './dropdownDivider.module.scss';

interface IDropdownDividerProps {
  // Space-delimited list of class names to customize DropdownDivider
  className?: string;
  // Optional title. Сan be used as a title for a group
  title?: string;
  // Space-delimited list of class names to customize DropdownDivider as title
  titleClassName?: string;
  // Hides the DropdownDivider
  hidden?: boolean;
}

export class DropdownDivider extends React.PureComponent<
  IDropdownDividerProps
> {
  render() {
    const { className, title, titleClassName, hidden } = this.props;

    if (hidden) return null;

    if (title) {
      return (
        <li className={classNames(styles.title, className)}>
          <span className={titleClassName}>{title}</span>
        </li>
      );
    } else {
      return <li className={classNames(styles.divider, className)} />;
    }
  }
}
