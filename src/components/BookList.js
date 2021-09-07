import Card from './Card'
import '../css/CardList.css'

const BookList = ({cards})=>{
    return(
    <div className='cards-list'>
        {cards.map((card, index)=>
        <Card 
            key ={index}
            title={card.title}
            subtitle={card.author}
            genre={card.genre}
            yearIssue={card.yearIssue}
            src = {card.src} 
        />)}  
    
</div>
)
}

export default BookList