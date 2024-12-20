import React from "react";
import { OverrideTheme } from "../../global/global.types";
export interface CodeEditorProps {
  value: string;
  label?: string;
  mode?: string;
  tooltip?: string;
  editorHeight?: string | number;
  onChange: (value: string) => any;
  className?: string;
  helpTools?: React.ReactNode;
  sx?: OverrideTheme;
  horizontal?: boolean;
  helper?: string;
}
