import { atom } from "recoil";
import ICartProduct from "../entities/ICartProduct";

const cartState = atom<ICartProduct[]>({
    key: "cartState",
    default: []
});

export default cartState;