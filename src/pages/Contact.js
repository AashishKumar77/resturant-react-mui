import React from 'react'
import Layout from './../components/Layout/Layout';
import { Box, TableRow, Typography, } from '@mui/material'

const Contact = () => {
  return (
    <Layout>
       <Box sx={{ my: 10, ml: 10, "& h4":{fontWeight:'bold', mb: 2},
        }}>
          <Typography variant='h4'>
                Contact My Resturant
          </Typography>
          <p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum </p>
       </Box>
       <Box>
         <TableContainer component={paper}>
            <Table aria-label="contact table">
                <TableHead>
                  <TableRow>
                    <TableCell>Contact Detail</TableCell>
                  </TableRow>
                </TableHead>
            </Table>
         </TableContainer>
       </Box>
    </Layout>
  )
}

export default Contact
