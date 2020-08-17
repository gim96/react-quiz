import React,{Component} from "react";
import firebase from "./firebase";
import { Link } from 'react-router-dom'

class Tasks extends Component {

    constructor(props){
        super(props);

        this.state={
      
            loading:true,
           // redirect: localStorage.getItem('s_user'),
            person:[],
            count:0,
            chkAns:0,
            chck_1:false,
            chck_2:false,
            chck_3:false,
            btnState:true,
            score:0,
            marks:[],
            curTime : new Date().toLocaleString(),
            btnNext:false,
            // atpmtCount:1
        }

       // localStorage.getItem('atmpt')=0;

        if (!localStorage.getItem('s_user')) {
          //return <Redirect to='components/login' />
          this.props.history.push("/components/login");
        }

       
        // this.handleSubmit = this.handleSubmit.bind(this);
    }

  
    
    
     
    


       async componentDidMount() {

        
        const db = firebase.firestore();
        //const data = await db.collection("quiz").get();
        db.collection("tasks")
        .get()
        .then(querySnapshot => {
        const data = querySnapshot.docs.map(doc => doc.data());
          
          this.setState({ person: data,loading:false });
        });
        // console.log(this.state.person[1].question);
       // console.log(this.state.curTime);
       
        db.collection("myScore").where('name','==',localStorage.getItem('s_user'))
        .get()
        .then(querySnapshot => {
          const data2 = querySnapshot.docs.map(doc => doc.data());
      
         if(data2.length>0){
          this.setState({ marks: data2 });
         }
       
         if(data2.length>=3){
            alert('3 attempts exceeded..!');
            this.setState({btnNext:true});
         }

        });
    
       
                       
  };

  handleIncrement=()=>{
    
  

      if(this.state.count<9 ){

        // console.log(this.state.chkAns);
        // console.log(this.state.person[this.state.count].ans);
        if(this.state.chkAns===this.state.person[this.state.count].ans){
            this.setState({score:this.state.score+1})
        }

        this.setState({count:this.state.count+1 ,chck_1:false,chck_2:false,chck_3:false})

        //this.setState({chck:false })
       
        //alert(this.state.score);

    }else{


        const db = firebase.firestore();
        db.collection("myScore").add({ name: localStorage.getItem('s_user') ,score: this.state.score ,date:this.state.curTime});
        alert('Total :' + this.state.score +'/10');
        this.setState({btnState:false,btnNext:true})

    }

    

   

  
 
      
  }

  
  handleTry=()=>{
    this.setState({loading:true,person:'',count:0,chkAns:0,chck_1:false,chck_2:false,chck_3:false,score:0})
    this.componentDidMount();
    this.setState({ btnState: true ,btnNext:false})



  }

  handleCheck_1=(event)=>{
      this.setState({chkAns:1})
        this.setState({chck_1:true})
  }

  handleCheck_2=(event)=>{
     this.setState({chkAns:2})
       this.setState({chck_2:true})
  }
  handleCheck_3=(event)=>{
     this.setState({chkAns:3})
       this.setState({chck_3:true})
  }

  //buttons

  handle_1=(event)=>{
    this.setState({chkAns:1})
      this.setState({chck_1:true,chck_2:false,chck_3:false})
  }
  handle_2=(event)=>{
    this.setState({chkAns:2})
      this.setState({chck_2:true,chck_1:false,chck_3:false})
  }
  handle_3=(event)=>{
    this.setState({chkAns:3})
      this.setState({chck_3:true,chck_1:false,chck_2:false})
  }

  // logout(){
  //   firebase.auth().signOut();
  // }

