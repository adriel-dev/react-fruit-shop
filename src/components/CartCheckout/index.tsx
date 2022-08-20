import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import { Button } from "@mui/material";

export default function CartCheckout() {
    return (
        <Box sx={{ marginBottom: '30px' }}>
            <Typography gutterBottom variant="h5" component="div">
                Resumo
            </Typography>
            <Typography variant="body2" color="text.secondary">
                Valor total dos produtos: R$0,00
            </Typography>
            <Typography variant="body2" color="text.secondary">
                Frete: R$0,00
            </Typography>
            <Typography color="text.primary">
                Total: R$0,00
            </Typography>
            <Button variant="outlined" fullWidth sx={{ marginTop: '30px' }}>Comprar</Button>
        </Box>
    );
}