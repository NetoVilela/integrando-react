export const Header = window.styled.h1`
    color: #c9c9c9;
    display: flex;
    justify-content: center;
`;

const Input = window.styled.input`
    border-radius: 5px;
    background: ${props => props.inputColor || "#2f343d" };
    font-weight: bold;
    font-size: 18px;
    
    ::-webkit-input-placeholder {
        color: #fff;
      }
 
    margin: 20px;
    padding: 1vh;

`;

const FieldInputs = window.styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    padding: 2vh;
    border: solid 2px black;
    border-radius: 5px
    width: 50vw;
    margin: auto;
`;

const Button = window.styled.button`
    background: #282;
    color: #fff;
    border: solid 2px #fff;
    border-radius: 8px;
    padding: 1vh;
    font-size: 20px;
    font-weight: bold;

    :hover{
        transition: 0.5s;
        color: #282;
        background: #fff;
        border: solid 2px #282;
        cursor: pointer
    }
`;


const Form = () => {
    const [name, setName] = React.useState("")
    const [email, setEmail] = React.useState("");

    function onSubmit(event){
        event.preventDefault();
        console.log(name, email)
    }

    return (
        <form method="GET" action="RotaDeTeste" onSubmit={onSubmit}>
            <Header> Formulário novo</Header>
            <FieldInputs>
                <Input placeholder="Seu nome"
                name="nome"
                inputColor="#ccc"
                type="text"
                value={name}
                onChange={
                    e => setName(e.target.value)
                } />
                {name}
                <Input placeholder="Seu email"
                name="email"
                inputColor="#ccc"
                type="email"
                value={email}
                onChange={
                    e => setEmail(e.target.value)
                } />
                {email}
                <Input placeholder="Sua senha" name="senha" inputColor="#ccc" type="password" />
                <Input placeholder="Teste" name="teste" type="text"  />
                <Button type="submit">Entrar</Button>
            </FieldInputs>
        </form>
    )

}

ReactDOM.render(<Form />, document.querySelector("#form"));