  render() {

    if (this.state.loading) {
        return <div>loading...</div>;
    }
  
      if (!this.state.person) {
        return <div>didn't get a person</div>;
      }
      
  return (
     
    
        
         <div>
          <table width="100%" border='0' cellPadding='10'>
                 <tr>
                     <td width="50%"> <h5>English Tenses -Quize</h5></td>

                     <td width="50%" align='right'>
                     <Link to="/components/logout"><button onClick={this.logout} class="btn btn-outline-info">Logout</button></Link></td>
                 </tr>
             </table>
           
            
             <br></br>
             <br></br>
             <div class="card" class="shadow p-3 mb-5 bg-white rounded">
             <br></br>
             <table align='center' width="50%" border='0'>
              <thead>
               <tr>
                 <td>


               
                 <table align='center' width="100%" class="table table-hover" height='100%' class="shadow-sm p-3 mb-5 bg-white rounded">
                 <thead>
                <tr>
                  <td  class='card-header'><h6>Player : {localStorage.getItem('s_user')}</h6></td>
                </tr>
              </thead>
                  <tr>
                      <td ><button class="btn btn-warning pull-left btn-block btn-lg">
                        <table><tr><td><h6>  {this.state.count+1}.  &nbsp;{this.state.person[this.state.count].question}</h6></td></tr></table>
                        </button></td>
                    
                  </tr>
                  <tr>
                      <td ><button class="btn btn-outline-info pull-left btn-block"  onClick={this.handle_1}>
                      <table><tr><td><input type='radio' name='rad'  onChange={this.handleCheck_1} checked={this.state.chck_1} /></td>
                      <td>&nbsp; { this.state.person[this.state.count].answer_1}</td></tr></table>
                        </button></td>
                  </tr>
                  <tr>
                      <td > <button class="btn btn-outline-info btn-block" onClick={this.handle_2}>
                       <table><tr><input type='radio' name='rad'  onChange={this.handleCheck_2} checked={this.state.chck_2} /><td>
                         </td> &nbsp; { this.state.person[this.state.count].answer_2}<td></td></tr></table> 
                         </button></td>
                  </tr>
                  <tr>
                      <td ><button class="btn btn-outline-info btn-block" onClick={this.handle_3}> 
                      <table><tr><td><input type='radio' name='rad'  onChange={this.handleCheck_3} checked={this.state.chck_3} /></td>
                      <td> &nbsp;{ this.state.person[this.state.count].answer_3}</td></tr></table>
                      </button></td>
                  </tr>
                  <tr>
                      <td  class='card-header'>
                        <table width='100%'><tr><td width='50%'> <button  onClick={this.handleIncrement}  class="btn btn-info btn-block my-6" disabled={this.state.btnNext}>Next</button>
                        </td><td align='right' width='50%'><button  onClick={this.handleTry} class="btn btn-info btn-block my-6" disabled={this.state.btnState}>Try</button></td></tr></table>
                        
                                  
                      </td>
                      </tr>
              </table>
            
                 </td>
                 </tr>
                 <tr>
                
                   
                   

                    <td align='center' width="40%" height='100%'>
                    <table width='100%' ><tr><td>Score Board</td><td><hr height='2'></hr></td></tr></table> <br></br>

                    {/* <div width="1" height="100%"></div> */}
                          <table width='100%' class="table table-bordered" class="shadow-sm p-3 mb-5 bg-white rounded"> 
                          <thead>
                            <tr>
                              <th class='card-header'>Time stamps</th>
                              <th class='card-header'> My Score</th>
                            </tr>
                            </thead>
                            {this.state.marks.map((mrks) => (
                            <tr>
                              <td align='left' class="table-light">&nbsp; {mrks.date}</td>
                              <td align='center' >{mrks.score}</td>
                            </tr>
                             ))}
                          </table>

                       
  

                        



                 </td>
                   </tr>      
                   </thead> 
                              
                 
                    

                   </table>
                   <br></br>
                   <br></br>
                   <br></br>
                  
                   </div>
    
                  <center> &copy; Gim kelum</center>
                
               
             
         </div>
       
   
  );

                            
                            
}                

}

export default Tasks;