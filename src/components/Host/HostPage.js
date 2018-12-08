import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import axios from 'axios';

export default class HostPage extends Component {
    constructor(){
        super();
        this.state={

        }
    }
    async componentDidMount(){
        const user = await axios.get('/api/sessions')
        if(user.data){
            const hostInfo = await axios.get(`/api/host/${user.data.user.id}`);
            console.log(hostInfo.data)
            this.setState({hostInfo: hostInfo.data})
        }
    }
    render() {
        let hostMoments = this.state.hostInfo && this.state.hostInfo.map(el=>{
            return <div>
                        <p>{el.title}</p>
                        <p>{el.date_created}</p>
                    </div>
        })
        return (
            <div className="hostpage">
                <div className="hostpage-header">
                    <div className="hostpage-text">
                        <h2>Welcome Back</h2>
                        <p>Keep track of all your moments. Happy hosting!</p>
                    </div>
                    <div className="hostpage-newIdea-button">
                        <Link to='/host/create'><button>New Idea</button></Link>
                    </div>
                </div>
                {hostMoments}
            </div>
        );
    }
}