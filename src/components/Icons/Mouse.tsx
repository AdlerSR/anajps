import * as React from 'react';
import { SVGProps } from 'react';

const Mouse = (props: SVGProps<SVGSVGElement>) => (
  <svg
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      d="M12.0012 8.54448V10.6403M12 20C8.68629 20 6 17.3137 6 14V10C6 6.68629 8.68629 4 12 4C15.3137 4 18 6.68629 18 10V14C18 17.3137 15.3137 20 12 20Z"
      stroke={props.stroke || 'white'}
      strokeWidth="1.5"
      strokeLinecap="round"
    />
  </svg>
);

export default Mouse;
