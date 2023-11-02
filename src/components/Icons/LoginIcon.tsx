// This file is part of MinIO Design System
// Copyright (c) 2023 MinIO, Inc.
//
// This program is free software: you can redistribute it and/or modify
// it under the terms of the GNU Affero General Public License as published by
// the Free Software Foundation, either version 3 of the License, or
// (at your option) any later version.
//
// This program is distributed in the hope that it will be useful,
// but WITHOUT ANY WARRANTY; without even the implied warranty of
// MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
// GNU Affero General Public License for more details.
//
// You should have received a copy of the GNU Affero General Public License
// along with this program.  If not, see <http://www.gnu.org/licenses/>.

import * as React from "react";
import { SVGProps } from "react";

const LoginIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    className={`min-icon`}
    fill={"currentcolor"}
    viewBox="0 0 256 256"
    {...props}
  >
    <g>
      <path
        d="M256,239.6c0,9.1-7.4,16.4-16.5,16.4H104.1c-21.8,0-21.8-32.8,0-32.8h118.8V32.8H104.1c-21.8,0-21.8-32.8,0-32.8h135.4
			c9.1,0,16.5,7.3,16.5,16.4V239.6z M16.3,111.6h138.2L135.8,93c-15.4-15.3,8-38.5,23.4-23.2l46.9,46.5c6.5,6.3,6.6,16.6,0.3,23.1
			c-0.1,0.1-0.2,0.2-0.3,0.3l-46.9,46.5c-15.4,15.3-38.8-7.9-23.4-23.2l18.7-18.6H16.3C5.4,144.4,0,136.2,0,128
			S5.4,111.6,16.3,111.6L16.3,111.6z"
      />
      <path
        d="M256.5,16.4v223.2c0,9.4-7.7,16.9-17,16.9H104.1c-4.8,0.2-9.4-1.8-12.6-5.3c-1.4-1.6-2.5-3.4-3.2-5.4
			c-0.7-2-1.1-4.1-1-6.2c0-2.1,0.3-4.2,1-6.2c0.7-2,1.8-3.8,3.2-5.4c3.2-3.5,7.8-5.5,12.6-5.3h118.3V33.3H104.1
			c-4.8,0.2-9.4-1.8-12.6-5.3c-1.4-1.6-2.5-3.4-3.2-5.4c-0.7-2-1.1-4.1-1-6.2c0-2.1,0.3-4.2,1-6.2c0.7-2,1.8-3.8,3.2-5.4
			c3.2-3.5,7.8-5.5,12.6-5.3h135.4c2.3,0,4.5,0.4,6.6,1.3c2,0.8,3.9,2.1,5.4,3.6c1.6,1.5,2.8,3.4,3.7,5.4
			C256.1,11.9,256.5,14.1,256.5,16.4L256.5,16.4z M88.3,239.6c0,2,0.3,4,1,5.9c0.6,1.9,1.7,3.6,3,5.1c3,3.3,7.4,5.1,11.9,5h135.4
			c8.8,0,16-7.1,16-15.9V16.4c0-8.8-7.2-15.9-16-15.9H104.1c-4.5-0.2-8.8,1.6-11.9,5c-1.3,1.5-2.3,3.2-3,5.1c-0.7,1.9-1,3.9-1,5.9
			c0,2,0.3,4,1,5.9c0.6,1.9,1.7,3.6,3,5.1c3,3.3,7.4,5.1,11.9,5h119.3v191.4H104.1c-4.5-0.2-8.8,1.6-11.9,5c-1.3,1.5-2.3,3.2-3,5.1
			C88.6,235.6,88.3,237.6,88.3,239.6L88.3,239.6z M-0.5,128c0-2.1,0.3-4.2,1-6.2c0.7-2,1.8-3.8,3.2-5.4c3.2-3.5,7.8-5.5,12.6-5.3
			h137l-17.9-17.7c-3.2-3-5.1-7.2-5.2-11.6c0-3.5,1.2-6.9,3.3-9.7c2-2.8,4.8-5.1,8.1-6.5c2.8-1.2,5.9-1.6,9-1.1
			c3.4,0.7,6.6,2.4,9,4.9l46.9,46.5c3.2,3.2,5.1,7.5,5.1,12c0,2.2-0.4,4.4-1.3,6.5c-0.9,2.1-2.2,4-3.8,5.6l-46.9,46.5
			c-2.4,2.5-5.6,4.2-9,4.9c-3,0.5-6.1,0.2-9-1c-3.2-1.4-6-3.6-8.1-6.5c-2.1-2.8-3.2-6.2-3.3-9.7c0.1-4.4,1.9-8.6,5.2-11.6l17.9-17.7
			h-137c-4.8,0.2-9.4-1.8-12.6-5.3c-1.4-1.6-2.5-3.4-3.2-5.4C-0.1,132.2-0.5,130.1-0.5,128L-0.5,128z M155.7,112.1H16.3
			c-4.5-0.2-8.8,1.6-11.9,5c-1.3,1.5-2.3,3.2-3,5.1c-0.7,1.9-1,3.9-1,5.9c0,2,0.3,4,1,5.9c0.6,1.9,1.7,3.6,3,5.1
			c3,3.3,7.4,5.1,11.9,5h139.4l-0.9,0.9l-18.7,18.6c-3,2.8-4.8,6.7-4.9,10.9c0,3.3,1.1,6.5,3.1,9.1c1.9,2.7,4.6,4.8,7.6,6.1
			c2.6,1.1,5.6,1.5,8.4,1c3.2-0.6,6.2-2.2,8.5-4.6l46.9-46.5c1.5-1.5,2.7-3.3,3.6-5.3c0.8-1.9,1.2-4,1.2-6.1c0-4.3-1.7-8.3-4.8-11.3
			l-46.9-46.5c-2.3-2.4-5.2-4-8.5-4.6c-2.8-0.5-5.8-0.1-8.4,1c-3.1,1.3-5.7,3.4-7.6,6.1c-2,2.6-3,5.8-3.1,9.1
			c0.1,4.1,1.8,8.1,4.9,10.9L155.7,112.1z"
      />
    </g>
  </svg>
);

export default LoginIcon;