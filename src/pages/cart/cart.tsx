import { Button, SimpleGrid } from "@mantine/core";
import { Link } from "react-router-dom";
import { useRecoilValue } from "recoil";
import CartCard from "../../components/cart/cartcard";
import cartState from "../../state/cartState";

interface Props {
    closeCart(): void
}

const CartPage = (props: Props) => {

    const cart = useRecoilValue(cartState);

    if (cart.length === 0) {
        return (
            <div>No items</div>
        );
    }

    return (
        <SimpleGrid cols={1}>
            <Button onClick={props.closeCart} component={Link} to="/checkout">Checkout</Button>
            {
                cart.map(item => {
                    return (
                        <CartCard title={item.title} image={item.image} sku={item.sku} price={item.price} id={item.id} />
                    );
                })
            }
        </SimpleGrid>
    );
};

export default CartPage;