import React, { useState } from 'react';
import {
  Avatar,
  Button,
  Grid,
  Icon,
  IconButton,
  ListItemIcon,
  ListItemText,
  MenuItem,
  Popover,
  Typography
} from "@material-ui/core";
import FullscreenExitIcon from "@material-ui/icons/FullscreenExit";
import FullscreenIcon from "@material-ui/icons/Fullscreen";
import { useFullScreen } from "react-browser-hooks";

const Top = ({ logoutUser, systemName, firstName }) => {
  const fs = useFullScreen();

  const [ userMenu, setUserMenu ] = useState(null);

  const userMenuClick = event => {
    setUserMenu(event.currentTarget);
  };

  const userMenuClose = () => {
    setUserMenu(null);
  };

  return (
    <div className="bg-card p-15 h-full flex items-center">
      <Grid
        container
        spacing={ 0 }
        alignItems="center"
      >
        <Grid item xs={ 3 }>
          <IconButton
            onClick={ fs.toggle }
          >
            {
              fs.fullScreen
                ? <FullscreenExitIcon/>
                : <FullscreenIcon/>
            }
          </IconButton>
        </Grid>
        <Grid item xs={ 6 }>
          <div className="text-center">
            <Typography
              component="p"
              variant="body1"
              color="textPrimary"
              className="font-light text-40"
            >
              { <span>{ systemName } System</span> }
            </Typography>
          </div>
        </Grid>
        <Grid item xs={ 3 }>
          <div className="flex justify-end">
            <Button className="h-64" onClick={ userMenuClick }>

              <Avatar className="mr-10">
                { firstName[0] }
              </Avatar>

              <div className="flex flex-col mr-10 items-start text-white">
                <Typography component="span" className="text-trans-none flex">
                  { firstName }
                </Typography>
              </div>

              <Icon className="text-16 text-white" variant="action">keyboard_arrow_down</Icon>
            </Button>

            <Popover
              open={ Boolean(userMenu) }
              anchorEl={ userMenu }
              onClose={ userMenuClose }
              anchorOrigin={ {
                vertical: 'bottom',
                horizontal: 'right'
              } }
              transformOrigin={ {
                vertical: 'top',
                horizontal: 'right'
              } }
              classes={ {
                paper: "py-8"
              } }
            >
              <MenuItem
                onClick={ () => {
                  logoutUser();
                  userMenuClose();
                } }
              >
                <ListItemIcon className="min-w-40">
                  <Icon>exit_to_app</Icon>
                </ListItemIcon>
                <ListItemText className="pl-0" primary="Logout"/>
              </MenuItem>
            </Popover>
          </div>
        </Grid>
      </Grid>
    </div>
  )
};

export default Top;