import React from 'react';
import CofeeCard from "./CofeeCard";
import {Grid} from "@mui/material";
import coffeMakerList from "./constants";

const Content = () => {

    const getCoffeMakerCard = (cofeeMakerObj) => {

        return (
            <Grid key={cofeeMakerObj.title}item xs={12} sm={4}>
            <CofeeCard {...cofeeMakerObj}/>
            </Grid>
        )
}


    return (
        <Grid container spacing={4}>
                {coffeMakerList.map(coffeMakerObj => getCoffeMakerCard(coffeMakerObj))}
        </Grid>
    );
};

export default Content;