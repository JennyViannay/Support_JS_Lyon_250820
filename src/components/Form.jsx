import React from 'react';

const Form = (props) => {
    return (
        <div className="container">
            <form onSubmit={props.getUser}>
                <div className="form-group">
                    <label htmlFor="username">Username</label>
                    <input type="text" name="userName" required className="form-control" id="username" aria-describedby="emailHelp" />
                </div>
                <div className="form-group">
                    <label htmlFor="exampleFormControlSelect1">Example select</label>
                    <select className="form-control" name="selectable" multiple>
                        <option value="1">Lorem Ipsum 1</option>
                        <option value="2">Lorem Ipsum 2</option>
                        <option value="3">Lorem Ipsum 3</option>
                        <option value="4">Lorem Ipsum 4</option>
                        <option value="5">Lorem Ipsum 5</option>
                    </select>
                </div>
                <div className="form-group">
                    <label htmlFor="text">Example textarea</label>
                    <textarea className="form-control" id="text" rows="3"></textarea>
                </div>
                <div className="form-group">
                    <label htmlFor="checkbok">Accépter les Conditions générales</label>
                    <input type="checkbox" value="" name="checkbox" defaultChecked={false} id="checkbok" required/>
                </div>
                <button type="submit" className="btn btn-primary">Submit</button>
            </form>
        </div>
    )
}

export default Form;