export const AllCategories=({categories,actveIndex,handleAllProduct,changeProduct})=>{

    return(
        <div className="category__container">
        <span onClick={handleAllProduct}
        className={actveIndex === null ? "active-category" : ""}
        >همه</span>
        {
            categories.map((row,index)=>{
                return <span key={index} 
                onClick={()=>changeProduct(row.id,index)}
                className={actveIndex === index ? "active-category" : ""}
                >{row.title}</span>
            })
        }
        </div>
    )
}