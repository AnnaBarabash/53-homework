export default function Title(propse){
    console.log(propse)
    return(
        <h1>{propse.title ?? 'Library'}</h1>
    )
}