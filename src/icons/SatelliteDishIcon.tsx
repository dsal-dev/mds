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

const SatelliteDishIcon = (props: SVGProps<SVGSVGElement>) => (
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
      d="M6.63338 2.00005C6.63338 1.61345 6.94678 1.30005 7.33338 1.30005C9.28714 1.30005 11.1609 2.07618 12.5424 3.4577C13.9239 4.83921 14.7 6.71295 14.7 8.66672C14.7 9.05331 14.3866 9.36672 14 9.36672C13.6134 9.36672 13.3 9.05331 13.3 8.66672C13.3 7.08426 12.6714 5.56661 11.5525 4.44765C10.4335 3.32868 8.91584 2.70005 7.33338 2.70005C6.94678 2.70005 6.63338 2.38665 6.63338 2.00005ZM6.63338 4.66672C6.63338 4.28012 6.94678 3.96672 7.33338 3.96672C8.5799 3.96672 9.77536 4.46189 10.6568 5.34331C11.5382 6.22473 12.0334 7.4202 12.0334 8.66672C12.0334 9.05331 11.72 9.36672 11.3334 9.36672C10.9468 9.36672 10.6334 9.05331 10.6334 8.66672C10.6334 7.7915 10.2857 6.95213 9.66683 6.33326C9.04796 5.71439 8.2086 5.36672 7.33338 5.36672C6.94678 5.36672 6.63338 5.05331 6.63338 4.66672ZM2.57723 5.97246C2.7924 5.94472 3.00828 6.01833 3.16169 6.17174L6.00005 9.0101L7.50507 7.50507C7.77844 7.23171 8.22166 7.23171 8.49502 7.50507C8.76839 7.77844 8.76839 8.22166 8.49502 8.49502L6.99 10L9.82836 12.8384C9.98177 12.9918 10.0554 13.2077 10.0276 13.4229C9.9999 13.638 9.87396 13.8282 9.68666 13.9377C8.62303 14.5595 7.38333 14.8113 6.16139 14.6538C4.93944 14.4963 3.80413 13.9384 2.93294 13.0672C2.06174 12.196 1.50378 11.0607 1.34627 9.83871C1.18877 8.61676 1.4406 7.37707 2.0624 6.31344C2.1719 6.12614 2.36205 6.00019 2.57723 5.97246ZM5.50553 10.4955C5.50537 10.4953 5.50522 10.4952 5.50507 10.495C5.50492 10.4949 5.50477 10.4947 5.50462 10.4946L2.89074 7.88069C2.71209 8.45202 2.65732 9.05875 2.73479 9.65973C2.85273 10.5747 3.27053 11.4249 3.92289 12.0772C4.57524 12.7296 5.42537 13.1474 6.34036 13.2653C6.94135 13.3428 7.54808 13.288 8.11941 13.1094L5.50553 10.4955Z"
      fill="currentColor"
    />
  </svg>
);
export default SatelliteDishIcon;