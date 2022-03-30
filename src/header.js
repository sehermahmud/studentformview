import * as React from 'react';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Box from '@mui/material/Box';
import {
  Link
} from "react-router-dom";
// import { makeStyles } from '@mui/material';

// const useStyles = makeStyles(theme => ({
//   rightAlign: {
//     marginLeft: "auto"
//   }
// }));

export default function ColorTabs() {
  // const classes = useStyles();
  const [value, setValue] = React.useState('one');

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <Box sx={{ width: '100%'}}>
      <Tabs
        value={value}
        onChange={handleChange}
        textColor="secondary"
        indicatorColor="secondary"
        aria-label="secondary tabs example"
        
      >
        <Tab component={Link} to="/" value="one" label="Report" />
        <Tab component={Link} to="/add" value="two" label="Add" />
      </Tabs>
    </Box>
  );
}