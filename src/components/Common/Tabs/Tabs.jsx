import { cloneElement, useState } from "react";

import Box from "@mui/material/Box";
import PropTypes from "prop-types";
import Tab from "@mui/material/Tab";
import Tabs from "@mui/material/Tabs";

export default function CustomTab({
  tabChildren,
  tabPanel,
  isChanged,
  values,
  variant,
  onChange,
  setValue,
}) {
  return (
    <Box sx={{ width: "100%" }}>
      <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
        <Tabs
          variant={variant}
          value={values}
          onChange={isChanged && onChange}
          aria-label="basic tabs example"
        >
          {tabChildren.map((items) => {
            return (
              <Tab
                key={items.id}
                iconPosition={items.iconPosition}
                icon={items.icon}
                label={items.label}
                {...a11yProps(items.index)}
              />
            );
          })}
        </Tabs>
      </Box>

      {tabPanel.map((items) => {
        return (
          <TabPanel key={items.id} value={values} index={items.index}>
            {cloneElement(items.component, { values, setValue })}
          </TabPanel>
        );
      })}
    </Box>
  );
}

const TabPanel = ({ children, value, index, ...other }) => {
  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && <Box sx={{ p: 3 }}>{children}</Box>}
    </div>
  );
};

const a11yProps = (index) => {
  return {
    id: `simple-tab-${index}`,
    "aria-controls": `simple-tabpanel-${index}`,
  };
};

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired,
};

CustomTab.propTypes = {
  tabChildren: PropTypes.array.isRequired,
  tabPanel: PropTypes.array.isRequired,
  isChanged: PropTypes.bool,
  values: PropTypes.number.isRequired,
  variant: PropTypes.string,
  onChange: PropTypes.func.isRequired,
  setValue: PropTypes.func.isRequired,
};

CustomTab.defaultProps = {
  tabChildren: [],
  tabPanel: [],
  isChanged: true,
  values: 0,
  variant: "",
};
