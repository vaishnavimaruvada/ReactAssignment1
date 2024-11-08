import{Link} from 'react-router-dom'
import Header from '../Header'
import './index.css'
const Home=()=>(
    <>
    
        
    <div className='maincontainer'>
    <Header/>
    <div className="HomeContainer">
        <div className='info'>
            <h1 className='head'>Work from Ladakh</h1>
            <p className='para'>Indias first Tourisim <br/> eco system</p>
            <div className='icons'>
                <img src='data:image/png;base64,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' 
                className='icon' alt='iconimage' />
                <img src='https://cdn-icons-png.flaticon.com/128/3955/3955024.png' className='icon' alt='iconsimg'/>
            </div>
        </div>
        <div>
        <img src="https://media.istockphoto.com/id/1389359011/photo/beach-in-sian-kaan-tulum-mexico.jpg?s=612x612&w=0&k=20&c=gPXY_nDXo8Qle_1J4x8mS-8ZqyeudeIsK3F63gmnfRQ=" alt="images" className='simg'/>
        
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
        <Link to ="/booking">

        <button className='bookbtn'>Book</button>
        </Link>
        </div>
        
        </div>
        <h1>Discover</h1>
        <div className='descriptioncontainer'>
            <div className='userinfo'>
                <img src='data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAKQAAACUCAMAAAAqEXLeAAAAZlBMVEX///8AAACUlJSYmJj6+vr29vbq6upFRUXx8fF9fX0bGxvt7e2xsbFOTk6fn58vLy88PDzk5OTGxsYWFhYKCgqKiopfX1/Y2Ng2Nja9vb2qqqpnZ2fR0dF3d3dVVVWEhIQmJiZvb2/Il2w9AAAD00lEQVR4nO2ci5KiMBBFjYKAKEIQEVSU///JHcbVkVFE0n2bdSvnA6xTwXReN5lMIMx1oErMT3Ohp7FSqhhb4wVh5C2+FFU1H9uki6TYq7+cxnbp4JB56sZsbJtnhMvdRt2RjS30gK+zVLWpwrGl2jjl6rfiF8exte5wk+BR8JuF9seWu+AUxw7FhtVM/wOFKPI2Lxy/SONtNKpnPn0t+PPdgyIZRzHJzm86NsTHwhFXdIMn/bmnPWfC/Wi5HqrYsF4KKjonE8WGQOybJ5Wpo1JeLuTo9bt0sxPp5+GW4igzz3SIjkptXbhkRHVUKkI7Jgu6ZIr+W3bNeAYBnsTlQ4bCTs7YOjTjcESvf0gl8gcP6ejyOCqFrEKaS1IDJUsuSeQ+0btT8V6mVtJKWkkr+X9KMs0vrKSVtJJGIKfmVtJKWkkraSWtpJX8LMmPWD6suCQrmKIbDT5P7GIRoTb/2NqxYYVxLDgdUQGsJa8k5sT2I1rS55UEndDzSmIcP6J38403DahQIGvPQUVAc05J1PFiEvM5wlIObs0nWcMO7hh7Di4CynZqh4w4aIZsw4UF7gR0vuOSRKaDmM7ksafyxhm13wRASbZyDk2KsIRZlDpDw38M+aoGbMbqwLJe3Bygkj45TtewBedmWfo3+oIJy8iIvvOUM/wpU3hklmH4XsDTxwwjY4x2/Igk6iShS+Lz0S4hZH6hwgeP6UVI4tJlSNzI8ESu5xCbEt9tviEtv/H15wIpj4rMoLYg1Eqhjz2h3H/YCt7BOphKYme7bYyj3AJ1/Ibx9rnkVba5qaTkPUvjIiRWgCaEcyfJO4HGhVKuTBLWjJIPEez7dZ6zFZQ0nvjiDuMfMZ5Sos7BnuAbLxk9uWqeGG9Ly1xS/UYbb2OkYtU8rE0dlaqFXsfQpJXYSqQtyWe1Ak/0hORt8zP+izNkWvCzDIaMA/T+Z8OcYxMVXSxZtqPBEzan5pCssQvbnOWcdofdNGcKtEBLJeWZjnsqXNdJZmwhz3SG0XQjo0djulgDsqhhydaKV9KSeXwsmf6MbSrG7XNHM0ar2sSap2Q6GtKKVyoOzUPd894XlU1N3bTMjbcBhrCnjEB5JqHYkJlqOifWwvia9cnkr5kwBVfeJxo6CLklrOp0E5dDBiHH7Nk0Ouvlux/dLdhyc8PxirdaU4tUnW72vbsHTj5iK17x8pcf/fDqxUtBjt2DkB8whfronIPnG5mJ2PDyHtlj2fSnI1WdbtbTdmu60Qi1u5/4fonBl3rmZnc7jHRYnp3DcHtVk/agJBbv2n04b4dwE3+M5B/BeEYWItlZ/wAAAABJRU5ErkJggg==' 
                className='user' alt='usericon'/>
                <div className='userdes'>
                <h2>Argun Raghav</h2>
                <p className='paras'>I am writing this after reflecting on my<br/> onemonth stay with Bricabin in Ladakh. Right
                <br/>from picking us up at the airport to droppingus <br/>back there 
                after a month, Urgan was veryresponsible <br/>and took good care of my friends</p>
                </div>
            </div>
            <div className='imagecon'>
            <img src="https://media.istockphoto.com/id/1389359011/photo/beach-in-sian-kaan-tulum-mexico.jpg?s=612x612&w=0&k=20&c=gPXY_nDXo8Qle_1J4x8mS-8ZqyeudeIsK3F63gmnfRQ=" alt="imagess" className='simgs'/>
            <div className='userinfoc'>
            <img src='data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAKQAAACUCAMAAAAqEXLeAAAAZlBMVEX///8AAACUlJSYmJj6+vr29vbq6upFRUXx8fF9fX0bGxvt7e2xsbFOTk6fn58vLy88PDzk5OTGxsYWFhYKCgqKiopfX1/Y2Ng2Nja9vb2qqqpnZ2fR0dF3d3dVVVWEhIQmJiZvb2/Il2w9AAAD00lEQVR4nO2ci5KiMBBFjYKAKEIQEVSU///JHcbVkVFE0n2bdSvnA6xTwXReN5lMIMx1oErMT3Ohp7FSqhhb4wVh5C2+FFU1H9uki6TYq7+cxnbp4JB56sZsbJtnhMvdRt2RjS30gK+zVLWpwrGl2jjl6rfiF8exte5wk+BR8JuF9seWu+AUxw7FhtVM/wOFKPI2Lxy/SONtNKpnPn0t+PPdgyIZRzHJzm86NsTHwhFXdIMn/bmnPWfC/Wi5HqrYsF4KKjonE8WGQOybJ5Wpo1JeLuTo9bt0sxPp5+GW4igzz3SIjkptXbhkRHVUKkI7Jgu6ZIr+W3bNeAYBnsTlQ4bCTs7YOjTjcESvf0gl8gcP6ejyOCqFrEKaS1IDJUsuSeQ+0btT8V6mVtJKWkkr+X9KMs0vrKSVtJJGIKfmVtJKWkkraSWtpJX8LMmPWD6suCQrmKIbDT5P7GIRoTb/2NqxYYVxLDgdUQGsJa8k5sT2I1rS55UEndDzSmIcP6J38403DahQIGvPQUVAc05J1PFiEvM5wlIObs0nWcMO7hh7Di4CynZqh4w4aIZsw4UF7gR0vuOSRKaDmM7ksafyxhm13wRASbZyDk2KsIRZlDpDw38M+aoGbMbqwLJe3Bygkj45TtewBedmWfo3+oIJy8iIvvOUM/wpU3hklmH4XsDTxwwjY4x2/Igk6iShS+Lz0S4hZH6hwgeP6UVI4tJlSNzI8ESu5xCbEt9tviEtv/H15wIpj4rMoLYg1Eqhjz2h3H/YCt7BOphKYme7bYyj3AJ1/Ibx9rnkVba5qaTkPUvjIiRWgCaEcyfJO4HGhVKuTBLWjJIPEez7dZ6zFZQ0nvjiDuMfMZ5Sos7BnuAbLxk9uWqeGG9Ly1xS/UYbb2OkYtU8rE0dlaqFXsfQpJXYSqQtyWe1Ak/0hORt8zP+izNkWvCzDIaMA/T+Z8OcYxMVXSxZtqPBEzan5pCssQvbnOWcdofdNGcKtEBLJeWZjnsqXNdJZmwhz3SG0XQjo0djulgDsqhhydaKV9KSeXwsmf6MbSrG7XNHM0ar2sSap2Q6GtKKVyoOzUPd894XlU1N3bTMjbcBhrCnjEB5JqHYkJlqOifWwvia9cnkr5kwBVfeJxo6CLklrOp0E5dDBiHH7Nk0Ouvlux/dLdhyc8PxirdaU4tUnW72vbsHTj5iK17x8pcf/fDqxUtBjt2DkB8whfronIPnG5mJ2PDyHtlj2fSnI1WdbtbTdmu60Qi1u5/4fonBl3rmZnc7jHRYnp3DcHtVk/agJBbv2n04b4dwE3+M5B/BeEYWItlZ/wAAAABJRU5ErkJggg==' 
                className='user' alt='usericon'/>
                <div>
                    <h2>Argun Raghav</h2>
                <p className='paras'>I am writing this after reflecting on my<br/> onemonth stay with Bricabin in Ladakh. Right
                <br/>from picking us up at the airport to droppingus <br/>back there 
                after a month, Urgan was veryresponsible <br/>and took good care of my friends</p>
                </div>
            </div>
            </div>
            <div className='userinfo'>
                <img src='data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAKQAAACUCAMAAAAqEXLeAAAAZlBMVEX///8AAACUlJSYmJj6+vr29vbq6upFRUXx8fF9fX0bGxvt7e2xsbFOTk6fn58vLy88PDzk5OTGxsYWFhYKCgqKiopfX1/Y2Ng2Nja9vb2qqqpnZ2fR0dF3d3dVVVWEhIQmJiZvb2/Il2w9AAAD00lEQVR4nO2ci5KiMBBFjYKAKEIQEVSU///JHcbVkVFE0n2bdSvnA6xTwXReN5lMIMx1oErMT3Ohp7FSqhhb4wVh5C2+FFU1H9uki6TYq7+cxnbp4JB56sZsbJtnhMvdRt2RjS30gK+zVLWpwrGl2jjl6rfiF8exte5wk+BR8JuF9seWu+AUxw7FhtVM/wOFKPI2Lxy/SONtNKpnPn0t+PPdgyIZRzHJzm86NsTHwhFXdIMn/bmnPWfC/Wi5HqrYsF4KKjonE8WGQOybJ5Wpo1JeLuTo9bt0sxPp5+GW4igzz3SIjkptXbhkRHVUKkI7Jgu6ZIr+W3bNeAYBnsTlQ4bCTs7YOjTjcESvf0gl8gcP6ejyOCqFrEKaS1IDJUsuSeQ+0btT8V6mVtJKWkkr+X9KMs0vrKSVtJJGIKfmVtJKWkkraSWtpJX8LMmPWD6suCQrmKIbDT5P7GIRoTb/2NqxYYVxLDgdUQGsJa8k5sT2I1rS55UEndDzSmIcP6J38403DahQIGvPQUVAc05J1PFiEvM5wlIObs0nWcMO7hh7Di4CynZqh4w4aIZsw4UF7gR0vuOSRKaDmM7ksafyxhm13wRASbZyDk2KsIRZlDpDw38M+aoGbMbqwLJe3Bygkj45TtewBedmWfo3+oIJy8iIvvOUM/wpU3hklmH4XsDTxwwjY4x2/Igk6iShS+Lz0S4hZH6hwgeP6UVI4tJlSNzI8ESu5xCbEt9tviEtv/H15wIpj4rMoLYg1Eqhjz2h3H/YCt7BOphKYme7bYyj3AJ1/Ibx9rnkVba5qaTkPUvjIiRWgCaEcyfJO4HGhVKuTBLWjJIPEez7dZ6zFZQ0nvjiDuMfMZ5Sos7BnuAbLxk9uWqeGG9Ly1xS/UYbb2OkYtU8rE0dlaqFXsfQpJXYSqQtyWe1Ak/0hORt8zP+izNkWvCzDIaMA/T+Z8OcYxMVXSxZtqPBEzan5pCssQvbnOWcdofdNGcKtEBLJeWZjnsqXNdJZmwhz3SG0XQjo0djulgDsqhhydaKV9KSeXwsmf6MbSrG7XNHM0ar2sSap2Q6GtKKVyoOzUPd894XlU1N3bTMjbcBhrCnjEB5JqHYkJlqOifWwvia9cnkr5kwBVfeJxo6CLklrOp0E5dDBiHH7Nk0Ouvlux/dLdhyc8PxirdaU4tUnW72vbsHTj5iK17x8pcf/fDqxUtBjt2DkB8whfronIPnG5mJ2PDyHtlj2fSnI1WdbtbTdmu60Qi1u5/4fonBl3rmZnc7jHRYnp3DcHtVk/agJBbv2n04b4dwE3+M5B/BeEYWItlZ/wAAAABJRU5ErkJggg==' 
                className='user' alt='usericon'/>
                <div className='userdes'>
                <h2>Argun Raghav</h2>
                <p className='paras'>I am writing this after reflecting on my<br/> onemonth stay with Bricabin in Ladakh. Right
                <br/>from picking us up at the airport to droppingus <br/>back there 
                after a month, Urgan was veryresponsible <br/>and took good care of my friends</p>
                </div>
            </div>
        </div>
        <h1>Services</h1>
        <div className='servicecards'>
            <div className='serviceinfoimcards'>
                <img src='data:image/png;base64,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' 
                className='wifi' alt="logo"/>
                <h4>Highspeed iNterNet</h4>
                <p className='paras'>Optical fiber connections provided<br/> innot only in your cabins but rather<br/> toall of the BriSphere scenic working
                spaces and dinning areas.</p>
                

            </div>
            <div className='serviceinfoimcards'>
                <img src='https://www.shutterstock.com/shutterstock/photos/2468884985/display_1500/stock-vector-a-set-of-line-icons-related-to-healthcare-and-medical-medicine-healthcare-healthy-food-gym-2468884985.jpg' 
                className='food' alt="logo"/>
                <h4>Healthy meals</h4>
                <p>We get all the important nutrients and minerals from healthy food.<br/> Vegetables, fruits, dairy products, and dry fruits are part of healthy food. <br/>Dairy products such as milk, eggs, keeps body fit.</p>
                

            </div>
            <div className='serviceinfoimcards'>
                <img src='https://cdn-icons-png.flaticon.com/128/411/411763.png'
                className='food' alt="logo"/>
                <h4>Transportation</h4>
                <p>Optical fiber connections provided inot only in your cabins<br/> but rather toall of the BriSphere scenic<br/> workingspaces and dinning areas.</p>
                

            </div>
            <div className='serviceinfoimcards'>
                <img src='https://cdn-icons-png.flaticon.com/128/5637/5637217.png'
                className='food' alt="logo"/>
                <h4>Food Delivery</h4>
                <p>Optical fiber connections provided in
not only in your cabins <br/>but rather to
all of the BriSphere scenic<br/> working
spaces and dinning areas.</p>
                

            </div>
            <div className='serviceinfoimcards'>
                <img src='https://cdn-icons-png.flaticon.com/128/17306/17306271.png'
                className='food' alt="logo"/>
                <h4>Jobs</h4>
                <p>Optical fiber connections provided in
not only in your cabins<br/> but rather to
all of the BriSphere scenic<br/> working
spaces and dinning areas.</p>
                

            </div>
            <div className='serviceinfoimcards'>
                <img src='https://cdn-icons-png.flaticon.com/128/1170/1170678.png'
                className='food' alt="logo"/>
                <h4>Online shopping</h4>
                <p>Optical fiber connections provided in
not only in your cabins<br/> but rather to
all of the BriSphere scenic<br/> working
spaces and dinning areas.</p>
                

            </div>
        </div>
    </div>
    <div className='footer'>
        <h1>Brispehere</h1>
        <p>
        Spituk, Ladakh,
India,<br/> 194101
+91 - 7764997033<br/>
amit.jha6700@gmail.com
        </p>
        <button className='bookbtn'>Location</button>
    </div>
    </>
)
export default Home