import { SimpleGrid } from "@mantine/core";
import { useRecoilValue } from "recoil";
import CartCard from "../../components/cart/cartcard";
import cartState from "../../state/cartState";

const CartPage = () => {

    const cart = useRecoilValue(cartState);

    return (
        <SimpleGrid cols={1}>
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