function Tags({tags}){
    console.log(tags);
    return(
        <>
        Tags:
        <div className="tags">
            {tags.map(
                (tag,index) => (
                    <span className="tag" key={index}>{tag} | X</span> 
                )
            )}
        </div>
        </>
    );
}

export default Tags;