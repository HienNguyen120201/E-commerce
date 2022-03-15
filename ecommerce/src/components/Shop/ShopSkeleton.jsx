import React from "react"
import Skeleton from "@mui/material/Skeleton"
import Grid from "@mui/material/Grid"

let list = []
for (let i = 0; i < 6; i++) {
   list.push(
      <Grid item lg={4} key={i}>
         <Skeleton variant="rectangular" width="100%" height={250} />
         <Skeleton height={50} />
         <Skeleton width="60%" height={30} />
      </Grid>
   )
}
function ShopSkeleton() {
   return (
      <>
         <Grid container>
            <Skeleton animation="wave" style={{ width: "100%", height: "200px" }} />
         </Grid>
         <Grid container spacing={1}>
            {list}
         </Grid>
      </>
   )
}

export default ShopSkeleton
