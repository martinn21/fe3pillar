import React from "react";
import user from "../auth/user";
import {Container, Grid, Paper, Typography} from "@mui/material";

function Dashboard() {
    return (
        <React.Fragment>
            <Container>
                <Grid container justifyContent={"center"}>
                    <Grid item md={12}>
                        <Typography variant={"h5"}>
                            Hi {user.name}, you're logged in, welcome to 3Pillar
                        </Typography>
                    </Grid>
                </Grid>
            </Container>
        </React.Fragment>
    )
}

export default Dashboard
