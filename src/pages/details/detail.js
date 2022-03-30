import { Card, CardContent, Typography, Grid } from '@mui/material';
import React, { Component } from 'react';

export default class detail extends Component {
  render() {
    return (
      <div>
        <Card
          style={{
            marginRight: '2rem',
            marginLeft: '2rem',
            borderRadius: 10,
            border: '1px solid #FFCE9F',
          }}
        >
          <CardContent elevation={3}>
            <Grid container direction="row">
              <Grid item container direction="column" sm>
                <Card
                  style={{
                    marginRight: '1rem',
                    marginLeft: '1rem',
                    borderRadius: 5,
                    border: '1px solid #FFCE9F',
                  }}
                >
                  <CardContent elevation={3}>
                    <Typography variant="h6" style={{textAlign: "left"}}>Student Details</Typography>
                    <hr
                      style={{
                        marginRight: '0rem',
                        marginLeft: '0rem',
                        marginTop: '1em',
                        marginBottom: '1em',
                        border: '1px solid #FFCE9F',
                        background: '#FFCE9F',
                      }}
                    />
                    <table class="table">
                      <tbody style={{textAlign: "left"}} >
                        <tr>
                          <th scope="row">Student Name:</th>
                          <td>Ariba</td>
                        </tr>
                        <tr>
                          <th scope="row">Email:</th>
                          <td>Ariba@gmail.com</td>
                        </tr>
                        <tr>
                          <th scope="row">Students NID No:</th>
                          <td>22323</td>
                        </tr>
                        <tr>
                          <th scope="row">Students Passport No:</th>
                          <td>23232</td>
                        </tr>
                      </tbody>
                    </table>
                  </CardContent>
                </Card>
                <br />
                <Card
                  style={{
                    marginRight: '1rem',
                    marginLeft: '1rem',
                    borderRadius: 5,
                    border: '1px solid #FFCE9F',
                  }}
                >
                  <CardContent elevation={3}>
                    <Typography variant="h6" style={{textAlign: "left"}}>Student Details</Typography>
                    <hr
                      style={{
                        marginRight: '0rem',
                        marginLeft: '0rem',
                        marginTop: '1em',
                        marginBottom: '1em',
                        border: '1px solid #FFCE9F',
                        background: '#FFCE9F',
                      }}
                    />
                    <table class="table">
                      <tbody style={{textAlign: "left"}} >
                        <tr>
                          <th scope="row">School:</th>
                          <td>yale international</td>
                        </tr>
                        <tr>
                          <th scope="row">Future University:</th>
                          <td>Brac</td>
                        </tr>
                        <tr>
                          <th scope="row">Future Country:</th>
                          <td>Canada</td>
                        </tr>
                      </tbody>
                    </table>
                  </CardContent>
                </Card>
              </Grid>
              <Grid item container direction="column" sm>
                <Card
                  style={{
                    marginRight: '1rem',
                    marginLeft: '1rem',
                    borderRadius: 5,
                    border: '1px solid #FFCE9F',
                  }}
                >
                  <CardContent elevation={3}>
                    <Typography variant="h6" style={{textAlign: "left"}}>Parent / Guardian Details</Typography>
                    <hr
                      style={{
                        marginRight: '0rem',
                        marginLeft: '0rem',
                        marginTop: '1em',
                        marginBottom: '1em',
                        border: '1px solid #FFCE9F',
                        background: '#FFCE9F',
                      }}
                    />
                    <table class="table">
                      <tbody style={{textAlign: "left"}} >
                        <tr>
                          <th scope="row">Father Name:</th>
                          <td>test</td>
                        </tr>
                        <tr>
                          <th scope="row">Father NID NO:</th>
                          <td>test@gmail.com</td>
                        </tr>
                        <tr>
                          <th scope="row">Father Passport No:</th>
                          <td>22323</td>
                        </tr>
                        <tr>
                          <th scope="row">Mother Name:</th>
                          <td>23232</td>
                        </tr>
                        <tr>
                          <th scope="row">Mother NID NO:</th>
                          <td>test@gmail.com</td>
                        </tr>
                        <tr>
                          <th scope="row">Mother Passport No:</th>
                          <td>test</td>
                        </tr>
                      </tbody>
                    </table>
                  </CardContent>
                </Card>
              </Grid>
            </Grid>
          </CardContent>
        </Card>
        <br />
      </div>
    );
  }
}
