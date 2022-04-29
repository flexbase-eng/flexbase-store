import { Badge, Button, Card, Group, Image, Text } from "@mantine/core";
import { useRecoilState } from "recoil";
import ICartProduct from "../../entities/ICartProduct";
import cartState from "../../state/cartState";

const CartCard = (product: ICartProduct) => {

    const [cart, setCartState] = useRecoilState(cartState);

    const removeProduct = () => {

        var idx = cart.findIndex(x => x.id === product.id);

        if(idx >= 0)
        {
            const newCart = [...cart.slice(0, idx), ...cart.slice(idx + 1)];
            setCartState(newCart);
        }
    };

    return (
        <Card shadow="md" p="lg">
            <Card.Section>
                <Image fit="contain" src={product.image} alt={product.title} height={75} />
            </Card.Section>
            <Group noWrap>
                <Text>{product.title}</Text>
                <Badge color="orange" variant="light">${product.price}</Badge>
                <Button variant="light" color="blue" onClick={removeProduct}>Remove</Button>
            </Group>
        </Card>

    );
};

export default CartCard;