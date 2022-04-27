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
import {AuthBD} from "./authorization/bd";

function Auth(router, log, pas){
    console.log(router, log, pas, AuthBD.length)
    let role = ''
    AuthBD.forEach(e => {
        if(e.login==log && e.password==pas){
            role = e.role
        }
    })

    console.log(role)

    switch (role) {
        case 'user':
            router.push('/user')
            break;
        case 'manager':
            router.push('/manager')
            break;
        case 'admin':
            router.push('/admin')
            break;
        default:
            console.log('В БД таких нет!')
    }
}

export default function SignIn() {
    const router = useRouter()


    const [valueLogin, setValueLogin] = useState('')
    const [valuePassword, setValuePassword] = useState('')
    // console.log(router, valueLogin, valuePassword)

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
                        id="login"
                        label="Login"
                        name="login"
                        autoComplete="login"
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
                        value = {valuePassword}
                        onChange={(e)=>setValuePassword(e.target.value)}
                    />
                    <FormControlLabel
                        control={<Checkbox value="remember" color="primary" />}
                        label="Запомнить пароль"
                    />
                    <Button
                        // type="submit"
                        fullWidth
                        variant="contained"
                        color="primary"
                        onClick={()=>Auth(router, valueLogin, valuePassword)}
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