import { AppShell } from "@mantine/core";
import { Route, Routes } from "react-router";
import INavLink from "../../components/nav/INavLink";
import SideNavbar from "../../components/nav/sidenavbar";
import TopNavbar from "../../components/nav/topnavbar";
import CheckoutPage from "../checkout/checkout";
import StorePage from "../store/store";

const MainPage = () => {

    const links = [
        { id: 1, text: "Products", path: "/" }

    ] as INavLink[];

    return (
        <AppShell fixed navbarOffsetBreakpoint="sm" padding="md" header={<TopNavbar links={links} />} navbar={<SideNavbar links={links} />}
            styles={(theme) => ({
                main: { backgroundColor: theme.colorScheme === 'dark' ? theme.colors.dark[8] : theme.colors.gray[0] },
            })}>
            <Routes>
                <Route path="/" element={<StorePage />} />
                <Route path="/checkout" element={<CheckoutPage />} />
            </Routes>

        </AppShell>
    );
}

export default MainPage;