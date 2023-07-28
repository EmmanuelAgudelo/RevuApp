import StarRatings from 'react-star-ratings';

interface IProps {
    rating: number
}

export const RatingsStar = ({rating}: IProps) => {
        return (
            <StarRatings
                rating={rating}
                starDimension="20px"
                starSpacing=".5rem"
                starRatedColor="#ffc00d"
            />
        );
}