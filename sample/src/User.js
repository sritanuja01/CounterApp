function User(props)
{
    console.log({props})
    console.log('Hema')
    return(
        <div>
        <h1>User Name: {props.name}</h1>
        <h1>User Age:{props.age}</h1>
        </div>
    )
}

export default User