# react-haptic-button 

[![CircleCI](https://circleci.com/gh/ayushya/react-haptic-button.svg?style=shield)](https://circleci.com/gh/ayushya/react-haptic-button)

A React Button with Life (Haptic Feedback)


Enhance your User Experience with Haptic Feedback when you click the Button.*

*Currently available only on Android Devices. IOS is not supported. Check Browser Compatibility for more.

## Features

- Provides Haptic Feedback on supported devices
- Backwards compatible on unsupported devices
- Fully Customisable, Extend/Build to Suit
- Support Styles
- Support Classname

## Installation

```sh
yarn add react-haptic-button
```

## Usage

```js
  import HapticButton from 'react-haptic-button';

  <HapticButton
    isHapticFeedbackEnabled={true}
    hapticFeedbackDuration={100}
    className="my-button-class"
    onClick={(e) => {/* Your Click Handler */}}
    type={'button'}
    style={{
      padding: '8px'
    }}
  >
  Confirm
  </HapticButton>
```

## Props

props                     | type                 | default value | description
--------------------------|----------------------|---------------|------------
`isHapticFeedbackEnabled` | `boolean`            | true          | Enables/Disables the Haptic Feedback (Optional)
`hapticFeedbackDuration`  | `number`             | 10            | Haptic Feedback Duration in ms (Optional)

All the other props passed to HapticButton are applied to the `<button>` internally.


## Browser Compatibility

Haptic Feedback is available on Android Devices.

![Browser Compatibility](https://user-images.githubusercontent.com/7705367/82729953-aec34f00-9d19-11ea-9917-de78022e5ba9.png)
