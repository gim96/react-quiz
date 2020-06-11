import React,{Component} from "react";
import firebase from "./firebase";
import { Link } from 'react-router-dom';

class Login extends Component {

    constructor(props){
        super(props);

        this.state = {
          // loading: true,
         // redirect: localStorage.getItem('s_user'),
           user:'',
           pass:'',
           userNN:'',
           passNN:''
         
           
         };
         
         if (localStorage.getItem('s_user')) {
          //return <Redirect to='components/login' />
          this.props.history.push("/components/task");
        }

          this.handleChange_user = this.handleChange_user.bind(this);
          this.handleChange_pass = this.handleChange_pass.bind(this);
          this.handleSubmit = this.handleSubmit.bind(this);
    }
    
    
    

     handleChange_user(event) {
        this.setState({user: event.target.value});
      }
      handleChange_pass(event) {
        this.setState({pass: event.target.value});
      }
    
      handleSubmit(event) {

        //get Username from database

        if(this.state.user!=="" && this.state.user!=="" ){

          const db = firebase.firestore();
          db.collection("quiz").where('username','==',this.state.user)
          .get()
          .then(querySnapshot => {
            const data = querySnapshot.docs.map(doc => doc.data());
            
           if(data.length>0){
  
            this.setState({ userNN:data[0].username});
           }
          
        // console.log(data);
          });
        
          //get password from database
          db.collection("quiz").where('password','==',this.state.pass)
          .get()
          .then(querySnapshot => {
            const data2 = querySnapshot.docs.map(doc => doc.data());
            if(data2.length>0){
              this.setState({ passNN:data2[0].password });
            }
          
            if(this.state.user===this.state.userNN && this.state.pass===this.state.passNN){
              localStorage.setItem('s_user',this.state.userNN);
              this.props.history.push("/components/task");
              //alert('ok');
            }else{
              alert('Login Failed.!');
            }
         
          });

       

        }else{ 
          alert('requied Fields.!');
        }
        

        
       // console.log(this.state.person);
       // alert(this.state.userNN);
      
        event.preventDefault();
      }

      // async componentDidMount(){

      // myfunction(){
        
      //   const db = firebase.firestore();
      //   db.collection("quiz").where('username','==',this.state.user)
      //   .get()
      //   .then(querySnapshot => {
      //     const data = querySnapshot.docs.map(doc => doc.data());
          
      //    if(data.length>0){

      //     this.setState({ userNN:data[0].username});
      //    }

      //     db.collection("quiz").where('password','==',this.state.pass)
      //   .get()
      //   .then(querySnapshot => {
      //     const data2 = querySnapshot.docs.map(doc => doc.data());
      //     if(data2.length>0){
      //       this.setState({ passNN:data2[0].password });
      //     }

        
      // // console.log(data);
      //   });
      
      //   //get password from database
       
      //     // console.log(this.state.userNN);
          
       
      //   });


      // }

     

       

      // }
    
     



                 render() {

                    // if (this.state.loading) {
                    //     return <div>loading...</div>;
                    //   }
                  
                    //   if (!this.state.person) {
                    //     return <div>didn't get a person</div>;
                    //   }
                      
                  return (
                    
                    <div>
                     <table width="100%" border='0' cellPadding='10'>
                 <tr>
                     <td width="50%"> <h5>English Tenses -Quize</h5></td>

                     <td width="50%" align='right'><Link to="/components/register"><button type="button" class="btn btn-outline-info">Sign up</button></Link></td>
                 </tr>
             </table>
                      
                     
                      
                      <br></br>
                      <br></br>
                      <div class="card" class="shadow p-3 mb-5 bg-white rounded">
                        
                       <form onSubmit={this.handleSubmit} class="text-center border border-light p-5">
                      <table align='center' border='0' width='22%' cellPadding='5'>
                       <tr>
                         <td> <p class="h4 mb-4">LOGIN</p></td>
                       </tr>
                        <tr>
                          <td> <input type='text' name='user' placeholder="Username" id="defaultLoginFormEmail" class="form-control mb-10 " onChange={this.handleChange_user}  /></td>
                        </tr>
                     
                        <tr>
                          <td><input type='password' name='pass' placeholder="Password" id="defaultLoginFormEmail" class="form-control mb-6" onChange={this.handleChange_pass} /></td>
                        </tr>
                        <tr><td>&nbsp;</td></tr>
                        <tr>
                          <td align='right'><button class="btn btn-info btn-block my-6">Login</button></td>
                        </tr>
                        <tr>
                          <td>
                            &nbsp;
                          </td>
                        </tr>
                        <tr>
                          <td align='center'> <Link to="/components/register"  >Join as new player</Link></td>
                        </tr>
                      </table>
                     

                   
                        </form>
                      
                        </div>
                       
                    </div>
                  );
                }                
              
    
    
    
 }

  

  export default Login;
  