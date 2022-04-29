import { Burger, Button, Container, createStyles, Drawer, Group, Header, MediaQuery, useMantineTheme } from "@mantine/core";
import { useState } from "react";
import { Link } from "react-router-dom";
import CartPage from "../../pages/cart/cart";
import CartButton from "../cart/cartbutton";
import INavLink from "./INavLink";

const useStyles = createStyles((theme) => ({
    navbar: {
        [theme.fn.largerThan("sm")]: {
            display: "none"
        }
    },

    links: {
        [theme.fn.smallerThan("sm")]: {
            display: "none"
        }
    },

    inner: {
        height: 60,
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
    },
}));

interface Props {
    links: INavLink[]
}

const TopNavbar = (props: Props) => {
    const { classes } = useStyles();
    const [opened, setOpened] = useState(false);
    const [drawerOpen, setDrawerOpen] = useState(false);

    const theme = useMantineTheme();

    return (
        <>
            <Header height={60}>
                <Container fluid className={classes.inner}>
                    <MediaQuery largerThan="sm" styles={{ display: 'none' }}>
                        <Burger opened={opened} onClick={() => setOpened((o) => !o)} size="sm" mr="xl" />
                    </MediaQuery>
                    <Group spacing={5}>
                        <div className={classes.links}>
                            {
                                props.links.map(link =>
                                    <Button component={Link} to={link.path}> {link.text}</Button>
                                )
                            }
                        </div>
                    </Group>
                    <Group>
                        {/* <Button>Login</Button> */}
                        <CartButton handleClick={() => setDrawerOpen(true)} />
                    </Group>
                </Container>
            </Header>
            <Drawer opened={drawerOpen} onClose={() => setDrawerOpen(false)}
                position="right"
                padding="lg"
                overlayColor={theme.colorScheme === 'dark' ? theme.colors.dark[9] : theme.colors.gray[2]}
                overlayOpacity={0.55}
                overlayBlur={3} >
                <CartPage closeCart={() => setDrawerOpen(false)} />
            </Drawer>
        </>
    );
}

export default TopNavbar;