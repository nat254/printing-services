
import { Button } from '@mui/material';
import { Theme } from '../theme/Theme';

type ButtonProps = {
  children: React.ReactNode;
};

const Buttons = ({ children }: ButtonProps) => {
  return (
    <Theme>
      <Button variant="contained" 
      sx={{
        marginTop: "1rem",
        background: "#64232d",
        color: "#ffffff",
        fontWeight: "bold",
        fontSize: "1.0rem",
        '&:hover': {
          background: "#FAFAFA",
          border: "1px solid #64232d",
          color: "#64232d",
        },
        padding: "14px 40px",
        width: "50%",
        boxShadow: "0 8px 16px 0 rgba(0,0,0,0.2)"
      }}>{children}</Button>
    </Theme>
  );
};

export default Buttons;