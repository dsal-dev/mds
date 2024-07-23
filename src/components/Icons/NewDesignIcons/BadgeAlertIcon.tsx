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

const BadgeAlertIcon = (props: SVGProps<SVGSVGElement>) => (
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
      d="M8.00006 2.03654C7.66992 2.03654 7.34511 2.11964 7.05554 2.27819C6.76597 2.43674 6.52098 2.66563 6.34314 2.94377C6.18451 3.19185 5.88758 3.31414 5.60025 3.24972C5.27714 3.17728 4.94098 3.1876 4.62292 3.27971C4.30486 3.37183 4.01521 3.54276 3.78082 3.77665C3.54644 4.01055 3.3749 4.29984 3.28212 4.61771C3.18934 4.93557 3.17832 5.27171 3.25009 5.59497C3.31404 5.88308 3.19044 6.18036 2.94106 6.33818C2.66079 6.51555 2.42993 6.76093 2.26996 7.05148C2.10999 7.34204 2.0261 7.66833 2.0261 8.00001C2.0261 8.33169 2.10999 8.65799 2.26996 8.94854C2.42993 9.2391 2.66079 9.48447 2.94106 9.66185C3.19044 9.81967 3.31404 10.1169 3.25009 10.4051C3.17832 10.7283 3.18934 11.0645 3.28212 11.3823C3.3749 11.7002 3.54644 11.9895 3.78082 12.2234C4.01521 12.4573 4.30486 12.6282 4.62292 12.7203C4.94098 12.8124 5.27714 12.8227 5.60025 12.7503C5.88817 12.6858 6.18564 12.8087 6.34401 13.0576C6.52162 13.3368 6.76681 13.5667 7.05687 13.726C7.34693 13.8852 7.67248 13.9687 8.00339 13.9687C8.33429 13.9687 8.65985 13.8852 8.94991 13.726C9.23997 13.5667 9.48516 13.3368 9.66276 13.0576C9.82085 12.8091 10.1176 12.6862 10.4051 12.75C10.7284 12.8217 11.0645 12.8107 11.3824 12.7179C11.7002 12.6252 11.9895 12.4536 12.2234 12.2192C12.4573 11.9849 12.6282 11.6952 12.7204 11.3771C12.8125 11.0591 12.8228 10.7229 12.7503 10.3998C12.6859 10.1125 12.8082 9.81556 13.0563 9.65693C13.3344 9.47909 13.5633 9.23409 13.7219 8.94453C13.8804 8.65496 13.9635 8.33014 13.9635 8.00001C13.9635 7.66988 13.8804 7.34506 13.7219 7.0555C13.5633 6.76593 13.3344 6.52094 13.0563 6.3431C12.8081 6.18438 12.6858 5.88724 12.7504 5.5998C12.8232 5.2762 12.8129 4.93945 12.7206 4.62089C12.6282 4.30233 12.4568 4.01229 12.2223 3.77776C11.9878 3.54322 11.6977 3.37182 11.3792 3.27948C11.0606 3.18714 10.7239 3.17688 10.4003 3.24963C10.1128 3.31426 9.81568 3.19198 9.65697 2.94377C9.47913 2.66563 9.23414 2.43674 8.94457 2.27819C8.65501 2.11964 8.33019 2.03654 8.00006 2.03654ZM6.38317 1.05022C6.87887 0.7788 7.43492 0.636536 8.00006 0.636536C8.56519 0.636536 9.12124 0.7788 9.61694 1.05022C9.97489 1.24621 10.2931 1.50499 10.5569 1.81297C10.9636 1.77965 11.3744 1.82048 11.7689 1.93483C12.3143 2.0929 12.8108 2.38632 13.2123 2.78781C13.6137 3.18929 13.9072 3.6858 14.0652 4.23114C14.1796 4.62564 14.2204 5.03642 14.1871 5.4432C14.4951 5.70702 14.7539 6.02518 14.9499 6.38313C15.2213 6.87883 15.3635 7.43487 15.3635 8.00001C15.3635 8.56515 15.2213 9.1212 14.9499 9.61689C14.7538 9.97493 14.495 10.2932 14.1869 10.557C14.2199 10.963 14.1791 11.3729 14.0651 11.7666C13.9074 12.3111 13.6148 12.8069 13.2144 13.2082C12.814 13.6094 12.3188 13.903 11.7746 14.0619C11.3812 14.1767 10.9714 14.2184 10.5654 14.1862C10.3014 14.4958 9.98263 14.7561 9.6237 14.9532C9.12716 15.2258 8.56985 15.3687 8.00339 15.3687C7.43693 15.3687 6.87962 15.2258 6.38307 14.9532C6.02442 14.7562 5.70585 14.4963 5.442 14.1869C5.03639 14.2198 4.62684 14.179 4.23347 14.0651C3.68899 13.9074 3.19315 13.6148 2.79191 13.2144C2.39067 12.814 2.09703 12.3187 1.9382 11.7746C1.82346 11.3815 1.78177 10.9721 1.81378 10.5664C1.50288 10.3025 1.24151 9.98332 1.04355 9.62377C0.769702 9.12638 0.626099 8.56781 0.626099 8.00001C0.626099 7.43222 0.769702 6.87365 1.04355 6.37626C1.24151 6.0167 1.50288 5.69757 1.81378 5.4336C1.78177 5.02796 1.82346 4.61853 1.9382 4.22544C2.09703 3.6813 2.39067 3.18607 2.79191 2.78567C3.19315 2.38527 3.68899 2.09266 4.23347 1.93497C4.62718 1.82095 5.0371 1.78014 5.44306 1.81317C5.70691 1.50511 6.02514 1.24625 6.38317 1.05022ZM8.00006 4.63335C8.38665 4.63335 8.70006 4.94675 8.70006 5.33335V8.00001C8.70006 8.38661 8.38665 8.70001 8.00006 8.70001C7.61346 8.70001 7.30006 8.38661 7.30006 8.00001V5.33335C7.30006 4.94675 7.61346 4.63335 8.00006 4.63335ZM7.30006 10.6667C7.30006 10.2801 7.61346 9.96668 8.00006 9.96668H8.00672C8.39332 9.96668 8.70672 10.2801 8.70672 10.6667C8.70672 11.0533 8.39332 11.3667 8.00672 11.3667H8.00006C7.61346 11.3667 7.30006 11.0533 7.30006 10.6667Z"
      fill="currentColor"
    />
  </svg>
);
export default BadgeAlertIcon;