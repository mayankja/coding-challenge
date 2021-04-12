import React from 'react';
import NativeSelect from '@material-ui/core/NativeSelect';
import { makeStyles, withStyles } from '@material-ui/core/styles';
import InputBase from '@material-ui/core/InputBase';
import {getData} from '../sevices/FetchServices'

const BootstrapInput = withStyles((theme) => ({
    root: {
      'label + &': {
        marginTop: theme.spacing(3),
      },
    },
    input: {
      borderRadius: 4,
      position: 'relative',
      backgroundColor: theme.palette.background.paper,
      border: '1px solid #ced4da',
      fontSize: 16,
      padding: '10px 26px 10px 100px',
      transition: theme.transitions.create(['border-color', 'box-shadow']),
      // Use the system font instead of the default Roboto font.
      fontFamily: [
        '-apple-system',
        'BlinkMacSystemFont',
        '"Segoe UI"',
        'Roboto',
        '"Helvetica Neue"',
        'Arial',
        'sans-serif',
        '"Apple Color Emoji"',
        '"Segoe UI Emoji"',
        '"Segoe UI Symbol"',
      ].join(','),
      '&:focus': {
        borderRadius: 4,
        borderColor: '#80bdff',
        boxShadow: '0 0 0 0.2rem rgba(0,123,255,.25)',
      },
    },
  }))(InputBase);
  
  const useStyles = makeStyles((theme) => ({
    margin: {
      margin: theme.spacing(1),
    },
  }));

