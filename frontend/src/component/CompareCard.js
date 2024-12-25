import * as React from 'react';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import Rating from '@mui/material/Rating';
import Stack from '@mui/material/Stack';
import "./CompareCard.css";
import axios from 'axios';

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: '#fff',
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: 'center',
  color: theme.palette.text.secondary,
  ...theme.applyStyles('dark', {
    backgroundColor: '#1A2027',
  }),
}));

export default function CompareCard({ defaultValue,handleDefault }) {
  const [compareWholeData, setCompareWholeData] = React.useState([]);
  React.useEffect(() => {
    axios.get("/compare_medicines").then(res => setCompareWholeData(res.data)).catch(err => console.log("Error: ", err));
  }, [])
  return (
    <div className="cc-main-container">
      <h1>Compare Medicine</h1>
      <p>Compare medicines price composition to make your decision</p>
      <Box sx={{ flexGrow: 1 }}>
        <Grid container spacing={2}>
          {compareWholeData.map(each => {
            const { discount_percent, dosage, formulation, generic_name, id, manufacturer, name, price, reviews } = each;
            const sumOfRatings = reviews.reduce((sum, review) => sum + review.rating, 0);
            const avgRating = sumOfRatings / reviews.length;
            let additional="";
            if (id==defaultValue){
              additional="new";
            }
            return (
              <Grid onClick={()=>handleDefault(id)} key={id} item xs={12} sm={6} md={3}>
                <Item>
                  <div className={`compare-card-container ${additional}`}>
                    <div className="compare-img-container">
                      <img src="https://res.cloudinary.com/duqy1baw3/image/upload/v1735109619/dolo_new_tjapmi.jpg" />
                    </div>
                    <div>
                      <h1 className="name">{name}</h1>
                      <p className="manufacture">By {manufacturer}</p>
                    </div>
                    <div className="generic-container">
                      <h4>Generic Name:</h4>
                      <p>{generic_name}</p>
                    </div>
                    <div className="generic-container">
                      <h4>Average Price:</h4>
                      <p>Rs. {price * (1 - (discount_percent / 100))}</p>
                    </div>
                    <div className="price-container">
                      <p>Original Price</p>
                      <h3>Rs. 34</h3>
                    </div>
                    <hr className="hr-line" />
                    <div className="chemical-container">
                      <p>Chemical formation:</p>
                      <h4>{formulation}</h4>
                    </div>
                    <div className="chemical-container">
                      <p>Ratings & Review</p>
                      <div>
                        <Stack spacing={1}>
                          <Rating name="half-rating-read" defaultValue={avgRating} precision={0.5} readOnly />
                        </Stack>
                        <button>{avgRating}</button>
                      </div>
                    </div>
                    {reviews.map(each => (<p key={each.id}>{each.review_text}</p>))}
                  </div>
                </Item>
              </Grid>
            )
          })}
        </Grid>
      </Box>
    </div>
  );
}