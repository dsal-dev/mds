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

const CloudOffIcon = (props: SVGProps<SVGSVGElement>) => (
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
      d="M0.838352 0.838357C1.11172 0.56499 1.55493 0.56499 1.8283 0.838357L4.33808 3.34814C4.34586 3.35556 4.35348 3.36318 4.36094 3.37099L13.0236 12.0337C13.0303 12.0401 13.0368 12.0466 13.0432 12.0532L15.1616 14.1717C15.435 14.4451 15.435 14.8883 15.1616 15.1616C14.8883 15.435 14.4451 15.435 14.1717 15.1616L12.3191 13.3091C12.1039 13.3475 11.8854 13.3668 11.6662 13.3667H6.00029C4.79748 13.3671 3.6291 12.9635 2.68317 12.2205C1.73716 11.4775 1.0682 10.4382 0.783657 9.26947C0.499113 8.10069 0.615482 6.87021 1.11409 5.77551C1.48255 4.96655 2.04394 4.26641 2.74311 3.73306L3.74519 4.73515C3.15715 5.1409 2.68687 5.69998 2.38816 6.35581C2.01962 7.16494 1.93361 8.07443 2.14392 8.9383C2.35424 9.80217 2.84869 10.5703 3.54791 11.1195C4.24714 11.6687 5.11059 11.967 5.9997 11.9667L10.9767 11.9667L3.74519 4.73515M2.74311 3.73306L0.838352 1.82831C0.564985 1.55494 0.564985 1.11172 0.838352 0.838357M5.97389 3.27962C6.02933 2.89702 6.38443 2.6318 6.76703 2.68723C7.78104 2.83415 8.73189 3.26799 9.50742 3.93758C10.1488 4.49133 10.6481 5.1872 10.9675 5.96666H11.6665C11.6665 5.96666 11.6666 5.96666 11.6665 5.96666C12.2963 5.96657 12.9157 6.1272 13.466 6.43335C14.0164 6.73953 14.4795 7.18111 14.8114 7.71629C15.1434 8.25147 15.3333 8.86252 15.3631 9.4916C15.3929 10.1207 15.2616 10.7469 14.9817 11.3111C14.8099 11.6574 14.3899 11.7989 14.0435 11.6271C13.6972 11.4552 13.5558 11.0352 13.7276 10.6889C13.9016 10.3382 13.9832 9.94889 13.9647 9.55784C13.9461 9.16679 13.8281 8.78695 13.6217 8.45427C13.4154 8.12159 13.1275 7.84709 12.7854 7.65677C12.4433 7.46644 12.0583 7.36659 11.6668 7.36666H10.4733C10.1639 7.36666 9.89116 7.16349 9.8026 6.86699C9.5858 6.1411 9.16592 5.49235 8.5925 4.99726C8.01908 4.50217 7.31603 4.18139 6.56628 4.07276C6.18368 4.01733 5.91846 3.66223 5.97389 3.27962Z"
      fill="currentColor"
    />
  </svg>
);
export default CloudOffIcon;