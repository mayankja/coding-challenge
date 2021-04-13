import React from 'react';
import Card from '../component/Card'
import Header from '../component/Header'
import {getData} from '../sevices/FetchServices'
import LeftSidePanel  from '../component/LeftSidePanel'
import CircularProgress from '@material-ui/core/CircularProgress';


function Appartment(){
    const [get,set]= React.useState([])
    const [Fdata,setFData]= React.useState([])
    let [page,setPage]= React.useState(1)
    const [loader,setLoader]= React.useState(false)
    const [openLeftPanel,setLeftPanel]= React.useState(false)

    const fetchData = async(pageNo)=>{
        console.log(pageNo)
        console.log(get)
        if(get.page=== 1){
            pageNo = 1
        }
        const url =`?bedroom=${get.bedrooms ? get.bedrooms: null}&bathroom=${get.bathrooms ? get.bathrooms:null}&price=${get.minPrice ? get.minPrice : null}-${get.maxPrice ? get?.maxPrice : null}&sqm=${get.minRoomSize ? get.minRoomSize : null}-${get.maxRoomSize ? get.maxRoomSize :null}&page=${pageNo ? pageNo : 1}`
        const response = await getData(url)
        console.log(response)
        if(pageNo>1){
            let result = [...Fdata, ...response]
            setFData(result)
        }
        else{
            setFData(response)
        }
        setLoader(false)
    }
    const loadMoreData = async(e)=>{
        console.log(e.target.scrollHeight-e.target.clientHeight-e.target.scrollTop < 50)
        let bottom = e.target.scrollHeight-e.target.clientHeight-e.target.scrollTop
        if(bottom < 50 && bottom > 10){
            let newPage = page + 1
            setLoader(true)
           await fetchData(newPage)
           await setPage(newPage)
        }
    }

    const handleLeftPanel = ()=>{
        if(openLeftPanel){
            setLeftPanel(false)
        }
        else
        {
            setLeftPanel(true)
        }
    }

    React.useEffect(() => {
        fetchData()
      }, [get]);
    return(
        <>
        <Header set={set} changevalue={handleLeftPanel}/>
        <div style={{display:'flex'}}>
        {openLeftPanel && <div className="leftSidePanel">
            <LeftSidePanel/>
        </div>}
        <div className="rightSidePanel">
        <div style={{paddingTop:'100px'}} className="table-wrap" onScroll={loadMoreData}>
            {Object.values(Fdata).map((item)=>{
                return(
            <Card item={item}/>
                )
            })}
        </div>
        <div style={{justifyContent:'center', display:'flex'}}>{loader &&<CircularProgress />}</div>
        </div>
        </div>
        </>
    )
}
export default Appartment