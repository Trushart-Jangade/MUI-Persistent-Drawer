import * as React from 'react';
import { withStyles } from '@material-ui/core/styles';
import { WithStyles, Avatar, Drawer, Divider, List, ListItem, ListItemIcon, ListItemText, CssBaseline } from '@material-ui/core';
import { createStyles } from '@material-ui/core/styles';
import { Theme } from '@material-ui/core/styles/createMuiTheme';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import Menu from '@material-ui/core/Menu';
import MenuIcon from '@material-ui/icons/Menu';
import MenuItem from '@material-ui/core/MenuItem';
// import AccountCircle from '@material-ui/icons/AccountCircle';

// Letter avatars
import deepOrange from '@material-ui/core/colors/deepOrange';
import deepPurple from '@material-ui/core/colors/deepPurple';
import * as classNames from 'classnames';

// PersistentDrawer
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import ChevronRightIcon from '@material-ui/icons/ChevronRight';
import InboxIcon from '@material-ui/icons/MoveToInbox';
import MailIcon from '@material-ui/icons/Mail';


const drawerWidth = 240;
const styles = (theme: Theme) => createStyles({
    root: {
      flexGrow: 1,
      display: 'flex',
    },
    grow: {
      flexGrow: 1,
    },
    menuButton: {
      marginLeft: -12,
      marginRight: 20,
    },

// Letter avatars
    avatar: {
      margin: 0,
    },
    orangeAvatar: {
      margin: 10,
      color: '#fff',
      backgroundColor: deepOrange[500],
    },
    purpleAvatar: {
      margin: 10,
      color: '#fff',
      backgroundColor: deepPurple[500],
    },

    // PersistentDrawer
    appBar: {
      transition: theme.transitions.create(['margin', 'width'], {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.leavingScreen,
      }),
    },
    appBarShift: {
      width: `calc(100% - ${drawerWidth}px)`,
      marginLeft: drawerWidth,
      transition: theme.transitions.create(['margin', 'width'], {
        easing: theme.transitions.easing.easeOut,
        duration: theme.transitions.duration.enteringScreen,
      }),
    },
    hide: {
      display: 'none',
    },
    drawer: {
      width: drawerWidth,
      flexShrink: 0,
    },
    drawerPaper: {
      width: drawerWidth,
    },
    drawerHeader: {
      display: 'flex',
      alignItems: 'center',
      padding: '0 8px',
      ...theme.mixins.toolbar,
      justifyContent: 'flex-end',
    },
    content: {
      flexGrow: 1,
      padding: theme.spacing.unit * 3,
      transition: theme.transitions.create('margin', {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.leavingScreen,
      }),
      marginLeft: -drawerWidth,
    },
    contentShift: {
      transition: theme.transitions.create('margin', {
        easing: theme.transitions.easing.easeOut,
        duration: theme.transitions.duration.enteringScreen,
      }),
      marginLeft: 0,
    },
});
interface IProps extends WithStyles<typeof styles> {
  handleClick:(btnName:string)=>void,
  auth: boolean,
  theme: any
}
interface IState {
   anchorEl: any|null,
   openPersistentDrawer: any
 }
class ButtonAppBar extends React.Component<IProps, IState> {
  constructor(props: IProps){
     super(props);
     this.state = { anchorEl: null, openPersistentDrawer: false };
     this.handleClose = this.handleClose.bind(this);
     this.handleMenu = this.handleMenu.bind(this);
   }
  handleClose = (btnName: string) => {
    this.setState({ anchorEl: false });
    this.props.handleClick(btnName);
  };
  handleMenu = (event: any) => {
    this.setState({ anchorEl: event.currentTarget });
  };
  handleDrawerOpen = () => {
    this.setState({ openPersistentDrawer: true });
  };

  handleDrawerClose = () => {
    this.setState({ openPersistentDrawer: false });
  };
 
