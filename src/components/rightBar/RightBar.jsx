import "./rightBar.scss";

const RightBar = () => {
  return (
    <div className="rightBar">
      <div className="container">
        <div className="item">
          <span>Suggestions For You</span>
          <div className="user">
            <div className="userInfo">
              <img
                src="https://randomuser.me/api/portraits/women/71.jpg"
                alt=""
              />
              <span>Jane Doe</span>
            </div>
            <div className="buttons">
              <button>follow</button>
              <button>dismiss</button>
            </div>
          </div>
          <div className="user">
            <div className="userInfo">
              <img
                src="https://randomuser.me/api/portraits/women/72.jpg"
                alt=""
              />
              <span>Jane Doe</span>
            </div>
            <div className="buttons">
              <button>follow</button>
              <button>dismiss</button>
            </div>
          </div>
        </div>
        <div className="item">
          <span>Latest Activities</span>
          <div className="user">
            <div className="userInfo">
              <img
                src="https://randomuser.me/api/portraits/women/73.jpg"
                alt=""
              />
              <p>
                <span>Jassie</span> changed their cover picture
              </p>
            </div>
            <span>1 min ago</span>
          </div>
          <div className="user">
            <div className="userInfo">
              <img
                src="https://randomuser.me/api/portraits/women/74.jpg"
                alt=""
              />
              <p>
                <span>James</span> changed their cover picture
              </p>
            </div>
            <span>1 hour ago</span>
          </div>
          <div className="user">
            <div className="userInfo">
              <img
                src="https://randomuser.me/api/portraits/women/75.jpg"
                alt=""
              />
              <p>
                <span>Ash</span> changed their cover picture
              </p>
            </div>
            <span>1 day ago</span>
          </div>
          <div className="user">
            <div className="userInfo">
              <img
                src="https://randomuser.me/api/portraits/women/18.jpg"
                alt=""
              />
              <p>
                <span>Brock</span> changed their cover picture
              </p>
            </div>
            <span>1 month ago</span>
          </div>
        </div>
        <div className="item">
          <span>Online Friends</span>
          <div className="user">
            <div className="userInfo">
              <img
                src="https://randomuser.me/api/portraits/women/38.jpg"
                alt=""
              />
              <div className="online" />
              <span>Jane</span>
            </div>
          </div>
          <div className="user">
            <div className="userInfo">
              <img
                src="https://randomuser.me/api/portraits/women/48.jpg"
                alt=""
              />
              <div className="online" />
              <span>Max</span>
            </div>
          </div>
          <div className="user">
            <div className="userInfo">
              <img
                src="https://randomuser.me/api/portraits/women/58.jpg"
                alt=""
              />
              <div className="online" />
              <span>Jack</span>
            </div>
          </div>
          <div className="user">
            <div className="userInfo">
              <img
                src="https://randomuser.me/api/portraits/women/88.jpg"
                alt=""
              />
              <div className="online" />
              <span>Mary</span>
            </div>
          </div>
          <div className="user">
            <div className="userInfo">
              <img
                src="https://randomuser.me/api/portraits/women/70.jpg"
                alt=""
              />
              <div className="online" />
              <span>Alex</span>
            </div>
          </div>
          <div className="user">
            <div className="userInfo">
              <img
                src="https://randomuser.me/api/portraits/women/69.jpg"
                alt=""
              />
              <div className="online" />
              <span>Kara</span>
            </div>
          </div>
          <div className="user">
            <div className="userInfo">
              <img
                src="https://randomuser.me/api/portraits/women/28.jpg"
                alt=""
              />
              <div className="online" />
              <span>Barry</span>
            </div>
          </div>
          <div className="user">
            <div className="userInfo">
              <img
                src="https://randomuser.me/api/portraits/women/68.jpg"
                alt=""
              />
              <div className="online" />
              <span>Caitlin</span>
            </div>
          </div>
          <div className="user">
            <div className="userInfo">
              <img
                src="https://randomuser.me/api/portraits/women/77.jpg"
                alt=""
              />
              <div className="online" />
              <span>Cisco</span>
            </div>
          </div>
          <div className="user">
            <div className="userInfo">
              <img
                src="https://randomuser.me/api/portraits/women/78.jpg"
                alt=""
              />
              <div className="online" />
              <span>Nancy</span>
            </div>
          </div>
          <div className="user">
            <div className="userInfo">
              <img
                src="https://fastly.picsum.photos/id/10/2500/1667.jpg?hmac=J04WWC_ebchx3WwzbM-Z4_KC_LeLBWr5LZMaAkWkF68"
                alt=""
              />
              <div className="online" />
              <span>Steve</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RightBar;
