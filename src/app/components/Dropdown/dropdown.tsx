import * as React from 'react';
import {
  DropdownButton,
  IDropdownButtonProps,
  Overlay,
  Icon,
} from '@components';
import {
  Manager,
  Popper,
  Reference,
  ReferenceChildrenProps,
  PopperChildrenProps,
} from 'react-popper';
import styles from './dropdown.module.scss';

interface IDropdownProps {
  // Sets the text content for the default trigger
  text?: string;
  // Controls the initial open state of the Dropdown
  isDefaultOpen?: boolean;
  // Controls the open state of the Dropdown
  isOpen?: boolean;
  // Content that will be rendered inside Dropdown. Should typically be
  // DropdownItem or DropdownDivider, or checkbox / radio variants of those
  children?: React.ReactNode;
  // Position of the Dropdown
  position?:
    | 'top-start'
    | 'top-end'
    | 'bottom-start'
    | 'bottom-end'
    | 'right-start'
    | 'right-end'
    | 'left-start'
    | 'left-end';
  // Allows the Dropdown to be placed on the opposite side of its trigger if it does not fit in the viewport
  flip?: boolean;
  // Content which will trigger the Dropdown to open and close
  trigger?: React.ReactNode;
  // Props to pass through to the default trigger button
  triggerButtonProps?: IDropdownButtonProps;
  // Space-delimited list of class names to customize Dropdown
  className?: string;
  // aria-describedby for the Dropdown
  ariaDescribedby?: string;
  //aria-label for the Dropdown
  ariaLabel?: string;
  //aria-labelledby for the Dropdown
  ariaLabelledby?: string;
  // Whether the Dropdown has a backdrop
  hasBackdrop?: boolean;
  // Space-delimited list of class names to customize overlay
  backdropClassName?: string;
  // Allows the Dropdown to open when hovered on the trigger
  isOpenOnHover?: boolean;
  // Allows the Dropdown to open by right click on the trigger
  isContextMenu?: boolean;
  // Callback fired when the Dropdown is opened
  onOpen?: () => void;
  // Callback fired when the Dropdown is closed
  onClose?: () => void;
  // Callback fired when the disabled trigger is clicked
  onDisabledClick?: () => void;
}

interface IDropdownState {
  isDropdownVisible: boolean;
}

export class Dropdown extends React.PureComponent<
  IDropdownProps,
  IDropdownState
> {
  static defaultProps: IDropdownProps = {
    text: 'Menu',
    position: 'bottom-start',
    flip: true,
    hasBackdrop: true,
  };

  constructor(props: IDropdownProps) {
    super(props);

    this.state = {
      isDropdownVisible: false,
    };
  }

  toggleOpen = () => {
    this.setState({
      isDropdownVisible: !this.state.isDropdownVisible,
    });
  };

  getTrigger = ({ ref }: ReferenceChildrenProps) => {
    const { text, trigger, triggerButtonProps, onDisabledClick } = this.props;

    if (trigger) {
      return (
        <div ref={ref} onClick={this.toggleOpen}>
          {trigger}
        </div>
      );
    } else {
      return (
        <div ref={ref}>
          <DropdownButton
            {...triggerButtonProps}
            onClick={this.toggleOpen}
            onDisabledClick={onDisabledClick}
          >
            {text}
            <Icon
              className={styles.buttonIcon}
              size="small"
              icon="arrow-down"
            />
          </DropdownButton>
        </div>
      );
    }
  };

  getPopper = (popperProps: PopperChildrenProps) => {
    const { children } = this.props;

    return (
      <div
        ref={popperProps.ref}
        style={popperProps.style}
        data-placement={popperProps.placement}
      >
        <Overlay>
          <ul>{children}</ul>
        </Overlay>
      </div>
    );
  };

  render() {
    const { position } = this.props;
    const { isDropdownVisible } = this.state;

    return (
      <Manager>
        <Reference>{this.getTrigger}</Reference>
        {isDropdownVisible && (
          <Popper placement={position}>{this.getPopper}</Popper>
        )}
      </Manager>
    );
  }
}
