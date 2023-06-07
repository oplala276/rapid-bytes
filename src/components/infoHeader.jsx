import { Box, styled, Typography } from "@mui/material";
// import styled from "@emotion/styled";

const Cont = styled(Box)(({ theme }) => ({
    background: 'red',
    color: '#fff',
    display: 'flex',
    alignItems: 'center',
    height: 48,
    marginBottom: 30,
    [theme.breakpoints.down('md')]: {
        display: 'none'
    }
}));

const Image = styled('img')({
    height: 34,
    '&:last-child': {
        margin: '0 50px 0 20px'
    }
});
const Text = styled(Typography)`
font-size:14px;
fontweight:300;
margin-left:50px;
`;
const infoHeader = () => {
    const appleStore = 'https://assets.inshorts.com/website_assets/images/appstore.png';
    const googleStore = 'https://assets.inshorts.com/website_assets/images/playstore.png';
    return (
        <Cont>
            <Text>
                For getting updated about world use Rapid News
            </Text>
            <Box style={{ display: 'flex', marginLeft: 'auto' }}>
                <Image src={appleStore} />
                <Image src={googleStore} />

            </Box>
        </Cont>


    )
}

export default infoHeader;