import { useState } from "react";
import { InfinityScroll } from "./components/InfinityScroll";
import { PeopleList } from "./components/PeopleList";
import { peopleService } from "./services/peopleService";
import './app.css'

function App() {

  const [isHasMore, setIsHasMore] = useState(true);
  const [page, setPage] = useState(0);
  const [peoples, setPeoples] = useState([]);

  const loadPeoples = async () => {
    const addedPeoples = await peopleService.get(page);
    setIsHasMore(addedPeoples.length !== 0);
    setPeoples(prev => [...prev, ...addedPeoples]);
    setPage(prev => prev + 1);
  }


  return (
    <div className="App">
      <InfinityScroll
        cb={loadPeoples}
        isHasMore={isHasMore}
      >
        <PeopleList
          peoples={peoples}
        />
      </InfinityScroll>
    </div>
  );
}

export default App;
