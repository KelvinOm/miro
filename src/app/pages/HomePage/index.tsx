import * as React from 'react';
import { Dropdown, DropdownDivider, DropdownItem } from '@components';

export class HomePage extends React.PureComponent {
  onItemClick = () => {
    console.log('Item was clicked');
  };

  sendStaticInformation = () => {
    console.log('Disabled trigger was clicked');
  };

  render() {
    const customTrigger = (
      <a href="https://www.google.com/" onClick={e => e.preventDefault()}>
        trigger
      </a>
    );

    return (
      <>
        <h1>Default</h1>
        <Dropdown onDisabledClick={this.sendStaticInformation}>
          <DropdownDivider title="Group of actions" />
          <DropdownItem text="Action" onClick={this.onItemClick} />
          <DropdownItem text="Other action" onClick={this.onItemClick} />
          <DropdownDivider title="More actions" />
          <DropdownItem text="One more action" onClick={this.onItemClick} />
        </Dropdown>

        <h1>Disabled trigger</h1>
        <Dropdown>
          <DropdownItem text="Accessibility" before="accessibility" />
          <DropdownItem disabled text="Extension" before="extension" />
          <DropdownItem text="Favorite" before="favorite" />
          <DropdownItem text="Notifications" before="notifications" />
        </Dropdown>

        <h1>Disabled trigger</h1>
        <Dropdown
          triggerButtonProps={{ disabled: true }}
          onDisabledClick={this.sendStaticInformation}
        >
          <DropdownItem text="Accessibility" />
          <DropdownItem text="Extension" />
          <DropdownItem text="Favorite" />
          <DropdownItem text="Notifications" />
        </Dropdown>

        <h1>Autofocus trigger</h1>
        <Dropdown triggerButtonProps={{ autoFocus: true }}>
          <DropdownItem text="Action" />
          <DropdownItem text="Other action" />
          <DropdownItem text="One more action" />
        </Dropdown>

        <h1>Сustom trigger</h1>
        <Dropdown trigger={customTrigger}>
          <DropdownItem
            text="Action"
            autoFocus
            onClick={this.onItemClick}
            onDisabledClick={this.sendStaticInformation}
          />
          <DropdownItem text="Other action" hidden />
          <DropdownDivider hidden />
          <DropdownItem
            text="Disabled action"
            disabled
            onClick={this.onItemClick}
            onDisabledClick={this.sendStaticInformation}
          />
          <DropdownItem text="Settings">
            <DropdownItem text="Action" />
            <DropdownItem text="Other action" />
            <DropdownDivider />
            <DropdownItem text="One more action" />
          </DropdownItem>
        </Dropdown>

        <h1>Сustom items</h1>
        <Dropdown triggerButtonProps={{ autoFocus: true }}>
          <DropdownItem>
            <strong onClick={this.onItemClick}>Strong text</strong>
          </DropdownItem>
          <DropdownItem>
            <b onClick={this.onItemClick}>Bold text</b>
          </DropdownItem>
          <DropdownItem>
            <div onClick={this.onItemClick}>Simple text</div>
          </DropdownItem>
        </Dropdown>
      </>
    );
  }
}
