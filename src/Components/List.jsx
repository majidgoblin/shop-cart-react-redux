
export const List = ({
    items,
    resorceName,
    itemComponent: ItemComponent
}) => {
    return (
        <>
            {
                items.map((row, index) => {
                   return <ItemComponent key={index} {...{ [resorceName]: row }} />
                })
            }
        </>
    )
}