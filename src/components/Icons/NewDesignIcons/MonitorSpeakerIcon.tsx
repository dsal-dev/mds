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

const MonitorSpeakerIcon = (props: SVGProps<SVGSVGElement>) => (
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
      d="M9.3333 3.36667C8.98352 3.36667 8.69997 3.65023 8.69997 4.00001V12C8.69997 12.3498 8.98352 12.6333 9.3333 12.6333H13.3333C13.6831 12.6333 13.9666 12.3498 13.9666 12V4.00001C13.9666 3.65023 13.6831 3.36667 13.3333 3.36667H9.3333ZM7.29997 4.00001C7.29997 2.87703 8.21032 1.96667 9.3333 1.96667H13.3333C14.4563 1.96667 15.3666 2.87703 15.3666 4.00001V12C15.3666 13.123 14.4563 14.0333 13.3333 14.0333H9.3333C8.21032 14.0333 7.29997 13.123 7.29997 12V4.00001ZM1.22885 3.89556C1.61017 3.51423 2.12736 3.30001 2.66663 3.30001H5.3333C5.7199 3.30001 6.0333 3.61341 6.0333 4.00001C6.0333 4.38661 5.7199 4.70001 5.3333 4.70001H2.66663C2.49866 4.70001 2.33757 4.76673 2.2188 4.88551C2.10003 5.00428 2.0333 5.16537 2.0333 5.33334V9.33334C2.0333 9.50131 2.10003 9.6624 2.2188 9.78118C2.33757 9.89995 2.49866 9.96667 2.66663 9.96667H5.3333C5.7199 9.96667 6.0333 10.2801 6.0333 10.6667C6.0333 11.0533 5.7199 11.3667 5.3333 11.3667H2.66663C2.12736 11.3667 1.61017 11.1524 1.22885 10.7711C0.847526 10.3898 0.633301 9.87261 0.633301 9.33334V5.33334C0.633301 4.79407 0.847526 4.27688 1.22885 3.89556ZM10.6333 6.00001C10.6333 5.61341 10.9467 5.30001 11.3333 5.30001H11.34C11.7266 5.30001 12.04 5.61341 12.04 6.00001C12.04 6.38661 11.7266 6.70001 11.34 6.70001H11.3333C10.9467 6.70001 10.6333 6.38661 10.6333 6.00001ZM11.3333 10.0333C11.3517 10.0333 11.3666 10.0184 11.3666 10C11.3666 9.9816 11.3517 9.96667 11.3333 9.96667C11.3149 9.96667 11.3 9.9816 11.3 10C11.3 10.0184 11.3149 10.0333 11.3333 10.0333ZM9.96663 10C9.96663 9.24522 10.5785 8.63334 11.3333 8.63334C12.0881 8.63334 12.7 9.24522 12.7 10C12.7 10.7548 12.0881 11.3667 11.3333 11.3667C10.5785 11.3667 9.96663 10.7548 9.96663 10ZM2.96663 13.3333C2.96663 12.9467 3.28003 12.6333 3.66663 12.6333H5.3333C5.7199 12.6333 6.0333 12.9467 6.0333 13.3333C6.0333 13.7199 5.7199 14.0333 5.3333 14.0333H3.66663C3.28003 14.0333 2.96663 13.7199 2.96663 13.3333Z"
      fill="currentColor"
    />
  </svg>
);
export default MonitorSpeakerIcon;