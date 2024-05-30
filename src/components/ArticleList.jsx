import ArticleItem from './ArticleItem'
import { Articles } from '../data/articles';

function ArticleList() {

    return (
        <div >
              {Articles.map((element,index)=>(
                <ArticleItem data={element}/>
              ))}
            
        </div>

    )
  }
  
  export default ArticleList;