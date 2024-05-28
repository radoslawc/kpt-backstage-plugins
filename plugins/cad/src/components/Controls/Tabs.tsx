/**
 * Copyright 2024 The Nephio Authors.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

import { Tab as MUITab , Tabs as MUITabs } from '@material-ui/core';
import React, { ReactNode } from 'react';

type TabsProps = {
  tabs: readonly {
    readonly label: string;
    readonly content: ReactNode
  }[];
};

// TODO Work in progress.
export const Tabs = (props: TabsProps) => {
  // const classes = useStyles(); TODO
  const [value, setValue] = React.useState(0);

  const handleChange = (event: React.ChangeEvent, newValue: number) => {
    setValue(newValue);
  };

  return (
    <>
      <MUITabs value={value} onChange={handleChange}>
        {
          props.tabs.map(({ label }, index) => (
            <MUITab key={index} label={label} />
          ))
        }
      </MUITabs>
      {
        props.tabs.map(({ content }, index) => (
          <div hidden={value !== index}>
            { content }
          </div>
        ))
      }
    </>
  );
};

