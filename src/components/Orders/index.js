import { Component } from "react"
import './index.css'
class Orders extends Component{
    state={info:{}}
    componentDidMount(){
        this.getDetails()
    }
    getDetails=()=>{
        fetch('https://jsonplaceholder.typicode.com/users/1/')
  .then((response) => response.json())
  .then((json) => this.setState({info:json}))
    }
    render(){
        const{info}=this.state
        const{name,email}=info
       
        console.log(info)
        return(
            <>            <div className='main'>
                <div className="footerses">
                        <div className="details">
                        <h3>{name}</h3>
                        <h3>+91 4411755822</h3>
                        <h3>{email}</h3>
                        <h4>2 adults 1 child</h4>
                        <div className='con'>
        <div className='i'>
        <h4>
            check-in<br/>
            feb-4-22
        </h4>
        <h4>
            check-out<br/>
            feb-7-22
        </h4>
        <h4>
            rooms<br/>
           <span> + 1 -</span>
            
        </h4>
        <button className="bookbtn">12,450</button>
        
         <div>
        </div>
        </div>
        </div>
                        </div>
                        <div className="imcon">
                            <img src="https://cdn-icons-png.flaticon.com/128/14025/14025310.png" alt="logotick"/>
                        <div>
                        <h1>Order completed</h1>
                        <p>Have questions ?</p>
                        </div>
                        </div>

                    </div>
                    <div className='footers'>
        <h1>Brispehere</h1>
        <p>
        Spituk, Ladakh,
India,<br/> 194101
+91 - 7764997033<br/>
amit.jha6700@gmail.com
        </p>
        <button className='bookbtn'>Location</button>
    </div>
            
                    
                </div>
             
     
           
            </>

        )
    }
}
export default Orders