function Filter(props) {
  const classes = useStyles();
  const [minPrice, setMinPrice] = React.useState(null);
  const [maxPrice, setMaxPrice] = React.useState(null);
  const [minRoomSize, setMinRoomSize] = React.useState(null);
  const [maxRoomSize, setMaxRoomSize] = React.useState(null);
  const [bedrooms, setBedrooms] = React.useState(null);
  const [bathrooms, setBathrooms] = React.useState(null);
  const [page, setPage] = React.useState(1);


  const handleChange = (event) => {
    console.log(event.target.name)
    switch(event.target.name){
      case "minprice":
        setMinPrice(event.target.value);
        break;
      case "maxprice":
        setMaxPrice(event.target.value)
        break;
      case "minroomsize":
        setMinRoomSize(event.target.value)
        break;
      case "maxroomsize":
        setMaxRoomSize(event.target.value)
        break;
      default:
        break;
    }
  };
  const handleclick = (e)=>{
    console.log(e.target.getAttribute('data-title'))
    setBedrooms(e.target.getAttribute('data-title'))
  }

  const handleBathroom = (e)=>{
    console.log(e.target.getAttribute('data-title'))
    setBathrooms(e.target.getAttribute('data-title'))
  }

  const handleSubmit = async ()=>{
    props.set({minPrice,maxPrice,minRoomSize,maxRoomSize,bedrooms,bathrooms,page})
  }
    return(
        <div style={{display:'flex', justifyContent:'center'}}>
          <div>
            <div>
              <div style={{display:'flex', justifyContent:'center',color:'black'}}><p>Price</p></div>
              <div style={{display:'flex'}}>
                <div>
                  <NativeSelect
                    id="min-price"
                    value={minPrice}
                    name="minprice"
                    onChange={handleChange}
                    input={<BootstrapInput />}
                  >
                    <option  value="">Min-Price</option>
                    <option  value={0}>0</option>
                    <option  value={500}>500</option>
                    <option  value={1000}>1000</option>
                    <option  value={1500}>1500</option>
                  </NativeSelect>
                </div>
                <div style={{margin:"0 30px", color:'black'}}><p>-</p></div>
                <div>
                  <NativeSelect
                    id="max-price"
                    value={maxPrice}
                    name="maxprice"
                    onChange={handleChange}
                    input={<BootstrapInput />}
                  >
                    <option value="">Max-Price</option>
                    <option  value={500}>500</option>
                    <option  value={1000}>1000</option>
                    <option  value={1500}>1500</option>
                    <option  value={2000}>2000</option>
                  </NativeSelect>
                </div>
              </div>
            </div>
            <div>
              <div style={{display:'flex', justifyContent:'center',color:'black'}}><p>Room Size(sqm)</p></div>
              <div style={{display:'flex'}}>
                <div>
                  <NativeSelect
                    id="min-room-size"
                    value={minRoomSize}
                    name="minroomsize"
                    onChange={handleChange}
                    input={<BootstrapInput />}
                  >
                    <option  value="">Min-Size</option>
                    <option  value={100}>100</option>
                    <option  value={200}>200</option>
                    <option  value={300}>300</option>
                    <option  value={400}>400</option>
                  </NativeSelect>
                </div>
                <div style={{margin:"0 30px",color:'black'}}><p>-</p></div>
                <div>
                  <NativeSelect
                    id="max-room-size"
                    value={maxRoomSize}
                    name="maxroomsize"
                    onChange={handleChange}
                    input={<BootstrapInput />}
                  >
                    <option value="">Max-Size</option>
                    <option value={200}>200</option>
                    <option value={300}>300</option>
                    <option value={500}>500</option>
                    <option value={1000}>1000</option>
                  </NativeSelect>
                </div>
              </div>
            </div>
              <div style={{display:'flex', justifyContent:'center',color:'black'}}><p>Bedrooms</p></div>
                <table style={{border:'1px solid', borderSpacing:'0'}}>
                  <tr >
                    <td style={{border:'1px solid',padding:'15px 25px',borderColor:'darkgrey', backgroundColor:'#00d467',color:'black'}}>Todos</td>
                    <td style={{border:'1px solid',padding:'15px 25px',borderColor:'darkgrey',color:'black'}} data-title={1} onClick={handleclick}>+1</td>
                    <td style={{border:'1px solid',padding:'15px 25px',borderColor:'darkgrey',color:'black'}} data-title={2} onClick={handleclick}>+2</td>
                    <td style={{border:'1px solid',padding:'15px 25px',borderColor:'darkgrey',color:'black'}} data-title={3} onClick={handleclick}>+3</td>
                    <td style={{border:'1px solid',padding:'15px 25px',borderColor:'darkgrey',color:'black'}} data-title={4} onClick={handleclick}>+4</td>
                    <td style={{border:'1px solid',padding:'15px 25px',borderColor:'darkgrey',color:'black'}} data-title={5} onClick={handleclick}>+5</td>
                  </tr>
                </table>
                <div style={{display:'flex', justifyContent:'center',color:'black'}}><p>Bathrooms</p></div>
                <table style={{border:'1px solid', borderSpacing:'0'}}>
                  <tr >
                    <td style={{border:'1px solid',padding:'15px 25px',borderColor:'darkgrey', backgroundColor:'#00d467',color:'black'}}>Todos</td>
                    <td style={{border:'1px solid',padding:'15px 25px',borderColor:'darkgrey',color:'black'}} data-title={1} onClick={handleBathroom}>+1</td>
                    <td style={{border:'1px solid',padding:'15px 25px',borderColor:'darkgrey',color:'black'}} data-title={2} onClick={handleBathroom}>+2</td>
                    <td style={{border:'1px solid',padding:'15px 25px',borderColor:'darkgrey',color:'black'}} data-title={3} onClick={handleBathroom}>+3</td>
                    <td style={{border:'1px solid',padding:'15px 25px',borderColor:'darkgrey',color:'black'}} data-title={4} onClick={handleBathroom}>+4</td>
                    <td style={{border:'1px solid',padding:'15px 25px',borderColor:'darkgrey',color:'black'}} data-title={5} onClick={handleBathroom}>+5</td>
                  </tr>
                </table>
              <div style={{margin:'100px 0 30px'}}>
                <button type="submit" style={{backgroundColor:'#8900a1',width:'100%',padding:'10px 0', color:'white', fontWeight:'bolder',fontSize:'larger'}} onClick={handleSubmit}>Filter</button>
              </div>
          </div>
        </div>
    )
}
export default Filter