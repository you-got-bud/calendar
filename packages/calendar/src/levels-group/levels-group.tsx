import React, { forwardRef } from 'react';
import { calendar, Size } from '../styles';

export interface LevelsGroupProps
  extends React.DetailedHTMLProps<
    React.HTMLAttributes<HTMLDivElement>,
    HTMLDivElement
  > {
  size?: Size;
}

export const LevelsGroup = forwardRef<HTMLDivElement, LevelsGroupProps>(
  (props, ref) => {
    const { className, style, ...others } = props;
    const { levelsGroup } = calendar({ size: props.size });

    return (
      <div
        className={levelsGroup({ class: className })}
        style={style}
        {...others}
      />
    );
  },
);

LevelsGroup.displayName = 'LevelsGroup';
