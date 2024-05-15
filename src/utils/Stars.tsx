import { Star, StarFill } from "react-bootstrap-icons";

const renderStar = (rating: number) => {
    const stars = [];
    for (let i = 0; i < 5; i++) {
        if (i < rating) {
            stars.push(<li>
                <StarFill className="text-warning"></StarFill>
            </li>)
        }else {
            stars.push(<li>
                <Star className="text-secondary"></Star>
            </li>)
        }
    }
    return stars
}
export default renderStar