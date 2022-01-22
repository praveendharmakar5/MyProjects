import React, { useState } from "react";
import { Grid, TextField, Button, Card, CardContent, Typography, Box, CardActionArea } from '@material-ui/core';
import { Link } from "react-router-dom";
import ReactJson from 'react-json-view'



const defaultValues = {
    first_name: "",
    middle_name: "",
    last_name: "",
    dob: "",

};

export default function AMLCheckForIndividual() {

    const [formValues, setFormValues] = useState(defaultValues);
    const [flag, setflagValue] = useState(true);
    const [appdata, setAppdata] = useState([]);

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormValues({
            ...formValues,
            [name]: value,
        });
    };

    let payload = {
        reference: `SP_REQUEST_${Math.random()}`,
        country: "IN",
        email: "praveendharmakar08@gmail.com",
    }
    payload['background_checks'] = {
        'name': {
            "first_name": formValues.first_name,
            "middle_name": formValues.middle_name,
            "last_name": formValues.last_name
        },
        "dob": formValues.dob
    }


    const handleSubmit = (event) => {
        event.preventDefault();
        console.log(formValues);
        var token = "ZTY0ZWJhMjI1YTAxY2I0ODYyMWUxNGRjMDdmYmRjNzYzNjFlNjUyZTEzNDhiOWQ0MmY5YWYxMjJlMDdiOTcyYjpYUHdHR3RpMUxpOG5kaHhDenBIRVdvMUIzd2x2dXlGSg=="
        fetch('https://api.shuftipro.com/',
            {
                method: 'post',
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json',
                    'Authorization': 'Basic ' + token
                },
                body: JSON.stringify(payload)

            })
            .then(function (response) {
                console.log("response : " + response)
                console.log("response : " + JSON.stringify(response.json))
                return response.json();
            }).then(function (data) {
                console.log("data : " + data)
                console.log("data : " + JSON.stringify(data))
                setAppdata(data)
                setflagValue(!flag)
                return data;
            });

    };


    return (

        <div>
            {
                flag ? (
                    <Grid style={{ padding: "20px 5px 0 5px" }}>
                        <Grid container justify="center" alignItems='2' spacing={1}>
                            <Grid iteam xs={4} >
                                <CardActionArea component={Link} to="/AML">
                                    <Card style={{ height: "50px", width: "250px" }}>
                                        <CardContent>
                                            <Typography variant="h5" >
                                                AML For Individuals
                                            </Typography>
                                        </CardContent>
                                    </Card>
                                </CardActionArea>
                            </Grid>
                            <Grid iteam xs={4} >
                                <CardActionArea component={Link} to="/AMLForBusiness">
                                    <Card style={{ height: "50px", width: "250px" }}>
                                        <CardContent>
                                            <Typography variant="h5" >
                                                AML For Business
                                            </Typography>
                                        </CardContent>
                                    </Card>
                                </CardActionArea>
                            </Grid>
                        </Grid><br /><br />
                        <Card style={{ maxWidth: 500, margin: "0 auto", align: "center" }}>
                            <CardContent>
                                <Typography varient="h2" color="primary" align="center">
                                    AML Checks For Individuals Form
                                </Typography><br />
                                <form onSubmit={handleSubmit}>
                                    <Grid container alignItems="center" justify="center" spacing={2}>
                                        <Grid item>
                                            <Grid item>
                                                <TextField
                                                    id="first_name-input"
                                                    name="first_name"
                                                    label="FIRST NAME"
                                                    type="text"
                                                    variant="outlined"
                                                    value={formValues.name}
                                                    onChange={handleInputChange}
                                                />
                                            </Grid>
                                        </Grid>
                                        <Grid item>
                                            <TextField
                                                id="middle_name-input"
                                                name="middle_name"
                                                label="MIDDLE NAME"
                                                type="text"
                                                variant="outlined"
                                                value={formValues.name}
                                                onChange={handleInputChange}
                                            />
                                        </Grid>
                                        <Grid item>
                                            <TextField
                                                id="last_name-input"
                                                name="last_name"
                                                label="LAST NAME"
                                                type="text"
                                                variant="outlined"
                                                value={formValues.name}
                                                onChange={handleInputChange}
                                            />
                                        </Grid>
                                        <Grid item>
                                            <TextField
                                                id="dob-input"
                                                name="dob"
                                                label="DATE OF BIRTH"
                                                type="text"
                                                variant="outlined"
                                                value={formValues.name}
                                                onChange={handleInputChange}
                                            />
                                        </Grid>
                                        <Box m={3} pt={3}>
                                            <Button variant="contained" color="primary" type="submit">
                                                Submit
                                            </Button>
                                        </Box>
                                    </Grid>
                                </form>
                            </CardContent>
                        </Card>
                    </Grid>
                )
                    :
                    (
                        <div>
                            <h3 align="center"> AML For Individuals Response</h3>
                            <div className="card access-request-block">
                                <ReactJson src={appdata} collapseStringsAfterLength={100} theme="summerfruit:inverted" />
                            </div>
                        </div>
                    )
            }

        </div>
    )
}