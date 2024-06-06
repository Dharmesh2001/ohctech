import React from "react";
import { Stack } from "@mui/material";
import {  Box, Container } from "@mui/material";
// import ohcimg from "../../../public/ohc.jpg";
import ohcimg from '../../assets/images/ohc.jpg'
import { useState } from "react";
import RoleCard from "./RoleCard";
import chiefmedoff from '../../assets/images/ChiefMedicalOfficer.png'
import reception from '../../assets/images/Reception.png'
import applicationadmin from '../../assets/images/Application Admin.png'
import medicalExamination from '../../assets/images/Medical Examination.png'
import employee from '../../assets/images/Employee.png'
import pharmacy from '../../assets/images/Pharmacy.png'
export default function RoleSelection() {
  const [icons] = useState(
    [
        
    { image: medicalExamination, 
    name: "Medical Examination" },

    { image:reception , 
    name: "Reception" },
    { image: applicationadmin, 
    name: "Application Admin" },
    { image:chiefmedoff , 
    name: "Chief Medical Officer" },
    { image: employee,
     name: "Employee" },
    { image:pharmacy,
     name: "Pharmacy" }
  ]
);

  return (
    <Stack spacing={0} direction="row" >
      <Box
        sx={{
          width: "50vw",
          height: "100vh",
          display: { xs: "none", sm: "block" },
        }}
      >
        <Box>
          <img style={{ height: "100vh", width: "50vw" }} src={ohcimg} alt="" />
        </Box>
      </Box>
      <Box
        sx={{
          width: { xs: "100vw", sm: "50vw" },
          height: "100vh",
           overflow: "auto",
        }}
      >
        <Container
          component="main"
          maxWidth="xs"
          sx={{
            height: "100%",
            display: "flex",
            flexDirection: "column",
            // alignItems: "center",
            justifyContent: "center",
            justifyItems:'center',
            //  marginRight:'1rem'
          }}
        >
          <Box
            sx={{
              display: "flex",
              flexDirection: "row",
              alignItems: "center",
              textAlign: "center",
              flexWrap: "wrap", 
              justifyContent: "center", 
              justifyItems:'center',
              //  marginLeft:'2rem',
               marginRight:'1.5rem',
               marginTop:'1rem'
               
            }}
          >
            {icons.map((icon) => (
              <RoleCard icon={icon.image} name={icon.name} />
            ))}
          </Box>
        </Container>
      </Box>
    </Stack>
  );
}
