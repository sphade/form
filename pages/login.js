import { Container, Typography, TextField, Button } from "@mui/material";
import Link from "next/link";

export default function Home() {
  return (
    <Container maxWidth="sm" className="container">
      <Typography align="center" variant="h1" gutterBottom="true">
      Login    
      </Typography>
      <div className="main">
        <TextField fullWidth type={"email"} label="email" variant="filled" />
        <TextField
          fullWidth
          label="password"
          type={"password"}
          variant="filled"
        />
        <Button fullWidth variant="contained" color="primary">
          Login
        </Button>
        <p>or</p>
        <Link href="/">
     
          <a>sign-up</a>
        </Link>
      </div>
    </Container>
  );
}
