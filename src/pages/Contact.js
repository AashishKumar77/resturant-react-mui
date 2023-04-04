import React from 'react'
import Layout from './../components/Layout/Layout';
import SupportAgentIcon from '@mui/icons-material/SupportAgent';
import MailIcon from '@mui/icons-material/Mail';
import CallIcon from '@mui/icons-material/Call';
import { 
  Box, 
  Paper,
  TableContainer,
  Table,
  TableHead,
  TableBody,
  TableCell,
  TableRow, 
  Typography,   } from '@mui/material'

const Contact = () => {
  return (
    <Layout>
       <Box sx={{ my: 5, ml: 10, "& h4":{fontWeight:'bold', mb: 2},
        }}>
          <Typography variant='h4'>
                Contact My Resturant
          </Typography>
          <p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum </p>
       </Box>
       <Box sx={{ m:3, width: '600px', ml:10, "@media (max-width: 600px)":{
        width: '300px'
       }}}>
         <TableContainer component={Paper}>
            <Table aria-label="contact table">
                <TableHead>
                  <TableRow>
                    <TableCell sx={{ bgcolor: 'black', color: 'white', }} align='center'>Contact Details</TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  <TableRow>
                    <TableCell>
                        <SupportAgentIcon  sx={{ color: 'red', pt: 1, }}/> 1800-25-2563  
                        (torollfree)
                    </TableCell>
                  </TableRow>
                  <TableRow>
                  <TableCell>
                        <MailIcon  sx={{ color: 'skyblue', pt: 1, }}/> nk7018793993@gmail.com  
                    </TableCell>
                  </TableRow>
                  <TableRow>
                  <TableCell>
                        <CallIcon  sx={{ color: 'green', pt: 1, }}/>   7018793993
                    </TableCell>
                  </TableRow>
                </TableBody>
            </Table>
         </TableContainer>
       </Box>
    </Layout>
  )
}

export default Contact
