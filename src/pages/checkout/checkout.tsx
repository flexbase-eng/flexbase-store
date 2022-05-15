import { Card, Container, Divider, Group, Text, Space } from "@mantine/core";
import { useRecoilValue } from "recoil";
import cartState from "../../state/cartState";
const PayWithFlexbase = require("@flexbase-eng/pay-with-flexbase.git");

const CheckoutPage = () => {

    window.customElements.define("pay-with-flexbase", PayWithFlexbase);

    const cart = useRecoilValue(cartState);

    let tax = 0;
    let total = 0;

    cart.forEach(item => total += item.price);

    tax = total * 0.0975;

    return (
        <Container size="sm">
            <Card shadow="md" p="lg">
                {
                    cart.map(item =>
                        <Group position="apart">
                            <Text>{item.title}</Text>
                            <Text>${item.price}</Text>
                        </Group>
                    )
                }

                <Divider my="md" size="sm" />

                <Group position="apart">
                    <Text>Subtotal</Text>
                    <Text>${total}</Text>
                </Group>

                <Group position="apart">
                    <Text>Tax</Text>
                    <Text>${tax}</Text>
                </Group>

                <Divider my="md" size="sm" />

                <Group position="apart">
                    <Text size="xl">Total Due</Text>
                    <Text size="xl">${total + tax}</Text>
                </Group>

                <Space h="md" />

                <Group position="right">
                    <PayWithFlexbase apikey="fe" amount={total + tax} callback="/done" />
                    {/* <Button variant="outline" color="flexbase-orange" rightIcon={<FlexbaseLogo height={25} fill="#ff5745" />}>
                        <Text size="xl">Pay with</Text>
                    </Button> */}
                </Group>
            </Card>
        </Container>
    );
}

export default CheckoutPage;