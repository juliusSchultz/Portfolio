export default {
  /**
   * The text displayed at the button
   */
  label: {
    type: String,
    default: null,
  },
  /**
   * The icon displayed at the button
   */
  icon: {
    type: String,
    default: null,
  },
  /**
   * Prepends the icon instead of appending it
   */
  prependIcon: {
    type: Boolean,
    default: false,
  },
  /**
   * Gap between icon and text
   */
  gap: {
    type: String,
    default: 'normal',
    validator: (val) => ['normal', 'narrow'].includes(val),
  },
  /**
   * The button variant
   * @values primary, secondary, inverted
   */
  variant: {
    type: String,
    default: 'primary',
    validator: (val) => ['primary', 'secondary', 'inverted'].includes(val),
  },
  /**
   * Defines the button shape
   * @values filled, outlined, plain
   */
  shape: {
    type: String,
    default: 'filled',
    validator: (val) => ['filled', 'outlined', 'plain'].includes(val),
  },
  /**
   * The size of the component
   * @values xsmall, small, normal
   */
  size: {
    type: String,
    default: 'normal',
    validator: (val) => ['xsmall', 'small', 'normal'].includes(val),
  },
  /**
   * Set if the button is clickable
   */
  disabled: {
    type: Boolean,
    default: false,
  },
  /**
   * Defines the button shape cutaway in a side e.g. for slider controls
   * @values left, right
   */
  cutaway: {
    type: String,
    default: 'none',
    validator: (val) => ['none', 'left', 'right', 'bottom'].includes(val),
  },
  /**
   * Url of button
   */
  to: {
    type: String,
    default: '',
  },
  /**
   * Target can be defined for button link
   * @values _self, _blank
   */
  target: {
    type: String,
    default: '_self',
    validator: (val) => ['_self', '_blank'].includes(val),
  },
  /**
   * Target can be defined for button link
   * @values _self, _blank
   */
  allowLabelLineBreak: {
    type: Boolean,
    default: false,
  },
  /**
   * Set if the text should be centered
   */
  textCenter: {
    type: Boolean,
    default: false,
  },
  /**
   * Prevent automatic full width on mobile
   */
  preventFull: {
    type: Boolean,
    default: false,
  },
}
