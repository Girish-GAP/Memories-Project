import {styled} from '@mui/material/styles'
import {Card , CardActions , CardContent , CardMedia , Button , Typography , Box} from '@mui/material'

export const CardMediaS = styled(CardMedia)({
  height: "0",
  paddingTop: '56.25%',
  backgroundColor: 'rgba(0, 0, 0, 0.5)',
  backgroundBlendMode: 'darken',
})

export const CardS = styled(Card)({
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'space-between',
  borderRadius: '15px',
  height: '100%',
  position: 'relative',
})

export const Box1S = styled(Box)({
  position: 'absolute',
  top: '20px',
  left: '20px',
  color: 'white',
})

export const Box2S = styled(Box)({
  position: 'absolute',
    top: '20px',
    right: '20px',
    color: 'white',
})

export const Box3S = styled(Box)({
  display: 'flex',
  justifyContent: 'space-between',
  margin: '20px',
})

export const CardActionsS = styled(CardActions)({
  padding: '0 16px 8px 16px',
  display: 'flex',
  justifyContent: 'space-between',
})


   
 
//   border: {
//     border: 'solid',
//   },
//   fullHeightCard: {
//     height: '100%',
//   },
//   grid: {
//     display: 'flex',
//   },
//   details: {
//     
//   },
//   title: {
//     padding: '0 16px',
//   },
// });