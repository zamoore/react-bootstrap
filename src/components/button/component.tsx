import React, { FunctionComponent, HTMLAttributes } from 'react';

export enum ButtonType {
  Default = 'default',
  Primary = 'primary',
  Danger = 'danger',
}

const BUTTON_TYPE_CLASS_MAP: Record<ButtonType, string[]> = {
  [ButtonType.Default]: ['bg-gray-100'],
  [ButtonType.Primary]: ['bg-blue-600', 'text-white'],
  [ButtonType.Danger]: ['bg-red-600', 'text-white'],
};

export interface ButtonProps extends HTMLAttributes<HTMLButtonElement> {
  buttonType?: ButtonType;
}

const Button: FunctionComponent<ButtonProps> = ({
  children,
  buttonType = ButtonType.Default,
  ...props
}: ButtonProps) => {
  const classNameArr = [
    'rounded',
    'px-3',
    'py-2',
    ...BUTTON_TYPE_CLASS_MAP[buttonType],
  ];

  return (
    <button
      data-testid="button"
      type="button"
      className={classNameArr.join(' ')}
      {...props}
    >
      {children}
    </button>
  );
};

export default Button;
