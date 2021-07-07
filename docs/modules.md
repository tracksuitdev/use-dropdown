[use-dropdown](README.md) / Exports

# use-dropdown

## Table of contents

### Type aliases

- [UseDropdown](modules.md#usedropdown)
- [UseDropdownProps](modules.md#usedropdownprops)

### Functions

- [useDropdown](modules.md#usedropdown)

## Type aliases

### UseDropdown

Ƭ **UseDropdown**<`T`\>: `Object`

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | extends `HTMLElement``HTMLUListElement` |

#### Type declaration

| Name | Type | Description |
| :------ | :------ | :------ |
| `close` | () => `void` | - |
| `dropdownRef` | `RefObject`<`T`\> | Ref for dropdown element |
| `isOpen` | `boolean` | Dropdown state |
| `open` | () => `void` | - |

#### Defined in

[index.ts:22](https://github.com/tracksuitdev/use-dropdown/blob/a21747a/src/index.tsx#L22)

___

### UseDropdownProps

Ƭ **UseDropdownProps**: `Object`

#### Type declaration

| Name | Type | Description |
| :------ | :------ | :------ |
| `additionalRefs?` | `RefObject`<`HTMLElement`\>[] | These refs will be used when determining what constitutes a click outside of dropdown. |
| `disabled?` | `boolean` | If true, {@link UseDropdown#open open} and {@link UseDropdown#close close} will do nothing |
| `onClose?` | () => `void` | - |
| `onOpen?` | () => `void` | - |

#### Defined in

[index.ts:3](https://github.com/tracksuitdev/use-dropdown/blob/a21747a/src/index.tsx#L3)

## Functions

### useDropdown

▸ **useDropdown**<`T`\>(`__namedParameters?`): [`UseDropdown`](modules.md#usedropdown)<`T`\>

Hook for managing dropdown state.

Adds window listener that will {@link UseDropdown#close close} dropdown on clicks outside of
{@link UseDropdown#dropdownRef dropdownRef} and {@link UseDropdownProps#additionalRefs additional refs}

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | extends `HTMLElement``HTMLUListElement` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `__namedParameters` | [`UseDropdownProps`](modules.md#usedropdownprops) |

#### Returns

[`UseDropdown`](modules.md#usedropdown)<`T`\>

#### Defined in

[index.ts:47](https://github.com/tracksuitdev/use-dropdown/blob/a21747a/src/index.tsx#L47)
