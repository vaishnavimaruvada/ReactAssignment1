import {Component} from'react'
import {Link} from 'react-router-dom'
import Header from '../Header'
import './index.css'

class BookingPage extends Component{
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
                <Header/>
                <div className="userContainer">
                    <div className='name'>
                        <h3>{name}</h3>
                    </div>
                    <div className='name'>
                        <h3>{email}</h3>
                        
                    </div>
                    <div  className='cons'>
                        <div className='name'>
                            <h4>4411755822</h4>
                        </div>
                        <div className='name'>
                            <h4>2 adults 1child</h4>
                        </div>

                    </div>
                    
                </div>
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
        
         <div>
            <Link to="/order">   
        <button className='bookbtn'>12,450</button>
        </Link>
        <div className='c'>
        <p>click to pay the  amount</p>
        </div>
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
export default BookingPage