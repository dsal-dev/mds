// This file is part of MinIO Design System
// Copyright (c) 2024 MinIO, Inc.
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

const MapPinIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 16 16"
    fill="none"
    className={`min-icon`}
    {...props}
  >
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M7.99999 2.03336C6.77116 2.03336 5.59265 2.52152 4.72373 3.39043C3.85481 4.25935 3.36666 5.43786 3.36666 6.66669C3.36666 8.39017 4.53932 10.2198 5.85651 11.7016C6.49869 12.4241 7.14304 13.0284 7.62761 13.4524C7.7666 13.574 7.89203 13.6804 7.99999 13.7702C8.10795 13.6804 8.23339 13.574 8.37237 13.4524C8.85695 13.0284 9.5013 12.4241 10.1435 11.7016C11.4607 10.2198 12.6333 8.39017 12.6333 6.66669C12.6333 5.43786 12.1452 4.25935 11.2763 3.39043C10.4073 2.52152 9.22883 2.03336 7.99999 2.03336ZM7.99999 14.6667C7.57999 15.2267 7.57984 15.2266 7.57967 15.2265L7.57922 15.2261L7.57797 15.2252L7.574 15.2222L7.5604 15.2118L7.5113 15.1741C7.46917 15.1414 7.40865 15.094 7.33235 15.0327C7.17983 14.9101 6.96392 14.7319 6.70571 14.506C6.19028 14.055 5.5013 13.4093 4.81014 12.6317C3.46066 11.1136 1.96666 8.94321 1.96666 6.66669C1.96666 5.06656 2.60231 3.53195 3.73378 2.40048C4.86525 1.26901 6.39985 0.633362 7.99999 0.633362C9.60013 0.633362 11.1347 1.26901 12.2662 2.40048C13.3977 3.53195 14.0333 5.06656 14.0333 6.66669C14.0333 8.94321 12.5393 11.1136 11.1898 12.6317C10.4987 13.4093 9.80971 14.055 9.29428 14.506C9.03607 14.7319 8.82016 14.9101 8.66763 15.0327C8.59134 15.094 8.53082 15.1414 8.48869 15.1741L8.43959 15.2118L8.42598 15.2222L8.42202 15.2252L8.42076 15.2261L8.42032 15.2265C8.42014 15.2266 8.41999 15.2267 7.99999 14.6667ZM7.99999 14.6667L8.41999 15.2267C8.1711 15.4134 7.82888 15.4134 7.57999 15.2267L7.99999 14.6667ZM7.99999 5.36669C7.28202 5.36669 6.69999 5.94872 6.69999 6.66669C6.69999 7.38466 7.28202 7.96669 7.99999 7.96669C8.71796 7.96669 9.29999 7.38466 9.29999 6.66669C9.29999 5.94872 8.71796 5.36669 7.99999 5.36669ZM5.29999 6.66669C5.29999 5.17553 6.50882 3.9667 7.99999 3.9667C9.49116 3.9667 10.7 5.17553 10.7 6.66669C10.7 8.15786 9.49116 9.36669 7.99999 9.36669C6.50882 9.36669 5.29999 8.15786 5.29999 6.66669Z"
      fill="currentColor"
    />
  </svg>
);
export default MapPinIcon;