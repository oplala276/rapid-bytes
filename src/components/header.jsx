import { AppBar, Menu, Toolbar, styled } from '@mui/material';
import { MenuBook } from '@mui/icons-material';

const Appbar = styled(AppBar)`
background:#fff;
height: 70px;
`;

const Menubar = styled(MenuBook)`
color:#00a;
`;

const Image = styled('img')({
    height: 55,
    margin: 'auto',
    paddingRight: 70
});

const Header = () => {

    const url = 'https://assets.inshorts.com/website_assets/images/logo_inshorts.png';
    return (
        <Appbar position='static'>
            <Toolbar>
                <Menubar />
                <Image src={url} />
            </Toolbar>
        </Appbar>
    )
}

export default Header;