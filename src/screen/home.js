import { Alert, Grid, TextField, Button } from "@mui/material";
import { Box } from "@mui/system";
import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import {  Input } from "../component/Input";
import { checkUser, getData, sendData } from "../firebase/firebasemethod";


const Home = () => {
  const [text, setText] = useState("");
  const [id, setUserId] = useState("");
  const [list, setList] = useState([]);
  const [value, setValue ] = useState({firstname: '', lastname:'', course:'', sec:'', contact:'', cnic:'', fathername:'', fathercnic:'', fathercontact:'' , emergencycontact:'', DOB: '' })
  const navigate = useNavigate()
  const params = useParams()

let submit = ()=>{
  console.log(value)
  sendData({
    value: value,
    id: id
  }, `register/${id}`).then((id) => {
    console.log(id)
  }).catch((err) => {
    console.log(err)
  })
  
}




  return (
    <>
      <Box>
        <Box className='sec1'>
          <h1>
            Registration Form
          </h1>
          <img src='https://o.remove.bg/downloads/38b8b6fd-818d-4e67-a6dd-2f517d918469/student_logo-removebg-preview.png' width='5%' />
        </Box>
        <Box sx={{ml:5,mt:5}}>
        <Grid container spacing={4}  >
          <Grid item md={4}>
          <TextField
                label="First Name"
                type="text"
                value={value.firstname}
                onChange={(e)=> setValue({...value, firstname: e.target.value})}
                variant="standard"
                sx={{ width: "70%" }}
              />
          </Grid>
          <Grid item md={4}>
          <TextField
                label="Last Name"
                type="text"
                value={value.lastname}
                onChange={(e)=> setValue({...value, lastname: e.target.value})}
                variant="standard"
                sx={{ width: "70%" }}
              />
          </Grid>
          <Grid item md={4}>
          <TextField
                label="Course"
                type="text"
                value={value.course}
                onChange={(e)=> setValue({...value, course: e.target.value})}
                variant="standard"
                sx={{ width: "70%" }}
              />
          </Grid>
          <Grid item md={4}>
          <TextField
                label="Sec"
                type="text"
                value={value.sec}
                onChange={(e)=> setValue({...value, sec: e.target.value})}
                variant="standard"
                sx={{ width: "70%" }}
              />
          </Grid>
          <Grid item md={4}>
          <TextField
                label="Contact"
                type="text"
                value={value.contact}
                onChange={(e)=> setValue({...value, contact: e.target.value})}
                variant="standard"
                sx={{ width: "70%" }}
              />
          </Grid>
          <Grid item md={4}>
          <TextField
                label="Cnic"
                type="text"
                value={value.cnic}
                onChange={(e)=> setValue({...value, cnic: e.target.value})}
                variant="standard"
                sx={{ width: "70%" }}
              />
          </Grid>
          <Grid item md={4}>
          <TextField
                label="Father Name"
                type="text"
                value={value.fathername}
                onChange={(e)=> setValue({...value, fathername: e.target.value})}
                variant="standard"
                sx={{ width: "70%" }}
              />
          </Grid>
          <Grid item md={4}>
          <TextField
                label="Father CNIC"
                type="text"
                value={value.fathercnic}
                onChange={(e)=> setValue({...value, fathercnic: e.target.value})}
                variant="standard"
                sx={{ width: "70%" }}
              />
              </Grid>
              <Grid item md={4}>
          <TextField
                label="Father Contact"
                type="text"
                value={value.fathercontact}
                onChange={(e)=> setValue({...value, fathercontact: e.target.value})}
                variant="standard"
                sx={{ width: "70%" }}
              />
              </Grid>
               <Grid item md={4}>
          <TextField
                label="Emergency Contact"
                type="text"
                value={value.emergencycontact}
                onChange={(e)=> setValue({...value, emergencycontact: e.target.value})}
                variant="standard"
                sx={{ width: "70%" }}
              />
              </Grid>
               <Grid item md={4}>
          <TextField
                label="Date of Birth"
                type="text"
                value={value.DOB}
                onChange={(e)=> setValue({...value, DOB: e.target.value})}
                variant="standard"
                sx={{ width: "70%" }}
              />
              </Grid>
               <Grid item md={4}>
          
              </Grid>
               <Grid item md={4}>
          
              </Grid>
               <Grid item md={4}>
          <Button onClick={submit}>Submit</Button>
              </Grid>
               <Grid item md={4}>
         
              </Grid>
          
          </Grid>
          
        </Box>
      </Box>
    </>
  );
};

export default Home;
