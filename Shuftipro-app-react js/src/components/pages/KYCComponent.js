import React, { useState } from "react";
import { Grid, TextField, Button, Card, CardContent, Typography, Box } from '@material-ui/core';
import FormControl from "@material-ui/core/FormControl";
import FormLabel from "@material-ui/core/FormLabel";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Radio from "@material-ui/core/Radio";
import RadioGroup from "@material-ui/core/RadioGroup";



const defaultValues = {
    country: "",
    language: "",
    email: "",
    document_name: "",
    document_dob: "",
    document_supported_types: "",
    document_issue_date: "",
    document_expiry_date:"",
    address_name:"",
    address_full_address:"",
    address_issue_date:"",
    address_supported_types:"",


};

export default function KYCComponent() {

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
        callback_url : "http://www.example.com/",
        email        : formValues.email,
        country      : "US",
        language	  : "EN",
        redirect_url: "http://www.example.com",
    }
    payload['document'] = {
    	"supported_types" : ["id_card","driving_license","passport"],
    	"name"            : [formValues.document_name],
    	"dob"			  : formValues.document_dob,
    	"issue_date"      : formValues.document_issue_date, 
    	"expiry_date"     : formValues.document_expiry_date,
    	"document_number" : "1"
    }
    payload['address'] = {
    	"supported_types"  : ["id_card","bank_statement"],
    	"name"             : [formValues.address_name],
    	"issue_date"	   : formValues.address_issue_date,
    	"full_address"	   : formValues.address_full_address,
    	"address_fuzzy_match":"1"
    }
    payload['consent'] = {
        "supported_types"  : ["printed"],
        "text"             : "My name is John Doe and I authorise this transaction of $100/- Date: July 15, 2020",
        "allow_offline"    : "1"
    }
    payload['face'] = {
        // "proof"         : "",
        "allow_offline" : "1"
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

        <Grid style={{ padding: "30px 0px 0 5px" }}>
                        <Card style={{ maxWidth: 800, margin: "0 auto", align: "center" }}>
                            <CardContent>
                                <Typography varient="h2" color="primary" align="center">
                                    KYC Onsite OCM Form
                                </Typography><br /><br /><br />
                                <form onSubmit={handleSubmit}>
                                    <Grid container alignItems="center" justify="center" spacing={2}>
                                        <Grid item xs ={4}>
                                            <Grid item>
                                                <TextField
                                                    id="country-input"
                                                    name="country"
                                                    label="COUNTRY"
                                                    type="text"
                                                    variant="outlined"
                                                    value={formValues.name}
                                                    onChange={handleInputChange}
                                                />
                                            </Grid>
                                        </Grid>
                                        <Grid item xs ={4}>
                                            <TextField
                                                id="language-input"
                                                name="language"
                                                label="LANGUAGE"
                                                type="text"
                                                variant="outlined"
                                                value={formValues.name}
                                                onChange={handleInputChange}
                                            />
                                        </Grid>
                                        <Grid item xs={4}>
                                            <TextField
                                                id="email-input"
                                                name="email"
                                                label="EMAIL"
                                                type="text"
                                                variant="outlined"
                                                value={formValues.name}
                                                onChange={handleInputChange}
                                            />
                                        </Grid>
                                        <Grid item xs={11}>
                                            <h3> Documents Details</h3>
                                        </Grid>
                                        <Grid item>
                                            <TextField
                                                id="document_name-input"
                                                name="document_name"
                                                label="NAME"
                                                type="text"
                                                variant="outlined"
                                                value={formValues.name}
                                            />
                                        </Grid>
                                        <Grid item>
                                            <TextField
                                                id="document_dob-input"
                                                name="document_dob"
                                                label="DATE OF BIRTH"
                                                type="text"
                                                helperText='Format :- YYYY-MM-DT'
                                                variant="outlined"
                                                value={formValues.name}
                                                onChange={handleInputChange}
                                            />
                                        </Grid>
                                        <Grid item>
                                            <FormControl>
                                                <FormLabel>SUPPORTED DOC TYPES</FormLabel>
                                                <RadioGroup
                                                    name="document_supported_types"
                                                    required={true}
                                                    value={formValues.name}
                                                    onChange={handleInputChange}
                                                    row
                                                >
                                                    <FormControlLabel
                                                        key="id_card"
                                                        value="id_card"
                                                        control={<Radio size="small" />}
                                                        label="id_card"
                                                    />
                                                    <FormControlLabel
                                                        key="passport"
                                                        value="passport"
                                                        control={<Radio size="small" />}
                                                        label="passport"
                                                    />
                                                </RadioGroup>
                                            </FormControl>
                                        </Grid>
                                        <Grid item>
                                            <TextField
                                                id="document_issue_date-input"
                                                name="document_issue_date"
                                                label="ISSUE DATE"
                                                type="text"
                                                variant="outlined"
                                                helperText='Format :- YYYY-MM-DT'
                                                value={formValues.name}
                                                onChange={handleInputChange}
                                            />
                                        </Grid>
                                        <Grid item>
                                            <TextField
                                                id="document_expiry_date-input"
                                                name="document_expiry_date"
                                                label="EXPIRY DATE"
                                                type="text"
                                                variant="outlined"
                                                helperText='Format :- YYYY-MM-DT'
                                                value={formValues.name}
                                                onChange={handleInputChange}
                                            />
                                        </Grid>


                                        <Grid item xs={11}>
                                            <h3>Address Details</h3>
                                        </Grid>
                                        <Grid item>
                                            <TextField
                                                id="address_name-input"
                                                name="address_name"
                                                label="NAME"
                                                type="text"
                                                variant="outlined"
                                                value={formValues.name}
                                                onChange={handleInputChange}
                                            />
                                        </Grid>
                                        <Grid item>
                                            <TextField
                                                id="address_full_address-input"
                                                name="address_full_address"
                                                label="FULL ADDRESS"
                                                type="text"
                                                variant="outlined"
                                                value={formValues.name}
                                                onChange={handleInputChange}
                                            />
                                        </Grid>

                                        <Grid item>
                                            <TextField
                                                id="address_issue_date-input"
                                                name="address_issue_date"
                                                label="ISSUE DATE"
                                                type="text"
                                                variant="outlined"
                                                helperText='Format :- YYYY-MM-DT'
                                                value={formValues.name}
                                                onChange={handleInputChange}
                                            />
                                        </Grid>
                                        <Grid item>
                                            <FormControl>
                                                <FormLabel>ADDRESS SUPPORTED DOC</FormLabel>
                                                <RadioGroup
                                                    name="address_supported_types"
                                                    required={true}
                                                    value={formValues.name}
                                                    onChange={handleInputChange}
                                                    row
                                                >
                                                    <FormControlLabel
                                                        key="utility_bill"
                                                        value="utility_bill"
                                                        control={<Radio size="small" />}
                                                        label="utility_bill"
                                                    />
                                                    <FormControlLabel
                                                        key="passport"
                                                        value="passport"
                                                        control={<Radio size="small" />}
                                                        label="passport"
                                                    />
                                                    <FormControlLabel
                                                        key="bank_statement"
                                                        value="bank_statement"
                                                        control={<Radio size="small" />}
                                                        label="bank_statement"
                                                    />
                                                </RadioGroup>
                                            </FormControl>
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
                        <div><Grid style={{ padding: "0 5px 0 5px" }}>
                            <Card style={{ maxWidth: 800, maxHeight: 300, margin: "0 auto", align: "center" }} bg="primary">
                                <CardContent>
                                    <Typography varient="h2" color="primary" align="center">
                                       KYC Response
                                    </Typography><br />
                                    <Typography varient="h2" color="primary" align="left">
                                        <h5>Reference Id &nbsp;:-&nbsp;{appdata.reference}</h5>
                                        <h5>Event &nbsp;:-&nbsp; {appdata.event}</h5>
                                        <h5>Verification_url&nbsp;:- {appdata.verification_url}</h5>
                                        <h5>Email&nbsp;:-&nbsp; {appdata.email}</h5>
                                        <h5>Country :{appdata.country}</h5>
                                       
                                    </Typography>

                                </CardContent>
                            </Card>
                        </Grid></div>
                    )
            }
        </div>
    )
}