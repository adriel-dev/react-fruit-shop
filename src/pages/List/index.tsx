import Grid from "@mui/material/Grid";
import CustomCard from "../../components/CustomCard";

//import axios from 'axios';
//import { useEffect } from "react";
import { useState } from "react";
import { Fruit } from "../../types/Fruit";
import data from '../../data/fruits.json';
import { Container } from "@mui/material";

type ListProps = {
    handleAddItem: (itemToAdd: Fruit) => void;
}

export default function List(props: ListProps) {

    const handleAddItem = props.handleAddItem;

    const [fruits, setFruits] = useState<Fruit[]>(data);

    /* useEffect(() => {
        axios.get('https://www.fruityvice.com/api/fruit/all')
            .then(response => {
                const data = response.data;
                setFruits(data);
            });
    }, []); */

    return (
        <Container>
            <Grid container mt={1} mb={3} spacing={4}>
                {fruits.map((fruit: Fruit) => (
                    <CustomCard key={fruit.id} fruit={fruit} handleAddItem={handleAddItem} />
                ))}
            </Grid>
        </Container>
    )
}