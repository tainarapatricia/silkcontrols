import React, {Component} from 'react'
import{ View,} from 'react-native'
import { Scene, Router } from 'react-native-router-flux';

import Login from './AuthContainer/Login';
import Singup from './AuthContainer/Singup';
import Dashboard from './MainContainer/Dashboard';

class RouterComponent extends Component {
    constructor (props) {
        super (props);
        this.state = {};
    }

   render () {
    return (
    <View styles={styles.container}>
        <Router>
            <Scene key='app'>
             <Scene key='auth'>
                <Scene key= 'login'
                    component={Login}
                    initial />
                <Scene 
                    key='singup'
                    component={Singup}/>
                <Scene 
                    key='dashboard'
                    component={Dashboard}/>  
             </Scene>
            </Scene>
        </Router>    
    </View>
    )
    }; 
}
 const styles = {
     container:{
         flex:1,
     } 
 }

 export default RouterComponent