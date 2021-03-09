const Header = window.styled.h1`
    color: #eead2d;
`;


function Form() {
    return (
        <form>
            <Header> Formulário novo</Header>
            
        </form>
    )

}

ReactDOM.render(<Form />, document.querySelector("#form"));