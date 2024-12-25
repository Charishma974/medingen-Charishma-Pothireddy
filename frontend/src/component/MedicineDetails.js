import { useState, useEffect } from 'react';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from "@mui/material/Grid";
import "./MedicineDetails.css";
import axios from 'axios';

const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: '#fcfcfc',
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: 'center',
    color: theme.palette.text.secondary,
    ...theme.applyStyles('dark', {
        backgroundColor: '#1A2027',
    }),
}));

export default function MedicineDetails({defaultValue}) {
    const [medicine, setMedicine] = useState({});
    const [allMedicine, setAllMedicine] = useState([]);
    useEffect(() => {
        axios.get(`/medicine/${defaultValue}`).then(res => setMedicine(res.data)).catch(err => console.log("Error: ", err));
    }, [defaultValue])
    useEffect(() => {
        axios.get("/compare_medicines").then(res => setAllMedicine(res.data)).catch(err => console.log("Error: ", err));
    }, [])
    const { name, about, how_it_works, uses, side_effects } = medicine || "";
    let advance_how_it_works = "", advance_uses = "";
    if (how_it_works !== undefined) {
        advance_how_it_works = how_it_works.split("\n");
    }
    if (uses != undefined) {
        advance_uses = uses.split("\n");
    }
    let newName = "";
    if (name != undefined) newName = name.toUpperCase();
    let remaining = [];
    if (allMedicine.length != 0) {
        remaining = allMedicine.filter(each => each.id != defaultValue);
    }
    return (
        <div className="medicine-details">
            <Box sx={{ flexGrow: 1 }}>
                <Grid container spacing={2}>
                    <Grid item xs={12} md={8}>
                        <Item>
                            <div className="medicine-head">
                                <h1>Medicine Details</h1>
                            </div>
                        </Item>
                    </Grid>
                </Grid>
                <br />
                <Grid container spacing={2}>
                    <Grid item xs={12} md={8}>
                        <Item>
                            <div className="medicine-details-main-container">
                                <div>
                                    <h1>About {newName}</h1>
                                    <p>{about}</p>
                                </div>
                                <div>
                                    <h1>Uses of {newName}</h1>
                                    <ul>
                                        {advance_how_it_works && advance_how_it_works.map((each, index) => <li key={index}>{each}</li>)}
                                    </ul>
                                </div>
                                <div>
                                    <h1>How {newName}</h1>
                                    <ul>
                                        {advance_uses && advance_uses.map((each, index) => <li key={index}>{each}</li>)}
                                    </ul>
                                </div>
                                <div>
                                    <h1>Side Effects OF {newName}</h1>
                                    <ul>
                                        {side_effects && side_effects.map((each, index) => <li key={index}>{each.effect}</li>)}
                                    </ul>
                                </div>
                            </div>
                        </Item>
                    </Grid>
                    <Grid item xs={12} md={4}>
                        <h1 className="generic-head">Generic Medicine Alternative</h1>
                        {remaining.map((each) => {
                            console.log(each);
                            const {name,manufacturer,generic_name,price,discount_percent}=each;
                            return (
                            <div key={each.id}>
                                <Item>
                                    <div className="generic-medicine-main-details">
                                        <img width={50} height={50} style={{ background: "transparent" }} src="https://thumbs.dreamstime.com/b/medicine-bottle-blank-label-box-isolated-cardboard-white-background-mockup-template-pink-liquid-antibiotic-347880171.jpg" />
                                        <div>
                                            <h1>{name}</h1>
                                            <h6>{manufacturer}</h6>
                                            <p>{generic_name}</p>
                                            <div>
                                                <h6>Rs. 95</h6>
                                                <h3>Rs. {price} </h3>
                                                <button>{discount_percent}% less Price</button>
                                            </div>
                                        </div>
                                        <button>
                                            <span>+ Add</span>
                                        </button>
                                    </div>
                                </Item>
                                <br />
                            </div>
                        )})}
                    </Grid>
                </Grid>
            </Box>
        </div>
    );
}