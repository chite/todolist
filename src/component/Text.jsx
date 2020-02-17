import React from 'react';
import { FaTrash } from "react-icons/fa";

function Text({ content, handleClick, marked, handleDelete, ...props }) {
    return (
        <div className="list__item">
            <h4 className={`list__title ${marked ? 'list__title--marked' : ''}`}>{content}</h4>
            <div className="area">
                <input
                    type="checkbox"
                    className="area__box"
                    checked={marked}
                    onChange={handleClick}
                />
                <button
                    className="area__btn"
                    onClick={handleDelete}
                >
                    <FaTrash />
                </button>
            </div>
        </div>
    )
}

export default Text;
