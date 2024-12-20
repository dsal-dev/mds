// This file is part of MinIO Design System
// Copyright (c) 2022 MinIO, Inc.
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

import React, { FC } from "react";
import { Theme, ThemeProvider } from "@emotion/react";

import { darkTheme, lightTheme } from "../../global/themes";
import { ThemeHandlerProps } from "./ThemeHandler.types";

const ThemeHandler: FC<ThemeHandlerProps> = ({
  darkMode = false,
  children,
  customTheme,
}) => {
  let selectedTheme: Theme = darkMode ? darkTheme : lightTheme;

  if (customTheme) {
    selectedTheme = customTheme;
  }

  return <ThemeProvider theme={selectedTheme}>{children}</ThemeProvider>;
};

export default ThemeHandler;
