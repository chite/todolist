import React, { useState, useEffect } from 'react';
import Text from './Text';
import Add from './Add';

function App() {
    const [key, increaseKey] = useState(0);
    const [inputText, setText] = useState('');
    const [content, setContent] = useState([]);
    const [atEnd, changePositionState] = useState(false);

    useEffect(() => {
        const data = [
            { key: 0, value: 'Learn VueJs', overline: true },
            { key: 1, value: 'Code a todo list', overline: false },
            { key: 2, value: 'Learn something else', overline: false },
            { key: 3, value: '123123', overline: false }
        ]
        increaseKey(data.length);
        setContent(data);
    }, []);

    function addElement() {
        setContent(
            [...content, {
                key,
                value: inputText,
                overline: false
            }]
        );
        increaseKey(key + 1);
        setText('');
    }
    function changeMark(key) {
        let newContent = [...content];
        newContent.every((val, index)=>{
            if(val.key === key){
                newContent[index].overline = !newContent[index].overline;
                return false;
            }else{
                return true;
            }
        })
        setContent(newContent);
    }
    function deleteText(key) {
        let newContent = [...content];
        newContent.every((val, index)=>{
            if(val.key === key){
                newContent.splice(index, 1);
                return false;
            }else{
                return true;
            }
        })
        setContent(newContent);
    }
    function textChange(e) {
        setText(e.target.value);
    }

    return (
        <article className="component">
            <section className="header">
                <h1 className="header__title">Todo List</h1>
                <p className="header__text">Get things done, one item at a time.</p>
                <hr className="header__underline"></hr>
            </section>
            <section className="list">
                {
                    content.length > 0 &&
                    content.sort((a, b) => {
                        if (atEnd) {
                            if (a.overline) return 1;
                            if (b.overline) return -1;
                        } else {
                            return a.key - b.key;
                        }
                    }).map((element) =>
                        <Text
                            content={element.value}
                            key={element.key}
                            marked={element.overline}
                            handleClick={() => changeMark(element.key)}
                            handleDelete={() => deleteText(element.key)}
                        />
                    )
                }
            </section>
            <section className="switch">
                <p className="switch__text">Move done items at the ends?</p>
                <input
                    className="switch__btn"
                    type="checkbox"
                    onChange={() => changePositionState(!atEnd)}
                ></input>
            </section>
            <Add
                handleChange={textChange}
                handleClick={addElement}
                textValue={inputText}
            />
        </article>
    )
}

export default App;
