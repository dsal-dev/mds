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

const EyeIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 16 16"
    fill="none"
    className={`min-icon`}
    {...props}
  >
    <path
      d="M1.33301 8.00004L0.689606 7.7243C0.614142 7.90038 0.614142 8.0997 0.689606 8.27578L1.33301 8.00004ZM14.6663 8.00004L15.3097 8.27578C15.3852 8.0997 15.3852 7.90038 15.3097 7.7243L14.6663 8.00004ZM1.33301 8.00004C1.97641 8.27578 1.9763 8.27603 1.9762 8.27626C1.97618 8.27632 1.97609 8.27653 1.97604 8.27664C1.97595 8.27685 1.97589 8.27699 1.97586 8.27707C1.97579 8.27722 1.97585 8.27709 1.97602 8.2767C1.97637 8.2759 1.97719 8.27402 1.97849 8.27109C1.9811 8.26522 1.98563 8.25515 1.99209 8.24116C2.00502 8.21318 2.02566 8.16957 2.05416 8.11257C2.11121 7.99846 2.19943 7.83134 2.31993 7.62891C2.56171 7.22273 2.92903 6.68177 3.4293 6.14302C4.43025 5.06508 5.92404 4.03337 7.99967 4.03337V2.63337C5.40864 2.63337 3.5691 3.935 2.40339 5.19039C1.82032 5.81831 1.39598 6.44402 1.11692 6.91284C0.976997 7.1479 0.872512 7.34537 0.801961 7.48647C0.766659 7.55707 0.739774 7.61373 0.721125 7.6541C0.711798 7.67429 0.704524 7.69043 0.69928 7.70222C0.696658 7.70812 0.694543 7.71293 0.692932 7.71662C0.692126 7.71847 0.691446 7.72003 0.690892 7.72131C0.690615 7.72195 0.69037 7.72252 0.690155 7.72302C0.690048 7.72327 0.689911 7.72359 0.689857 7.72371C0.689728 7.72401 0.689606 7.7243 1.33301 8.00004ZM7.99967 4.03337C10.0753 4.03337 11.5691 5.06508 12.5701 6.14302C13.0703 6.68177 13.4376 7.22273 13.6794 7.62891C13.7999 7.83134 13.8881 7.99846 13.9452 8.11257C13.9737 8.16957 13.9943 8.21318 14.0073 8.24116C14.0137 8.25515 14.0182 8.26522 14.0209 8.27109C14.0222 8.27402 14.023 8.2759 14.0233 8.2767C14.0235 8.27709 14.0236 8.27722 14.0235 8.27707C14.0235 8.27699 14.0234 8.27685 14.0233 8.27664C14.0233 8.27653 14.0232 8.27632 14.0231 8.27626C14.023 8.27603 14.0229 8.27578 14.6663 8.00004C15.3097 7.7243 15.3096 7.72401 15.3095 7.72371C15.3094 7.72359 15.3093 7.72327 15.3092 7.72302C15.309 7.72252 15.3087 7.72195 15.3085 7.72131C15.3079 7.72003 15.3072 7.71847 15.3064 7.71662C15.3048 7.71293 15.3027 7.70812 15.3001 7.70222C15.2948 7.69043 15.2876 7.67429 15.2782 7.6541C15.2596 7.61373 15.2327 7.55707 15.1974 7.48647C15.1268 7.34537 15.0224 7.1479 14.8824 6.91284C14.6034 6.44402 14.179 5.81831 13.596 5.19039C12.4302 3.935 10.5907 2.63337 7.99967 2.63337V4.03337ZM14.6663 8.00004C14.0229 7.7243 14.023 7.72405 14.0231 7.72382C14.0232 7.72377 14.0233 7.72355 14.0233 7.72345C14.0234 7.72323 14.0235 7.72309 14.0235 7.72301C14.0236 7.72286 14.0235 7.72299 14.0233 7.72338C14.023 7.72418 14.0222 7.72606 14.0209 7.72899C14.0182 7.73486 14.0137 7.74493 14.0073 7.75892C13.9943 7.7869 13.9737 7.83051 13.9452 7.88751C13.8881 8.00162 13.7999 8.16874 13.6794 8.37117C13.4376 8.77736 13.0703 9.31831 12.5701 9.85706C11.5691 10.935 10.0753 11.9667 7.99967 11.9667V13.3667C10.5907 13.3667 12.4302 12.0651 13.596 10.8097C14.179 10.1818 14.6034 9.55606 14.8824 9.08725C15.0224 8.85218 15.1268 8.65471 15.1974 8.51361C15.2327 8.44301 15.2596 8.38636 15.2782 8.34598C15.2876 8.32579 15.2948 8.30965 15.3001 8.29786C15.3027 8.29197 15.3048 8.28715 15.3064 8.28346C15.3072 8.28162 15.3079 8.28005 15.3085 8.27877C15.3087 8.27813 15.309 8.27756 15.3092 8.27706C15.3093 8.27681 15.3094 8.27649 15.3095 8.27637C15.3096 8.27607 15.3097 8.27578 14.6663 8.00004ZM7.99967 11.9667C5.92404 11.9667 4.43025 10.935 3.4293 9.85706C2.92903 9.31831 2.56171 8.77736 2.31993 8.37117C2.19943 8.16874 2.11121 8.00162 2.05416 7.88751C2.02566 7.83051 2.00502 7.7869 1.99209 7.75892C1.98563 7.74493 1.9811 7.73486 1.97849 7.72899C1.97719 7.72606 1.97637 7.72418 1.97602 7.72338C1.97585 7.72299 1.97579 7.72286 1.97586 7.72301C1.97589 7.72309 1.97595 7.72323 1.97604 7.72345C1.97609 7.72355 1.97618 7.72377 1.9762 7.72382C1.9763 7.72405 1.97641 7.7243 1.33301 8.00004C0.689606 8.27578 0.689728 8.27607 0.689857 8.27637C0.689911 8.27649 0.690048 8.27681 0.690155 8.27706C0.69037 8.27756 0.690615 8.27813 0.690892 8.27877C0.691446 8.28005 0.692126 8.28162 0.692932 8.28346C0.694543 8.28715 0.696658 8.29197 0.69928 8.29786C0.704524 8.30965 0.711798 8.32579 0.721125 8.34598C0.739774 8.38636 0.766659 8.44301 0.801961 8.51361C0.872512 8.65471 0.976997 8.85218 1.11692 9.08725C1.39598 9.55606 1.82032 10.1818 2.40339 10.8097C3.5691 12.0651 5.40864 13.3667 7.99967 13.3667V11.9667ZM9.29967 8.00004C9.29967 8.71801 8.71764 9.30004 7.99967 9.30004V10.7C9.49084 10.7 10.6997 9.49121 10.6997 8.00004H9.29967ZM7.99967 9.30004C7.2817 9.30004 6.69967 8.71801 6.69967 8.00004H5.29967C5.29967 9.49121 6.50851 10.7 7.99967 10.7V9.30004ZM6.69967 8.00004C6.69967 7.28207 7.2817 6.70004 7.99967 6.70004V5.30004C6.50851 5.30004 5.29967 6.50887 5.29967 8.00004H6.69967ZM7.99967 6.70004C8.71764 6.70004 9.29967 7.28207 9.29967 8.00004H10.6997C10.6997 6.50887 9.49084 5.30004 7.99967 5.30004V6.70004Z"
      fill="currentColor"
    />
  </svg>
);

export default EyeIcon;