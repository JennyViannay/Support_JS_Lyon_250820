import React, { Component } from 'react';
import axios from 'axios';
import Form from './Form'
import CardUser from './CardUser';

class Home extends Component {
    state = {
        user: null,
        isChecked: null,
        selected: []
    }

    getUser = (e) => {
        e.preventDefault()

        //Recuperation des infos github via api et axios
        axios.get(`https://api.github.com/users/${e.target.elements.userName.value}`)
            .then((response) => {
                this.setState({
                    user: response.data
                })
            })

        // Traitement et recuperation des selected option by user
        // tab de tous les select
        const select = e.target.selectable;
        // On boucle sur tous les select et on test si ils sont selected
        const arrayFromSelected = []
        for (let i = 0; i <= 4; i++) {
            if (select[i].selected) {
                // si c'est le cas alors je set state et garde les précedents selected
                arrayFromSelected.push(select[i].value)
            }
        }
        this.setState({
            selected: arrayFromSelected
        })

        // Traitement checkbox
        this.setState({
            isChecked: e.target.checkbox.checked
        })
    }

    render() {
        console.log(this.state)
        return (
            <div>
                <Form getUser={this.getUser} />
                {
                    this.state.user ?
                        <CardUser name={this.state.user.name} image={this.state.user.avatar_url} />
                        : 'Entrez un nom utilisateur'
                }
            </div>
        );
    }
}

export default Home;
