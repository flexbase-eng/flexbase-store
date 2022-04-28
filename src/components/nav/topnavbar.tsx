import { Burger, Button, Container, createStyles, Group, Header, MediaQuery } from "@mantine/core";
import { useState } from "react";
import { NavLink } from "react-router-dom";
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

    return (
        <Header height={60}>
            <Container fluid className={classes.inner}>
            <MediaQuery largerThan="sm" styles={{ display: 'none' }}>
                <Burger opened={opened} onClick={() => setOpened((o) => !o)} size="sm" mr="xl" />
            </MediaQuery>
            <Group spacing={5}>
                <div className={classes.links}>
                    {
                        props.links.map(link => {
                            return (
                                <Button>
                                    <NavLink to={link.path}>
                                        {link.text}
                                    </NavLink>
                                </Button>
                            );
                        })
                    }
                </div>
            </Group>
            <Button>Login</Button>
            </Container>
        </Header>

    );
}

export default TopNavbar;