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

const BeanOffIcon = (props: SVGProps<SVGSVGElement>) => (
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
      d="M11.4923 2.13677C10.7838 1.95371 10.0346 2.01129 9.3625 2.30046C8.84065 2.52497 8.38822 2.87919 8.0462 3.32601C8.49145 3.66709 8.84819 4.11642 9.07912 4.63667C9.23597 4.99002 9.07667 5.40362 8.72332 5.56047C8.36996 5.71731 7.95637 5.55801 7.79952 5.20466C7.60086 4.7571 7.24314 4.39921 6.79568 4.20033C6.4424 4.04331 6.2833 3.62963 6.44032 3.27636C6.45952 3.23317 6.48254 3.19289 6.50883 3.15574C6.52115 3.12203 6.53623 3.08884 6.55415 3.05645C7.05867 2.14459 7.85193 1.42627 8.80922 1.01442C9.76651 0.602578 10.8335 0.520568 11.8425 0.781289C12.8515 1.04201 13.7452 1.63067 14.3831 2.45472C15.021 3.2787 15.367 4.2913 15.3667 5.33333M0.838346 0.838357C1.11171 0.56499 1.55493 0.56499 1.8283 0.838357L6.49466 5.50472L8.38007 7.39013L15.1616 14.1717C15.435 14.4451 15.435 14.8883 15.1616 15.1616C14.8883 15.435 14.445 15.435 14.1717 15.1616L11.9165 12.9065C11.1014 13.6163 10.1754 14.1904 9.17386 14.6052C7.95603 15.1095 6.65057 15.3683 5.33244 15.3667L5.33332 14.6668L5.33386 15.3667C5.33338 15.3667 5.33291 15.3667 5.33244 15.3667C4.18155 15.3672 3.07045 14.9454 2.2098 14.1813C1.34879 13.4169 0.798345 12.363 0.662896 11.2196C0.527446 10.0762 0.81642 8.92284 1.47499 7.97838C2.13355 7.03393 3.11589 6.36408 4.23562 6.09591C4.48237 6.03682 4.70393 5.96994 4.89898 5.88894L5.93861 6.92857C5.5184 7.18392 5.06228 7.33226 4.65363 7.43488C4.60842 7.39247 4.56529 7.34802 4.52439 7.30166C4.52439 7.30166 4.52439 7.30167 4.52439 7.30166C4.39177 7.15137 4.28243 6.98115 4.20072 6.7966C4.04421 6.4431 3.63076 6.28342 3.27726 6.43993C2.92376 6.59644 2.76407 7.00989 2.92059 7.36339C3.0284 7.60691 3.16432 7.83586 3.32495 8.04584C3.05681 8.251 2.81961 8.49771 2.62337 8.77915C2.16097 9.44227 1.95807 10.2521 2.05317 11.0549C2.14828 11.8577 2.53476 12.5977 3.1393 13.1344C3.74383 13.6711 4.52436 13.9673 5.33279 13.9667H5.3342C6.46791 13.9681 7.59074 13.7455 8.63818 13.3117C9.46969 12.9674 10.2407 12.4953 10.9238 11.9138L7.83344 8.8234C7.57479 8.99148 7.29333 9.12382 6.99659 9.21588C6.47426 9.37793 5.92032 9.41029 5.38267 9.31017C4.84502 9.21005 4.33986 8.98046 3.91087 8.64126C3.69079 8.46724 3.49416 8.26706 3.32495 8.04584C3.6886 7.7676 4.10916 7.56579 4.56169 7.45741C4.59203 7.45015 4.6227 7.44264 4.65363 7.43488C4.69386 7.47261 4.73575 7.50872 4.77921 7.54308C5.02981 7.74123 5.3249 7.87535 5.63897 7.93383C5.95304 7.99232 6.27663 7.97341 6.58176 7.87875C6.65787 7.85514 6.73226 7.82699 6.80456 7.79452L5.93861 6.92857M4.89898 5.88894L0.838346 1.82831C0.564979 1.55494 0.564979 1.11172 0.838346 0.838357M11.4923 2.13677C12.2007 2.31983 12.8282 2.73314 13.2761 3.31173L11.4923 2.13677ZM13.2761 3.31173C13.724 3.89032 13.9669 4.60137 13.9667 5.33307L13.2761 3.31173ZM13.9667 5.33307C13.9667 6.82099 13.5905 8.21961 12.9292 9.43981L13.9667 5.33307ZM15.3667 5.33333C15.3666 7.05997 14.9295 8.68712 14.1601 10.1068C13.9759 10.4467 13.551 10.573 13.2111 10.3888C12.8712 10.2046 12.745 9.77971 12.9292 9.43981"
      fill="currentColor"
    />
  </svg>
);
export default BeanOffIcon;