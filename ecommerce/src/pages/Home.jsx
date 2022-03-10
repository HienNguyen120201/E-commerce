import React, {} from "react";
import { Link } from "react-router-dom";
function Home() {
    return (
        <div>
            <Link to="/shop">
                <h2>Shop now !</h2>
            </Link>
        </div>
    );
}

export default Home;
