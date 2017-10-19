import FetchContainer from './FetchContainer';
import Polls from './Polls';

const url = './AllPolls'
const AllPolls = FetchContainer(url)(Polls);
const WithTitleAllPolls = () => (
  <div className="container">
    <h2>All Polls</h2>
    <AllPolls />
  </div>
)

export default WithTitleAllPolls;