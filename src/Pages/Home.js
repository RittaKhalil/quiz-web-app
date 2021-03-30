import Button from '@material-ui/core/Button';
import {Route} from "react-router-dom";

export default function Home() {
    return (
        <div>
            <header className="App-header">
                <h1>WELCOME!</h1>
                <Route render={({ history}) => (
                <Button 
                    variant="outlined" 
                    color="primary"
                    type='button'
                    onClick={() => { history.push('/Quiz?id=0') }}
                >
                    Start Quiz
                </Button>
                )} />
            </header>
        </div>
    );
  }