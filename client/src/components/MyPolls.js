import FetchContainer from './FetchContainer';
import Polls from './Polls';

const url = './MyPolls'
const MyPolls = FetchContainer(url)(Polls);
const WithTitleMyPolls = () => (
  <div className="container">
    <h2>My Polls</h2>
    <MyPolls />
  </div>
)

export default WithTitleMyPolls;