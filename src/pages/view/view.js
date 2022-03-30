import { Button, Card, CardContent, Typography } from '@mui/material';
import React, { Component } from 'react';
import { Link } from 'react-router-dom';

export default class view extends Component {
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
            <Typography variant="h6">All Students</Typography>
            <br />
            <table class="table table-striped table-bordered">
              <thead>
                <tr>
                  <th scope="col">sl</th>
                  <th scope="col">Student Name</th>
                  <th scope="col">Email</th>
                  <th scope="col">Students NID No.</th>
                  <th scope="col">Students Passport No.</th>
                  <th scope="col">Fathers Name</th>
                  <th scope="col">Mothers Name</th>
                  <th scope="col">Action</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <th scope="row">1</th>
                  <td>Ariba</td>
                  <td>ariba@gmail.com</td>
                  <td>3232</td>
                  <td>35454</td>
                  <td>testdad</td>
                  <td>testmom</td>
                  <td>
                    <Button
                      style={{
                        color: 'white',
                        background:
                          'linear-gradient(45deg, #311b92 30%, #673ab7 90%)',
                        marginLeft: '0.5em',
                        marginRight: '0.5em',
                        marginTop: '0.3em',
                        marginBottom: '0.3em',
                        textTransform: 'none',
                        fontSize: '0.9em',
                      }}
                    >
                      <Link
                        style={{
                          color: 'white',
                        }}
                        to="/details"
                        className="text-decoration-none"
                      >
                        Details
                      </Link>
                    </Button>
                  </td>
                </tr>
              </tbody>
            </table>
          </CardContent>
        </Card>
      </div>
    );
  }
}
