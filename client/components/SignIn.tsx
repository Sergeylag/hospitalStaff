import React, {useState} from 'react';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import Link from '@mui/material/Link';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import security from '../public/icons/security.png';
import {useRouter} from "next/router";


export default function SignIn() {
    const router = useRouter()
    console.log(router)
    const [valueLogin, setValueLogin] = useState('')
    return (
        <Container component="main" maxWidth="xs">
            <CssBaseline />
            <div>
                <Avatar src={security.src} className='avatar'/>
                <Typography className='typography' component="h1" variant="h5">
                    Войдите
                </Typography>
                <form noValidate>
                    <TextField
                        variant="outlined"
                        margin="normal"
                        required
                        fullWidth
                        id="email"
                        label="Login"
                        name="email"
                        autoComplete="email"
                        autoFocus
                            value = {valueLogin}
                            onChange={(e)=>setValueLogin(e.target.value)}
                    />
                    <TextField
                        variant="outlined"
                        margin="normal"
                        required
                        fullWidth
                        name="password"
                        label="Password"
                        type="password"
                        id="password"
                        autoComplete="current-password"
                    />
                    <FormControlLabel
                        control={<Checkbox value="remember" color="primary" />}
                        label="Запомнить пароль"
                    />
                    <Button
                        type="submit"
                        fullWidth
                        variant="contained"
                        color="primary"
                        onClick={()=>router.push('/test')}
                    >
                        Войти
                    </Button>
                    <Grid container>
                        <Grid item xs>
                            <Link href="#" variant="body2">
                                Забыли пароль?
                            </Link>
                        </Grid>
                        <Grid item>
                            <Link href="#" variant="body2">
                                {"Регистрация"}
                            </Link>
                        </Grid>
                    </Grid>
                </form>
            </div>
        </Container>
    );
}