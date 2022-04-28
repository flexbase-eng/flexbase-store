import { Badge, Button, Card, Group, Image, Text, useMantineTheme } from "@mantine/core";

interface Props {
    image: string,
    title: string,
    price: number,
    sku: string
}

const ProductCard = (product: Props) => {

    const theme = useMantineTheme();

    const secondaryColor = theme.colorScheme === 'dark'
      ? theme.colors.dark[1]
      : theme.colors.gray[7];

    return (
        <Card shadow="md" p="lg">
            <Card.Section>
                <Image fit="contain" src={product.image} height={160} alt={product.title} />
            </Card.Section>

            <Group position="apart" style={{ marginBottom: 5, marginTop: theme.spacing.sm }}>
                <Text weight={500}>{product.title}</Text>
                <Badge color="orange" variant="light">${product.price}</Badge>
            </Group>

            <Text size="sm" style={{ color: secondaryColor, lineHeight: 1.5 }}>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
            </Text>

            <Button fullWidth variant="light" color="blue" style={{ marginTop: 14 }}>Add to cart</Button>
        </Card>

    );
};

export default ProductCard;