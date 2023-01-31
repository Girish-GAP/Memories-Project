import { AppBar, Grid, Typography } from "@mui/material"
import { styled } from "@mui/material/styles"

export const Appbar = styled(AppBar)({
    borderRadius: 15,
    margin: '30px 0',
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
})

export const Heading = styled(Typography)({
    color: 'rgba(0,183,255, 1)',
})

export const GridContainerS = styled(Grid)`
 @media (min-width : 380px){
    flexDirection: column-reverse;
 }
`


