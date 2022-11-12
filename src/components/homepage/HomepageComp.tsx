import Header from "./Header";
import Middle from "./Middle";
import Update from "./Update";



const HomepageComp = () => {
    return(
        <div className="section homepage">
            <div className="container">
                <Header />
                <Middle /> 
                <Update />              
            </div>

        </div>
    )
}


export default HomepageComp;