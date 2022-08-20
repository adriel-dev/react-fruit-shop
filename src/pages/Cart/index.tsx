import Grid from "@mui/material/Grid";
import Container from "@mui/material/Container";
import CartItem from "../../components/CartItem";
import CartCheckout from "../../components/CartCheckout";
import Typography from "@mui/material/Typography";
import ShoppingBasketIcon from '@mui/icons-material/ShoppingBasket';
import Button from "@mui/material/Button";
import { Fruit } from "../../types/Fruit";
import { useState } from "react";

type CartProps = {
    cartItems: Fruit[];
    handleRemoveItem: (itemToRemove: Fruit) => void;
}

export default function Cart(props: CartProps) {

    const {cartItems, handleRemoveItem} = props;

    const [value, setValue] = useState(1);

    const forceUpdate = () => {
        setValue(value + 1);
    };

    const handleRemoveClick = (itemToRemove: Fruit) => {
        handleRemoveItem(itemToRemove);
        forceUpdate();
    };

    return (
        <Container>
            <Typography gutterBottom variant="h5" component="div" mt={6}>
                <ShoppingBasketIcon/> Itens do carrinho
            </Typography>
            <Button color='error'>Limpar carrinho</Button>
            <Grid container spacing={10}>
                <Grid item xs={12} sm={12} md={8}>
                    {cartItems.map((item) => (
                        <CartItem key={item.id} item={item} handleRemoveItem={handleRemoveClick} />
                    ))}
                </Grid>
                <Grid item xs={12} sm={8} md={4}>
                    <CartCheckout/>
                </Grid>
            </Grid>
        </Container>
    );

}