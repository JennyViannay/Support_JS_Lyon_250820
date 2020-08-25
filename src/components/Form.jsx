import React from 'react';

const Form = (props) => {
    return (
        <div className="container">
            <form onSubmit={props.getUser}>
                <input type="text" name="userName" required/>

                <select name="selectable" multiple >
                    <option value="1">1</option>
                    <option value="2">2</option>
                    <option value="3">3</option>
                    <option value="4">4</option>
                    <option value="5">5</option>
                </select>

              
                <input type="checkbox" value="" name="checkbox" defaultChecked={false} />

                <button type="submit">submit</button>
            </form>
        </div>
    )
}

export default Form;