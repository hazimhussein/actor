import  React from 'react'
import {Box,Button, Typography} from '@mui/material'
import AxiosInstance  from './Axios'
import {useNavigate,useParams} from 'react-router-dom'
import { useEffect, useState } from 'react'

const Delete_person = () => {
    const MyParam = useParams()

    const MyId = MyParam.id

    const[myData, setMydata]=useState()
    const[loading,setLoading] = useState(true)


    const GetData = () => {

        AxiosInstance.get(`person/${MyId}`).then((res) => {
           setMydata(res.data) 
           console.log(res.data)
           setLoading(false)
        })


     }




    useEffect(() => { 


        GetData();
   
    },[])


    const navigate = useNavigate()

    const submission =(data) => 
    
    {
        AxiosInstance.delete(`person/${MyId}/`)
        
        .then((res) => (
            navigate(`/`)
        ))

    }
    return(
        <div>
            { loading ? <p>Loading data ...</p> :
            <div>

            <Box sx ={{display:'flex', width:'100%',backgroundColor:'#00003f',marginBottom:'10px'}}>
                <Typography sx ={{marginLeft:'20px', color:'#fff'}}>
                    Delete person : {myData.first_name} {myData.last_name}
                </Typography>
            </Box>


             <Box sx ={{display:'flex', width:'100%',boxShadow:3, padding:4, flexDirection:'column'}}>
             Are you sure that you want to delete this person : {myData.first_name}  {myData.last_name}

            
            <Box >
                <Button variant ="contained"  onClick={submission} sx ={{width:'100%'}}>
                    Delete the person
                </Button>
            </Box>
        </Box>

        </div>   }
    </div>
 
            
    )
}






export default Delete_person