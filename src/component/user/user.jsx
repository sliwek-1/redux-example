export function User(props) {

    const { id, firstname, lastname, email, handleRemove, handleEdit } = props

    return (
        <>
            <div key={id} style={{width: "800px", display: "flex", gap: "10px"}}>
                <div>
                    <p>{id} {firstname} {lastname} {email}</p>
                </div>
                <button onClick={handleRemove}>remove</button>
            </div>
        </>
    )
}