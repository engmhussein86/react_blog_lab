


function ArticleItem(props) {

    return (
        <div className="ArticleContent" key={props.data.id}>
        <p className="date">{props.data.date}</p>
        <h1>{props.data.title}</h1>
        <img src={props.data.image} className="image" />
        <p className="content">{props.data.content}</p>
        <div className="Continue">
            <a src="#">Continues ...</a>
        </div>
    </div>
    )
  }
  
  export default ArticleItem;