import { styled } from '@mui/material/styles';
import Paper from '@mui/material/Paper'
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import React from "react";

type DeckProps = {
    card1: string;
    card2: string;
    card3: string;
    card4: string;
    card5: string;
    card6: string;
    card7: string;
    card8: string;
}

export default class Deck extends React.Component<DeckProps> {

    render() {
        return (
            <Box  sx={{ flexGrow: 1 }}>
                <Grid container spacing={2}>
                    <Grid item xs={4}>
                        <p style={{backgroundColor: '#fff'}}>{this.props.card1}</p>
                    </Grid>
                    <Grid item xs={4}>
                        <p>{this.props.card2}</p>
                    </Grid>
                    <Grid item xs={4}>
                        <p>{this.props.card3}</p>
                    </Grid>
                    <Grid item xs={4}>
                        <p>{this.props.card4}</p>
                    </Grid>
                    <Grid item xs={4}>
                        <p>{this.props.card5}</p>
                    </Grid>
                    <Grid item xs={4}>
                        <p>{this.props.card6}</p>
                    </Grid>
                    <Grid item xs={4}>
                        <p>{this.props.card7}</p>
                    </Grid>
                    <Grid item xs={4}>
                        <p>{this.props.card8}</p>
                    </Grid>
                </Grid>
            </Box>
        )
    }
}