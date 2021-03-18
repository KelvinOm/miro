## Quick start

⚠️ Using [Yarn Package Manager](https://yarnpkg.com) is recommended over `npm`.

```shell
git clone https://github.com/KelvinOm/miro.git
cd miro
yarn install
yarn start
```

---

## Dropdown

A Dropdown is a `<ul>` container for DropdownItem and DropdownDivider. Also, any custom content can be placed there.

| Property           | Type                                                                                         | Default                                                 | Description                                                                                                                           |
| ------------------ | -------------------------------------------------------------------------------------------- | ------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------- |
| text               | `string`                                                                                     | `Menu`                                                  | Sets the text content for the default trigger.                                                                                        |
| isDefaultOpen      | `boolean`                                                                                    | `false`                                                 | Controls the initial open state of the Dropdown.                                                                                      |
| isOpen             | `boolean`                                                                                    | `false`                                                 | Controls the open state of the Dropdown.                                                                                              |
| children           | `React.ReactNode`                                                                            | —                                                       | Content that will be rendered inside Dropdown. Should typically be DropdownItem, DropdownDivider or checkbox/radio variants of those. |
| position           | `top-start, top-end, bottom-start, bottom-end, right-start, right-end, left-start, left-end` | `bottom-start`                                          | Position of the Dropdown.                                                                                                             |
| flip               | `boolean`                                                                                    | `true`                                                  | Allows the Dropdown to be placed on the opposite side of its trigger if it does not fit in the viewport.                              |
| trigger            | `React.ReactNode`                                                                            | `DropdownButton` with arrow icon and «Menu» text inside | Content which will trigger the Dropdown to open and close.                                                                            |
| triggerButtonProps | `IDropdownButtonProps`                                                                       | -                                                       | Props to pass through to the default trigger button.                                                                                  |
| className          | `string`                                                                                     | -                                                       | Space-delimited list of class names to customize Dropdown.                                                                            |
| ariaLabel          | `string`                                                                                     | —                                                       | Aria-label for the Dropdown.                                                                                                          |
| ariaDescribedby    | `string`                                                                                     | —                                                       | Aria-describedby for the Dropdown.                                                                                                    |
| ariaLabelledby     | `string`                                                                                     | —                                                       | Aria-labelledby for the Dropdown.                                                                                                     |
| hasBackdrop        | `boolean`                                                                                    | `true`                                                  | Whether the Dropdown has a backdrop.                                                                                                  |
| backdropClassName  | `string`                                                                                     | —                                                       | Space-delimited list of class names to customize overlay.                                                                             |
| isOpenOnHover      | `boolean`                                                                                    | `false`                                                 | Allows the Dropdown to open when hovered on the trigger.                                                                              |
| isContextMenu      | `boolean`                                                                                    | `false`                                                 | Allows the Dropdown to open by right click on the trigger.                                                                            |
| onOpen             | `function`                                                                                   | `() => void`                                            | Callback fired when the Dropdown is opened.                                                                                           |
| onClose            | `function`                                                                                   | `() => void`                                            | Callback fired when the Dropdown is closed.                                                                                           |
| onDisabledClick    | `function`                                                                                   | `() => void`                                            | Callback fired when the disabled trigger is clicked.                                                                                  |

## DropdownItem

A DropdownItem is a single interactive item in a Dropdown. This component renders a `<li>` containing a DropdownButton.
Make the DropdownItem interactive by providing the href, target, and onClick props as necessary.
Create subDropdowns by nesting DropdownItems inside each other as children.

| Property        | Type                                        | Default      | Description                                                                                                                                                                                                             |
| --------------- | ------------------------------------------- | ------------ | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| text            | `string`                                    | —            | Sets the text content for the default trigger.                                                                                                                                                                          |
| children        | `React.ReactNode`                           | —            | Content that will be rendered inside DropdownItem. Should typically be DropdownItem, DropdownDivider, link or checkbox/radio variants of those. If the DropdownItem is used as a child it will be created subDropdowns. |
| isOpenOnHover   | `boolean`                                   | `true`       | Allows the Dropdown to open when hovered on the trigger.                                                                                                                                                                |
| autoFocus       | `boolean`                                   | `false`      | Will focus to the DropdownItem.                                                                                                                                                                                         |
| disabled        | `boolean`                                   | `false`      | Makes the DropdownItem disabled.                                                                                                                                                                                        |
| hidden          | `boolean`                                   | `false`      | Hides the DropdownItem.                                                                                                                                                                                                 |
| onClick         | `function`                                  | `() => void` | Callback fired when the DropdownItem is clicked.                                                                                                                                                                        |
| onDisabledClick | `function`                                  | `() => void` | Callback fired when the disabled DropdownItem is clicked.                                                                                                                                                               |
| onSelect        | `function`                                  | `() => void` | Callback fired when the DropdownItem is selected.                                                                                                                                                                       |
| isSelected      | `boolean`                                   | `false`      | Makes the DropdownItem appear selected                                                                                                                                                                                  |
| href            | `string`                                    | —            | Link                                                                                                                                                                                                                    |
| target          | `_blank, _self, _parent, _top`              | -            | Where to display the linked URL                                                                                                                                                                                         |
| before          | `React.ReactNode`, `string`                 | —            | Element to render before the DropdownItem text, generally should be an icon component or toggle component.                                                                                                              |
| after           | `React.ReactNode`, `string`                 | —            | Element to render after the DropdownItem text, generally should be an icon component or toggle component.                                                                                                               |
| className       | `string`                                    | -            | Space-delimited list of class names to customize DropdownItem.                                                                                                                                                          |
| isMultiline     | `boolean`                                   | `false`      | Whether the text should be allowed to wrap to multiple lines. If false, text will be truncated with an ellipsis when it reaches max-width.                                                                              |
| role            | `menuitem, menuitemradio, menuitemcheckbox` | —            | ARIA role for the DropdownItem.                                                                                                                                                                                         |

## DropdownDivider

A DropdownDivider separate DropdownItem. Optionally, add a title to the DropdownDivider for create groups.

| Property       | Type      | Default | Description                                                                |
| -------------- | --------- | ------- | -------------------------------------------------------------------------- |
| className      | `string`  | -       | Space-delimited list of class names to customize DropdownDivider.          |
| title          | `string`  | —       | Optional title. Сan be used as a title for a group.                        |
| titleClassName | `string`  | -       | Space-delimited list of class names to customize DropdownDivider as title. |
| hidden         | `boolean` | `false` | Hides the DropdownDivider.                                                 |

## DropdownButton

A special button for the Dropdown. It is used as a trigger for the Dropdown and as an active element in DropdownItem.
Supports native browser keyboard navigation and states (hover, focus, active, disabled).
Can handle events in the disabled state.

| Property        | Type            | Default      | Description                                                      |
| --------------- | --------------- | ------------ | ---------------------------------------------------------------- |
| disabled        | `boolean`       | `false`      | Makes the DropdownButton disabled.                               |
| autoFocus       | `boolean`       | `false`      | Makes the DropdownButton focused.                                |
| onClick         | `function`      | `() => void` | Callback fired when the DropdownButton is clicked.               |
| onDisabledClick | `function`      | `() => void` | Callback fired when the disabled DropdownButton is clicked.      |
| className       | `string`        | -            | Space-delimited list of class names to customize DropdownButton. |
| size            | `small, middle` | `middle`     | Hides the DropdownDivider.                                       |
| color           | `white, blue`   | `blue`       | Hides the DropdownDivider.                                       |

## Dropdown Keyboard navigation

#### Tab

Used for a move through the triggers and DropdownItem. TabIndex defines the order of navigation.

#### Up Arrow (is not implemented)

Moves up through the DropdownItem.

#### Down Arrow (is not implemented)

Moves down through the DropdownItem.

#### Right Arrow (is not implemented)

Expands subDropdowns if isOpenOnHover is false on DropdownItem.

#### Right Arrow (is not implemented)

Collapses subDropdowns if isOpenOnHover is false on DropdownItem.

#### Enter or Space

Expand that Dropdown when focus on the trigger. Fired action when focus on DropdownItem.

#### Esc (is not implemented)

Collapses opened Dropdown.
