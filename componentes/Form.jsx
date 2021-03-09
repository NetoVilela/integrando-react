const Header = window.styled.h1`
    color: #eead2d;
    display: flex;
    justify-content: center;
`;

const Input = window.styled.input`
    border-radius: 5px;
    background: #ccc;
    font-weight: bold;
    font-size: 18px;
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


function Form() {
    return (
        <form method="GET" action="RotaDeTeste">
            <Header> Formulário novo</Header>
            <FieldInputs>
                <Input placeholder="Seu nome" name="nome" type="text" />
                <Input placeholder="Seu email" name="email" type="email" />
                <Input placeholder="Sua senha" name="senha" type="password" />
                <Button type="submit">Entrar</Button>
            </FieldInputs>
        </form>
    )

}

ReactDOM.render(<Form />, document.querySelector("#form"));