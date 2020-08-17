import React,{Component} from "react";
import firebase from "./firebase";
import { Link } from 'react-router-dom';

class Register extends Component {

    constructor(props){
        super(props);

        this.state={
            user:'',
            pass:'',
            re_pass:'',
            curr_user:''
        }

        this.handleChange_user=this.handleChange_user.bind(this);
        this.handleChange_pass=this.handleChange_pass.bind(this);
        this.handleChange_Repass=this.handleChange_Repass.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    signUp(e){
        e.preventDefault();
        firebase.auth().createUserWithEmailAndPassword(this.state.user,this.state.pass).then((u)=>{
            console.log(u)
        }).catch((err)=>{
            console.log(err);
        })
    }

    handleChange_user=(event)=>{
        this.setState({user: event.target.value});
    }
    handleChange_pass=(event)=>{
        this.setState({pass: event.target.value});
    }
    handleChange_Repass=(event)=>{
        this.setState({re_pass: event.target.value});
    }
    handleSubmit(e) {

        e.preventDefault();
        firebase.auth().createUserWithEmailAndPassword(this.state.user,this.state.pass).then((u)=>{
            console.log(u)
        }).catch((err)=>{
            console.log(err);
        })

        // const db = firebase.firestore();
        // //const data = await db.collection("quiz").get();
        // db.collection("quiz").where('username','==',this.state.user)
        // .get()
        // .then(querySnapshot => {
        //   const data = querySnapshot.docs.map(doc => doc.data());
        //   console.log(data);
        //   if(data.length>0){
        //     this.setState({ curr_user: data[0].username });
        //   }
          
        // });

        // if(this.state.user!==this.state.curr_user){

            
        //     if(this.state.user!=="" && this.state.pass!=="" && this.state.re_pass!==""){

        //         if(this.state.pass===this.state.re_pass){
        //             const db = firebase.firestore();
        //             db.collection("quiz").add({ username: this.state.user ,password: this.state.pass});
                    
        //             alert('Successfully Registred.!');
        //             this.props.history.push("/components/login");
        //             event.preventDefault();
        //         }else{
    
        //             alert('Passwords did not matched..!');
        //         }
    
        //     }else{
    
        //         alert('requried field ..!');
        //     }

        // }else{
        //     alert('this Username alredy exist..!');
        // }

       

       
        

       
      }

    //    async componentDidMount() {

        
       
    
           
    //             //  this.setState({ person: data, loading: false });
    //              // setQuiz(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
                 
    //  }
  


    render(){
        return(

            <div>
          
             <table width="100%" border='0' cellPadding='10'>
                 <tr>
                     <td width="50%"> <h5>English Tenses -Quize</h5></td>

                     <td width="50%" align='right'><Link to="/components/login"><button type="button" class="btn btn-outline-info">Login</button></Link></td>
                 </tr>
             </table>
   
  
    {/* <span class="navbar-toggler-icon"></span> */}
 
 
   
     
  

             
                <br></br>
                <br></br>

                <div class="card" class="shadow p-3 mb-5 bg-white rounded">
                 <form onSubmit={this.handleSubmit} class="text-center border border-light p-5">
                <table align='center' width='22%' cellPadding='5'>
                    <tr>
                         <td> <p class="h4 mb-4">SIGN UP</p></td>
                       </tr>
                   
                    <tr>
                        <td>   <input type='text' id="validationCustom01" class="form-control mb-10 " placeholder="Username" value={this.state.user}  onChange={this.handleChange_user} /></td>
                    </tr>
                   
                    <tr>
                        <td> <input type='password'  id="defaultLoginFormEmail" class="form-control mb-10 " placeholder="Password" onChange={this.handleChange_pass}  /></td>
                    </tr>
                   
                    <tr>
                        <td> <input type='password'  id="defaultLoginFormEmail" class="form-control mb-10 " placeholder="Re-enter Password" onChange={this.handleChange_Repass}  /></td>
                    </tr>
                    <tr>
                        <td>&nbsp;</td>
                    </tr>
                    <tr>
                        <td align='right'><button type='submit' class="btn btn-info btn-block my-6">Signup</button></td>
                    </tr>
                </table>
                </form>
                <br></br> 
                </div>
            </div>
        );
    }
}

export default Register;