  render(){
    const { classes, auth, theme } = this.props;
    const { anchorEl, openPersistentDrawer } = this.state;
    const openMenuBar = Boolean(anchorEl);
    return (
      <div className={classes.root}>
      <CssBaseline />
        <AppBar position="fixed"
        className={classNames(classes.appBar, {
          [classes.appBarShift]: openPersistentDrawer,
        })}>
          <Toolbar>
            {/* <IconButton className={classes.menuButton} color="inherit" aria-label="Menu">
              <MenuIcon />
            </IconButton> */}
            <IconButton
              color="inherit"
              aria-label="Open drawer"
              onClick={this.handleDrawerOpen}
              className={classNames(classes.menuButton, openPersistentDrawer && classes.hide)}
            >
              <MenuIcon />
            </IconButton>
            <Typography variant="h6" color="inherit" className={classes.grow} >
              News
            </Typography>
            <Button color="inherit" onClick={()=>this.props.handleClick('Home')}>Home</Button>
            {
              auth && 
              <Button color="inherit" onClick={()=>this.props.handleClick('Page1')}>Page 1</Button> 
            }
            {
              auth && 
              <Button color="inherit" onClick={()=>this.props.handleClick('Page2')}>Page 2</Button>
            }
            {
              auth && 
              <Button color="inherit" onClick={()=>this.props.handleClick('Page1')}>Page 1</Button> 
            }
            {
              auth && 
              <Button color="inherit" onClick={()=>this.props.handleClick('Page2')}>Page 2</Button>
            }
            {
              !auth && 
            <Button color="inherit" onClick={()=>this.props.handleClick('Login')}>Login</Button>
            }
            {/* {
              auth && 
            <Button color="inherit" onClick={()=>this.props.handleClick('Login')}>Logout</Button>
            } */}
            {auth && (
              <div>
                <IconButton
                  aria-owns={openMenuBar ? 'menu-appbar' : undefined}
                  aria-haspopup="true"
                  onClick={this.handleMenu}
                  color="inherit"
                >
                  {/* <AccountCircle /> */}
                  <Avatar className={classes.avatar}>TJ</Avatar>
                  {/* <Avatar className={classes.orangeAvatar}>N</Avatar>
                  <Avatar className={classes.purpleAvatar}>OP</Avatar> */}
                </IconButton>
                <Menu anchorEl= {anchorEl}
                  id="menu-appbar"
                  anchorOrigin={{
                    vertical: 'top',
                    horizontal: 'right',
                  }}
                  transformOrigin={{
                    vertical: 'top',
                    horizontal: 'right',
                  }}
                  open={openMenuBar}
                  onClose={() => this.handleClose('')}
                >
                  <MenuItem onClick={() => this.handleClose('Profile')}>Profile</MenuItem>
                  <MenuItem onClick={() => this.handleClose('Login')}>Logout</MenuItem>
                </Menu>
              </div>
            )}
          </Toolbar>
        </AppBar>

{/* PersistentDrawer */}
        <Drawer
          className={classes.drawer}
          variant="persistent"
          anchor="left"
          open={openPersistentDrawer}
          classes={{
            paper: classes.drawerPaper,
          }}
        >
          <div className={classes.drawerHeader}>
            <IconButton onClick={this.handleDrawerClose}>
              {theme.direction === 'ltr' ? <ChevronLeftIcon /> : <ChevronRightIcon />}
            </IconButton>
          </div>
          <Divider />
          <List>
            {['Inbox', 'Starred', 'Send email', 'Drafts'].map((text, index) => (
              <ListItem button key={text}>
                <ListItemIcon>{index % 2 === 0 ? <InboxIcon /> : <MailIcon />}</ListItemIcon>
                <ListItemText primary={text} />
              </ListItem>
            ))}
          </List>
          <Divider />
          <List>
            {['All mail', 'Trash', 'Spam'].map((text, index) => (
              <ListItem button key={text}>
                <ListItemIcon>{index % 2 === 0 ? <InboxIcon /> : <MailIcon />}</ListItemIcon>
                <ListItemText primary={text} />
              </ListItem>
            ))}
          </List>
        </Drawer>
        <main
          className={classNames(classes.content, {
            [classes.contentShift]: openPersistentDrawer,
          })}
        >
          <div className={classes.drawerHeader} />
          <Typography paragraph>
            Consequat mauris nunc congue nisi vitae suscipit. Fringilla est ullamcorper eget nulla
            facilisi etiam dignissim diam. Pulvinar elementum integer enim neque volutpat ac
            tincidunt. Ornare suspendisse sed nisi lacus sed viverra tellus. Purus sit amet volutpat
            consequat mauris. Elementum eu facilisis sed odio morbi. Euismod lacinia at quis risus
            sed vulputate odio. Morbi tincidunt ornare massa eget egestas purus viverra accumsan in.
            In hendrerit gravida rutrum quisque non tellus orci ac. Pellentesque nec nam aliquam sem
            et tortor. Habitant morbi tristique senectus et. Adipiscing elit duis tristique
            sollicitudin nibh sit. Ornare aenean euismod elementum nisi quis eleifend. Commodo
            viverra maecenas accumsan lacus vel facilisis. Nulla posuere sollicitudin aliquam
            ultrices sagittis orci a.
          </Typography>
        </main>
      </div>
    );
  }
}

export default withStyles(styles, { withTheme: true })(ButtonAppBar);