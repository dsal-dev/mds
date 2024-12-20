// This file is part of MinIO Design System
// Copyright (c) 2023 MinIO, Inc.
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

import React from "react";
import { useState } from "@storybook/client-api";
import { Meta, StoryFn } from "@storybook/react";

import StoryThemeProvider from "../../utils/StoryThemeProvider";
import Accordion from "./";
import { AccordionProps } from "./Accordion.types";
import GlobalStyles from "../GlobalStyles";

export default {
  title: "MDS/Layout/Accordion",
  component: Accordion,
  argTypes: {},
} as Meta<typeof Accordion>;

const Template: StoryFn<AccordionProps> = ({
  title,
  children,
  disabled,
  sx,
  contentBackgroundColor,
}) => {
  const [expandedPanel, setExpandedPanel] = useState<string>("closed");

  const expandFunction = (expandPanel: string) => {
    if (expandedPanel === expandPanel) {
      setExpandedPanel("other");
      return;
    }
    setExpandedPanel(expandPanel);
  };

  return (
    <StoryThemeProvider>
      <GlobalStyles />
      <Accordion
        title={title}
        expanded={expandedPanel === "panel1"}
        onTitleClick={() => {
          expandFunction("panel1");
        }}
        id={"accordion1"}
        sx={sx}
        disabled={disabled}
        contentBackgroundColor={contentBackgroundColor}
      >
        {children}
      </Accordion>
      <Accordion
        title={title}
        expanded={expandedPanel === "panel2"}
        onTitleClick={() => {
          expandFunction("panel2");
        }}
        id={"accordion2"}
        sx={sx}
        contentBackgroundColor={contentBackgroundColor}
      >
        {children}
      </Accordion>
      <Accordion
        title={title}
        expanded={expandedPanel === "panel3"}
        onTitleClick={() => {
          expandFunction("panel3");
        }}
        id={"accordion3"}
        sx={sx}
        contentBackgroundColor={contentBackgroundColor}
      >
        {children}
      </Accordion>
    </StoryThemeProvider>
  );
};

export const Default = Template.bind({});
Default.args = {
  title: "Click to Expand",
  children: (
    <div>
      <p>
        My computer-- disassembled is a maze of cables, drives chips and
        ports--an array of connections, silver solderings, twisting wires.
      </p>
      <p>
        But when the satiny case is latched in place coils and cables disappear.
        The smallest particle of matter is not an atom, but a byte-- a particle
        of magic that combines and multiplies unseen inside the blinking box.
      </p>
      <p>
        Creation occurs inside my computer-- friends, family rest behind the
        pressing of selected keys. Words and faces form; smiles and frowns
        become feelings. Attraction becomes addiction.
      </p>
      <p>
        Inside my computer merchants buy and sell-- musicians sing, artists
        train pictures into pixels, poets recollect emotion in tranquillity.
      </p>
      <p>
        Inside my computer dreams are imagined into reality-- inventions, hopes,
        ideas are born and nurtured into happenings. Strangers share a table,
        touch hands across the world.
      </p>
      <p>
        Inside my computer the pulse of human hearts waxes and wanes as people
        fall in and out of love.
      </p>
      <div style={{ textAlign: "right" }}>Karen Ruff - 2014</div>
    </div>
  ),
};

export const Disabled = Template.bind({});
Disabled.args = {
  title: "MultiState Accordion",
  disabled: true,
  children: (
    <div>
      <p>
        My computer-- disassembled is a maze of cables, drives chips and
        ports--an array of connections, silver solderings, twisting wires.
      </p>
      <p>
        But when the satiny case is latched in place coils and cables disappear.
        The smallest particle of matter is not an atom, but a byte-- a particle
        of magic that combines and multiplies unseen inside the blinking box.
      </p>
      <p>
        Creation occurs inside my computer-- friends, family rest behind the
        pressing of selected keys. Words and faces form; smiles and frowns
        become feelings. Attraction becomes addiction.
      </p>
      <p>
        Inside my computer merchants buy and sell-- musicians sing, artists
        train pictures into pixels, poets recollect emotion in tranquillity.
      </p>
      <p>
        Inside my computer dreams are imagined into reality-- inventions, hopes,
        ideas are born and nurtured into happenings. Strangers share a table,
        touch hands across the world.
      </p>
      <p>
        Inside my computer the pulse of human hearts waxes and wanes as people
        fall in and out of love.
      </p>
      <div style={{ textAlign: "right" }}>Karen Ruff - 2014</div>
    </div>
  ),
};

export const WithContentBackground = Template.bind({});
WithContentBackground.args = {
  title: "MultiState Accordion",
  contentBackgroundColor: true,
  disabled: true,
  children: (
    <div>
      <p>
        My computer-- disassembled is a maze of cables, drives chips and
        ports--an array of connections, silver solderings, twisting wires.
      </p>
      <p>
        But when the satiny case is latched in place coils and cables disappear.
        The smallest particle of matter is not an atom, but a byte-- a particle
        of magic that combines and multiplies unseen inside the blinking box.
      </p>
      <p>
        Creation occurs inside my computer-- friends, family rest behind the
        pressing of selected keys. Words and faces form; smiles and frowns
        become feelings. Attraction becomes addiction.
      </p>
      <p>
        Inside my computer merchants buy and sell-- musicians sing, artists
        train pictures into pixels, poets recollect emotion in tranquillity.
      </p>
      <p>
        Inside my computer dreams are imagined into reality-- inventions, hopes,
        ideas are born and nurtured into happenings. Strangers share a table,
        touch hands across the world.
      </p>
      <p>
        Inside my computer the pulse of human hearts waxes and wanes as people
        fall in and out of love.
      </p>
      <div style={{ textAlign: "right" }}>Karen Ruff - 2014</div>
    </div>
  ),
};

export const CustomStyles = Template.bind({});
CustomStyles.args = {
  title: "MultiState Accordion",
  children: (
    <div>
      <p>
        My computer-- disassembled is a maze of cables, drives chips and
        ports--an array of connections, silver solderings, twisting wires.
      </p>
      <p>
        But when the satiny case is latched in place coils and cables disappear.
        The smallest particle of matter is not an atom, but a byte-- a particle
        of magic that combines and multiplies unseen inside the blinking box.
      </p>
      <p>
        Creation occurs inside my computer-- friends, family rest behind the
        pressing of selected keys. Words and faces form; smiles and frowns
        become feelings. Attraction becomes addiction.
      </p>
      <p>
        Inside my computer merchants buy and sell-- musicians sing, artists
        train pictures into pixels, poets recollect emotion in tranquillity.
      </p>
      <p>
        Inside my computer dreams are imagined into reality-- inventions, hopes,
        ideas are born and nurtured into happenings. Strangers share a table,
        touch hands across the world.
      </p>
      <p>
        Inside my computer the pulse of human hearts waxes and wanes as people
        fall in and out of love.
      </p>
      <div style={{ textAlign: "right" }}>Karen Ruff - 2014</div>
    </div>
  ),
  sx: {
    backgroundColor: "#009900",
    borderColor: "#ffff00",
    color: "#fff",
  },
};
