import { useNavigate } from "react-router-dom";

const Card = ({ title, description, buttontxt, url, navigator }) => {
    const navigate = useNavigate();

    const handleButtonClick = () => {
        navigate(navigator);
    }

    return (
        <div className="max-w-sm rounded overflow-hidden shadow-lg bg-white">
            {url &&
                <img
                    className="w-full"
                    src={url}
                    alt="Card"
                />
            }
            <div className="px-6 py-4">
                <div className="font-bold text-xl mb-2 flex items-center justify-center">{title}</div>
                <p className="text-gray-700 text-base">
                    {description}
                </p>
            </div>
            <div className="px-6 pt-4 pb-6 flex items-center justify-center">
                <button className="w-4/5 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded" onClick={handleButtonClick}>
                    {buttontxt}
                </button>
            </div>
        </div>
    );
};

export default Card;
