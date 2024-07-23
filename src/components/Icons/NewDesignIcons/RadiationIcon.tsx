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

const RadiationIcon = (props: SVGProps<SVGSVGElement>) => (
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
      d="M3.71558 1.9717C4.43256 1.43623 5.27155 1.8921 5.60023 2.43991C5.60423 2.44657 5.60812 2.45331 5.6119 2.4601C5.94341 3.05682 6.54137 4.11988 7.27245 5.38266C7.36919 5.54976 7.39262 5.74939 7.33719 5.93434C7.28176 6.11929 7.1524 6.27314 6.9797 6.35949C6.43263 6.63302 6.03332 7.24709 6.03332 8.00005C6.03332 8.38665 5.71992 8.70005 5.33332 8.70005H1.99999C1.60796 8.70005 1.24838 8.53839 0.996681 8.28669C0.753884 8.0439 0.568545 7.66594 0.639819 7.23495C0.868527 5.1017 2.04489 3.20724 3.71558 1.9717ZM4.41886 3.19537C4.70607 3.71168 5.16933 4.53536 5.73556 5.52026C5.21442 5.97137 4.85109 6.5973 4.70495 7.30005H2.0415C2.24025 5.67421 3.1294 4.19973 4.41886 3.19537ZM12.3414 2.03125C14.0452 3.22023 15.1433 5.13855 15.3629 7.26136C15.3654 7.28529 15.3667 7.30933 15.3667 7.33339C15.3667 7.69246 15.2439 8.04608 14.9783 8.31169C14.7127 8.57731 14.3591 8.70005 14 8.70005H10.6667C10.2801 8.70005 9.96666 8.38665 9.96666 8.00005C9.96666 7.2562 9.57184 6.61625 8.98061 6.27136C8.8181 6.17657 8.7006 6.02035 8.65458 5.83793C8.60857 5.6555 8.63792 5.46224 8.73602 5.3017C9.02497 4.82888 9.30106 4.363 9.55439 3.93552C9.90632 3.34165 10.2143 2.82189 10.4519 2.4606C10.6377 2.07887 10.9906 1.87808 11.3127 1.81365C11.644 1.74739 12.0304 1.80381 12.3414 2.03125ZM11.6183 3.23484C11.3976 3.5705 11.1233 4.03389 10.7933 4.59132C10.6298 4.86753 10.4527 5.16684 10.2616 5.48514C10.7786 5.95678 11.1477 6.58684 11.2954 7.30005H13.9586C13.7582 5.63904 12.902 4.1647 11.6183 3.23484ZM7.29999 8.00005C7.29999 7.61345 7.61339 7.30005 7.99999 7.30005H8.00666C8.39325 7.30005 8.70666 7.61345 8.70666 8.00005C8.70666 8.38665 8.39325 8.70005 8.00666 8.70005H7.99999C7.61339 8.70005 7.29999 8.38665 7.29999 8.00005ZM6.06936 9.96837C6.26804 9.64326 6.69025 9.53676 7.01936 9.72874C7.60141 10.0683 8.39857 10.0683 8.98061 9.72874C9.30972 9.53676 9.73194 9.64326 9.93062 9.96837C10.6677 11.1745 11.2708 12.2462 11.6072 12.8516C12.0014 13.5236 11.7522 14.3996 11.0127 14.7087C9.10112 15.5861 6.89885 15.5861 4.98728 14.7087C4.24783 14.3996 3.99858 13.5236 4.39276 12.8517C4.72917 12.2463 5.33226 11.1745 6.06936 9.96837ZM6.94837 11.22C6.39173 12.1492 5.93517 12.9591 5.64987 13.4717C7.14601 14.1317 8.85396 14.1317 10.3501 13.4717C10.0648 12.9591 9.60824 12.1492 9.05161 11.22C8.37409 11.4378 7.62589 11.4378 6.94837 11.22Z"
      fill="currentColor"
    />
  </svg>
);
export default RadiationIcon;