import { Card, CardContent, Grid, Typography, Button } from '@mui/material';
import React, { Component } from 'react';

export default class add extends Component {
  // constructor(props) {
  //   super(props);
  // }

  render() {
    const versityList = [
      {
        versity: 'North South',
      },
      {
        versity: 'AIUB',
      },
      {
        versity: 'Brac',
      },
      {
        versity: 'IUB',
      },
    ]
      .filter((linkConfig) => linkConfig)
      .map(({ versity }) => {
        return (
          <div
            key={versity}
            style={{
              marginBottom: '0.3em',
              marginTop: '0.3em',
              textAlign: 'left',
            }}
          >
            <input type="checkbox" style={{ marginRight: '0.5em' }} />
            <label className="form-check-label">{versity}</label>
          </div>
        );
      });

    const SchoolList = [
      {
        school: 'Yale International',
      },
      {
        school: 'Mastermind',
      },
      {
        school: 'South breeze',
      },
      {
        school: 'Aga khan',
      },
    ]
      .filter((linkConfig) => linkConfig)
      .map(({ school }) => {
        return (
          <div
            key={school}
            style={{
              marginBottom: '0.3em',
              marginTop: '0.3em',
              textAlign: 'left',
            }}
          >
            <input type="checkbox" style={{ marginRight: '0.5em' }} />
            <label className="form-check-label">{school}</label>
          </div>
        );
      });
    const CountryList1 = [
      {
        country: 'Canada',
      },
      {
        country: 'France',
      },
      {
        country: 'England',
      },
      {
        country: 'America',
      },
    ]
      .filter((linkConfig) => linkConfig)
      .map(({ country }) => {
        return (
          <div
            key={country}
            style={{
              marginBottom: '0.3em',
              marginTop: '0.3em',
              textAlign: 'left',
            }}
          >
            <input style={{ marginRight: '0.5em' }} type="checkbox" />
            <label className="form-check-label">{country}</label>
          </div>
        );
      });

    const CountryList2 = [
      {
        country: 'India',
      },
      {
        country: 'Spain',
      },
      {
        country: 'Thailand',
      },
      {
        country: 'Singapore',
      },
    ]
      .filter((linkConfig) => linkConfig)
      .map(({ country }) => {
        return (
          <div
            key={country}
            style={{
              marginBottom: '0.3em',
              marginTop: '0.3em',
              textAlign: 'left',
            }}
          >
            <input style={{ marginRight: '0.5em' }} type="checkbox" />
            <label className="form-check-label">{country}</label>
          </div>
        );
      });

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
            <Typography variant="h6">New Student Form</Typography>
            <br />
            <Grid container direction="row">
              <Grid item container direction="column" sm>
                <div
                  style={{
                    marginRight: '60px',
                    marginBottom: '1em',
                    marginTop: '1em',
                  }}
                >
                  <Typography style={{ textAlign: 'left' }}>
                    Student Fullname
                  </Typography>
                  <input
                    className="form-control"
                    placeholder="student fullname"
                  />
                </div>
                <div
                  style={{
                    marginRight: '60px',
                    marginBottom: '1em',
                    marginTop: '1em',
                  }}
                >
                  <Typography style={{ textAlign: 'left' }}>
                    Student Email
                  </Typography>
                  <input
                    className="form-control"
                    placeholder="student Email..."
                  />
                </div>
                <div
                  style={{
                    marginRight: '60px',
                    marginBottom: '1em',
                    marginTop: '1em',
                  }}
                >
                  <Typography style={{ textAlign: 'left' }}>
                    Fathers Name
                  </Typography>
                  <input
                    className="form-control"
                    placeholder="Fathers Name..."
                  />
                </div>
                <div
                  style={{
                    marginRight: '60px',
                    marginBottom: '1em',
                    marginTop: '1em',
                  }}
                >
                  <Typography style={{ textAlign: 'left' }}>
                    Fathers NID No.
                  </Typography>
                  <input
                    className="form-control"
                    placeholder="Fathers NID No..."
                  />
                </div>
                <div
                  style={{
                    marginRight: '60px',
                    marginBottom: '1em',
                    marginTop: '1em',
                  }}
                >
                  <Typography style={{ textAlign: 'left' }}>
                    Fathers Passport No.
                  </Typography>
                  <input
                    className="form-control"
                    placeholder="Fathers Passport No..."
                  />
                </div>
              </Grid>
              <Grid item container direction="column" sm>
                <div
                  style={{
                    marginRight: '60px',
                    marginBottom: '1em',
                    marginTop: '1em',
                  }}
                >
                  <Typography style={{ textAlign: 'left' }}>
                    Student NID No.
                  </Typography>
                  <input
                    className="form-control"
                    placeholder="student NID NO..."
                  />
                </div>
                <div
                  style={{
                    marginRight: '60px',
                    marginBottom: '1em',
                    marginTop: '1em',
                  }}
                >
                  <Typography style={{ textAlign: 'left' }}>
                    Student Passport No.
                  </Typography>
                  <input
                    className="form-control"
                    placeholder="student Passport No..."
                  />
                </div>
                <div
                  style={{
                    marginRight: '60px',
                    marginBottom: '1em',
                    marginTop: '1em',
                  }}
                >
                  <Typography style={{ textAlign: 'left' }}>
                    Mothers Name
                  </Typography>
                  <input
                    className="form-control"
                    placeholder="Mothers Name..."
                  />
                </div>
                <div
                  style={{
                    marginRight: '60px',
                    marginBottom: '1em',
                    marginTop: '1em',
                  }}
                >
                  <Typography style={{ textAlign: 'left' }}>
                    Mothers NID No.
                  </Typography>
                  <input
                    className="form-control"
                    placeholder="Mothers NID No..."
                  />
                </div>
                <div
                  style={{
                    marginRight: '60px',
                    marginBottom: '1em',
                    marginTop: '1em',
                  }}
                >
                  <Typography style={{ textAlign: 'left' }}>
                    Mothers Passport No.
                  </Typography>
                  <input
                    className="form-control"
                    placeholder="Mothers Passport No..."
                  />
                </div>
              </Grid>
            </Grid>
            <br />
            <hr
              style={{
                marginRight: '0rem',
                marginLeft: '0rem',
                marginTop: '0',
                marginBottom: '1em',
                border: '1px solid #FFCE9F',
                background: '#FFCE9F',
              }}
            />
            <Grid container direction="row">
              <Grid item container direction="column" sm>
                <Typography style={{ textAlign: 'left', fontSize: '1.3rem' }}>
                  Which{' '}
                  <span style={{ color: '#FFCE9F', fontStyle: 'italic' }}>
                    University
                  </span>{' '}
                  do you want to go
                </Typography>
                {versityList}
              </Grid>
              <Grid item container direction="column" sm>
                <Typography style={{ textAlign: 'left', fontSize: '1.3rem' }}>
                  Which{' '}
                  <span style={{ color: '#FFCE9F', fontStyle: 'italic' }}>
                    School
                  </span>{' '}
                  are you from
                </Typography>
                {SchoolList}
              </Grid>
              <Grid item container direction="column" sm>
                <Typography style={{ textAlign: 'left', fontSize: '1.3rem' }}>
                  Which{' '}
                  <span style={{ color: '#FFCE9F', fontStyle: 'italic' }}>
                    Country
                  </span>{' '}
                  do you want to go
                </Typography>
                <Grid container direction="row">
                  <Grid item container direction="column" sm>
                    {CountryList1}
                  </Grid>
                  <Grid item container direction="column" sm>
                    {CountryList2}
                  </Grid>
                </Grid>
              </Grid>
            </Grid>
            <br />
            <div style={{ display: 'flex' }}>
              <Button
                type="submit"
                value="Create student"
                className="btn btn-danger"
                style={{
                  marginLeft: 'auto',
                  background: '#00e676',
                  color: 'white',
                  textTransform: 'none',
                  fontSize: 18,
                }}
              >
                Submit
              </Button>
            </div>
          </CardContent>
        </Card>
        <br />
      </div>
    );
  }
}
