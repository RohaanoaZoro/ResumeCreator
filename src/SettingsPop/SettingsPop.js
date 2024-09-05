import React, { useEffect, useState, useRef } from 'react';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogTitle from '@mui/material/DialogTitle';
import Slide from '@mui/material/Slide';
import Typography from '@mui/material/Typography';
import TransferJobs from '../TransferJobs/TransferJobs';

import Box from '@mui/material/Box';
import Tab from '@mui/material/Tab';
import TabContext from '@mui/lab/TabContext';
import TabList from '@mui/lab/TabList';
import TabPanel from '@mui/lab/TabPanel';
import Switch from '@mui/material/Switch';
import { Stack } from '@mui/material';


const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});

export default function SettingsPop({ Technologies, setTechnologies }) {
  const [open, setOpen] = useState(false);


    const mainFrontEnd = useRef([])
    const otherFrontEnd = useRef([])

    const mainBackEnd = useRef([]);
    const otherBackEnd = useRef([]);

    const mainCloud = useRef([]);
    const otherCloud = useRef([]);

    const dbTechnologies = useRef([]);
    const otherdbTechnologies = useRef([]);

    const mainDevOpsTools = useRef([]);
    const otherDevOpsTools = useRef([]);

    const codingLanguages = useRef([]);
    const otherLanguages = useRef([]);

    const ishighlight = useRef(false);



  useEffect(() => {
    if (Technologies) {
        console.log("Technologies.DbTechnologies", Technologies)
        mainFrontEnd.current = Technologies.MainFrontEnd;
        otherFrontEnd.current = Technologies.OtherFrontEnd;

        mainBackEnd.current = Technologies.MainBackEnd;
        otherBackEnd.current = Technologies.OtherBackEnd;

        mainCloud.current = Technologies.MainCloud;
        otherCloud.current = Technologies.OtherCloud;

        dbTechnologies.current = Technologies.DBTechnologies;
        otherdbTechnologies.current = Technologies.OtherDbTechnologies;

        mainDevOpsTools.current = Technologies.MainDevOpsTools;
        otherDevOpsTools.current = Technologies.OtherDevOpsTools;

        codingLanguages.current = Technologies.CodingLanguages;
        otherLanguages.current = Technologies.OtherLanguages;

        ishighlight.current = Technologies.Ishighlight;
    }
  }, [Technologies]);

  useEffect(() => {
    const handleKeyDown = (event) => {
        event.preventDefault();
        if (event.key === 'Escape') {
            handleClickOpen(); // Open dialog when Esc key is pressed
        }
    };

    document.addEventListener('keydown', handleKeyDown);

    // Cleanup event listener on component unmount
    return () => {
      document.removeEventListener('keydown', handleKeyDown);
    };
  }, []);

  const [value, setValue] = React.useState('1');

  const handleChange = (e, newValue) => {
    setValue(newValue);
  };

  const handleSwitch = (event) => {
    ishighlight.current = event.target.checked;
  };


  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    //  Update state in parent component
     setTechnologies(prevState => ({
        ...prevState,
        MainFrontEnd: mainFrontEnd.current,
        OtherFrontEnd: otherFrontEnd.current,
        MainBackEnd: mainBackEnd.current,
        OtherBackEnd: otherBackEnd.current,
        MainCloud: mainCloud.current,
        OtherCloud: otherCloud.current,
        DBTechnologies: dbTechnologies.current,
        OtherDbTechnologies:otherdbTechnologies.current,
        MainDevOpsTools: mainDevOpsTools.current,
        OtherDevOpsTools: otherDevOpsTools.current,
        CodingLanguages: codingLanguages.current,
        OtherLanguages: otherLanguages.current,
        Ishighlight: ishighlight.current,
      }));

    setOpen(false);
  };

  // Callback to update state in the parent
  const updateLists = (updatedOther, updatedMain, type) => {
    // Update local state
    if(type===0){
        mainFrontEnd.current = updatedMain;
        otherFrontEnd.current = updatedOther;
    } else if(type===1){
        mainBackEnd.current = updatedMain;
        otherBackEnd.current = updatedOther;
    } else if(type===2){
        mainCloud.current = updatedMain;
        otherCloud.current = updatedOther;
    } else if(type===3){
        dbTechnologies.current = updatedMain;
        otherdbTechnologies.current = updatedOther;
    } else if(type===4){
        mainDevOpsTools.current = updatedMain;
        otherDevOpsTools.current = updatedOther;
    } else if(type===5){
        codingLanguages.current = updatedMain;
        otherLanguages.current = updatedOther;
    }

  };

  return (
    <React.Fragment>
      <Dialog
        open={open}
        TransitionComponent={Transition}
        keepMounted
        onClose={handleClose}
        aria-describedby="alert-dialog-slide-description"
      >
        <DialogTitle>{"Modify your resume"}</DialogTitle>
        <DialogContent>
            <Box sx={{ width: '100%', typography: 'body1' }}>
                <TabContext value={value}>
                    <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
                    <TabList onChange={handleChange} aria-label="lab API tabs example">
                        <Tab label="Front End" value="0" />
                        <Tab label="Back End" value="1" />
                        <Tab label="Cloud" value="2" />
                        <Tab label="Databases" value="3" />
                        <Tab label="DevOps" value="4" />
                        <Tab label="Coding" value="5" />


                    </TabList>
                    </Box>
                    <TabPanel value="0">
                        <TransferJobs 
                            leftList={otherFrontEnd.current} 
                            rightList={mainFrontEnd.current} 
                            type={0}
                            updateLists={updateLists} // Passing callback
                            />
                    </TabPanel>

                    <TabPanel value="1">
                        <TransferJobs 
                            leftList={otherBackEnd.current} 
                            rightList={mainBackEnd.current} 
                            type={1}
                            updateLists={updateLists} // Passing callback
                            />
                    </TabPanel>

                    <TabPanel value="2">
                        <TransferJobs 
                            leftList={otherCloud.current} 
                            rightList={mainCloud.current} 
                            type={2}
                            updateLists={updateLists} // Passing callback
                            />
                    </TabPanel>

                    <TabPanel value="3">
                        <TransferJobs 
                            leftList={otherdbTechnologies.current} 
                            rightList={dbTechnologies.current} 
                            type={3}
                            updateLists={updateLists} // Passing callback
                            />
                    </TabPanel>

                    <TabPanel value="4">
                        <TransferJobs 
                            leftList={otherCloud.current} 
                            rightList={mainCloud.current} 
                            type={4}
                            updateLists={updateLists} // Passing callback
                            />
                    </TabPanel>

                    <TabPanel value="5">
                        <TransferJobs 
                            leftList={otherLanguages.current} 
                            rightList={codingLanguages.current} 
                            type={5}
                            updateLists={updateLists} // Passing callback
                            />
                    </TabPanel>
                </TabContext>
            </Box>

            <Stack direction={"row"}>
                <Typography component={'p'}>Hilight Keywords</Typography>
                <Switch onChange={handleSwitch} />
            </Stack>
        </DialogContent>

        

        <DialogActions>
          <Button onClick={handleClose}>Disagree</Button>
          <Button onClick={handleClose}>Agree</Button>
        </DialogActions>
      </Dialog>
    </React.Fragment>
  );
}
