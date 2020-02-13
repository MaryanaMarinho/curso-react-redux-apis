import React, {Component} from "react";
import User from "./User";
import photo from './user.png'

class Maryana extends Component {
    render() {
        return(
            <div>
                Eu sou um componete chamdo Maryana

                {/*passando propriedades*/}
                <User name="Maryana" photo={photo}/>
                <User name="Maria"/>
                <User name="Marimar"/>
            </div>
        );
    }
}

export default Maryana;