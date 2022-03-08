import React from "react";
import "./../assets/css/FilterCard.css";
function FilterCard({ title, options, idChecked }) {
    return (
        <div className="filtercard-container">
            <div className="filter__heading">
                <h3>{title}</h3>
            </div>
            <div className="filter__options">
                <form>
                    {options.map((item, idx) => {
                        return (
                            <div className="filter__form-group">
                                <input type="checkbox" id={`${item.id}`} defaultChecked = {idx === idChecked} />
                                <label
                                    htmlFor={`${item.id}`}
                                >{`${item.label}`}</label>
                            </div>
                        );
                    })}
                </form>
            </div>
        </div>
    );
}

export default FilterCard;
