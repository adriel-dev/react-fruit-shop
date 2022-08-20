import CardMedia from "@mui/material/CardMedia";
import Card from "@mui/material/Card";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";
import IconButton from "@mui/material/IconButton";
import AddShoppingCart from '@mui/icons-material/AddShoppingCart';
import CardActions from "@mui/material/CardActions";
import InfoIcon from '@mui/icons-material/InfoOutlined';
import Tooltip from "@mui/material/Tooltip";
import { useState } from 'react';
import NutritionalModal from "../NutritionalModal";
import { Fruit } from "../../types/Fruit";

type CardProps = {
    fruit: Fruit;
    handleAddItem: (item: Fruit) => void;
}

export default function CustomCard(props: CardProps) {

    const { fruit, handleAddItem } = props;

    const [modalOpen, setModalOpen] = useState(false);

    
    const handleAddClick = (item: Fruit) => {
        handleAddItem(item);
    };

    const handleInfoClick = () => {
        setModalOpen(true);
    };

    const handleClose = () => {
        setModalOpen(false);
    };

    return (
        <Grid item md={3} sm={6} xs={12}>
            <Card variant="elevation">
                <CardMedia
                    component="img"
                    height="180"
                    image="/default-placeholder.png"
                    alt="Fruit image"
                />
                <CardContent>
                    <Typography gutterBottom variant="h5" component="div">
                        {fruit.name}
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                        Order: {fruit.order}
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                        Genus: {fruit.genus}
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                        Family: {fruit.family}
                    </Typography>
                </CardContent>
                <CardActions disableSpacing sx={{ display: 'flex', justifyContent: 'space-between' }}>
                    <Tooltip title='Informações nutricionais' arrow>
                        <IconButton onClick={handleInfoClick}> <InfoIcon/> </IconButton>
                    </Tooltip>
                    <Button variant="contained" size="small" onClick={() => handleAddClick(fruit)} > <AddShoppingCart/> </Button>
                </CardActions>
                <NutritionalModal open={modalOpen} onClose={handleClose} nutritions={fruit.nutritions} fruitName={fruit.name}/>
            </Card>
        </Grid>
    )
}