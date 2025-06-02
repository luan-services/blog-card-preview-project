import BlogPreviewCard from './BlogPreviewCard'
import { cards } from '../objects/blogCard'

const CardContainer = () => {
    return (
        <div className="container w-full min-h-screen flex flex-wrap justify-center items-center mx-auto gap-6 py-10 px-4 sm:px-6 md:px-8 lg:px-10">

            {cards.map((props, index) => {
                return (
                    <BlogPreviewCard
                        key={index}
                        imgSrc={props.imgSrc} 
                        avatarImg={props.avatarImg} 
                        userName={props.userName}
                        date={props.date}
                        desc={props.desc}
                        title={props.title}
                        status={props.status}
                    />
                )
            })}
        </div>
    )
}

export default CardContainer
