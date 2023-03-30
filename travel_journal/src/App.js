import './App.css';
import Header from './Header'
import Main from './Main';
import {data} from './Data'

function App() {
  console.log(data[0].title)

  const destinationsArray = data.map(destination => {
    return (
      <>
        <Main
          id={destination.id}
          title={destination.title}
          location={destination.location}
          googleMapsLink={destination.googleMapsLink}
          startDate={destination.startDate}
          endDate={destination.endDate}
          description={destination.description}
          imageUrl={destination.imageUrl}
        />
      </>
      
    )
  })

  return (
    <div className="App">
        <Header />
        {destinationsArray}
    </div>
  );
}

export default App;
