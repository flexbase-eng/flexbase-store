import { createStyles, Navbar } from "@mantine/core";
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
    }
}));

interface Props {
    links: INavLink[]
}

const SideNavbar = (props: Props) => {

    const { classes } = useStyles();
    const [opened] = useState(false);

    let id = 0;

    return (
        <Navbar className={classes.navbar} width={{ base: "100%", sm: 0 }} hidden={!opened}>
            {props.links.map(link => {
                return (
                    <NavLink key={id++} to={link.path}>
                        {link.text}
                    </NavLink>
                );
            })}
        </Navbar>
    );
}

export default SideNavbar;