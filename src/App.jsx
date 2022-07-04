import Plano from "./Plano";
import "./App.css"
function App() {
    const planos = [

        {
            title: "Combo Big King",
            price:"Um hambúrger com duas carnes bovinas grelhadas de 57g, pão com gergelim, queijo...",
            qnt_users: "Serve 1 pessoa",
            qnt_projects:"R$ 41,90",
        },
        {
            title: "Combo Cheddar Duplo",
            price: "Um hambúrger com duas carnes bovinas grelhadas de 57g, pão preto com gergelim...",
            qnt_users: "Serve 1 pessoa",
            qnt_projects:"R$ 41,90",

        },
        {
            title: "Combo Cheeseburger Duplo com Bacon",
            price: "Um hambbúrger com duas carnes bovinas grelhadas de 57g, pão com gergelim, queijo...",
            qnt_users: " Serve 1 pessoa",
            qnt_projects:"R$ 36,90",
        },
        {
            title: "Combo Mega Stacker 2.0",
            price: "Um hambúrger com  duas carnes boinas grelhadas de 113g, pão com gergeim, queijo...",
            qnt_users: "Serve 1 pessoa",
            qnt_projects:"R$ 51,90",
            
        },
    ];


    return (
        <div>
            { planos.map((plano) =>{
                return<Plano
                título={plano.title}
                preco={plano.price}
                usuarios={plano.qnt_users}
                projetos={plano.qnt_projects}
                 />
            
            })}
            
        </div>
    );

}
export default App;