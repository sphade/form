import { Container, Typography, TextField, Button } from "@mui/material";
import Link from "next/link";

export default function Home() {
  return (
    <Container maxWidth="sm" className="container">
      <Typography align="center" variant="h1" gutterBottom="true">
        sign up
      </Typography>
      <div className="main">
        <TextField
          fullWidth
          type={"text"}
          label="first name"
          variant="filled"
        />
        <TextField fullWidth type={"text"} label="last name" variant="filled" />
        <TextField fullWidth type={"email"} label="email" variant="filled" />
        <TextField
          fullWidth
          label="password"
          type={"password"}
          variant="filled"
        />
        <Button fullWidth variant="contained" color="primary">
          sign-up 
        </Button>
        <p>or</p>
        <Link href="/login">
          <a>log-in</a>
        </Link>
      </div>
    </Container>
  );
}
