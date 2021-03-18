import * as React from 'react';
import { ReactNode } from 'react';
import { DropdownButton, Icon } from '@components';
import styles from './dropdownItem.module.scss';

interface IDropdownItemProps {
  // Sets the text content for the DropdownItem
  text?: string;
  // Content that will be rendered inside DropdownItem. Should typically be
  // DropdownItem or DropdownDivider, or checkbox / radio variants of those
  // If the DropdownItem is used as a child it will be created submenu
  children?: ReactNode;
  // Allows the DropdownItem to open when hovered on the trigger. Used when the DropdownItem is submenu
  isOpenOnHover?: boolean;
  // Will focus to the DropdownItem
  autoFocus?: boolean;
  // Makes the DropdownItem disabled
  disabled?: boolean;
  // Hides the DropdownItem
  hidden?: boolean;
  // Used for specifies the tab order of an element
  tabIndex?: number;
  // Callback fired when the DropdownItem is clicked
  onClick?: () => void;
  // Callback fired when the disabled DropdownItem is clicked
  onDisabledClick?: () => void;
  // Callback fired when the DropdownItem is selected
  onSelect?: () => void;
  // Makes the DropdownItem appear selected
  isSelected?: boolean;
  // Link
  href?: string;
  // Where to display the linked URL
  target?: '_blank' | '_self' | '_parent' | '_top';
  // Element to render before the DropdownItem text, generally should be an icon component or toggle component
  before?: React.ReactNode | string;
  // Element to render after the DropdownItem text, generally should be an icon component or toggle component
  after?: React.ReactNode | string;
  // Space-delimited list of class names to customize DropdownItem
  className?: string;
  // Whether the text should be allowed to wrap to multiple lines. If false, text will be truncated with an ellipsis when it reaches max-width
  isMultiline?: boolean;
  // ARIA role for the DropdownItem
  role?: 'menuitem' | 'menuitemradio' | 'menuitemcheckbox';
}

export class DropdownItem extends React.PureComponent<IDropdownItemProps> {
  static defaultProps: IDropdownItemProps = {
    isOpenOnHover: true,
  };

  get itemContent() {
    const {
      text,
      before,
      disabled,
      autoFocus,
      children,
      onClick,
      onDisabledClick,
    } = this.props;

    if (text) {
      return (
        <DropdownButton
          className={styles.listButton}
          disabled={disabled}
          autoFocus={autoFocus}
          onClick={onClick}
          onDisabledClick={onDisabledClick}
          size="small"
          color="white"
        >
          {before && (
            <Icon className={styles.listIcon} icon={before as string} />
          )}
          {text}
        </DropdownButton>
      );
    } else {
      return children;
    }
  }

  render() {
    const { hidden } = this.props;

    if (hidden) return null;

    return (
      <>
        <li className={styles.listItem}>{this.itemContent}</li>
      </>
    );
  }
}
