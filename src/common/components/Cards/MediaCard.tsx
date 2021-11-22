import React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import imagemIguana from '../../img/lagarto.jpg';
import styles from './MediaCard.module.css';
import { Box } from '@mui/system';

const MediaCard: React.FC = () => {
    return (
        <Card sx={{ maxWidth: 345 }}>
            <CardContent>
                <Box
                    sx={{
                        display: "flex",
                        justifyContent:"flex-start",
                        p: 1,
                        bgcolor: "background.grey"
                    }}
                    >
                    <Box>
                        Imagem
                    </Box>
                    <Box>
                        Texto teste
                    </Box>
                    <Box>
                        {">"}
                    </Box>
                </Box>
            </CardContent>
            
            <CardActions>
                <Button size="small">Share</Button>
                <Button size="small">Learn More</Button>
            </CardActions>
        </Card>
    );
}

export { MediaCard };