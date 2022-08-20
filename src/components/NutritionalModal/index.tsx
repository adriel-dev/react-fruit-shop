import Button from '@mui/material/Button';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import Paper from '@mui/material/Paper';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Typography  from '@mui/material/Typography';
import Dialog from '@mui/material/Dialog';
import DialogTitle from '@mui/material/DialogTitle';

import { Nutrition } from '../../types/Nutrition';

type ModalProps = {
    open: boolean;
    onClose: () => void;
    nutritions: Nutrition;
    fruitName: string;
}

export default function NutritionalModal(props: ModalProps) {

    const { open, onClose, nutritions, fruitName } = props;

    const handleClose = () => {
        onClose();
    };

    return (
        <Dialog open={open} onClose={handleClose} BackdropProps={{ style: { backgroundColor: "rgba(0,0,0,0.3)" } }}>
            <DialogTitle>
                Tabela Nutricional
                <Typography variant="body1" color="text.secondary">
                    {fruitName}
                </Typography>
            </DialogTitle>
            <DialogContent>
                <TableContainer component={Paper}>
                    <Table size='small'>
                        <TableHead>
                            <TableRow>
                                <TableCell></TableCell>
                                <TableCell align="right">Quantidade por porção</TableCell>
                            </TableRow>
                        </TableHead>
                        <TableBody>
                            <TableRow>
                                <TableCell align="right">Calorias</TableCell>
                                <TableCell align="right">{nutritions.calories} Kcal</TableCell>
                            </TableRow>
                            <TableRow>
                                <TableCell align="right">Carboidratos</TableCell>
                                <TableCell align="right">{nutritions.carbohydrates} g</TableCell>
                            </TableRow>
                            <TableRow>
                                <TableCell align="right">Gorduras</TableCell>
                                <TableCell align="right">{nutritions.fat} g</TableCell>
                            </TableRow>
                            <TableRow>
                                <TableCell align="right">Proteínas</TableCell>
                                <TableCell align="right">{nutritions.protein} g</TableCell>
                            </TableRow>
                            <TableRow>
                                <TableCell align="right">Açúcares</TableCell>
                                <TableCell align="right">{nutritions.sugar} g</TableCell>
                            </TableRow>
                        </TableBody>
                    </Table>
                </TableContainer>
            </DialogContent>
            <DialogActions>
                <Button onClick={handleClose}>Fechar</Button>
            </DialogActions>
        </Dialog>
    );
}