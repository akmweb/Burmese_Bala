import { Stack, Typography } from "@mui/material"
import Icon from '../assets/icons/gym.png'
import { Height } from "@mui/icons-material"

const BodyPart = ({item, setBodyPart, bodyPart}) => {
  return (
    <Stack
    type="button"
    alignItems="center"
    justifyContent="center"
    className="bodyPart-card cursor-pointer"
    sx={{
        borderTop: bodyPart === item ? '4px solid #ff2625' : '',
        backgroundColor: '#fff',
        borderBottomLeftRadius: '20px',
        width: '270px',
        height: '280px',
        cursor: 'pointer',
        gap: '47px'
    }}
     
    >
        <img src={Icon} alt="dumbbell" styles={{width: '40px', Height: '40px'}} />
    </Stack>
)
}

export default BodyPart