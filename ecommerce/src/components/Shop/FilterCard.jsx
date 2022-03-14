import React from "react";
import "./../../css/ShopStyle/FilterCard.css";

function FilterCard({ title, options, handleChange, optionCheck }) {
    return (
        <div className="filtercard-container">
            <div className="filter__heading">
                <h3>{title}</h3>
            </div>
            <div className="filter__options">
                <form>
                    {options.map((item, idx) => {
                        const a = item.id;
                        return (
                            <div className="filter__form-group" key={idx}>
                                <input
                                    type="checkbox"
                                    id={`${item.id}`}
                                    checked={optionCheck[a]}
                                    onChange={handleChange}
                                    name={`${item.label}`}
                                />
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
