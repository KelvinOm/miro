import * as React from 'react';
import { Dropdown, DropdownDivider, DropdownItem } from '@components';
import SyntaxHighlighter from 'react-syntax-highlighter';
import { ocean } from 'react-syntax-highlighter/dist/esm/styles/hljs';

export class HomePage extends React.PureComponent {
  onItemClick = () => {
    console.log('Item was clicked');
  };

  sendStaticInformation = () => {
    console.log('Disabled trigger was clicked');
  };

  customTrigger = (
    <a href="https://www.google.com/" onClick={e => e.preventDefault()}>
      trigger
    </a>
  );

  defaultExample = `
    <Dropdown>
      <DropdownDivider title="Group of actions" />
      <DropdownItem text="Action" onClick={this.onItemClick} />
      <DropdownItem text="Other action" onClick={this.onItemClick} />
      <DropdownDivider />
      <DropdownItem text="One more action" onClick={this.onItemClick} />
    </Dropdown>
  `;

  disabledTriggerExample = `
    <Dropdown
      triggerButtonProps={{ disabled: true }}
      onDisabledClick={this.sendStaticInformation}
    >
      <DropdownItem text="Action" />
      <DropdownItem text="Other action" />
    </Dropdown>
  `;

  autofocusExample = `
    <Dropdown triggerButtonProps={{ autoFocus: true }}>
      <DropdownItem autoFocus text="Action" />
      <DropdownItem text="Other action" />
    </Dropdown>
  `;

  customTriggerExample = `
    <Dropdown trigger={customTrigger}>
      <DropdownItem text="Action" />
      <DropdownItem text="Other action" />
    </Dropdown>
  `;

  itemOptionsExample = `
    <Dropdown>
      <DropdownItem
        text="Accessibility"
        before="accessibility"
        onClick={this.onItemClick}
      />
      <DropdownItem
        text="Other action"
        hidden
      />
      <DropdownDivider hidden />
      <DropdownItem
        text="Extension"
        before="extension"
        disabled
        onDisabledClick={this.sendStaticInformation}
      />
      <DropdownItem
        text="Favorite"
        before="favorite"
        onClick={this.onItemClick}
      />
    </Dropdown>
  `;

  customItemsExample = `
    <Dropdown>
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
  `;

  render() {
    return (
      <>
        <h1>Default</h1>
        <Dropdown>
          <DropdownDivider title="Group of actions" />
          <DropdownItem text="Action" onClick={this.onItemClick} />
          <DropdownItem text="Other action" onClick={this.onItemClick} />
          <DropdownDivider />
          <DropdownItem text="One more action" onClick={this.onItemClick} />
        </Dropdown>

        <SyntaxHighlighter language="javascript" style={ocean}>
          {this.defaultExample}
        </SyntaxHighlighter>

        <h1>Autofocus</h1>
        <Dropdown triggerButtonProps={{ autoFocus: true }}>
          <DropdownItem autoFocus text="Action" />
          <DropdownItem text="Other action" />
        </Dropdown>

        <SyntaxHighlighter language="javascript" style={ocean}>
          {this.autofocusExample}
        </SyntaxHighlighter>

        <h1>Disabled trigger</h1>

        <p>Triggers an event. Check it in the console.</p>

        <Dropdown
          triggerButtonProps={{ disabled: true }}
          onDisabledClick={this.sendStaticInformation}
        >
          <DropdownItem text="Action" />
          <DropdownItem text="Other action" />
        </Dropdown>

        <SyntaxHighlighter language="javascript" style={ocean}>
          {this.disabledTriggerExample}
        </SyntaxHighlighter>

        <h1>Сustom trigger</h1>
        <Dropdown trigger={this.customTrigger}>
          <DropdownItem text="Action" />
          <DropdownItem text="Other action" />
        </Dropdown>

        <SyntaxHighlighter language="javascript" style={ocean}>
          {this.customTriggerExample}
        </SyntaxHighlighter>

        <h1>Different items options</h1>

        <p>Disabled DropdownItem triggers an event. Check it in the console.</p>

        <Dropdown>
          <DropdownItem
            text="Accessibility"
            before="accessibility"
            onClick={this.onItemClick}
          />
          <DropdownItem text="Other action" hidden />
          <DropdownDivider hidden />
          <DropdownItem
            text="Extension"
            before="extension"
            disabled
            onDisabledClick={this.sendStaticInformation}
          />
          <DropdownItem
            text="Favorite"
            before="favorite"
            onClick={this.onItemClick}
          />
        </Dropdown>

        <SyntaxHighlighter language="javascript" style={ocean}>
          {this.itemOptionsExample}
        </SyntaxHighlighter>

        <h1>Сustom items</h1>

        <Dropdown>
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

        <SyntaxHighlighter language="javascript" style={ocean}>
          {this.customItemsExample}
        </SyntaxHighlighter>
      </>
    );
  }
}
