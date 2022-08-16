import React from 'react';

export interface FlatButtonProps {
  color?: string;
  text: string;
}

export const FlatButton = ({ color, text }: FlatButtonProps) => {
  return (
    <div className={`p-3 bg-[${color || '#920'}] text-green-500`}>{text}</div>
  );
};
