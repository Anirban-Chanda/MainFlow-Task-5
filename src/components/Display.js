
import "./Display.css";

const Display = ({ num0, operator, num }) => {
    return (
        <div className="display bg-dark">
            {operator === "" || (operator === "√" && !num0) ? "" : num0} {operator} {num}
        </div>
    );
};

export default Display;