import React from 'react';

function Add({textValue, handleChange, handleClick, ...props}) {
    return (
        <section className="add">
            <h3 className="add__title">Add to the todo list</h3>
            <div className="widget">
                <input
                    type="text"
                    className="widget__input"
                    value={textValue}
                    onChange={handleChange}
                />
                <button
                    className="widget__btn"
                    onClick={handleClick}
                >ADD&nbsp;&nbsp;ITEM</button>
            </div>
        </section>
    )
}

export default Add;
