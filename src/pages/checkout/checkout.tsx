import { Card, Container, Divider, Group, Text, Space } from "@mantine/core";
import { useRecoilValue } from "recoil";
import cartState from "../../state/cartState";
import 'pay-with-flexbase';

const CheckoutPage = () => {

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
                        <Group position="apart" key={item.id}>
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
                    <pay-with-flexbase flexbaseDomain="https://dev-v2.flexbase.app" apikey="067e554c-119f-4741-8697-e59a08e42f51" amount={(total + tax)} callback="/paymentResult" session="testSession"  />
                </Group>
            </Card>
        </Container>
    );
}

export default CheckoutPage;