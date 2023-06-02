import { Box, Text } from '@chakra-ui/react';
import { FC, useEffect,useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import { MovieDetail } from '../Interface';

interface Props {

}

let SingleMoviePage: FC<Props> = ({ }) => {

    const { id } = useParams();
    const [movieData,setMovieData] = useState<MovieDetail>();

    useEffect(() => {
        const getMovieDetails = async () => {
            try{    
                const response = await axios(`https://api.themoviedb.org/3/movie/${id}?api_key=${import.meta.env.VITE_REACT_API_KEY}`);
                const data = response.data;
                setMovieData(data);
            }catch(e){

            }
        }
        getMovieDetails();
    }, [id]);


    return (
        <Box>
            <Text color={"brand.500"} fontWeight={"regular"} fontSize={"xxs"}>{movieData?.original_title}</Text>
        </Box>
    )
}
export default SingleMoviePage