import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import InputBase from '@material-ui/core/InputBase';
import { fade, makeStyles } from '@material-ui/core/styles';
import MenuIcon from '@material-ui/icons/Menu';
import Kasaz from 'images/kasaz.png'
import { ChevronUp, ChevronDown } from "react-feather";
import Filter from './Filter'

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
    display: 'none',
    [theme.breakpoints.up('sm')]: {
      display: 'block',
    },
  },
  search: {
    position: 'relative',
    borderRadius: theme.shape.borderRadius,
    backgroundColor: fade(theme.palette.common.white, 0.15),
    '&:hover': {
      backgroundColor: fade(theme.palette.common.white, 0.25),
    },
    marginLeft: 0,
    width: '100%',
    [theme.breakpoints.up('sm')]: {
      marginLeft: theme.spacing(1),
      width: 'auto',
    },
  },
  searchIcon: {
    padding: '0 7px',
    height: '100%',
    position: 'absolute',
    pointerEvents: 'none',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    background:'mediumseagreen'
  },
  inputRoot: {
    color: 'inherit',
  },
  inputInput: {
    padding: theme.spacing(1, 1, 1, 0),
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(4)}px)`,
    transition: theme.transitions.create('width'),
    width: '100%',
    [theme.breakpoints.up('sm')]: {
      width: '12ch',
      '&:focus': {
        width: '20ch',
      },
    },
  },
}));
export default function Header(props) {
    const classes = useStyles();
    const [openFilter, setOpenFilter]=React.useState(true)

    const handleFilter=()=>{
        if(openFilter){
            setOpenFilter(false)
        }
        else{
            setOpenFilter(true)
        }
    }
  
    return (
      <div className={classes.root}>
        <AppBar position="static" style={{backgroundColor:'#601A8B',position:'fixed'}}>
          <Toolbar>
            <IconButton
              edge="start"
              className={classes.menuButton}
              color="inherit"
              aria-label="open drawer"
            >
              <MenuIcon style={{color:'mediumseagreen'}}/>
            </IconButton>
            <div style={{width:"100%"}}>
              <img src={Kasaz} style={{height: "4rem"}}/>
            </div>
            <div style={{ marginLeft:'4rem'}}>
                <div style={{display:'flex',alignItems:'center',}}>
                    <p>Filtros</p>
                    {openFilter ? <ChevronDown style={{color:'mediumseagreen'}} onClick={handleFilter}/>:<ChevronUp style={{color:'mediumseagreen'}} onClick={handleFilter}/>}
                </div>
                {!openFilter &&
                    <div style={{position:'absolute',marginTop:'5px',padding:'0 10px',top:'100%',right:'1%',border:'1px solid',borderColor:'darkgrey',background:'white'}}>
                        <Filter set={props.set} />
                    </div>
                }
            </div>
          </Toolbar>
        </AppBar>
      </div>
    );
  }