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

const ListOrderedIcon = (props: SVGProps<SVGSVGElement>) => (
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
      d="M1.96668 3.99999C1.96668 3.61339 2.28008 3.29999 2.66668 3.29999H3.33334C3.71994 3.29999 4.03334 3.61339 4.03334 3.99999V5.96743C4.40446 5.98483 4.70001 6.29123 4.70001 6.66665C4.70001 7.05325 4.38661 7.36665 4.00001 7.36665H2.66668C2.28008 7.36665 1.96668 7.05325 1.96668 6.66665C1.96668 6.29123 2.26222 5.98483 2.63334 5.96743V4.69921C2.26222 4.68181 1.96668 4.37541 1.96668 3.99999ZM5.96668 3.99999C5.96668 3.61339 6.28008 3.29999 6.66668 3.29999H14C14.3866 3.29999 14.7 3.61339 14.7 3.99999C14.7 4.38659 14.3866 4.69999 14 4.69999H6.66668C6.28008 4.69999 5.96668 4.38659 5.96668 3.99999ZM5.96668 7.99999C5.96668 7.61339 6.28008 7.29999 6.66668 7.29999H14C14.3866 7.29999 14.7 7.61339 14.7 7.99999C14.7 8.38659 14.3866 8.69999 14 8.69999H6.66668C6.28008 8.69999 5.96668 8.38659 5.96668 7.99999ZM3.89639 8.66556C4.39016 8.91244 4.70001 9.409 4.70001 9.99999C4.70001 10.3951 4.50684 10.7131 4.35168 10.92C4.25125 11.0539 4.13346 11.1835 4.02078 11.3003C4.39777 11.3113 4.70001 11.6203 4.70001 12C4.70001 12.3866 4.38661 12.7 4.00001 12.7H2.66668C2.28008 12.7 1.96668 12.3866 1.96668 12C1.96668 11.6049 2.15985 11.2869 2.31501 11.08C2.4703 10.8729 2.66714 10.6762 2.82237 10.521C2.82775 10.5156 2.83309 10.5103 2.83837 10.505C3.01418 10.3292 3.14236 10.1991 3.23168 10.08C3.27318 10.0246 3.29145 9.9906 3.29886 9.97498C3.296 9.94576 3.28868 9.93362 3.28749 9.93166C3.28569 9.92871 3.28229 9.92375 3.27029 9.91775C3.24742 9.90632 3.14812 9.87522 2.97973 9.95942C2.63394 10.1323 2.21347 9.99216 2.04058 9.64637C1.86768 9.30059 2.00784 8.88011 2.35363 8.70722C2.8519 8.45809 3.41927 8.42699 3.89639 8.66556ZM5.96668 12C5.96668 11.6134 6.28008 11.3 6.66668 11.3H14C14.3866 11.3 14.7 11.6134 14.7 12C14.7 12.3866 14.3866 12.7 14 12.7H6.66668C6.28008 12.7 5.96668 12.3866 5.96668 12Z"
      fill="currentColor"
    />
  </svg>
);
export default ListOrderedIcon;