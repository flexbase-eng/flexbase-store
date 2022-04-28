import { SimpleGrid } from "@mantine/core";
import ProductCard from "../../components/product/productcard";

const StorePage = () => {
    return (
        <SimpleGrid cols={3}>
            <ProductCard image="/images/scrapper.jpeg" title="Scrapper" price={42} sku="A1"/>
            <ProductCard image="/images/bonecrusher.jpeg" title="Bonecrusher" price={100} sku="A2"/>
            <ProductCard image="/images/hook.jpeg" title="Hook" price={3900} sku="A3"/>
            <ProductCard image="/images/longhaul.jpeg" title="Long Haul" price={1} sku="A4"/>
            <ProductCard image="/images/mixmaster.jpeg" title="Mixmaster" price={150} sku="A5"/>
            <ProductCard image="/images/scavenger.jpeg" title="Scavenger" price={403} sku="A6"/>
        </SimpleGrid>
    );
}

export default StorePage;