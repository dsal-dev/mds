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

const TagIcon = (props: SVGProps<SVGSVGElement>) => (
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
      d="M1.22888 1.22885C1.6102 0.847526 2.12739 0.633301 2.66666 0.633301H7.448C7.98719 0.633416 8.50441 0.847689 8.88564 1.22899C8.88562 1.22897 8.88566 1.22902 8.88564 1.22899L14.6899 7.03323C15.1213 7.46738 15.3634 8.05458 15.3634 8.66663C15.3634 9.27869 15.1213 9.86588 14.6899 10.3L14.6883 10.3016L10.3016 14.6883L10.3001 14.6898C9.86591 15.1213 9.27872 15.3634 8.66667 15.3634C8.05461 15.3634 7.46742 15.1213 7.03326 14.6898L7.03169 14.6883L1.2291 8.88568C1.22907 8.88566 1.22912 8.88571 1.2291 8.88568C0.847794 8.50446 0.633446 7.98731 0.633331 7.44812V2.66663C0.633331 2.12736 0.847557 1.61017 1.22888 1.22885ZM2.66666 2.0333C2.49869 2.0333 2.3376 2.10003 2.21883 2.2188C2.10006 2.33757 2.03333 2.49866 2.03333 2.66663V7.44782C2.03333 7.44777 2.03333 7.44787 2.03333 7.44782C2.03341 7.61572 2.10015 7.77688 2.2189 7.89559L8.02007 13.6968C8.01985 13.6965 8.02029 13.697 8.02007 13.6968C8.19187 13.8671 8.42469 13.9634 8.66667 13.9634C8.90862 13.9634 9.14076 13.8678 9.31255 13.6975C9.31231 13.6977 9.31279 13.6972 9.31255 13.6975L13.6968 9.31323C13.6966 9.31347 13.697 9.31299 13.6968 9.31323C13.8671 9.14144 13.9634 8.90859 13.9634 8.66663C13.9634 8.42465 13.8678 8.19249 13.6974 8.02069C13.6972 8.02047 13.6977 8.02091 13.6974 8.02069L7.89569 2.21894C7.77698 2.1002 7.6159 2.03338 7.448 2.0333C7.44795 2.0333 7.44805 2.0333 7.448 2.0333H2.66666ZM3.96666 4.99997C3.96666 4.42927 4.4293 3.96663 5 3.96663C5.57069 3.96663 6.03333 4.42927 6.03333 4.99997C6.03333 5.57066 5.57069 6.0333 5 6.0333C4.4293 6.0333 3.96666 5.57066 3.96666 4.99997ZM5 5.36663C5.2025 5.36663 5.36666 5.20247 5.36666 4.99997C5.36666 4.79746 5.2025 4.6333 5 4.6333C4.79749 4.6333 4.63333 4.79746 4.63333 4.99997C4.63333 5.20247 4.79749 5.36663 5 5.36663Z"
      fill="currentColor"
    />
  </svg>
);
export default TagIcon;