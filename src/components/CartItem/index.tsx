import DeleteIcon from '@mui/icons-material/Delete';
import Typography from "@mui/material/Typography";
import Box from '@mui/system/Box';
import IconButton from '@mui/material/IconButton';
import Input from '@mui/material/Input';
import { Fruit } from '../../types/Fruit';

type CartItemProps = {
    item: Fruit;
    handleRemoveItem: (itemToRemove: Fruit) => void;
}

export default function CartItem(props: CartItemProps) {

    const { item, handleRemoveItem } = props;

    const handleDeleteClick = (itemToRemove: Fruit) => {
        handleRemoveItem(itemToRemove);
    }

    return (
        <Box sx={{
            display: 'flex', flexDirection: 'row', marginBottom: '10px',
            justifyContent: 'space-between', alignItems: 'center', boxShadow: '3'
        }}>
            <img src="/default-placeholder.png" alt="" width={100} />
            <div>
                <Typography gutterBottom variant="h5" component="div">
                    {item.name}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                    Order: {item.order}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                    Genus: {item.genus}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                    Family: {item.family}
                </Typography>
            </div>
            <div>
                <Typography variant="body2" color="text.secondary" textAlign={'center'}>Quant:</Typography>
                <Input type="number" inputProps={{ min: 0, max: 99 }} />
            </div>
            <IconButton size='small' color='error' sx={{ marginRight: '10px' }} onClick={() => handleDeleteClick(item)} >
                <DeleteIcon sx={{ fontSize: '28px' }} />
            </IconButton>
        </Box>
    );
}