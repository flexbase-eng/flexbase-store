import {Card, Container, Divider, Group, Text, Space, LoadingOverlay} from "@mantine/core";
import { useRecoilValue } from "recoil";
import cartState from "../../state/cartState";
import 'pay-with-flexbase';
import {useEffect, useState} from "react";
import {v4 as uuidv4} from "uuid";

// const flexbaseUrl = 'http://localhost:3000';
const flexbaseUrl = 'https://dev.flexbase.app';

const CheckoutPage = () => {
    const [working, setWorking] = useState(false);
    const [total, setTotal] = useState('');
    const [subtotal, setSubtotal] = useState(0);
    const [tax, setTax] = useState(0)
    const [sessionId, setSessionId] = useState('');
    const cart = useRecoilValue(cartState);

    const holdTransaction = async (amount: string) => {
        setWorking(true);
        const session = uuidv4();
        const baseUrl = 'https://dev-api.flexbase.app';
        // const baseUrl = 'http://localhost:6543';
        const requestBody = {
            amount,
            session,
            description: 'An example transaction hold',
            purchaseDate: new Date().toISOString(),
            apiKey: '067e554c-119f-4741-8697-e59a08e42f51'
        }

        const result = await fetch(`${baseUrl}/credit/buyNow/hold`, {
            method: 'POST',
            headers: {'Content-Type': 'application/json', 'Accept': 'application/json'},
            body: JSON.stringify(requestBody),
        });

        setWorking(false);

        if ( result.ok ) {
            setSessionId(session);
        }
    };

    useEffect(() => {
        const subtotal = cart.map(item => item.price).reduce((prev, curr) => curr + prev, 0);
        const taxAmount = subtotal * 0.0975;
        const finalAmount = (subtotal + taxAmount).toFixed(2);
        setSubtotal(subtotal);
        setTax(taxAmount);
        setTotal(finalAmount);
        holdTransaction(finalAmount);

    }, [cart]);

    return (
        <Container size="sm">
            <LoadingOverlay visible={working}/>
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
                    <Text>${subtotal}</Text>
                </Group>

                <Group position="apart">
                    <Text>Tax</Text>
                    <Text>${tax}</Text>
                </Group>

                <Divider my="md" size="sm" />

                <Group position="apart">
                    <Text size="xl">Total Due</Text>
                    <Text size="xl">${total}</Text>
                </Group>

                <Space h="md" />

                <Group position="right">
                    {!working && <pay-with-flexbase flexbaseDomain={flexbaseUrl} apikey="067e554c-119f-4741-8697-e59a08e42f51" callback="/paymentResult" amount={Number(total)} session={sessionId}  />}
                </Group>
            </Card>
        </Container>
    );
}

export default CheckoutPage;
